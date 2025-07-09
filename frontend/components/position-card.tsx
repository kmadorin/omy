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

interface Props extends PortfolioPosition {
  yieldOpportunity: YieldInfo
}

async function signAndSendExitTx(_integrationId: string, _amount: number) {
  return {
    async wait() {
      return { hash: '0x0' }
    }
  }
}

export default function PositionCard({
  wallet_address,
  integration_id,
  yield_opportunity_id,
  amount,
  usd_value,
  entry_date,
  apy,
  last_balance_sync,
  yieldOpportunity
}: Props) {
  const queryClient = useQueryClient()

  const handleExit = async () => {
    const tx = await signAndSendExitTx(integration_id, amount)
    const receipt = await tx.wait()

    await fetch('/api/transactions', {
      method: 'POST',
      body: JSON.stringify({
        walletAddress: wallet_address,
        integrationId: integration_id,
        yieldOpportunityId: yield_opportunity_id,
        direction: 'EXIT',
        amount,
        txHash: receipt.hash,
        executedAt: new Date().toISOString()
      })
    })

    queryClient.setQueryData(['portfolio', wallet_address], (old: any) =>
      removePosition(old as PortfolioPosition[], integration_id)
    )
  }

  return (
    <Card className="p-4 bg-cream flex flex-col gap-3">
      <CardContent className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-yellow flex items-center justify-center border-2 border-navy">
              <span className="text-navy font-bold">
                {yieldOpportunity.name.slice(0, 1)}
              </span>
            </div>
            <span className="font-bold text-navy">{yieldOpportunity.name}</span>
          </div>
          <SyncBadge lastBalanceSync={last_balance_sync} />
        </div>
        <div className="flex items-center justify-between text-navy">
          <span className="font-semibold">{amount}</span>
          {usd_value !== null && (
            <span className="text-sm">≈${usd_value.toFixed(2)}</span>
          )}
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
