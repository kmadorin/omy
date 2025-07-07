# AGENT.md - OMY Project

## Commands
- **Python Agent**: `python agent.py` (main SQL agent)
- **Frontend**: `cd frontend && pnpm dev` (Next.js dev server), `pnpm build`, `pnpm lint`
- **Data Collector**: `cd data-collector && pnpm dev` (watch mode), `pnpm start`, `pnpm build`
- **Console Client**: `cd console_client && npm start`
- **Install deps**: `pip install -r requirements.txt` (Python), `pnpm install` (Node.js projects)

## Architecture
- **Multi-language stack**: Python (LangGraph agent) + TypeScript (Next.js frontend + Node.js services)
- **Main components**: LangGraph SQL agent (`agent.py`), Next.js frontend, data-collector service, console client
- **Database**: PostgreSQL with Prisma ORM in data-collector
- **LLM**: OpenAI GPT-4o-mini for SQL generation and natural language processing
- **API**: LangGraph SDK for agent communication

## Code Style
- **Python**: Snake_case, type hints (TypedDict), environment variables via dotenv
- **TypeScript**: PascalCase components, camelCase variables, strict TypeScript
- **Imports**: Standard library first, then third-party, then local imports
- **Error handling**: Try/catch blocks, proper logging (Winston in data-collector)
- **State management**: LangGraph StateGraph pattern with typed states
