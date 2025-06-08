"use client";

import type React from "react";
import { useState, useEffect, useCallback } from "react";
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
import {
  useAccount,
  useSendTransaction,
  useWaitForTransactionReceipt,
  usePublicClient,
} from "wagmi";
// Import the direct function calls instead of hooks
import { actionEnter, transactionConstruct } from "@stakekit/api-hooks";

// Types for transaction handling
interface TransactionResponse {
  to: string;
  data: string;
  value?: string;
  chainId: number;
}

interface TransactionStatus {
  hash: `0x${string}`;
  confirmed: boolean;
}

interface InvestmentModalProps {
  isOpen: boolean;
  handleClose: () => void;
  yieldOption: YieldResult;
}

export function InvestmentModal({
  isOpen,
  handleClose,
  yieldOption,
}: InvestmentModalProps) {
  const { isConnected, address } = useAccount();
  const { toast } = useToast();
  const [amount, setAmount] = useState("");
  const [percentage, setPercentage] = useState(50);
  const [isInvesting, setIsInvesting] = useState(false);
  const [currentTxIndex, setCurrentTxIndex] = useState(0);
  const [totalTxCount, setTotalTxCount] = useState(0);
  const [progressMessage, setProgressMessage] = useState("");
  const [transactions, setTransactions] = useState<TransactionStatus[]>([]);

  // Get the transaction sender hook and public client for blockchain interactions
  const { sendTransactionAsync } = useSendTransaction();
  const publicClient = usePublicClient();

  // Calculate derived values from transactions
  const confirmedCount = transactions.filter((tx) => tx.confirmed).length;
  const totalTxs = transactions.length;

  // In a real app, this would be fetched from the blockchain
  const walletBalance = {
    [yieldOption.token_symbol]: 1, // Mock balance
  };

  const maxAmount = walletBalance[yieldOption.token_symbol] || 0;

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

  // Helper function to wait for transaction confirmation and update state
  const waitForTransaction = useCallback(
    async (hash: `0x${string}`) => {
      try {
        if (!publicClient) {
          throw new Error("Public client not initialized");
        }

        // Wait for the transaction to be mined and confirmed
        const receipt = await publicClient.waitForTransactionReceipt({
          hash,
          confirmations: 1,
          timeout: 5 * 60 * 1000, // 5 minutes timeout
        });

        // Update transaction status in state
        setTransactions((prev) =>
          prev.map((tx) =>
            tx.hash === hash ? { ...tx, confirmed: true } : tx,
          ),
        );

        return {
          status: receipt.status === "success" ? "success" : "failed",
        };
      } catch (error) {
        throw new Error(
          `Transaction confirmation failed: ${error instanceof Error ? error.message : String(error)}`,
        );
      }
    },
    [publicClient],
  );

  // Process transactions sequentially with status tracking
  const processTransactions = useCallback(
    async (txs: Array<{ id: string }>): Promise<string[]> => {
      const hashes: string[] = [];
      setTotalTxCount(txs.length);
      setTransactions([]);

      for (let i = 0; i < txs.length; i++) {
        try {
          setCurrentTxIndex(i);
          setProgressMessage(
            `Processing transaction ${i + 1}/${txs.length}...`,
          );

          // 1. Construct the transaction
          const txId = txs[i].id;
          setProgressMessage(
            `Constructing transaction ${i + 1}/${txs.length}...`,
          );
          const txData = await transactionConstruct(txId, {});

          if (!txData?.unsignedTransaction) {
            throw new Error(
              `Failed to construct transaction ${i + 1}/${txs.length}`,
            );
          }

          // 2. Parse the transaction data
          const transaction = JSON.parse(
            txData.unsignedTransaction,
          ) as TransactionResponse;

          // 3. Prepare and send the transaction
          setProgressMessage(`Sending transaction ${i + 1}/${txs.length}...`);

          const txParams = {
            to: transaction.to as `0x${string}`,
            data: transaction.data as `0x${string}`,
            value: transaction.value ? BigInt(transaction.value) : undefined,
            chainId: transaction.chainId,
          };

          const hash = await sendTransactionAsync(txParams);
          hashes.push(hash);

          // Track transaction status
          setTransactions((prev) => [...prev, { hash, confirmed: false }]);

          // Update UI with transaction sent status
          setProgressMessage(
            `Transaction ${i + 1}/${txs.length} sent, waiting for confirmation...`,
          );
          toast({
            title: `Transaction sent`,
            description: `Transaction ${i + 1}/${txs.length} is being processed`,
          });

          // 4. Wait for confirmation
          try {
            const result = await waitForTransaction(hash);

            if (result.status === "success") {
              setProgressMessage(
                `Transaction ${i + 1}/${txs.length} confirmed!`,
              );
              toast({
                title: `Transaction confirmed`,
                description: `Transaction ${i + 1}/${txs.length} has been confirmed`,
              });
            } else {
              throw new Error(
                `Transaction failed with status: ${result.status}`,
              );
            }
          } catch (confirmError) {
            throw new Error(
              `Failed to confirm transaction: ${confirmError instanceof Error ? confirmError.message : String(confirmError)}`,
            );
          }
        } catch (error) {
          toast({
            title: `Transaction failed`,
            description:
              error instanceof Error
                ? error.message
                : "The transaction was rejected",
            variant: "destructive",
          });

          // If any transaction fails, stop the process
          setIsInvesting(false);
          return [];
        }
      }

      // All transactions completed successfully
      setIsInvesting(false);
      return hashes;
    },
    [sendTransactionAsync, toast, waitForTransaction],
  );

  // Handle the main investment flow
  const handleInvest = useCallback(async () => {
    // Validate wallet connection
    if (!isConnected || !address) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to invest",
        variant: "destructive",
      });
      return;
    }

    // Validate investment amount
    const investAmount = Number.parseFloat(amount);
    if (isNaN(investAmount) || investAmount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount to invest",
        variant: "destructive",
      });
      return;
    }

    // Set initial investment state
    setIsInvesting(true);
    setCurrentTxIndex(0);
    setTotalTxCount(0);
    setTransactions([]);
    setProgressMessage("Creating investment action...");

    try {
      // 1. Create the StakeKit action
      const actionResponse = await actionEnter({
        integrationId: yieldOption.id,
        addresses: { address },
        args: { amount },
      });

      if (!actionResponse?.transactions?.length) {
        throw new Error("No transactions returned from action");
      }

      // 2. Process all transactions
      const successTxs = await processTransactions(actionResponse.transactions);

      // 3. Check if all transactions succeeded
      if (successTxs.length === actionResponse.transactions.length) {
        toast({
          title: "Investment successful",
          description: `You have successfully invested ${amount} ${yieldOption.token_symbol} in ${yieldOption.provider_name}`,
        });
      }
    } catch (error) {
      toast({
        title: "Investment failed",
        description:
          error instanceof Error
            ? error.message
            : "There was an error processing your investment",
        variant: "destructive",
      });
    } finally {
      setIsInvesting(false);
    }
  }, [
    address,
    amount,
    isConnected,
    processTransactions,
    toast,
    yieldOption.id,
    yieldOption.name,
    yieldOption.token_symbol,
  ]);

  // Calculate estimated earnings
  const estimatedYield = Number.parseFloat(amount) * yieldOption.apy;
  const estimatedYearlyEarnings = isNaN(estimatedYield) ? 0 : estimatedYield;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Invest</DialogTitle>
          <DialogDescription>
            {yieldOption.provider_name} •{" "}
            {formatPercentage(yieldOption.apy * 100)} APY
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="flex items-center justify-between">
            <Label>Available Balance</Label>
            <span className="font-medium">
              {maxAmount} {yieldOption.token_symbol}
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
                {yieldOption.token_symbol}
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
                {estimatedYearlyEarnings.toFixed(4)} {yieldOption.token_symbol}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">APY</span>
              <span className="font-medium">
                {formatPercentage(yieldOption.apy * 100)}
              </span>
            </div>
            {/* <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Gas Fee (estimated)</span>
              <span className="font-medium">~$5.00</span>
            </div> */}
          </div>

          {/* <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <InfoIcon className="h-4 w-4" />
            <p>
              Your investment will be automatically added to your portfolio
              after the transaction is confirmed.
            </p>
          </div> */}
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={handleClose}
            disabled={isInvesting}
          >
            Cancel
          </Button>
          <Button
            onClick={handleInvest}
            disabled={isInvesting || !amount || Number.parseFloat(amount) <= 0}
          >
            {isInvesting ? (
              <>
                <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
                <span className="truncate max-w-48">
                  {progressMessage || "Investing..."}
                  {totalTxCount > 0 &&
                    ` (${currentTxIndex + 1}/${totalTxCount})`}
                  {totalTxs > 0 && ` (${confirmedCount}/${totalTxs} confirmed)`}
                </span>
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
