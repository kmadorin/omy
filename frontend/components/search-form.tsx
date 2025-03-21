"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Sparkles } from "lucide-react"

export function SearchForm() {
  const [query, setQuery] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="relative flex items-center">
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-navy" />
          <Input
            type="text"
            placeholder="Ask about DeFi yields..."
            className="w-full bg-white border-2 border-navy pl-12 pr-32 py-6 text-lg rounded-lg focus-visible:ring-orange retro-shadow"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            type="submit"
            size="lg"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange hover:bg-orange/90 text-navy border-2 border-navy flex items-center gap-1 rounded-md px-4 font-bold retro-shadow"
          >
            <Sparkles className="h-4 w-4" />
            Search
          </Button>
        </div>
      </div>
    </form>
  )
}

