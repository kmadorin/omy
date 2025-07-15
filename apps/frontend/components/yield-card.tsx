"use client";

import { Card, CardContent } from "@/components/ui/card";
import { YieldResult } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { formatAPY } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useAccount } from "wagmi";
import { InvestmentModal } from "@/components/investment-modal";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const getChainColor = (chain: string) => {
  switch (chain.toLowerCase()) {
    case "ethereum":
      return "bg-blue/20 text-navy border-blue";
    case "polygon":
      return "bg-orange/20 text-navy border-orange";
    case "avalanche":
      return "bg-orange/20 text-navy border-orange";
    case "solana":
      return "bg-blue/20 text-navy border-blue";
    case "arbitrum":
      return "bg-blue/20 text-navy border-blue";
    case "optimism":
      return "bg-orange/20 text-navy border-orange";
    case "base":
      return "bg-blue/20 text-navy border-blue";
    default:
      return "bg-navy/10 text-navy border-navy";
  }
};

export function YieldCard({ yieldItem }: { yieldItem: YieldResult }) {
  const { toast } = useToast();
  const { isConnected } = useAccount();
  const [isInvestmentModalOpen, setIsInvestmentModalOpen] = useState(false);

  const handleInvestClick = () => {
    if (!isConnected) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to invest",
        variant: "destructive",
      });
      return;
    }

    setIsInvestmentModalOpen(true);
  };

  return (
    <>
      <Card className="mt-3">
        <CardContent>
          <div className="flex justify-between items-center">
            <div className="p-4 flex items-center space-x-4 flex-grow">
              <div className="h-12 w-12 rounded-full bg-yellow-300 flex items-center justify-center border-2 border-gray-900">
                <span className="font-bold text-gray-900">
                  {yieldItem.token_symbol.substring(0, 1)}
                </span>
              </div>
              <div className="space-y-1">
                <div className="font-bold text-lg">
                  {yieldItem.token_symbol}
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className={`${getChainColor(yieldItem.token_network)} bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full border border-blue-300`}
                  >
                    {yieldItem.token_network}
                  </Badge>
                  <span className="text-navy/70">
                    • {yieldItem.provider_name}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-sm text-navy/70 font-medium">APY</span>
                  <div className="text-xl font-bold text-orange-500">
                    {formatAPY(yieldItem.apy)}%
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-cream-200 h-full">
              <Button
                onClick={handleInvestClick}
                className="bg-orange-500 hover:bg-orange-600 border border-gray-900"
              >
                Invest Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <InvestmentModal
        isOpen={isInvestmentModalOpen}
        handleClose={() => setIsInvestmentModalOpen(false)}
        yieldOption={yieldItem}
      />
    </>
  );
}
