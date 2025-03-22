import { SearchForm } from "@/components/search-form"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-orange">
      <header className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-black text-navy">OhMyYield</h1>
          <Button className="bg-cream text-navy font-bold border-2 border-navy retro-shadow hover:bg-cream/90">
            Connect Wallet
          </Button>
        </div>
      </header>

      <main className="container mx-auto flex-1 py-8">
        <div className="bg-cream rounded-xl border-2 border-navy p-8 retro-shadow mb-8">
          <h2 className="text-5xl md:text-6xl font-black text-navy text-center mb-8">JUICE YOUR YIELDS!</h2>

          <SearchForm />

          <div className="mt-8 flex flex-col items-center">
            <p className="text-navy mb-2">Try these examples:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {/* <Link href="/search?q=Show me top 10 yields on stablecoins">
                <Button
                  variant="outline"
                  className="bg-blue text-navy border-2 border-navy hover:bg-blue/90 font-medium retro-shadow"
                  type="button"
                >
                  Show me top 10 yields on stablecoins <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link> */}
							<Link href="/search?q=Show me top 5 yields for ETH on ethereum">
                <Button
                  variant="outline"
                  className="bg-blue text-navy border-2 border-navy hover:bg-blue/90 font-medium retro-shadow"
                  type="button"
                >
                  Show me top 5 yields for ETH on ethereum <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/search?q=Show me top 10 yields on stablecoins">
                <Button
                  variant="outline"
                  className="bg-orange text-navy border-2 border-navy hover:bg-orange/90 font-medium retro-shadow"
                  type="button"
                >
                  Show me top 10 yields on stablecoins <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              {/* <Link href="/search?q=Show me top 10 yields for my portfolio tokens">
                <Button
                  variant="outline"
                  className="bg-yellow text-navy border-2 border-navy hover:bg-yellow/90 font-medium retro-shadow"
                  type="button"
                >
                  Show me top 10 yields for my portfolio tokens <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link> */}
            </div>
          </div>
        </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}

