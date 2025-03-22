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
DATABASE_URL = os.getenv("DIRECT_URL")

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
            "top_k": 100,
            "table_info": db.get_table_info(table_names=["YieldOpportunity"]),
            "input": state["question"],
        }
    )
    structured_llm = llm.with_structured_output(QueryOutput)
    result = structured_llm.invoke(prompt)
    return {"query": result["query"]}

def execute_query(state: State):
    """Execute SQL query."""
    execute_query_tool = QuerySQLDatabaseTool(db=db)
    result = execute_query_tool.invoke(state["query"])

    
    
    print("query", state["query"])  # Debug print
    
    # Convert tuple results to dictionary with column names
    if isinstance(result, str):
        # Handle the string result that contains tuple data
        try:
            # Strip any whitespace and newlines, then evaluate the string as Python literal
            result_data = eval(result.strip())
            if not result_data:  # If empty result
                return {"result": []}
        except Exception as e:
            print(f"Error parsing result: {e}")
            return {"result": result}
    
    # Extract column names from the query
    query = state["query"].lower()
    select_part = query[query.find("select") + 6:query.find("from")].strip()
    
    # Handle column names with potential aliases
    columns = []
    for col in select_part.split(","):
        col = col.strip()
        # Check for alias with 'as' keyword
        if " as " in col:
            columns.append(col.split(" as ")[-1].strip())
        # Check for simple alias without 'as'
        elif " " in col and "(" not in col:
            columns.append(col.split()[-1].strip())
        # Handle function calls or simple columns
        else:
            # Remove any table prefixes (e.g., "table.column" -> "column")
            columns.append(col.split(".")[-1].strip())
    
    print("Extracted columns:", columns)  # Debug print
    
    # Convert each row tuple to a dictionary
    json_result = [dict(zip(columns, row)) for row in result_data]
    print("Final JSON result:", json_result)  # Debug print
    
    return {"result": json_result}

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
    # graph_builder = StateGraph(State).add_sequence(
    #     [write_query, execute_query, generate_answer]
    # )
    graph_builder = StateGraph(State).add_sequence(
        [write_query, execute_query]
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
        if "execute_query" in step:
            return step["execute_query"]["result"]
    
    return "Failed to generate an answer."

graph = create_agent()

if __name__ == "__main__":
    # Example usage
    question = "Show top 5 yield options for USDC on ethereum. Show all columns except rewardType, isAvailable, canEnter, canExit, updatedAt, createdAt"
    answer = query_database(question)
    print("\nQuestion:", question)
    print("\nAnswer:", answer) 