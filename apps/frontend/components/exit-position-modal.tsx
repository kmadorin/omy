"use client";

import type React from "react";
import { useState, useCallback } from "react";
import { ArrowRightIcon, LoaderIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import type { PortfolioPosition } from "@/lib/portfolio-types";

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

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { formatPercentage } from "@/lib/utils";
import chainsMap from "@/lib/chains-map";
import { useAccount, useSendTransaction, usePublicClient, useSwitchChain, useChainId } from "wagmi";

// Import the direct function calls instead of hooks
import { actionExit, transactionConstruct } from "@stakekit/api-hooks";

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

interface ExitPositionModalProps {
	isOpen: boolean;
	handleClose: () => void;
	position: PortfolioPosition;
}

export function ExitPositionModal({ isOpen, handleClose, position }: ExitPositionModalProps) {
	const { isConnected, address } = useAccount();
	const queryClient = useQueryClient();
	const { toast } = useToast();
	const [exitAmount, setExitAmount] = useState("");
	const [percentage, setPercentage] = useState(50);
	const [isExiting, setIsExiting] = useState(false);
	const [currentTxIndex, setCurrentTxIndex] = useState(0);
	const [totalTxCount, setTotalTxCount] = useState(0);
	const [progressMessage, setProgressMessage] = useState("");
	const [transactions, setTransactions] = useState<TransactionStatus[]>([]);
	const [isSwitchingChain, setIsSwitchingChain] = useState(false);

	const { switchChain } = useSwitchChain();
	const currentChainId = useChainId();

	// Get the transaction sender hook and public client for blockchain interactions
	const { sendTransactionAsync } = useSendTransaction();
	const publicClient = usePublicClient();

	// Calculate derived values from transactions
	const confirmedCount = transactions.filter((tx) => tx.confirmed).length;
	const totalTxs = transactions.length;

	// Get required chain ID from position network
	const requiredChainId = chainsMap[position.network];
	const needsChainSwitch = currentChainId !== requiredChainId;

	// Use position amount directly as max withdrawal
	const maxAmount = position ? position.amount : 0;

	const handlePercentageChange = (value: number[]) => {
		const newPercentage = value[0];
		setPercentage(newPercentage);
		setExitAmount(((maxAmount * newPercentage) / 100).toString());
	};

	const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		if (value === "") {
			setExitAmount("");
			setPercentage(0);
			return;
		}

		const numValue = Number.parseFloat(value);
		if (isNaN(numValue) || numValue < 0) return;

		const newAmount = Math.min(numValue, maxAmount);
		setExitAmount(newAmount.toString());
		setPercentage((newAmount / maxAmount) * 100);
	};

	const handleMaxClick = () => {
		setExitAmount(maxAmount.toString());
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
				setTransactions((prev) => prev.map((tx) => (tx.hash === hash ? { ...tx, confirmed: true } : tx)));

				return {
					status: receipt.status === "success" ? "success" : "failed",
				};
			} catch (error) {
				throw new Error(`Transaction confirmation failed: ${error instanceof Error ? error.message : String(error)}`);
			}
		},
		[publicClient]
	);

	// Process transactions sequentially with status tracking
	const processTransactions = useCallback(
		async (txs: Array<{ id: string }>, meta: { wallet: string; yieldOpportunityId: string; amount: number }): Promise<string[]> => {
			const hashes: string[] = [];
			setTotalTxCount(txs.length);
			setTransactions([]);

			for (let i = 0; i < txs.length; i++) {
				try {
					setCurrentTxIndex(i);
					setProgressMessage(`Processing transaction ${i + 1}/${txs.length}...`);

					// 1. Construct the transaction
					const txId = txs[i].id;
					setProgressMessage(`Constructing transaction ${i + 1}/${txs.length}...`);
					const txData = await transactionConstruct(txId, {});

					if (!txData?.unsignedTransaction) {
						throw new Error(`Failed to construct transaction ${i + 1}/${txs.length}`);
					}

					// 2. Parse the transaction data
					const transaction = JSON.parse(txData.unsignedTransaction) as TransactionResponse;

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
					setProgressMessage(`Transaction ${i + 1}/${txs.length} sent, waiting for confirmation...`);
					toast({
						title: `Transaction sent`,
						description: `Transaction ${i + 1}/${txs.length} is being processed`,
					});

					// 4. Wait for confirmation
					try {
						const result = await waitForTransaction(hash);

						if (result.status === "success") {
							setProgressMessage(`Transaction ${i + 1}/${txs.length} confirmed!`);
							toast({
								title: `Transaction confirmed`,
								description: `Transaction ${i + 1}/${txs.length} has been confirmed`,
							});
						} else {
							throw new Error(`Transaction failed with status: ${result.status}`);
						}
					} catch (confirmError) {
						throw new Error(`Failed to confirm transaction: ${confirmError instanceof Error ? confirmError.message : String(confirmError)}`);
					}
				} catch (error) {
					toast({
						title: `Transaction failed`,
						description: error instanceof Error ? error.message : "The transaction was rejected",
						variant: "destructive",
					});

					// If any transaction fails, stop the process
					setIsExiting(false);
					return [];
				}
			}

			// After the loop, if all transactions were successful:
			if (hashes.length === txs.length && hashes.length > 0) {
				await fetch("/api/transactions", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						walletAddress: meta.wallet,
						yieldOpportunityId: meta.yieldOpportunityId,
						txHash: hashes[hashes.length - 1],
						direction: "EXIT",
						amount: meta.amount,
						executedAt: new Date().toISOString(),
					}),
				});

				// Invalidate and refetch the portfolio query to get the updated state from the backend
				queryClient.invalidateQueries({ queryKey: ["portfolio", meta.wallet] });
			}

			// All transactions completed successfully
			setIsExiting(false);
			return hashes; // Return all hashes as before
		},
		[sendTransactionAsync, toast, waitForTransaction, queryClient]
	);

	// Handle chain switching
	const handleSwitchChain = useCallback(async () => {
		if (!requiredChainId) {
			toast({
				title: "Unsupported network",
				description: `Network ${position.network} is not supported`,
				variant: "destructive",
			});
			return;
		}

		setIsSwitchingChain(true);
		try {
			switchChain({ chainId: requiredChainId });
			toast({
				title: "Chain switched",
				description: `Successfully switched to ${position.network}`,
			});
		} catch (error) {
			toast({
				title: "Chain switch failed",
				description: error instanceof Error ? error.message : "Failed to switch chain",
				variant: "destructive",
			});
		} finally {
			setIsSwitchingChain(false);
		}
	}, [requiredChainId, switchChain, toast, position.network]);

	// Handle the main exit flow
	const handleExit = useCallback(async () => {
		// Validate wallet connection
		if (!isConnected || !address) {
			toast({
				title: "Wallet not connected",
				description: "Please connect your wallet to exit",
				variant: "destructive",
			});
			return;
		}

		// Validate exit amount
		const exitAmountNum = Number.parseFloat(exitAmount);
		if (isNaN(exitAmountNum) || exitAmountNum <= 0) {
			toast({
				title: "Invalid amount",
				description: "Please enter a valid amount to exit",
				variant: "destructive",
			});
			return;
		}

		// Check if chain switch is needed
		if (needsChainSwitch) {
			await handleSwitchChain();
			return;
		}

		// Set initial exit state
		setIsExiting(true);
		setCurrentTxIndex(0);
		setTotalTxCount(0);
		setTransactions([]);
		setProgressMessage("Creating exit action...");

		try {
			// 1. Create the StakeKit action for exit
			const actionResponse = await actionExit({
				integrationId: position.integration_id,
				addresses: { address },
				args: { amount: exitAmount },
			});

			if (!actionResponse?.transactions?.length) {
				throw new Error("No transactions returned from action");
			}

			// 2. Process all transactions
			const successTxs = await processTransactions(actionResponse.transactions, {
				wallet: address,
				yieldOpportunityId: position.integration_id,
				amount: exitAmountNum,
			});

			// 3. Check if all transactions succeeded
			if (successTxs.length === actionResponse.transactions.length) {
				toast({
					title: "Exit successful",
					description: `You have successfully exited ${exitAmount} from ${position.provider_name}`,
				});

				// Sync portfolio after successful exit
				if (address) {
					try {
						await fetch("/api/portfolio/sync", {
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({ wallet: address }),
						});
						// Refresh portfolio data
						queryClient.invalidateQueries({ queryKey: ["portfolio"] });
					} catch (syncError) {
						console.error("Error syncing portfolio:", syncError);
						// Continue with closing even if sync fails
					}
				}

				handleClose();
			}
		} catch (error) {
			toast({
				title: "Exit failed",
				description: error instanceof Error ? error.message : "There was an error processing your exit",
				variant: "destructive",
			});
		} finally {
			setIsExiting(false);
		}
	}, [address, exitAmount, isConnected, processTransactions, toast, position.integration_id, position.provider_name, handleSwitchChain, needsChainSwitch, handleClose, queryClient]);

	// Calculate remaining after exit
	const remainingAmount = maxAmount - Number.parseFloat(exitAmount || "0");
	const exitPercentage = (Number.parseFloat(exitAmount || "0") / maxAmount) * 100;

	return (
		<Dialog open={isOpen} onOpenChange={handleClose}>
			<DialogContent className="sm:max-w-lg bg-cream-100 border-2 border-gray-900 rounded-xl shadow-lg">
				<DialogHeader className="space-y-3">
					<DialogTitle className="text-2xl font-bold text-gray-900">Exit from {position.provider_name || "Yield Position"}</DialogTitle>
					<div className="flex items-center gap-3">
						<div className="h-10 w-10 rounded-full bg-yellow-300 flex items-center justify-center border-2 border-gray-900">
							<span className="font-bold text-gray-900">{position.token_symbol?.substring(0, 1) || "T"}</span>
						</div>
						<div className="space-y-1">
							<div className="flex items-center gap-2">
								<div className="font-bold text-lg text-gray-900">{position.provider_name || "Provider"}</div>
								<Badge
									variant="outline"
									className={`${getChainColor(position.network || "ethereum")} bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full border border-blue-300`}
								>
									{position.network || "Ethereum"}
								</Badge>
							</div>
							<div className="text-xl font-bold text-orange-500">{formatPercentage(position.apy)} APY</div>
						</div>
					</div>
				</DialogHeader>

				<div className="grid gap-6 py-6">
					<div className="bg-white rounded-lg p-4 border-2 border-gray-900 shadow-sm">
						<div className="flex items-center justify-between">
							<Label className="text-gray-900 font-medium">Current Position</Label>
							<span className="font-bold text-gray-900">{`${maxAmount.toFixed(6)} ${position.token_symbol || "TKN"}`}</span>
						</div>
					</div>

					<div className="bg-white rounded-lg p-4 border-2 border-gray-900 shadow-sm space-y-4">
						<div className="flex items-center justify-between">
							<Label htmlFor="amount" className="text-gray-900 font-medium">
								Exit Amount
							</Label>
							<Button variant="outline" size="sm" onClick={handleMaxClick} className="h-7 text-xs bg-orange-100 border-orange-300 text-orange-800 hover:bg-orange-200 font-medium">
								MAX
							</Button>
						</div>
						<div className="flex items-center gap-3">
							<Input
								id="amount"
								type="text"
								value={exitAmount}
								onChange={handleAmountChange}
								placeholder="0.00"
								className="text-lg font-medium border-2 border-gray-900 rounded-lg focus:border-orange-500"
							/>
							<span className="font-bold min-w-16 text-right text-gray-900 text-lg">{position.token_symbol || "TKN"}</span>
						</div>
					</div>

					<div className="bg-white rounded-lg p-4 border-2 border-gray-900 shadow-sm space-y-3">
						<Label className="text-gray-900 font-medium">Percentage of Position</Label>
						<div className="space-y-2">
							<div className="flex justify-between text-sm font-medium text-gray-700">
								<span>0%</span>
								<span>50%</span>
								<span>100%</span>
							</div>
							<Slider value={[percentage]} max={100} step={1} onValueChange={handlePercentageChange} className="w-full" />
							<div className="text-center">
								<span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium border border-orange-300">
									{percentage.toFixed(0)}% of position
								</span>
							</div>
						</div>
					</div>

					<div className="bg-cream-200 rounded-lg p-4 border-2 border-gray-900 shadow-sm space-y-3">
						<h3 className="font-bold text-gray-900 text-lg">Exit Summary</h3>
						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<span className="text-gray-700 font-medium">Amount to Withdraw</span>
								<span className="font-bold text-gray-900">
									{Number.parseFloat(exitAmount || "0").toFixed(4)} {position.token_symbol || "TKN"}
								</span>
							</div>
							<div className="flex items-center justify-between">
								<span className="text-gray-700 font-medium">Remaining Position</span>
								<span className="font-bold text-gray-900">
									{remainingAmount.toFixed(4)} {position.token_symbol || "TKN"}
								</span>
							</div>
							<div className="flex items-center justify-between border-t pt-2">
								<span className="text-gray-700 font-medium">Exit Percentage</span>
								<span className="font-bold text-orange-500 text-lg">{formatPercentage(exitPercentage)}</span>
							</div>
						</div>
					</div>
				</div>

				<DialogFooter className="flex gap-3 pt-6">
					<Button variant="outline" onClick={handleClose} disabled={isExiting} className="flex-1 border-2 border-gray-900 bg-white hover:bg-gray-50 text-gray-900 font-medium">
						Cancel
					</Button>
					<Button
						onClick={handleExit}
						disabled={isExiting || isSwitchingChain || !exitAmount || Number.parseFloat(exitAmount) <= 0}
						className="flex-1 bg-orange-500 hover:bg-orange-600 border-2 border-gray-900 text-white font-bold shadow-md"
					>
						{isSwitchingChain ? (
							<>
								<LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
								Switching Chain...
							</>
						) : needsChainSwitch ? (
							<>
								Switch to {position.network}
								<ArrowRightIcon className="ml-2 h-4 w-4" />
							</>
						) : isExiting ? (
							<>
								<LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
								<span className="truncate max-w-48">
									{progressMessage || "Executing exit..."}
									{totalTxCount > 0 && ` (${currentTxIndex + 1}/${totalTxCount})`}
									{totalTxs > 0 && ` (${confirmedCount}/${totalTxs} confirmed)`}
								</span>
							</>
						) : (
							<>
								Execute Exit
								<ArrowRightIcon className="ml-2 h-4 w-4" />
							</>
						)}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
