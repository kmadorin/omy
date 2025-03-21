import os
from typing import TypedDict, Annotated
from langgraph.graph import StateGraph, START
from langchain.chat_models import init_chat_model
from langchain_community.utilities import SQLDatabase
from langchain_community.tools.sql_database.tool import QuerySQLDatabaseTool
from langchain import hub
from dotenv import load_dotenv
load_dotenv()

# Initialize database connection
DATABASE_URL = os.getenv("DATABASE_URL")
if not DATABASE_URL:
    raise ValueError("DATABASE_URL not found in .env file")
db = SQLDatabase.from_uri(DATABASE_URL)

# Initialize LLM
llm = init_chat_model("gpt-4o-mini", model_provider="openai")

# Define state type
class State(TypedDict):
    question: str
    query: str
    result: str
    answer: str

class QueryOutput(TypedDict):
    """Generated SQL query."""
    query: Annotated[str, ..., "Syntactically valid SQL query."]

def write_query(state: State):
    """Generate SQL query to fetch information."""
    query_prompt_template = hub.pull("langchain-ai/sql-query-system-prompt")
    prompt = query_prompt_template.invoke(
        {
            "dialect": db.dialect,
            "top_k": 10,
            "table_info": db.get_table_info(),
            "input": state["question"],
        }
    )
    structured_llm = llm.with_structured_output(QueryOutput)
    result = structured_llm.invoke(prompt)
    return {"query": result["query"]}

def execute_query(state: State):
    """Execute SQL query."""
    execute_query_tool = QuerySQLDatabaseTool(db=db)
    return {"result": execute_query_tool.invoke(state["query"])}

def generate_answer(state: State):
    """Answer question using retrieved information as context."""
    prompt = (
        "Given the following user question, corresponding SQL query, "
        "and SQL result, answer the user question.\n\n"
        f'Question: {state["question"]}\n'
        f'SQL Query: {state["query"]}\n'
        f'SQL Result: {state["result"]}'
    )
    response = llm.invoke(prompt)
    return {"answer": response.content}

def create_agent():
    """Create and return the SQL agent graph."""
    # Create graph
    graph_builder = StateGraph(State).add_sequence(
        [write_query, execute_query, generate_answer]
    )
    graph_builder.add_edge(START, "write_query")
    return graph_builder.compile()

def query_database(question: str):
    """Query the database with a natural language question."""
    graph = create_agent()
    
    # Process the question
    for step in graph.stream(
        {"question": question}, 
        stream_mode="updates"
    ):
        if "generate_answer" in step:
            return step["generate_answer"]["answer"]
    
    return "Failed to generate an answer."

if __name__ == "__main__":
    # Example usage
    question = "Show top 5 yield options for USDC"
    answer = query_database(question)
    print("\nQuestion:", question)
    print("\nAnswer:", answer) 