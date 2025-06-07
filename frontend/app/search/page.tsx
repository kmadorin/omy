import { YieldResults } from "@/components/yield-results";
import { getSearchResults } from "@/lib/search-service-supabase";

// Force dynamic rendering to ensure searchParams are available
export const dynamic = "force-dynamic";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  // Use await to access searchParams properties
  const searchParamsData = await searchParams;
  const query =
    typeof searchParamsData.q === "string" ? searchParamsData.q : "";

  // Fetch results directly without caching
  const results = await getSearchResults(query);

  return <YieldResults query={query} results={results} />;
}
