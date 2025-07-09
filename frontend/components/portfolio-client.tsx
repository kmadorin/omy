"use client"

import { useAccount } from 'wagmi'
import { useQuery } from '@tanstack/react-query'
import type { PortfolioPosition } from '@/lib/portfolio-types'
import { Card, CardContent } from '@/components/ui/card'
import PositionCard from '@/components/position-card'

interface SummaryData {
  totalUsd: number
  avgApy: number
}

function fetchPortfolio(wallet: string) {
  return fetch(`/api/portfolio?wallet=${wallet}`).then((r) => r.json())
}

function SummaryCard({ totalUsd, avgApy }: SummaryData) {
  return (
    <Card className="p-4 bg-cream">
      <CardContent className="space-y-1">
        <div className="text-sm text-navy">Total Value</div>
        <div className="text-2xl font-bold text-navy">${totalUsd.toFixed(2)}</div>
        <div className="text-sm text-navy">Avg APY {avgApy.toFixed(2)}%</div>
      </CardContent>
    </Card>
  )
}

export default function PortfolioClient({ positions }: { positions: PortfolioPosition[] }) {
  const { address: wallet } = useAccount()

  const portfolioQuery = useQuery({
    queryKey: ['portfolio', wallet],
    queryFn: () => fetchPortfolio(wallet!),
    staleTime: 30_000,
    enabled: !!wallet,
    initialData: positions
  })

  const summaryQuery = useQuery({
    queryKey: ['portfolio-summary', wallet],
    queryFn: () =>
      fetch(`/api/portfolio/summary?wallet=${wallet}`).then((r) => r.json()),
    enabled: !!wallet
  })

  if (!wallet) {
    return <p className="text-center text-navy">Connect your wallet to view your portfolio.</p>
  }

  const data: PortfolioPosition[] = portfolioQuery.data || []
  const summary = summaryQuery.data as SummaryData | undefined

  return (
    <div className="space-y-6">
      {summary && <SummaryCard totalUsd={summary.totalUsd} avgApy={summary.avgApy} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((p) => (
          <PositionCard key={p.integration_id} {...(p as any)} />
        ))}
      </div>
    </div>
  )
}
