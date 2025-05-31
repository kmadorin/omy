"use client";
import { useState } from "react";
import { toast } from "sonner";

import SearchResults from "@/components/search-results";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";

interface YieldResult {
  token_symbol: string;
  protocol: string;
  provider_name: string;
  apy: number;
  tvl: number;
  [key: string]: any;
}

const Index = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sqlQuery, setSqlQuery] = useState<string | null>(null);
  const [yieldResults, setYieldResults] = useState<YieldResult[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    setIsSearching(true);
    setError(null);

    // Reset previous results
    setSqlQuery(null);
    setYieldResults([]);

    try {
      // Call the Supabase edge function to convert text to SQL
      toast.info("Converting your query to SQL...");

      const { data: textToSqlData, error: textToSqlError } =
        await supabase.functions.invoke("text-to-sql", {
          body: { query },
        });

      if (textToSqlError) {
        throw new Error(
          `Error converting text to SQL: ${textToSqlError.message}`,
        );
      }

      if (!textToSqlData.isRelevantToYield) {
        toast.warning(
          "Your query doesn't seem to be about yield opportunities. Please try a different query.",
        );
        setIsSearching(false);
        return;
      }

      if (!textToSqlData.sql || textToSqlData.sql.trim() === "SELECT") {
        toast.error(
          "Failed to generate a complete SQL query. Please try rephrasing your question.",
        );
        setIsSearching(false);
        return;
      }

      // Store the SQL query
      setSqlQuery(textToSqlData.sql);
      toast.info("Fetching yield opportunities...");

      // Clean the SQL query before sending to DB
      let cleanSql = textToSqlData.sql
        .replace(/\\"/g, '"')
        .replace(/;/g, "")
        .trim();

      // Make sure we have proper double quotes around public and YieldOpportunity
      cleanSql = cleanSql.replace(
        /FROM\s+public\.\"YieldOpportunity\"/i,
        'FROM "public"."YieldOpportunity"',
      );
      cleanSql = cleanSql.replace(
        /FROM\s+\"public\"\.YieldOpportunity/i,
        'FROM "public"."YieldOpportunity"',
      );
      cleanSql = cleanSql.replace(
        /FROM\s+public\.YieldOpportunity/i,
        'FROM "public"."YieldOpportunity"',
      );

      // Additional check to ensure cleanSql is a complete SQL query
      if (!cleanSql.startsWith("SELECT") || !cleanSql.includes("FROM")) {
        throw new Error("Generated SQL query is incomplete or invalid");
      }

      // console.log("Cleaned SQL query:", cleanSql);

      // Execute the SQL query using Supabase
      const { data: queryResults, error: queryError } = await supabase.rpc(
        "execute_query",
        {
          sql_query: cleanSql,
        },
      );

      if (queryError) {
        throw new Error(`Error executing SQL query: ${queryError.message}`);
      }

      // Ensure we're setting an array of YieldResult objects
      const typedResults = Array.isArray(queryResults)
        ? (queryResults as YieldResult[])
        : [];
      setYieldResults(typedResults);
      toast.success(`Found ${typedResults.length} yield opportunities`);
    } catch (error: any) {
      console.error("Search error:", error);
      setError(error.message || "An error occurred during the search");
      toast.error("Search failed. Please try again.");
    } finally {
      setIsSearching(false);
    }
  };

  // Example queries for the new design
  const exampleQueries = [
    "Show me top 5 yields for ETH on ethereum",
    "Show me top 10 yields on stablecoins",
  ];

  const handleExampleClick = (example: string) => {
    handleSearch(example);
  };

  return (
    <main className="flex-grow px-8 py-4 flex flex-col items-center">
      {/* Search Area */}
      <div className="w-full max-w-4xl mx-auto bg-cream-100 rounded-xl p-8 border-2 border-gray-900 shadow-md">
        {!yieldResults.length || error ? (
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">
              JUICE YOUR YIELDS!
            </h1>

            <div className="relative">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch(searchQuery);
                }}
                className="w-full"
              >
                <div className="flex gap-2 p-1 border-2 border-gray-900 rounded-lg bg-white">
                  <div className="flex-grow flex items-center gap-2 px-2">
                    <Search className="h-5 w-5 text-gray-500" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Show me top 3 yields for USDC"
                      className="w-full py-2 text-base text-gray-900 bg-transparent outline-none"
                      disabled={isSearching}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={!searchQuery.trim() || isSearching}
                    className="bg-orange-500 hover:bg-orange-600 text-white border border-gray-900"
                  >
                    <Search className="mr-2 h-4 w-4" /> Search
                  </Button>
                </div>
              </form>
            </div>

            <div className="space-y-4">
              <p className="text-center text-gray-700 font-medium">
                Try these examples:
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                {exampleQueries.map((example, index) => (
                  <Button
                    key={index}
                    onClick={() => handleExampleClick(example)}
                    disabled={isSearching}
                    className={
                      index === 0
                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                        : "bg-orange-500 hover:bg-orange-600 text-white"
                    }
                    variant="outline"
                  >
                    {example} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>

            {isSearching && (
              <SearchResults isSearching={isSearching} query={searchQuery} />
            )}

            {/* {!isSearching && sqlQuery && (
              <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg text-left">
                <h3 className="font-medium text-gray-700 mb-2">
                  Generated SQL:
                </h3>
                <pre className="text-xs text-gray-900 bg-gray-100 p-3 rounded overflow-x-auto">
                  {sqlQuery}
                </pre>
              </div>
            )} */}

            {!isSearching && sqlQuery && error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
                <h3 className="font-medium text-red-700 mb-2">Error:</h3>
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center">
              <Button
                onClick={() => setYieldResults([])}
                variant="ghost"
                className="flex items-center text-gray-700"
              >
                ← Back to Home
              </Button>
            </div>

            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                RESULTS FOR "{searchQuery.toUpperCase()}"
              </h2>
              <span className="bg-orange-100 text-orange-800 text-sm font-medium px-2.5 py-0.5 rounded-full border border-orange-300">
                {yieldResults.length} results
              </span>
            </div>

            {/* {sqlQuery && (
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-left">
                <h3 className="font-medium text-gray-700 mb-2">
                  Generated SQL:
                </h3>
                <pre className="text-xs text-gray-900 bg-gray-100 p-3 rounded overflow-x-auto">
                  {sqlQuery}
                </pre>
              </div>
            )} */}

            <div className="space-y-4">
              {yieldResults.map((result, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-2 border-gray-900 rounded-lg overflow-hidden"
                >
                  <div className="p-4 flex items-center space-x-4 flex-grow">
                    <div className="h-12 w-12 rounded-full bg-yellow-300 flex items-center justify-center border-2 border-gray-900">
                      <span className="font-bold text-gray-900">U</span>
                    </div>
                    <div className="space-y-1">
                      <div className="font-bold text-lg">
                        {result.token_symbol}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full border border-blue-300">
                          {result.protocol.toLowerCase()}
                        </span>
                        <span className="text-gray-600">
                          • {result.provider_name}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-sm text-gray-500">APY</span>
                        <div className="text-xl font-bold text-orange-500">
                          {(result.apy * 100).toFixed(2)}%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-cream-200 h-full">
                    <Button className="bg-orange-500 hover:bg-orange-600 border border-gray-900">
                      Invest Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Index;
