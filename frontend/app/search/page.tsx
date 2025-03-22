import { YieldResults } from "@/components/yield-results"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getSearchResults } from "@/lib/search-service"

// Force dynamic rendering to ensure searchParams are available
export const dynamic = 'force-dynamic'

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string }
}) {
  // Use await to access searchParams properties
  const searchParamsData = await searchParams
  const query = typeof searchParamsData.q === 'string' ? searchParamsData.q : ''
  
  // Fetch results directly without caching
  const results = await getSearchResults(query)

  return (
    <>
      <div className="mb-6">
        <Link href="/">
          <Button variant="ghost" className="text-navy hover:text-navy/80 pl-0 font-medium">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
      </div>

      <div className="bg-cream rounded-xl border-2 border-navy p-6 retro-shadow mb-6">
        <div className="max-w-4xl mx-auto">
          <YieldResults query={query} results={results} />
        </div>
      </div>
    </>
  )
}

