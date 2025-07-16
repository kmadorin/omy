// See WALLET_TOKENS_IMPLEMENTATION_PLAN.md for full requirements and API contract
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// API response types for Wallet Tokens
export interface WalletToken {
	symbol: string;
	amount: string;
	logoURI: string;
	price: number;
	amountUSD: number;
}
export interface WalletTokensByChain {
	network: string;
	tokens: WalletToken[];
}
export interface WalletTokensApiResponse {
	wallet: string;
	chains: WalletTokensByChain[];
}

// StakeKit API types
interface StakeKitToken {
	network: string;
	tokenAddress?: string;
}

interface StakeKitBalance {
	token: {
		network: string;
		address?: string;
		symbol: string;
		logoURI?: string;
		decimals?: number;
		name: string;
	};
	amount: string;
}

interface PriceRequestToken {
	network: string;
	symbol: string;
	name: string;
	decimals: number;
	address?: string;
}

interface PriceResponse {
	[key: string]: {
		price: number;
		price_24_h: number;
	};
}

// Requires process.env.STAKEKIT_API_KEY
const SUPPORTED_CHAINS = ["ethereum", "polygon", "base", "arbitrum", "optimism"] as const;

type SupportedChain = (typeof SUPPORTED_CHAINS)[number];

const STAKEKIT_API = "https://api.stakek.it/v1/tokens/balances";
const STAKEKIT_PRICES_API = "https://api.stakek.it/v1/tokens/prices";
const DEFAULT_LOGO = "/placeholder-token.svg";

function isValidAddress(addr: string): addr is `0x${string}` {
	return /^0x[a-fA-F0-9]{40}$/.test(addr);
}

function isSupportedChain(chain: string): chain is SupportedChain {
	return SUPPORTED_CHAINS.includes(chain as SupportedChain);
}

