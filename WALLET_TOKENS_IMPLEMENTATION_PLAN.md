# Wallet Tokens in Portfolio – Implementation Plan

## Overview

Display tokens held in the user's wallet on the `/portfolio` page, grouped by chain, below the "Opened positions" section. Tokens are fetched via the StakeKit API and shown in a horizontal row per chain. Only tokens with a nonzero balance are shown. Show up to 10 tokens initially, with a "Show more" button to reveal all. Supported chains: `ethereum`, `polygon`, `base`, `arbitrum`, `optimism`.

---

## 1. Backend: `/api/portfolio/wallet` Endpoint

### 1.1. Route

-   Create `apps/frontend/app/api/portfolio/wallet/route.ts` (RESTful, GET only)
-   Accepts: `wallet` (address, required, query param)
-   Returns: JSON array of tokens grouped by chain, each with logo, amount, symbol, and chain

### 1.2. Logic

-   Validate `wallet` param (400 if missing/invalid)
-   Query all tokens from `YieldOpportunity` for supported chains (distinct by `tokenAddress`+`network`)
-   For each token, build a StakeKit API request body:
    -   For native tokens: omit `tokenAddress`
    -   For ERC20: include `tokenAddress`
-   Batch requests to StakeKit (max 100 per call, but keep it to 10 for initial load)
-   POST to `https://api.stakek.it/v1/tokens/balances` with API key from env
-   Filter out tokens with amount 0
-   Group results by chain
-   Return shape:

```json
[
  {
    "network": "polygon",
    "tokens": [
      {
        "symbol": "USDC",
        "amount": "0.143586000000000000",
        "logoURI": "https://assets.stakek.it/tokens/usdc.svg"
      },
      ...
    ]
  },
  ...
]
```

### 1.3. Error Handling

-   400 for missing wallet
-   502 for StakeKit API errors
-   500 for internal errors

### 1.4. Performance

-   Only fetch up to 10 tokens for initial load (configurable via query param, e.g. `limit=10`)
-   Optionally support `?showAll=true` to fetch all tokens

---

## 2. Frontend: Portfolio Page Changes

### 2.1. Data Fetching

-   Use React Query to fetch `/api/portfolio/wallet?wallet=...&limit=10`
-   On "Show more" click, refetch with `showAll=true`

### 2.2. UI/UX

-   Rename positions section to **Opened Positions**
-   Add new section below: **Wallet Balances** (or just **Wallet**)
-   For each chain, display a horizontal scrollable row of tokens:
    -   Token logo, amount, symbol
    -   Hide tokens with 0 balance
-   If no tokens, show "No tokens found in wallet."
-   If loading, show skeletons/spinner
-   If error, show error message

### 2.3. Components

-   Create `WalletTokensRow` component (props: chain, tokens[])
-   Reuse or extend UI primitives (badge, card, etc.)
-   Add "Show more" button if more than 10 tokens

---

## 3. Types & API Contract

### 3.1. API Response Type

```ts
interface WalletToken {
	symbol: string;
	amount: string;
	logoURI: string;
}
interface WalletTokensByChain {
	network: string;
	tokens: WalletToken[];
}
// API returns: WalletTokensByChain[]
```

---

## 4. Env & Secrets

-   Add StakeKit API key to env (do not hardcode)
-   Use server-side fetch for StakeKit API (never expose key to client)

---

## 5. Testing

-   Unit test the API route (mock StakeKit)
-   Add Cypress or Playwright test for UI (mock API)

---

## 6. Future Enhancements

-   Add USD value per token (if price available)
-   Add token search/filter
-   Support more chains
-   Show historical balances

---

## 7. References

-   See `/api/portfolio` and `/api/transactions` for DB and API conventions
