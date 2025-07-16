"use client";

import { useQuery } from "@tanstack/react-query";
import { useAccount } from "wagmi";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

// Define WalletToken type for allTokens and use it instead of 'any' or 'unknown'.
// Replace all (token as any) with proper type assertion or destructuring.
type WalletToken = {
	symbol: string;
	network: string;
	amount: string;
	price: number;
	amountUSD: number;
	logoURI?: string;
	name?: string;
};

export default function WalletPortfolio() {
	const { address: wallet } = useAccount();
	const { data, isLoading, error } = useQuery({
		queryKey: ["walletTokens", wallet],
		queryFn: async () => {
			if (!wallet) return null;
			const url = `/api/portfolio/wallet?wallet=${wallet}`;
			const res = await fetch(url);
			if (!res.ok) throw new Error(await res.text());
			return res.json();
		},
		staleTime: 30_000,
		enabled: !!wallet,
	});

	if (!wallet) {
		return null;
	}

	// Use the tokens directly from the API response
	const allTokens: WalletToken[] = data?.tokens || [];

	return (
		<div className="space-y-6">
			<h2 className="text-4xl font-bold text-center text-gray-900">Wallet Holdings</h2>
			<div className="w-full max-w-4xl mx-auto">
				<Card className="bg-cream-100 border-2 border-gray-900 shadow-md">
					<CardContent>
						{isLoading && null /* Loading is handled at page level */}

						{error && <div className="text-red-500 text-center py-4">{(error as unknown as { message?: string }).message}</div>}

						{!isLoading && !error && allTokens.length === 0 && (
							<div className="text-center py-8">
								<p className="text-navy">No tokens found in wallet.</p>
							</div>
						)}

						{!isLoading && !error && allTokens.length > 0 && (
							<div className="overflow-x-auto">
								<table className="w-full">
									<thead>
										<tr className="border-b border-gray-300">
											<th className="text-left py-3 px-4 font-semibold text-navy">Token</th>
											<th className="text-right py-3 px-4 font-semibold text-navy">Price</th>
											<th className="text-right py-3 px-4 font-semibold text-navy">Amount</th>
											<th className="text-right py-3 px-4 font-semibold text-navy">USD Value</th>
											<th className="text-left py-3 px-4 font-semibold text-navy">Chain</th>
										</tr>
									</thead>
									<tbody>
										{allTokens.map((token: WalletToken, index: number) => {
											const amount = parseFloat(token.amount);

											return (
												<tr key={`${token.symbol}-${token.network}-${index}`} className="border-b border-gray-200 hover:bg-cream-200/50">
													<td className="py-4 px-4">
														<div className="flex items-center space-x-3">
															{token.logoURI ? (
																<Image
																	src={token.logoURI}
																	alt={token.symbol}
																	width={32}
																	height={32}
																	className="rounded-full"
																	onError={(e) => {
																		(e.target as HTMLImageElement).src = "/placeholder-token.svg";
																	}}
																/>
															) : (
																<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
																	<span className="text-xs font-bold text-gray-600">{token.symbol?.charAt(0) || "?"}</span>
																</div>
															)}
															<div>
																<div className="font-medium text-navy">{token.name || token.symbol}</div>
																<div className="text-sm text-navy/70">{token.symbol}</div>
															</div>
														</div>
													</td>
													<td className="text-right py-4 px-4 text-navy">
														$
														{token.price.toLocaleString(undefined, {
															minimumFractionDigits: 2,
															maximumFractionDigits: 6,
														})}
													</td>
													<td className="text-right py-4 px-4 text-navy">
														{amount.toLocaleString(undefined, {
															minimumFractionDigits: 2,
															maximumFractionDigits: 6,
														})}
													</td>
													<td className="text-right py-4 px-4 text-navy">
														$
														{token.amountUSD.toLocaleString(undefined, {
															minimumFractionDigits: 2,
															maximumFractionDigits: 6,
														})}
													</td>
													<td className="py-4 px-4">
														<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue/20 text-navy">{token.network}</span>
													</td>
												</tr>
											);
										})}
									</tbody>
								</table>
							</div>
						)}
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
