import PortfolioClient from '@/components/portfolio-client'

export const runtime = 'edge'

export default function PortfolioPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <PortfolioClient />
    </div>
  )
}
