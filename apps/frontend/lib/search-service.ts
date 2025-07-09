import type { YieldData } from "./types"
import { queryLangGraph } from "./langgraph-client"

// Server-side search function optimized for server components
export async function getSearchResults(query: string): Promise<YieldData[]> {
  try {
    if (!query.trim()) {
      return [];
    }
    
    const searchQuery = `Show me yields matching "${query}". Show all columns except rewardType, isAvailable, canEnter, canExit, updatedAt, createdAt`;
    return await queryLangGraph(searchQuery);
  } catch (error) {
    console.error("Error getting search results:", error)
    return []
  }
}

// Client-side search function (kept for backward compatibility)
export const performSearch = getSearchResults;

