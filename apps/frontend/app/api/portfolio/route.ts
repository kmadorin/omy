import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const wallet = searchParams.get('wallet');
  if (!wallet) {
    return NextResponse.json({ error: 'wallet is required' }, { status: 400 });
  }

  const positions = await prisma.portfolioPosition.findMany({
    where: { walletAddress: wallet, isActive: true }
  });

  // Get all unique integrationIds
  const integrationIds = [...new Set(positions.map(p => p.integrationId))];

  // Fetch yield opportunities for these integrationIds
  const opportunities = await prisma.yieldOpportunity.findMany({
    where: { id: { in: integrationIds } },
    select: { id: true, name: true, apy: true, tvl: true }
  });

  // Map for quick lookup
  const oppMap = Object.fromEntries(opportunities.map(o => [o.id, o]));

  // Merge
  const result = positions.map(p => ({
    integration_id: p.integrationId,
    amount: p.amount,
    entry_date: p.entryDate,
    last_balance_sync: p.lastBalanceSync,
    yield_opportunity_id: p.yieldOpportunityId,
    apy: p.currentApy,
    wallet_address: p.walletAddress,
    yieldOpportunity: oppMap[p.integrationId]
  }));

  return NextResponse.json(result);
}