async function fetchTokenPrices(tokens: PriceRequestToken[]): Promise<PriceResponse> {
	if (tokens.length === 0) {
		return {};
	}

	console.log("Tokens being sent for price fetching:", tokens);

	try {
		const response = await fetch(STAKEKIT_PRICES_API, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"X-API-KEY": process.env.NEXT_PUBLIC_STAKEKIT_API_KEY!,
				accept: "application/json",
			},
			body: JSON.stringify({
				currency: "usd",
				tokenList: tokens,
			}),
		});

		if (!response.ok) {
			console.error("StakeKit prices API error:", await response.text());
			return {};
		}

		const data = await response.json();
		console.log("Prices received from StakeKit:", data);
		return data;
	} catch (error) {
		console.error("Error fetching token prices:", error);
		return {};
	}
}

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const wallet = searchParams.get("wallet");

	if (!wallet || !isValidAddress(wallet)) {
		return NextResponse.json(
			{
				error: "Missing or invalid wallet address",
				testId: "wallet-error-invalid",
			},
			{ status: 400 }
		);
	}

	// Always include native token for each supported chain
	const nativeTokenRequests = SUPPORTED_CHAINS.map((chain) => ({
		network: chain,
		address: wallet,
	}));

	// Get all unique (network, tokenAddress) pairs from YieldOpportunity for supported chains
	let tokens;
	try {
		tokens = await prisma.yieldOpportunity.findMany({
			where: { network: { in: [...SUPPORTED_CHAINS] }, tokenAddress: { not: null } },
			select: {
				network: true,
				tokenAddress: true,
				tokenSymbol: true,
			},
			distinct: ["network", "tokenAddress"],
		});
	} catch (e) {
		return NextResponse.json({ error: "DB error", testId: "wallet-error-db" }, { status: 500 });
	}

	const erc20Requests = tokens.map((t) => ({
		network: t.network,
		address: wallet,
		tokenAddress: t.tokenAddress!,
	}));
	const addresses = [...nativeTokenRequests, ...erc20Requests];

	// Build StakeKit request body for balances
	const skReq = {
		wallet,
		tokens: addresses.map((t) => {
			const baseToken = { network: t.network };
			if ("tokenAddress" in t && t.tokenAddress) {
				return { ...baseToken, tokenAddress: t.tokenAddress };
			}
			return baseToken;
		}),
	};

	// Call StakeKit for balances
	let skRes;
	try {
		skRes = await fetch(STAKEKIT_API, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-api-key": process.env.NEXT_PUBLIC_STAKEKIT_API_KEY!,
			},
			body: JSON.stringify({ addresses }),
		});
		if (skRes.status === 429) {
			return NextResponse.json(
				{
					error: "Rate limited by upstream provider, please try again later.",
					testId: "wallet-error-rate-limit",
				},
				{ status: 429 }
			);
		}
		if (!skRes.ok) {
			const errText = await skRes.text();
			console.error("StakeKit API error:", errText);
			return NextResponse.json({ error: "StakeKit API error", testId: "wallet-error-stakekit" }, { status: 502 });
		}
	} catch (e) {
		return NextResponse.json({ error: "Failed to fetch from StakeKit", testId: "wallet-error-fetch" }, { status: 502 });
	}

	let skData;
	try {
		skData = await skRes.json();
	} catch (e) {
		return NextResponse.json(
			{
				error: "Invalid StakeKit response",
				testId: "wallet-error-invalid-response",
			},
			{ status: 502 }
		);
	}

	// Prepare tokens for price fetching
	const balances = (skData as StakeKitBalance[]) || [];
	const tokensWithBalance = balances.filter((t) => t.amount && Number(t.amount) > 0);

	const priceRequestTokens: PriceRequestToken[] = tokensWithBalance.map((t) => {
		const token: PriceRequestToken = {
			network: t.token.network,
			symbol: t.token.symbol,
			name: t.token.name || t.token.symbol,
			decimals: t.token.decimals || 18,
		};
		if (t.token.address && t.token.address !== "") {
			token.address = t.token.address;
		}
		return token;
	});

	// Fetch prices
	const prices = await fetchTokenPrices(priceRequestTokens);

	// Combine all tokens, add prices and USD amounts
	const allTokens = tokensWithBalance.reduce((acc, t) => {
		const chain = t.token?.network;
		const meta = tokens.find((meta) => meta.network === chain && (meta.tokenAddress || "").toLowerCase() === (t.token?.address || "").toLowerCase());

		const symbol = t.token?.symbol || meta?.tokenSymbol || "";
		const decimals = t.token?.decimals || 18;
		const name = t.token?.name || symbol;
		const address = t.token?.address || "";

		// Create price key
		const priceKey = address ? `${chain}-${address.toLowerCase()}` : `${chain}-undefined`;
		const price = prices[priceKey]?.price || 0;

		console.log(`Price for ${symbol} (${priceKey}):`, price);

		// Calculate USD amount
		const amountNum = Number(t.amount);
		const amountUSD = amountNum * price;

		console.log(`Amount USD for ${symbol}:`, amountUSD);

		// Check if token already exists in accumulator
		const existingToken = acc.find((token) => token.symbol === symbol && token.network === chain);
		if (existingToken) {
			// If token exists, update its amount and amountUSD
			existingToken.amount = (Number(existingToken.amount) + Number(t.amount)).toString();
			existingToken.amountUSD += amountUSD;
		} else {
			// If token doesn't exist, add it to accumulator
			acc.push({
				symbol,
				amount: t.amount,
				logoURI: t.token?.logoURI || DEFAULT_LOGO,
				price,
				amountUSD,
				network: chain,
			});
		}

		return acc;
	}, [] as (WalletToken & { network: string })[]);

	// Sort all tokens by amountUSD in descending order
	allTokens.sort((a, b) => b.amountUSD - a.amountUSD);

	return NextResponse.json({ wallet, tokens: allTokens });
}
