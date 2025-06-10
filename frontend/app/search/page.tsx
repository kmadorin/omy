"use client";

import { YieldResults } from "@/components/yield-results";
import { getSearchResults } from "@/lib/search-service-supabase";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type SearchResult = any; // Add proper type based on your results structure

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) {
        setResults([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const searchResults = await getSearchResults(query);
        setResults(searchResults);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <YieldResults query={query} results={results} />;
}
