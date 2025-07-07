# Portfolio Tracking Implementation Plan

This document outlines the steps to implement a portfolio tracking feature, including a secure authentication flow using Sign-In with Ethereum (SIWE).

## 1. Authentication (Sign-In with Ethereum)

To securely manage user-specific data, we must first implement a proper authentication flow.

**Action:** Implement a SIWE flow to create a Supabase user session linked to the user's wallet address.

**Logic:**
1.  **Create API Endpoints:** In the Next.js app, create two API routes (e.g., `/api/auth/nonce` and `/api/auth/verify`).
2.  **Nonce Generation (`/api/auth/nonce`):** When a user wants to log in, the frontend will call this endpoint to get a unique, temporary message (nonce) to be signed.
3.  **Signature Verification (`/api/auth/verify`):** The frontend will use the user's wallet to sign the nonce and send the signature to this endpoint. The backend will:
    a. Verify the signature against the user's wallet address.
    b. If valid, find or create a user in Supabase's `auth.users` table for that wallet address.
    c. Return a Supabase JWT to the client.
4.  **Client-Side:** The Supabase client on the frontend will be initialized with this JWT, ensuring all subsequent requests are authenticated.

## 2. Database Schema (Supabase)

We will update the `portfolio_position` table to link positions to authenticated users.

**Action:** Create a new migration with the following SQL statements.

```sql
-- Add user_id column with a foreign key to the auth.users table
ALTER TABLE portfolio_position
ADD COLUMN user_id UUID REFERENCES auth.users(id);

-- Add a foreign key constraint to link to the YieldOpportunity table
ALTER TABLE portfolio_position
ADD CONSTRAINT fk_yield_opportunity
FOREIGN KEY (yield_opportunity_id)
REFERENCES "YieldOpportunity"(id);

-- Enable RLS
ALTER TABLE portfolio_position ENABLE ROW LEVEL SECURITY;

-- RLS Policies
-- Now that we use SIWE, auth.uid() will be correctly populated.
CREATE POLICY "Users can view their own positions"
ON portfolio_position FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own positions"
ON portfolio_position FOR INSERT
WITH CHECK (auth.uid() = user_id);
```

## 3. Frontend Implementation

### 3.1. Update Transaction Flow

Modify the investment flow to save positions for authenticated users.

**File to Modify:** `frontend/components/investment-modal.tsx`

**Logic:**
1.  Ensure the user is authenticated via the SIWE flow before allowing an investment.
2.  After a transaction is confirmed, the user will already have an authenticated session. The `auth.uid()` will be available.
3.  Use the Supabase client to insert a new record into the `portfolio_position` table. The `user_id` will be automatically inferred from the user's JWT, and the RLS policy will enforce that it's correct. You will need to pass the `yield_opportunity_id`.

### 3.2. Create Portfolio Page

Create a new page to display the user's portfolio.

**Action:** Create the file structure: `frontend/app/portfolio/page.tsx`

**Logic:**
1.  This page should be protected, requiring the user to be logged in.
2.  Fetch all positions for the logged-in user. The RLS policy will automatically ensure only the current user's positions are returned.
3.  Use `@stakekit/api-hooks` to enrich the data with balances and prices.
4.  Render the portfolio.

### 3.3. Add Navigation

**File to Modify:** `frontend/components/header.tsx`
**Action:** Add a "Portfolio" link that navigates to `/portfolio`.

## 4. Type Definitions

**Action:** After applying the migration, generate new TypeScript types.
```bash
npx supabase gen types typescript --project-id <your-project-id> > frontend/integrations/supabase/types.ts
```
