"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useQueryClient } from '@tanstack/react-query'
import type { PortfolioPosition } from '@/lib/portfolio-types'
import { removePosition } from '@/lib/portfolio-utils'
import SyncBadge from '@/components/sync-badge'

interface YieldInfo {
  name: string
  apy: number
  tvl: number
}

interface Props {
  wallet_address: string
  yield_opportunity_id: string
  principal_sum: string | number
  on_chain_amount: string | number
  usd_value_cached: string | number
  entry_date: string
  last_balance_sync: string | null
  apy: number
  yieldOpportunity: YieldInfo
}

async function signAndSendExitTx(_yieldOpportunityId: string, _principal_sum: number) {
  return {
    async wait() {
      return { hash: '0x0' }
    }
  }
}

export default function PositionCard({
  wallet_address,
  yield_opportunity_id,
  principal_sum,
  entry_date,
  apy,
  last_balance_sync,
  yieldOpportunity
}: Props) {
  const queryClient = useQueryClient()

  const handleExit = async () => {
    const tx = await signAndSendExitTx(yield_opportunity_id, Number(principal_sum))
    const receipt = await tx.wait()

    await fetch('/api/transactions', {
      method: 'POST',
      body: JSON.stringify({
        walletAddress: wallet_address,
        yieldOpportunityId: yield_opportunity_id,
        direction: 'EXIT',
        principal_sum: principal_sum,
        txHash: receipt.hash,
        executedAt: new Date().toISOString()
      })
    })

    queryClient.setQueryData(['portfolio', wallet_address], (old: any) =>
      removePosition(old as PortfolioPosition[], yield_opportunity_id)
    )
  }

  return (
    <Card className="p-4 bg-cream flex flex-col gap-3">
      <CardContent className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-yellow flex items-center justify-center border-2 border-navy">
              <span className="text-navy font-bold">
                {(yieldOpportunity?.name ?? '?').slice(0, 1)}
              </span>
            </div>
            <span className="font-bold text-navy">{yieldOpportunity.name}</span>
          </div>
          <SyncBadge lastBalanceSync={last_balance_sync} />
        </div>
        <div className="flex items-center justify-between text-navy">
          <span className="font-semibold">{principal_sum}</span>
        </div>
        <div className="flex items-center justify-between text-navy">
          <span>APY {apy.toFixed(2)}%</span>
          <span className="text-sm">{new Date(entry_date).toLocaleDateString()}</span>
        </div>
        <div className="flex justify-end">
          <Button
            onClick={handleExit}
            aria-label={`Exit position in ${yieldOpportunity.name}`}
            className="bg-orange hover:bg-orange/90 text-navy border-2 border-navy"
          >
            Exit
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
