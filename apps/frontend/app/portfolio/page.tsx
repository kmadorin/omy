import { headers } from 'next/headers'
import { notFound } from 'next/navigation'
import { cookieToInitialState } from 'wagmi'
import { getAccount } from '@wagmi/core/actions'
import { getConfig } from '../../wagmiConfig'
import PortfolioClient from '@/components/portfolio-client'

export const runtime = 'edge'

export default async function PortfolioPage() {
  if (process.env.NEXT_PUBLIC_FEATURE_PORTFOLIO_V1 !== 'on') {
    notFound()
  }

  const config = getConfig()
  const headerList = headers()
  const initialState = cookieToInitialState(config, headerList.get('cookie'))
  const { address } = getAccount(config, { state: initialState })

  if (!address) {
    notFound()
  }

  const res = await fetch(`/api/portfolio?wallet=${address}`, {
    next: { revalidate: 30 }
  })
  if (!res.ok) {
    notFound()
  }
  const data = await res.json()

  return <PortfolioClient positions={data} />
}
