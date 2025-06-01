import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col bg-orange">      
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
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin h-8 w-8 border-4 border-orange border-t-transparent rounded-full"></div>
              <span className="ml-3 text-navy font-medium">Loading results...</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

