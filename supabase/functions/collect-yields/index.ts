import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

interface StakeKitYieldResponse {
  data: YieldData[];
  hasNextPage: boolean;
  limit: number;
  page: number;
}

interface RewardToken {
  name: string;
  symbol: string;
  address: string;
  decimals: number;
  network: string;
  logoURI?: string;
}

interface YieldData {
  id: string;
  apy: number;
  rewardType: string;
  token: {
    network: string;
    name: string;
    symbol: string;
    address?: string;
  };
  metadata: {
    name: string;
    type: string;
    cooldownPeriod?: { days: number };
    warmupPeriod?: { days: number };
    withdrawPeriod?: { days: number };
    provider: {
      id: string;
      name: string;
    };
    rewardTokens?: RewardToken[];
  };
  status?: {
    enter?: boolean;
    exit?: boolean;
  };
  isAvailable: boolean;
}

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

async function fetchYields(
  apiKey: string,
  baseUrl: string,
  page: number,
): Promise<StakeKitYieldResponse> {
  const url = `${baseUrl.replace(/\/+$/, "")}/v2/yields?page=${page}&limit=100`;
  const res = await fetch(url, {
    headers: { "X-API-KEY": apiKey },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch yields: ${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<StakeKitYieldResponse>;
}

function mapYield(yieldData: YieldData) {
  const providerName = yieldData.metadata?.provider?.name || "unknown";

  // Extract reward token data from first element if available
  const firstRewardToken = yieldData.metadata?.rewardTokens?.[0];

  return {
    id: yieldData.id,
    name: yieldData.metadata?.name ?? "Unknown",
    content: null,
    apy: yieldData.apy ?? 0,
    reward_type: yieldData.rewardType ?? "unknown",
    metadata_type: yieldData.metadata?.type ?? "unknown",
    token_network: yieldData.token?.network ?? "unknown",
    token_symbol: yieldData.token?.symbol ?? "unknown",
    token_address: yieldData.token?.address ?? null,
    provider_id: yieldData.metadata?.provider?.id ?? "unknown",
    provider_name: providerName,
    protocol: providerName.toLowerCase(),
    asset: yieldData.token?.symbol ?? "unknown",
    tvl: 0,
    is_available: yieldData.isAvailable ?? false,
    cooldown_days: yieldData.metadata?.cooldownPeriod?.days ?? null,
    warmup_days: yieldData.metadata?.warmupPeriod?.days ?? null,
    withdraw_days: yieldData.metadata?.withdrawPeriod?.days ?? null,
    can_enter: yieldData.status?.enter ?? true,
    can_exit: yieldData.status?.exit ?? true,

    // New reward token fields
    reward_token_symbol: firstRewardToken?.symbol ?? null,
    reward_token_address: firstRewardToken?.address ?? null,
    reward_token_name: firstRewardToken?.name ?? null,

    updated_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
  };
}

async function upsertYields(yields: YieldData[]) {
  const rows = yields.map(mapYield);
  const { error } = await supabase.from("YieldOpportunity").upsert(rows);
  if (error) throw error;
}

async function collect(): Promise<void> {
  const apiKey = Deno.env.get("STAKEKIT_API_KEY");
  const baseUrl = Deno.env.get("STAKEKIT_BASE_URL") ?? "https://api.stakek.it";

  if (!apiKey) throw new Error("STAKEKIT_API_KEY not set");

  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const res = await fetchYields(apiKey, baseUrl, page);
    await upsertYields(res.data);
    hasMore = res.hasNextPage;
    page += 1;
  }
}

serve(async () => {
  try {
    await collect();
    return new Response("ok");
  } catch (err) {
    console.error(err);
    return new Response("failed", { status: 500 });
  }
});
