"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExitPositionModal } from "@/components/exit-position-modal";
import { useState } from "react";

interface YieldInfo {
	name: string;
	apy: number;
	tvl: number;
}

interface Props {
	wallet_address: string;
	yield_opportunity_id: string;
	on_chain_amount: string | number;
	usd_value_cached: string | number;
	entry_date: string;
	last_balance_sync: string | null;
	apy: number;
	yieldOpportunity: YieldInfo;
	token_symbol: string;
	provider_name: string;
	network: string;
}

export default function PositionCard({
	wallet_address,
	yield_opportunity_id,
	on_chain_amount,
	usd_value_cached,
	entry_date,
	last_balance_sync,
	apy,
	yieldOpportunity,
	token_symbol,
	provider_name,
	network,
}: Props) {
	const [showExitModal, setShowExitModal] = useState(false);

	// Create position object for the modal
	const position = {
		wallet_address,
		integration_id: yield_opportunity_id,
		yield_opportunity_id,
		amount: Number(on_chain_amount),
		entry_date,
		apy,
		last_balance_sync,
		network,
		provider_name,
		token_symbol,
	};

	return (
		<>
			<Card className="p-4 bg-cream-100 border-2 border-gray-900 shadow-md hover:shadow-lg transition-shadow">
				<CardContent className="space-y-3">
					<div className="flex items-center gap-3">
						<div className="h-10 w-10 rounded-full bg-yellow flex items-center justify-center border-2 border-navy shadow-sm">
							<span className="text-navy font-bold text-lg">{(yieldOpportunity?.name ?? "?").slice(0, 1).toUpperCase()}</span>
						</div>
						<div className="flex-1">
							<h3 className="font-bold text-navy text-lg">{yieldOpportunity.name}</h3>
						</div>
					</div>

					<div className="space-y-2">
						<div className="flex justify-between items-center">
							<span className="text-sm text-navy font-medium">USD Value</span>
							<span className="font-semibold text-navy">${Number(usd_value_cached).toFixed(2)}</span>
						</div>
						{/* <div className="flex justify-between items-center">
              <span className="text-sm text-navy font-medium">
                On-chain Amount
              </span>
              <span className="font-semibold text-navy">
                {Number(on_chain_amount).toFixed(2)}
              </span>
            </div> */}
						<div className="flex justify-between items-center">
							<span className="text-sm text-navy font-medium">Yield APY</span>
							<span className="font-bold text-orange">{apy.toFixed(2)}%</span>
						</div>
					</div>

					<div className="pt-2">
						<Button
							onClick={() => setShowExitModal(true)}
							aria-label={`Exit position in ${yieldOpportunity.name}`}
							className="w-full bg-orange-500 hover:bg-orange-600 text-white border-2 border-navy font-semibold"
						>
							Exit Position
						</Button>
					</div>
				</CardContent>
			</Card>

			<ExitPositionModal isOpen={showExitModal} handleClose={() => setShowExitModal(false)} position={position} />
		</>
	);
}
