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

export default function PortfolioClient() {
  const { address: wallet } = useAccount()

  const portfolioQuery = useQuery({
    queryKey: ['portfolio', wallet],
    queryFn: () => fetchPortfolio(wallet!),
    staleTime: 30_000,
    enabled: !!wallet
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

  const data: any[] = portfolioQuery.data || []
  const summary = summaryQuery.data as SummaryData | undefined

  return (
    <div className="space-y-6">
      {summary && <SummaryCard totalUsd={summary.totalUsd} avgApy={summary.avgApy} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((p, i) => {
          const yieldOpportunity = p.yieldOpportunity || {
            name: p.integration_id || p.integrationId || 'Unknown',
            apy: p.apy ?? 0,
            tvl: p.tvl ?? 0,
          }
          return (
            <PositionCard
              key={`${p.integration_id || p.integrationId}-${p.id ?? i}`}
              wallet_address={p.wallet_address}
              integration_id={p.integration_id}
              yield_opportunity_id={p.yield_opportunity_id}
              amount={p.amount}
              entry_date={p.entry_date}
              apy={p.apy}
              last_balance_sync={p.last_balance_sync}
              yieldOpportunity={yieldOpportunity}
            />
          )
        })}
      </div>
    </div>
  )
}
