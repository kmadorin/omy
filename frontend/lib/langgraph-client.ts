import { Client } from "@langchain/langgraph-sdk";

const client = new Client({ apiUrl: "http://localhost:2024" });

export async function queryLangGraph(question: string) {
  try {
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