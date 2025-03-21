"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Shield, ShieldAlert, ShieldCheck, ExternalLink, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import type { YieldData } from "@/lib/types"

interface YieldResultsProps {
  query: string
  results?: YieldData[]
}

export function YieldResults({ query, results = [] }: YieldResultsProps) {
  const getRiskIcon = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "low":
        return <ShieldCheck className="h-4 w-4 text-blue" />
      case "medium":
        return <Shield className="h-4 w-4 text-yellow" />
      case "high":
        return <ShieldAlert className="h-4 w-4 text-orange" />
      default:
        return <Shield className="h-4 w-4" />
    }
  }

  const getChainColor = (chain: string) => {
    switch (chain.toLowerCase()) {
      case "ethereum":
        return "bg-blue/20 text-navy border-blue"
      case "polygon":
        return "bg-orange/20 text-navy border-orange"
      case "avalanche":
        return "bg-orange/20 text-navy border-orange"
      case "solana":
        return "bg-blue/20 text-navy border-blue"
      case "arbitrum":
        return "bg-blue/20 text-navy border-blue"
      case "optimism":
        return "bg-orange/20 text-navy border-orange"
      case "base":
        return "bg-blue/20 text-navy border-blue"
      default:
        return "bg-navy/10 text-navy border-navy"
    }
  }

  const formatAPY = (apy: number): string => {
    return (apy * 100).toFixed(2)
  }

  if (!results || results.length === 0) {
    return (
      <div className="py-8 text-center text-navy/70 font-medium">
        No yield opportunities found for this query. Try a different search.
      </div>
    )
  }

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-black text-navy uppercase">Results for "{query}"</h3>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-orange/20 text-navy border-orange font-medium">
            {results.length} results
          </Badge>
        </div>
      </div>

      <div className="grid gap-4">
        {results.map((item, index) => (
          <Card key={`yield-${index}`} className="bg-white border-2 border-navy overflow-hidden retro-shadow">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row">
                <div className="flex-1 p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-yellow border-2 border-navy flex items-center justify-center font-bold text-navy">
                      {item.token_symbol.substring(0, 1)}
                    </div>
                    <div>
                      <h4 className="font-bold text-navy">{item.token_symbol}</h4>
                      <div className="flex items-center gap-2 text-sm text-navy/70">
                        <Badge variant="outline" className={`${getChainColor(item.token_network)} border-2`}>
                          {item.token_network}
                        </Badge>
                        <span>•</span>
                        <span className="font-medium">{item.provider_name}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-6">
                    <div>
                      <div className="text-sm text-navy/70 font-medium">APY</div>
                      <div className="text-xl font-black text-orange">{formatAPY(item.apy)}%</div>
                    </div>

                    {/* <div>
                      <div className="text-sm text-navy/70 font-medium">TVL</div>
                      <div className="text-xl font-bold text-navy">${item.tvl.toLocaleString()}</div>
                    </div>

                    <div>
                      <div className="text-sm text-navy/70 font-medium">Risk</div>
                      <div className="text-xl font-bold flex items-center gap-1 text-navy">
                        {getRiskIcon(item.risk)}
                        <span>{item.risk}</span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-5 w-5 p-0 ml-1">
                                <Info className="h-3 w-3" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent className="bg-white border-2 border-navy text-navy font-medium">
                              <p>Risk assessment based on protocol security, audits, and history</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div> */}
                  </div>
                </div>

                <div className="flex items-center justify-center p-4 sm:p-6 bg-cream sm:w-48 border-t-2 sm:border-t-0 sm:border-l-2 border-navy">
                  <Button className="w-full bg-orange hover:bg-orange/90 text-navy border-2 border-navy font-bold retro-shadow">
                    Invest Now <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

