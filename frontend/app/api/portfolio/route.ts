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
    where: { walletAddress: wallet, isActive: true },
    include: { yieldOpportunity: { select: { apy: true, tvl: true } } }
  });

  const result = positions.map(p => ({
    integrationId: p.integrationId,
    amount: p.amount,
    usdValue: (p as any).usdValue ?? null,
    apy: p.yieldOpportunity.apy,
    tvl: p.yieldOpportunity.tvl,
    entryDate: p.entryDate,
    lastBalanceSync: p.lastBalanceSync
  }));

  return NextResponse.json(result);
}
