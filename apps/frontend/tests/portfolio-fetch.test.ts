import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import PortfolioClient from '../components/portfolio-client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { getConfig } from '../wagmiConfig'

vi.mock('wagmi', async () => {
  const actual: any = await vi.importActual('wagmi')
  return { ...actual, useAccount: () => ({ address: '0xabc', isConnected: true }) }
})

const positions = [
  {
    wallet_address: '0xabc',
    integration_id: '1',
    yield_opportunity_id: 'y1',
    amount: 1,
    entry_date: new Date().toISOString(),
    apy: 1,
    last_balance_sync: null,
    yieldOpportunity: { name: 'A', apy: 1, tvl: 1 }
  },
  {
    wallet_address: '0xabc',
    integration_id: '2',
    yield_opportunity_id: 'y2',
    amount: 1,
    entry_date: new Date().toISOString(),
    apy: 1,
    last_balance_sync: null,
    yieldOpportunity: { name: 'B', apy: 1, tvl: 1 }
  },
  {
    wallet_address: '0xabc',
    integration_id: '3',
    yield_opportunity_id: 'y3',
    amount: 1,
    entry_date: new Date().toISOString(),
    apy: 1,
    last_balance_sync: null,
    yieldOpportunity: { name: 'C', apy: 1, tvl: 1 }
  }
]

describe('Portfolio fetch', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, json: () => Promise.resolve(positions) }))
  })

  it('renders three PositionCard components', async () => {
    const queryClient = new QueryClient()
    render(
      <WagmiProvider config={getConfig()}>
        <QueryClientProvider client={queryClient}>
          <PortfolioClient positions={[]} />
        </QueryClientProvider>
      </WagmiProvider>
    )

    await waitFor(() => {
      expect(screen.getAllByText('Exit').length).toBe(3)
    })
  })
})
