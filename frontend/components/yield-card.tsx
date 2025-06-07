"use client";

import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { YieldResult } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { formatAPY } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useAccount, useSendTransaction } from "wagmi";
import { InvestmentModal } from "@/components/investment-modal";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { parseEther } from "viem";
import {
  useActionEnter,
  useTransactionConstruct,
  AddressesDto,
  ActionArgumentsDto,
  ConstructTransactionRequestDto,
  TransactionDto,
} from "@stakekit/api-hooks";

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
  const { isConnected, address } = useAccount();
  const [isInvestmentModalOpen, setIsInvestmentModalOpen] = useState(false);

  const {
    data: actionResponse,
    isPending: isLoadingActionData,
    error: actionDataError,
    mutate: createActionEnter,
  } = useActionEnter();

  const { data: txHash, sendTransaction } = useSendTransaction();

  const { data: createTransactionResponse, mutate: createTransaction } =
    useTransactionConstruct();

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

    if (!isConnected || !address) return;
    const action = createActionEnter({
      data: {
        integrationId: yieldItem.id,
        addresses: { address },
        args: { amount: "0.00001" },
      },
    });

    console.log(`action: `, action);

    // if (action && action.transactions) {
    //   for (tx of action.transactions) {
    //     const txData = await createTransaction({
    //       data: {
    //         transaction: tx,
    //         address,
    //       },
    //     });
    //     console.log(`txData: ${JSON.stringify(txData, null
    //   }
    // }

    console.log(`createActionEnter: `, createActionEnter);
    console.log(`actionDataError: ${JSON.stringify(actionDataError, null, 2)}`);
    console.log(`isLoadingActionData: ${isLoadingActionData}`);
  };

  useEffect(() => {
    if (actionResponse) {
      const transactions = actionResponse.transactions;

      for (const tx of transactions) {
        const txData = createTransaction({ transactionId: tx.id, data: {} });
        console.log(`txData: ${JSON.stringify(txData, null, 2)}`);
      }
    }
  }, [actionResponse]);

  useEffect(() => {
    console.log(
      `createTransactionResponse: ${JSON.stringify(createTransactionResponse, null, 2)}`,
    );

    if (
      createTransactionResponse &&
      createTransactionResponse?.unsignedTransaction
    ) {
      try {
        // const transaction = JSON.parse(
        //   createTransactionResponse?.unsignedTransaction,
        // );
        //
        const transaction = {
          from: "0x9e0f0d83dD880240e3506A7Ac4CE82500b2bD92B",
          gasLimit: "0x0e1398",
          value: "10000000000000",
          to: "0x74a09653A083691711cF8215a6ab074BB4e99ef5",
          data: "0x5358fbda000000000000000000000000c23287cdc37938079dbda6954b7edf755b17ae72",
          nonce: 251,
          type: 2,
          maxFeePerGas: "0xfb881700",
          maxPriorityFeePerGas: "0x054e0840",
          chainId: 1,
        };

        if (!transaction) return;

        sendTransaction({
          value: BigInt(transaction.value),
          to: transaction.to as `0x${string}`,
          data: transaction.data as `0x${string}`,
        });
      } catch (e) {
        console.log(`e: ${e}`);
      }
      console.log(
        `unsignedTransaction: ${createTransactionResponse?.unsignedTransaction}`,
      );
    }
  }, [createTransactionResponse]);

  useEffect(() => {
    if (txHash) {
      console.log(`txHash: ${txHash}`);
    }
  }, [txHash]);

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
              <Button
                onClick={() =>
                  sendTransaction({
                    to: "0x9e0f0d83dD880240e3506A7Ac4CE82500b2bD92B",
                    value: parseEther("0.00001"),
                  })
                }
              >
                Send Transaction
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <InvestmentModal
        isOpen={isInvestmentModalOpen}
        onClose={() => setIsInvestmentModalOpen(false)}
        yieldOption={yieldItem}
      />
    </>
  );
}
