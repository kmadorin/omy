import { useAccount, useDisconnect } from "wagmi";
import { Button } from "@/components/ui/button";
import { useCallback } from "react";

export function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const handleDisconnect = useCallback(() => {
    disconnect();
  }, [disconnect]);

  return (
    <div className="flex items-center gap-4">
      {address && (
        <div className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-gray-900">
          {formatAddress(address)}
        </div>
      )}
      <Button
        className="bg-white text-gray-900 hover:bg-gray-100 font-semibold border border-gray-900 shadow-md"
        size="sm"
        onClick={handleDisconnect}
      >
        Disconnect
      </Button>
    </div>
  );
}
