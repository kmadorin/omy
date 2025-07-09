"use client"

import { Badge } from '@/components/ui/badge'
import { formatDistanceToNow } from 'date-fns'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip'

export default function SyncBadge({ lastBalanceSync }: { lastBalanceSync: string | null }) {
  if (!lastBalanceSync) {
    return null
  }

  const diffSec = (Date.now() - new Date(lastBalanceSync).getTime()) / 1000
  const label = diffSec < 60
    ? 'Synced just now'
    : `Synced ${formatDistanceToNow(new Date(lastBalanceSync))} ago`

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="outline" className="ml-auto">
            {label}
          </Badge>
        </TooltipTrigger>
        <TooltipContent>{new Date(lastBalanceSync).toLocaleString()}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
