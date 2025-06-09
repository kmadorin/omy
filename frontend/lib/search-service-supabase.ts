import type { YieldResult } from "./types";
// import { supabase } from "@/integrations/supabase/client";

// Server-side search function optimized for server components
export async function getSearchResults(query: string): Promise<YieldResult[]> {
  console.log(`query: ${query}`);
  try {
    // if (!query.trim()) {
    //   return [];
    // }

    // const { data: textToSqlData, error: textToSqlError } =
    //   await supabase.functions.invoke("text-to-sql", {
    //     body: { query },
    //   });

    // if (textToSqlError) {
    //   throw new Error(
    //     `Error converting text to SQL: ${textToSqlError.message}`,
    //   );
    // }

    // if (!textToSqlData.isRelevantToYield) {
    //   throw new Error(
    //     `Your query doesn't seem to be about yield opportunities. Please try a different query.`,
    //   );
    // }

    // if (!textToSqlData.sql || textToSqlData.sql.trim() === "SELECT") {
    //   throw new Error(
    //     `No Yield data related to this query has been found. Please try rephrasing your question.`,
    //   );
    // }

    // console.log(`textToSqlData: ${JSON.stringify(textToSqlData)}`);

    // // Clean the SQL query before sending to DB
    // let cleanSql = textToSqlData.sql
    //   .replace(/\\"/g, '"')
    //   .replace(/;/g, "")
    //   .trim();

    // cleanSql = cleanSql.replace(
    //   /FROM\s+public\.\"YieldOpportunity\"/i,
    //   'FROM "public"."YieldOpportunity"',
    // );
    // cleanSql = cleanSql.replace(
    //   /FROM\s+\"public\"\.YieldOpportunity/i,
    //   'FROM "public"."YieldOpportunity"',
    // );
    // cleanSql = cleanSql.replace(
    //   /FROM\s+public\.YieldOpportunity/i,
    //   'FROM "public"."YieldOpportunity"',
    // );
    // if (!cleanSql.startsWith("SELECT") || !cleanSql.includes("FROM")) {
    //   throw new Error("Generated SQL query is incomplete or invalid");
    // }

    // // Execute the SQL query using Supabase
    // const { data: queryResults, error: queryError } = await supabase.rpc(
    //   "execute_query",
    //   {
    //     sql_query: cleanSql,
    //   },
    // );

    // if (queryError) {
    //   throw new Error(`Error executing SQL query: ${queryError.message}`);
    // }

    // // Ensure we're setting an array of YieldResult objects
    // const typedResults = Array.isArray(queryResults)
    //   ? (queryResults as YieldResult[])
    //   : [];

    // console.log(`typedResults: ${JSON.stringify(typedResults)}`);

    // return typedResults;

    // return [
    //   {
    //     id: "ethereum-renzo-ezeth-staking",
    //     apy: 0.0375784347090288,
    //     tvl: 0,
    //     protocol: "renzo",
    //     token_symbol: "ETH",
    //     provider_name: "Renzo",
    //     token_network: "ethereum",
    //   },
    //   {
    //     id: "ethereum-eth-etherfi-staking",
    //     apy: 0.0345411749973301,
    //     tvl: 0,
    //     protocol: "ether.fi",
    //     token_symbol: "ETH",
    //     provider_name: "Ether.fi",
    //     token_network: "ethereum",
    //   },
    //   {
    //     id: "ethereum-eth-luganodes-staking",
    //     apy: 0.0304,
    //     tvl: 0,
    //     protocol: "luganodes",
    //     token_symbol: "ETH",
    //     provider_name: "Luganodes",
    //     token_network: "ethereum",
    //   },
    //   {
    //     id: "ethereum-eth-chorus-one-stakewise-staking",
    //     apy: 0.0294279829298821,
    //     tvl: 0,
    //     protocol: "chorus one",
    //     token_symbol: "ETH",
    //     provider_name: "Chorus One",
    //     token_network: "ethereum",
    //   },
    //   {
    //     id: "ethereum-eth-p2p-staking",
    //     apy: 0.0293315030855261,
    //     tvl: 0,
    //     protocol: "p2p.org",
    //     token_symbol: "ETH",
    //     provider_name: "P2P.org",
    //     token_network: "ethereum",
    //   },
    // ];
    //
    return [
      {
        id: "polygon-usdc-aave-v3-lending",
        apy: 0.0355161343162091,
        tvl: 0,
        protocol: "aave",
        token_symbol: "USDC",
        provider_name: "Aave",
        token_address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
        token_network: "polygon",
      },
    ];
  } catch (error) {
    console.error("Error getting search results:", error);
    return [];
  }
}

// Client-side search function (kept for backward compatibility)
export const performSearch = getSearchResults;
