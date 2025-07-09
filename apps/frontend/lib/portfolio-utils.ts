import type { PortfolioPosition } from './portfolio-types'

export function removePosition(data: PortfolioPosition[] | undefined, integrationId: string): PortfolioPosition[] {
  if (!data) return []
  return data.filter((p) => p.integration_id !== integrationId)
}

export function addOrUpdatePosition(data: PortfolioPosition[] | undefined, position: PortfolioPosition): PortfolioPosition[] {
  if (!data) return [position]
  const idx = data.findIndex((p) => p.integration_id === position.integration_id)
  if (idx >= 0) {
    const copy = [...data]
    copy[idx] = position
    return copy
  }
  return [...data, position]
}
