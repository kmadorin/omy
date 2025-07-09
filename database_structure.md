# Database Structure

This document describes the current database tables and the data stored in each, based on the Prisma schema.

---

## YieldOpportunity
Represents a yield opportunity available to users.

| Field         | Type     | Description                                   |
|-------------- |----------|-----------------------------------------------|
| id            | String   | Unique identifier                            |
| name          | String   | Name of the yield opportunity                |
| content       | String?  | Optional description/content                 |
| apy           | Float    | Annual Percentage Yield                      |
| rewardType    | String   | Type of reward (mapped as reward_type)       |
| type          | String   | Metadata type (mapped as metadata_type)      |
| network       | String   | Token network (mapped as token_network)      |
| tokenSymbol   | String   | Token symbol (mapped as token_symbol)        |
| tokenAddress  | String?  | Token address (mapped as token_address)      |
| providerId    | String   | Provider ID (mapped as provider_id)          |
| providerName  | String   | Provider name (mapped as provider_name)      |
| protocol      | String   | Protocol name                                |
| asset         | String   | Asset name                                   |
| tvl           | Float    | Total Value Locked                           |
| isAvailable   | Boolean  | Whether the opportunity is available         |
| cooldownDays  | Int?     | Cooldown period in days                      |
| warmupDays    | Int?     | Warmup period in days                        |
| withdrawDays  | Int?     | Withdraw period in days                      |
| canEnter      | Boolean  | Can user enter this opportunity?             |
| canExit       | Boolean  | Can user exit this opportunity?              |
| updatedAt     | DateTime | Last update timestamp                        |
| createdAt     | DateTime | Creation timestamp                           |

---

## PortfolioPosition
Represents a user's position in a yield opportunity.

| Field              | Type     | Description                                 |
|--------------------|----------|---------------------------------------------|
| id                 | String   | Unique identifier                          |
| yieldOpportunityId | String   | Linked yield opportunity                   |
| amount             | Float    | Amount invested                            |
| category           | String   | Category of the position                   |
| entryDate          | DateTime | Date of entry                              |
| lastModified       | DateTime | Last modification timestamp                |
| currentApy         | Float    | Current APY for this position              |
| isActive           | Boolean  | Whether the position is active             |
| exitTxHash         | String?  | Exit transaction hash                      |
| entryTxHash        | String?  | Entry transaction hash                     |
| tokenAddress       | String?  | Token address                              |
| tokenSymbol        | String   | Token symbol                               |

---

## PortfolioRebalance
Represents a rebalance event between two positions.

| Field               | Type     | Description                                 |
|---------------------|----------|---------------------------------------------|
| id                  | String   | Unique identifier                          |
| fromPositionId      | String   | Source position ID                         |
| toPositionId        | String   | Destination position ID                    |
| amount              | Float    | Amount rebalanced                          |
| executedAt          | DateTime | When the rebalance was executed            |
| fromApy             | Float    | APY of the source position                 |
| toApy               | Float    | APY of the destination position            |
| gasCost             | Float    | Gas cost of the rebalance                  |
| annualIncomeChange  | Float    | Change in annual income due to rebalance   | 