**Hybrid Portfolio v1 – Updated PRD (no manual edits, only on-chain)**
*All changes compared to the first draft remove “manual-position” features and assume every holding originates from a blockchain tx signed inside OhMyYield.*

---

## 1 Scope & Objectives

| ID  | Description                                                                           |
| --- | ------------------------------------------------------------------------------------- |
| O-1 | Show each connected wallet’s live positions (amount, APY, USD value, entry date).     |
| O-2 | Persist *every* ENTER / EXIT tx the dApp initiates so we can rebuild state later.     |
| O-3 | Keep balances fresh without hammering StakeKit (≤ 10 calls / h per 10 000 positions). |

---

## 2 Database (Supabase → Prisma)

### 2.1 `PortfolioTransaction` (new)

| field                  | type                                            | notes                               |
| ---------------------- | ----------------------------------------------- | ----------------------------------- |
| id                     | uuid PK                                         |                                     |
| wallet\_address        | text, **indexed**                               |                                     |
| integration\_id        | text                                            | e.g. `polygon-usdc-aave-v3-lending` |
| yield\_opportunity\_id | text FK → `YieldOpportunity.id`                 |                                     |
| direction              | enum **ENTER / EXIT / CORRECTION**              |                                     |
| amount                 | numeric                                         |                                     |
| usd\_value             | numeric nullable (look-up via `/tokens/prices`) |                                     |
| tx\_hash               | text UNIQUE                                     |                                     |
| executed\_at           | timestamptz                                     |                                     |

### 2.2 `PortfolioPosition` (extend current table)&#x20;

Add columns:

```prisma
wallet_address    String   // PK part
integration_id    String
last_balance_sync timestamptz?
```

Drop now-useless columns: `category`.

Composite unique: `(wallet_address, integration_id)`.

### 2.3 RLS

* Row-level policy: a Supabase user can `SELECT` rows where `wallet_address = auth.jwt().wallet_address`.

(No separate `User` table for now – wallet address **is** identity.)

---

## 3 Backend (Next.js / `app/api`)

| Route                    | Verb     | Purpose                                                                                                                                                                                                                                                                      |
| ------------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/api/transactions`      | **POST** | Called by frontend right after wallet tx is broadcast. Body → `{ walletAddress, integrationId, yieldOpportunityId, direction, amount, txHash, executedAt }`. Creates `PortfolioTransaction`, **upserts** `PortfolioPosition` (adds/subtracts `amount`, toggles `is_active`). |
| `/api/portfolio`         | **GET**  | Query by `wallet=0x…` — returns all active `PortfolioPosition` rows plus joined APY & TVL from `YieldOpportunity`.                                                                                                                                                           |
| `/api/portfolio/summary` | **GET**  | Aggregated total value, avg APY (optional).                                                                                                                                                                                                                                  |

### 3.1 Edge function – **`sync_balances`**

* Scheduled every **30 min** in Supabase Cron.
* Query `PortfolioPosition` where `last_balance_sync < now() – interval '60 minutes'` and `is_active = true`.
* Batch 100 «wallet + integration» pairs → `/v1/yields/balances`.
* If on-chain `amount` ≠ stored:

  * Insert `CORRECTION` row in `PortfolioTransaction`.
  * Update `amount`, `is_active`, `last_balance_sync`.

> Expected traffic: 10 000 active positions → ≈ 10 StakeKit calls per hour (within free-tier).

---

## 4 Frontend (Next.js App Router)

### 4.1 Investment flow (already exists via `<InvestmentModal>` )

1. User clicks *Invest* → wallet signs & sends tx.
2. On `tx.wait()` success call:

```ts
await fetch('/api/transactions', {
  method: 'POST',
  body: JSON.stringify({
    walletAddress,
    integrationId,
    yieldOpportunityId,
    direction: 'ENTER',
    amount,
    txHash,
    executedAt: new Date().toISOString()
  })
});
```

3. Optimistically update local React-Query cache for `/api/portfolio`.

### 4.2 Portfolio page

| Component                      | Responsibility                                                      |
| ------------------------------ | ------------------------------------------------------------------- |
| `app/portfolio/page.tsx` (RSC) | `fetch('/api/portfolio')` SSR → hydrate.                            |
| `<PositionCard>`               | Shows logo, amount, USD, APY, entry date, *Exit* button.            |
| Exit button                    | After wallet tx → POST `/api/transactions` with `direction:'EXIT'`. |
| `<SyncBadge>`                  | Reads `last_balance_sync` to show “Synced 2 m ago”.                 |

No **Add / Edit** modals – everything is driven by blockchain activity.

---

## 5 Sequence Diagram (abridged)

```
User → Frontend : Sign ENTER tx
Frontend → Chain : Broadcast tx
Frontend → Backend /transactions : POST {ENTER, txHash}
Backend → DB : insert PortfolioTransaction, upsert PortfolioPosition
Frontend ← /portfolio : refreshed positions
-- later --
Cron sync_balances → StakeKit : batched balances
StakeKit → Cron : amounts
Cron → DB : corrections + updates
```

---

## 6 API-cost minimisation checklist

1. **TTL filter** – don’t resync a position < 60 min old.
2. **Active-only** – skip positions where `is_active = false`.
3. **Batch 100** pairs per call (StakeKit max).
4. **Exponential back-off** on 429.
5. **Frontend cache** (`react-query` / SWR 30 s).
6. **Single-tab guard** – `BroadcastChannel` to avoid duplicate balance calls if user opens two tabs.

---

## 7 Migration plan

1. **SQL migration** to add columns / new table; deploy via Prisma.
2. Ship `/api/transactions` & wire existing invest/exit flows.
3. Release `/portfolio` page behind feature flag `portfolio_v1`.
4. Enable `sync_balances` cron after verifying StakeKit quota.

---

### Deliverable

A usable portfolio that **requires zero manual input**, stays accurate within ±60 min, and keeps StakeKit calls comfortably below limits.
