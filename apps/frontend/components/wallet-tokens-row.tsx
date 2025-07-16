import React from "react";
import Image from "next/image";

interface WalletToken {
	symbol: string;
	amount: string;
	logoURI: string;
}

interface WalletTokensRowProps {
	chain: string;
	tokens: WalletToken[];
}

const DEFAULT_LOGO = "";

export type { WalletToken };

export default function WalletTokensRow({ chain, tokens }: WalletTokensRowProps) {
	if (!tokens || tokens.length === 0) return null;
	return (
		<div className="mb-4" data-testid={`wallet-row-${chain}`}>
			{" "}
			{/* test id for UI tests */}
			<div className="font-semibold mb-1 capitalize">{chain}</div>
			<div className="flex overflow-x-auto gap-3 pb-2">
				{tokens.map((token, i) => {
					let shortAmount = token.amount;
					const num = Number(token.amount);
					if (!isNaN(num)) shortAmount = num.toPrecision(4);
					return (
						<div key={token.symbol + i} className="flex flex-col items-center min-w-[72px] bg-white rounded shadow p-2">
							<Image src={token.logoURI || DEFAULT_LOGO} alt={token.symbol} width={32} height={32} className="w-8 h-8 rounded-full" />
							<div className="text-xs font-medium">{token.symbol}</div>
							<div className="text-xs text-gray-500 truncate max-w-[60px]" title={token.amount}>
								{shortAmount}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
