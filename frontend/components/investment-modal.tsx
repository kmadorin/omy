"use client";

import type React from "react";

import { useState } from "react";
import { ArrowRightIcon, InfoIcon, LoaderIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { formatPercentage } from "@/lib/utils";
import type { YieldResult } from "@/lib/types";
import { useAccount } from "wagmi";

interface InvestmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  yieldOption: YieldResult;
}

export function InvestmentModal({
  isOpen,
  onClose,
  yieldOption,
}: InvestmentModalProps) {
  const { isConnected } = useAccount();
  const { toast } = useToast();
  const [amount, setAmount] = useState("");
  const [percentage, setPercentage] = useState(50);
  const [isInvesting, setIsInvesting] = useState(false);

  // In a real app, this would be fetched from the blockchain
  const walletBalance = {
    [yieldOption.token]: 1000, // Mock balance
  };

  const maxAmount = walletBalance[yieldOption.token] || 0;

  const handlePercentageChange = (value: number[]) => {
    const newPercentage = value[0];
    setPercentage(newPercentage);
    setAmount(((maxAmount * newPercentage) / 100).toString());
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setAmount("");
      setPercentage(0);
      return;
    }

    const numValue = Number.parseFloat(value);
    if (isNaN(numValue) || numValue < 0) return;

    const newAmount = Math.min(numValue, maxAmount);
    setAmount(newAmount.toString());
    setPercentage((newAmount / maxAmount) * 100);
  };

  const handleMaxClick = () => {
    setAmount(maxAmount.toString());
    setPercentage(100);
  };

  const handleInvest = async () => {
    if (!isConnected) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to invest",
        variant: "destructive",
      });
      return;
    }

    const investAmount = Number.parseFloat(amount);
    if (isNaN(investAmount) || investAmount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount to invest",
        variant: "destructive",
      });
      return;
    }

    setIsInvesting(true);

    try {
      // In a real app, this would send a transaction to the blockchain
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate transaction

      toast({
        title: "Investment successful",
        description: `You have successfully invested ${investAmount} ${yieldOption.token} in ${yieldOption.name}`,
      });

      onClose();
    } catch (error) {
      toast({
        title: "Investment failed",
        description: "There was an error processing your investment",
        variant: "destructive",
      });
    } finally {
      setIsInvesting(false);
    }
  };

  const estimatedYield = Number.parseFloat(amount) * yieldOption.apy;
  const estimatedYearlyEarnings = isNaN(estimatedYield) ? 0 : estimatedYield;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Invest in {yieldOption.name}</DialogTitle>
          <DialogDescription>
            {yieldOption.protocol} • {formatPercentage(yieldOption.apy * 100)}{" "}
            APY
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="flex items-center justify-between">
            <Label>Available Balance</Label>
            <span className="font-medium">
              {maxAmount} {yieldOption.token}
            </span>
          </div>

          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="amount">Investment Amount</Label>
              <Button
                variant="outline"
                size="sm"
                onClick={handleMaxClick}
                className="h-6 text-xs"
              >
                MAX
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Input
                id="amount"
                type="text"
                value={amount}
                onChange={handleAmountChange}
                placeholder="0.00"
              />
              <span className="font-medium min-w-16 text-right">
                {yieldOption.token}
              </span>
            </div>
          </div>

          <div className="grid gap-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
            <Slider
              value={[percentage]}
              max={100}
              step={1}
              onValueChange={handlePercentageChange}
            />
          </div>

          <div className="rounded-md bg-muted p-3 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                Estimated Yearly Yield
              </span>
              <span className="font-medium">
                {estimatedYearlyEarnings.toFixed(4)} {yieldOption.token}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">APY</span>
              <span className="font-medium">
                {formatPercentage(yieldOption.apy * 100)}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Gas Fee (estimated)</span>
              <span className="font-medium">~$5.00</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <InfoIcon className="h-4 w-4" />
            <p>
              Your investment will be automatically added to your portfolio
              after the transaction is confirmed.
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isInvesting}>
            Cancel
          </Button>
          <Button
            onClick={handleInvest}
            disabled={isInvesting || !amount || Number.parseFloat(amount) <= 0}
          >
            {isInvesting ? (
              <>
                <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
                Investing...
              </>
            ) : (
              <>
                Invest Now
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
