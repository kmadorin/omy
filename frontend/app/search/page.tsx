import { YieldResults } from "@/components/yield-results"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getSearchResults } from "@/lib/search-service"
import { unstable_cache } from 'next/cache'

// Enable dynamic rendering since we're using searchParams
export const dynamic = 'force-dynamic'

// Cache search results with a 5-minute revalidation time
const getCachedSearchResults = unstable_cache(
  async (query: string) => {
    return getSearchResults(query)
  },
  ['search-results'],
  { revalidate: 300 } // 5 minutes
)

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string }
}) {
  // Await searchParams before using it
  const query = (await Promise.resolve(searchParams.q)) || ""
  
  // Use cached results
  const results = await getCachedSearchResults(query)

  return (
    <div className="flex min-h-screen flex-col bg-orange">
      <header className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-black text-navy">OhMyYield</h1>
          </Link>
          <Button className="bg-cream text-navy font-bold border-2 border-navy retro-shadow hover:bg-cream/90">
            Connect Wallet
          </Button>
        </div>
      </header>

      <main className="container mx-auto flex-1 py-6">
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
      </main>
    </div>
  )
}

