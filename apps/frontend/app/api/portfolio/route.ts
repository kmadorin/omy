import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const wallet = searchParams.get("wallet");
  if (!wallet) {
    return NextResponse.json({ error: "wallet is required" }, { status: 400 });
  }

  const positions = await prisma.portfolioPosition.findMany({
    where: { walletAddress: wallet, isActive: true },
  });

  // Get all unique yieldOpportunityIds
  const yieldOpportunityIds = [
    ...new Set(positions.map((p) => p.yieldOpportunityId)),
  ];

  // Fetch yield opportunities for these ids
  const opportunities = await prisma.yieldOpportunity.findMany({
    where: { id: { in: yieldOpportunityIds } },
    select: {
      id: true,
      name: true,
      apy: true,
      tvl: true,
      tokenSymbol: true,
      providerName: true,
      network: true,
    },
  });

  // Map for quick lookup
  const oppMap = Object.fromEntries(opportunities.map((o) => [o.id, o]));

  // Merge
  const result = positions.map((p) => ({
    yield_opportunity_id: p.yieldOpportunityId,
    principal_sum: p.principalSum,
    on_chain_amount: p.onChainAmount,
    usd_value_cached: p.usdValueCached,
    entry_date: p.entryDate,
    last_balance_sync: p.lastBalanceSync,
    wallet_address: p.walletAddress,
    apy: oppMap[p.yieldOpportunityId]?.apy,
    network: oppMap[p.yieldOpportunityId].network,
    token_symbol: oppMap[p.yieldOpportunityId]?.tokenSymbol,
    provider_name: oppMap[p.yieldOpportunityId]?.providerName,
    yieldOpportunity: oppMap[p.yieldOpportunityId],
  }));

  return NextResponse.json(result);
}
