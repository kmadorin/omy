import { Client } from "@langchain/langgraph-sdk";

// Create client on demand to avoid initialization issues in Next.js
export async function queryLangGraph(question: string) {
  try {
    // Initialize the client inside the function for server component usage
    const client = new Client({ apiUrl: "http://localhost:2024" });
    
    const results = [];
    const streamResponse = client.runs.stream(
      null, // Threadless run
      "agent", // Assistant ID
      {
        input: {
          question
        },
        streamMode: "updates",
      }
    );

    for await (const chunk of streamResponse) {
      if (chunk.data?.execute_query?.result) {
        results.push(...chunk.data.execute_query.result);
      }
    }

    return results;
  } catch (error) {
    console.error("Error querying LangGraph:", error);
    return [];
  }
} 