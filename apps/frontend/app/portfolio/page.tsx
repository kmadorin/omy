"use client";

import PortfolioClient from "@/components/portfolio-client";
import WalletPortfolio from "../../components/wallet-portfolio";
import { useAccount } from "wagmi";
import { useQuery } from "@tanstack/react-query";

export const runtime = "edge";

export default function PortfolioPage() {
	const { address: wallet } = useAccount();

	// Query for portfolio data to track loading state
	const portfolioQuery = useQuery({
		queryKey: ["portfolio", wallet],
		queryFn: () => fetch(`/api/portfolio?wallet=${wallet}`).then((r) => r.json()),
		enabled: !!wallet,
		staleTime: 30_000,
	});

	// Query for wallet tokens to track loading state
	const walletQuery = useQuery({
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
		return <div className="w-full max-w-6xl mx-auto px-4 py-8">Connect your wallet to view portfolio and tokens.</div>;
	}

	// Show unified loading state when either component is loading
	const isLoading = portfolioQuery.isLoading || walletQuery.isLoading;

	if (isLoading) {
		return (
			<div className="w-full max-w-6xl mx-auto px-4 py-8">
				<div className="flex items-center justify-center py-16">
					<div className="animate-spin h-8 w-8 border-4 border-orange border-t-transparent rounded-full"></div>
					<span className="ml-3 text-navy font-medium text-lg">Loading portfolio...</span>
				</div>
			</div>
		);
	}

	return (
		<div className="w-full max-w-6xl mx-auto px-4 py-8 space-y-8">
			<PortfolioClient />
			<WalletPortfolio />
		</div>
	);
}
