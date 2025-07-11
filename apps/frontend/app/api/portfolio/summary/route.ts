import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Decimal } from '@prisma/client/runtime/library';

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
    select: { id: true, apy: true }
  });

  // Map for quick lookup
  const oppMap = Object.fromEntries(opportunities.map(o => [o.id, o]));

  let totalUsd = new Decimal(0);
  let weightedApy = new Decimal(0);
  let totalAmount = new Decimal(0);

  for (const p of positions) {
    const amount = new Decimal(p.amount);
    const usdVal = new Decimal((p as any).usdValue ?? 0);
    if (!(p as any).usdValue === null) {
      totalUsd = totalUsd.plus(usdVal);
    }
    const apy = oppMap[p.integrationId]?.apy ?? 0;
    weightedApy = weightedApy.plus(amount.times(apy));
    totalAmount = totalAmount.plus(amount);
  }

  const avgApy = totalAmount.eq(0)
    ? 0
    : weightedApy.div(totalAmount).toNumber();

  return NextResponse.json({ totalUsd: totalUsd.toNumber(), avgApy });
}
