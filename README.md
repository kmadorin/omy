# OhMyYield (OMY) - DeFi Portfolio Management Platform

A comprehensive monorepo containing a DeFi portfolio management platform with AI-powered yield optimization, built with a modern stack including Python LangGraph agents, Next.js frontend, and automated data collection services.

## 🏗️ Architecture

### Multi-Language Stack

- **Python Agent**: LangGraph-powered SQL agent for natural language yield queries
- **TypeScript Frontend**: Next.js 15 with React 19, Tailwind CSS, and Radix UI
- **Data Services**: Node.js data collector with automated yield opportunity syncing
- **Database**: PostgreSQL with Prisma ORM and Supabase integration
- **Smart Contracts**: Web3 integration with Wagmi and Viem for DeFi protocol interactions

### Project Structure

```
omy/
├── apps/                           # Application services
│   ├── frontend/                   # Next.js web application
│   └── data-collector/             # Node.js data collection service
├── packages/                       # Shared packages
│   └── database/                   # Prisma schema and client
├── console_client/                 # CLI utilities and test scripts
├── supabase/                       # Edge functions
├── agent.py                        # Main LangGraph SQL agent
└── [config files]                 # Monorepo configuration
```

## 🚀 Quick Start

### Prerequisites

- Python 3.11+
- Node.js 18+
- PostgreSQL database
- OpenAI API key
- pnpm package manager

### Installation

1. **Clone and install dependencies:**

```bash
git clone <repository-url>
cd omy
pnpm install
pip install -r requirements.txt
```

2. **Set up environment variables:**

```bash
# Copy and configure environment files
cp .env.example .env
# Configure database URLs, API keys, etc.
```

3. **Initialize database:**

```bash
pnpm run prisma:generate
pnpm run prisma:migrate
```

## 🛠️ Development Commands

### Frontend Development

```bash
pnpm run dev:frontend          # Start Next.js dev server (Turbopack)
pnpm run build:frontend        # Build frontend for production
pnpm run prod:frontend         # Start production frontend server
```

### Data Collection Service

```bash
pnpm run dev:collector         # Start data collector in watch mode
```

### Python SQL Agent

```bash
python agent.py               # Run the LangGraph SQL agent
```

### Database Management

```bash
pnpm run prisma:generate       # Generate Prisma client
pnpm run prisma:migrate        # Run database migrations (dev)
pnpm run prisma:migrate:deploy # Deploy migrations (production)
```

### Utilities

```bash
pnpm run build                 # Build all applications
pnpm run lint                  # Lint all applications
cd console_client && npm start # Run console client utilities
```

## 🔧 Core Components

### 1. LangGraph SQL Agent (`agent.py`)

- **Natural Language Processing**: Convert user queries to SQL using GPT-4o-mini
- **Database Integration**: Direct PostgreSQL querying with LangChain SQL tools
- **Streaming Responses**: Real-time query processing and result streaming
- **State Management**: Type-safe state handling with TypedDict

**Usage Example:**

```python
# Query yield opportunities naturally
"Show me the top 5 USDC yield options on Polygon"
"What are the best Ethereum staking rewards available?"
```

### 2. Next.js Frontend (`apps/frontend/`)

- **Portfolio Management**: Track DeFi positions across multiple protocols
- **Investment Interface**: Modal-driven investment flows with wallet integration
- **Real-time Sync**: Live balance updates and position tracking
- **Web3 Integration**: Wagmi + Viem for seamless blockchain interactions

**Key Features:**

- Portfolio dashboard with position cards
- Investment modals for yield opportunities
- Wallet connection and transaction signing
- Real-time balance synchronization

### 3. Data Collector (`apps/data-collector/`)

- **Automated Sync**: Scheduled yield opportunity data collection
- **StakeKit Integration**: Fetch yield rates, TVL, and protocol data
- **Database Updates**: Maintain fresh yield opportunity information
- **Error Handling**: Robust retry logic and logging with Winston

### 4. Database Layer (`packages/database/`)

- **Prisma Schema**: Type-safe database operations
- **Portfolio Tracking**: Transaction logs and position snapshots
- **Yield Opportunities**: Comprehensive protocol and rate data
- **Token Pricing**: Multi-network token price caching

## 🎯 Key Features

### Portfolio Management

- **On-chain Position Tracking**: Automatic detection of DeFi positions
- **Transaction History**: Complete audit trail of all portfolio activities
- **USD Value Tracking**: Real-time portfolio valuation
- **Yield Optimization**: AI-powered recommendations for better returns

### AI-Powered Query Interface

- **Natural Language SQL**: Ask questions about yields in plain English
- **Smart Recommendations**: GPT-4 powered analysis of yield opportunities
- **Real-time Data**: Live database queries with streaming responses
- **Context-Aware**: Understanding of DeFi protocols and yield strategies

### Automated Data Pipeline

- **Multi-Protocol Support**: Aave, Compound, Uniswap, and more
- **Rate Monitoring**: Continuous APY and TVL tracking
- **Price Feeds**: Token price aggregation across networks
- **Sync Optimization**: Efficient API usage within rate limits

## 🔐 Environment Configuration

### Required Environment Variables

```bash
# Database
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# APIs
OPENAI_API_KEY="sk-..."
STAKEKIT_API_KEY="..."

# Supabase
NEXT_PUBLIC_SUPABASE_URL="https://..."
NEXT_PUBLIC_SUPABASE_ANON_KEY="..."
SUPABASE_SERVICE_ROLE_KEY="..."
```

## 📊 Database Schema

### Core Models

- **YieldOpportunity**: DeFi protocol yield rates and metadata
- **PortfolioPosition**: User position snapshots with live balances
- **PortfolioTransaction**: Complete transaction audit trail
- **TokenPrice**: Multi-network token pricing cache

### Key Relationships

- Positions link to yield opportunities via foreign keys
- Transactions create immutable history of all portfolio changes
- Token prices support USD valuation across multiple networks

## 🚢 Deployment

### Vercel Deployment (Frontend)

```bash
# Configured in vercel.json
vercel deploy
```

### Database Migrations

```bash
# Production deployment
pnpm run prisma:migrate:deploy
```

### Supabase Edge Functions

```bash
# Deploy edge functions for automated syncing
supabase functions deploy
```

## 🧪 Testing

### Frontend Tests

```bash
cd apps/frontend
pnpm test                      # Run Vitest unit tests
```

### API Testing

- Unit tests for portfolio API endpoints
- Integration tests for transaction flows
- Mock data utilities for development

## 📈 Monitoring & Analytics

### Data Collection Metrics

- Yield opportunity sync frequency and success rates
- Portfolio position accuracy and sync timing
- API usage optimization and rate limiting

### User Analytics

- Portfolio performance tracking
- Investment flow completion rates
- Query pattern analysis for AI improvements

## 🤝 Contributing

1. Follow the established code style (see `AGENT.md`)
2. Use type-safe patterns with TypeScript/Python type hints
3. Add tests for new features
4. Update documentation for API changes

## 📄 License

This project is private and proprietary.

---

**Built with ❤️ for the DeFi community**
