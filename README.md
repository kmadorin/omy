# SQL Agent with LangGraph

This project demonstrates how to build a SQL agent using LangGraph and LangChain that can answer natural language questions about data in a PostgreSQL database.

## Features

- Natural language to SQL query conversion
- SQL query execution against PostgreSQL database 
- Natural language answer generation from query results
- Streaming responses
- Type-safe state management

## Prerequisites

- Python 3.11+
- PostgreSQL database
- OpenAI API key
- Database URL

## Installation

```bash
pip install --upgrade langchain-community langchainhub langgraph psycopg2
```

## Environment Variables

The following environment variables need to be set:

```bash
OPENAI_API_KEY=<your-openai-api-key>
DATABASE_URL=<your-database-url>
```

## Usage

The agent follows a 3-step process:

1. Converts natural language question to SQL query
2. Executes the SQL query against the database
3. Generates a natural language answer from the results

Example usage:

```python
from langgraph.graph import StateGraph, START
from typing_extensions import TypedDict

# Define state type
class State(TypedDict):
    question: str
    query: str 
    result: str
    answer: str

# Create graph
graph = StateGraph(State)
graph.add_sequence([write_query, execute_query, generate_answer])
graph.add_edge(START, "write_query")
graph = graph.compile()

# Run graph
for step in graph.stream(
    {"question": "Show top 5 yield options for USDC"}, 
    stream_mode="updates"
):
    print(step)
```

## Components

### Query Generation

Uses LangChain's SQL query system prompt to generate syntactically valid SQL queries from natural language questions.

### Query Execution 

Executes the generated SQL query against the PostgreSQL database using LangChain's SQL database tools.

### Answer Generation

Takes the query results and generates a natural language answer using an LLM.

## Flow Diagram

The agent follows this sequence:
