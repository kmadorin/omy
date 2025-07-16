import React from "react";

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
							<img
								src={token.logoURI || DEFAULT_LOGO}
								alt={token.symbol}
								className="w-8 h-8 mb-1 object-contain bg-gray-100 rounded-full"
								onError={(e) => (e.currentTarget.src = DEFAULT_LOGO)}
							/>
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
