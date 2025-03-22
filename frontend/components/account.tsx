import { useAccount, useDisconnect } from 'wagmi'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Account() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  return (
    <div className="flex items-center gap-4">
      {address && (
        <div className="rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
          {formatAddress(address)}
        </div>
      )}
      <Button 
        variant="destructive" 
        size="sm" 
        onClick={() => disconnect()}
      >
        Disconnect
      </Button>
    </div>
  )
}