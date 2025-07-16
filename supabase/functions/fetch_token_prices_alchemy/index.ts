// supabase/functions/fetch_token_price_alchemy/index.ts
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import axios from "https://esm.sh/axios@1";

type TokenRow = {
	network: string;
	symbol: string;
	name: string | null;
	decimals: number | null;
	address: string | null;
};

type AlchemyPriceItem = {
	network: string;
	address: string;
	prices: { currency: string; value: string; lastUpdatedAt: string }[];
	error?: { message: string };
};

serve(async () => {
	/* ── 0 — env & Supabase client ──────────────────────────────────────────*/
	const env = Deno.env.toObject();
	const sb = createClient(env.SUPABASE_URL!, env.SUPABASE_SERVICE_ROLE_KEY!, {
		auth: { persistSession: false },
	});

	/* ── 1 — Select tokens with "stale" prices ───────────────────────────*/
	const cutoff = new Date(Date.now() - 15 * 60_000).toISOString();
	const { data: tokens, error: selErr } = await sb.from("token_price").select("*").or(`price_usd.is.null,fetched_at.is.null,fetched_at.lt.${cutoff}`);

	if (selErr) throw selErr;
	if (!tokens?.length) return new Response("fresh");

	/* ── 2 — Form a list of addresses for Alchemy --------------------------*/
	const addressList = (tokens as TokenRow[])
		.filter((t) => t.address) // Alchemy требует адрес
		.map((t) => ({
			network: toAlchemyNetwork(t.network),
			address: t.address!.toLowerCase(),
		}));

	if (!addressList.length) return new Response("no-addresses");

	/* ── 3 — Request to Alchemy ------------------------------------------------*/
	const base = (env.ALCHEMY_PRICE_URL ?? "https://api.g.alchemy.com").replace(/\/+$/, "");
	const apiKey = env.ALCHEMY_API_KEY!;
	const url = `${base}/prices/v1/${apiKey}/tokens/by-address`;

	const { data } = await axios.post<{ data: AlchemyPriceItem[] }>(url, {
		addresses: addressList,
	});

	/* ── 4 — Collecting address → price_usd map ----------------------------*/
	const priceMap: Record<string, number | null> = {};
	for (const item of data.data) {
		if (item.error || !item.prices.length) {
			priceMap[item.address.toLowerCase()] = null;
			continue;
		}
		const usd = item.prices.find((p) => p.currency.toLowerCase() === "usd");
		priceMap[item.address.toLowerCase()] = usd ? parseFloat(usd.value) : null;
	}

	/* ── 5 — Preparing upsert -------------------------------------------------*/
	const now = new Date().toISOString();
	const upserts = (tokens as TokenRow[]).map((t) => ({
		network: t.network,
		symbol: t.symbol,
		name: t.name,
		decimals: t.decimals,
		address: (t.address ?? "").toLowerCase(),
		price_usd: priceMap[(t.address ?? "").toLowerCase()] ?? null,
		fetched_at: now,
	}));

	const { error: upsertErr } = await sb.from("token_price").upsert(upserts, { onConflict: "network,address" });

	if (upsertErr) throw upsertErr;

	return new Response("updated");
});

/* ─────────────────────────────────────────────────────────────────────────*/
/** Convert network name to Alchemy API format. */
function toAlchemyNetwork(net: string): string {
	if (net === "ethereum") return "eth-mainnet";
	return net.endsWith("-mainnet") ? net : `${net}-mainnet`;
}
