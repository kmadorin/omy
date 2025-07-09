import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { Decimal } from '@prisma/client/runtime/library';
import { randomUUID } from 'crypto';

export const runtime = 'nodejs';

const BodySchema = z.object({
  walletAddress: z.string(),
  integrationId: z.string(),
  yieldOpportunityId: z.string(),
  direction: z.enum(['ENTER', 'EXIT', 'CORRECTION']),
  amount: z.union([z.string(), z.number()]),
  txHash: z.string(),
  executedAt: z.string()
});

export async function POST(request: Request) {
  const json = await request.json();
  const parsed = BodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.format() }, { status: 422 });
  }

  const data = parsed.data;
  const amount = new Decimal(data.amount);

  await prisma.portfolioTransaction.create({
    data: {
      walletAddress: data.walletAddress,
      integrationId: data.integrationId,
      yieldOpportunityId: data.yieldOpportunityId,
      direction: data.direction,
      amount,
      usdValue: null,
      txHash: data.txHash,
      executedAt: new Date(data.executedAt)
    }
  });

  const now = new Date();
  const existing = await prisma.portfolioPosition.findUnique({
    where: {
      walletAddress_integrationId: {
        walletAddress: data.walletAddress,
        integrationId: data.integrationId
      }
    }
  });

  if (!existing) {
    const opp = await prisma.yieldOpportunity.findUnique({
      where: { id: data.yieldOpportunityId },
      select: { tokenSymbol: true, apy: true }
    });
    await prisma.portfolioPosition.create({
      data: {
        id: randomUUID(),
        walletAddress: data.walletAddress,
        integrationId: data.integrationId,
        yieldOpportunityId: data.yieldOpportunityId,
        amount: amount.toNumber(),
        entryDate: new Date(data.executedAt),
        lastBalanceSync: now,
        currentApy: opp?.apy ?? 0,
        isActive: data.direction !== 'EXIT',
        entryTxHash: data.txHash,
        tokenSymbol: opp?.tokenSymbol ?? ''
      }
    });
  } else {
    let newAmount = new Decimal(existing.amount);
    let isActive = existing.isActive;
    if (data.direction === 'ENTER') {
      newAmount = newAmount.plus(amount);
      isActive = true;
    } else if (data.direction === 'EXIT') {
      newAmount = newAmount.minus(amount);
      if (newAmount.lte(new Decimal('1e-18'))) {
        isActive = false;
      }
    } else if (data.direction === 'CORRECTION') {
      newAmount = amount;
    }

    await prisma.portfolioPosition.update({
      where: {
        walletAddress_integrationId: {
          walletAddress: data.walletAddress,
          integrationId: data.integrationId
        }
      },
      data: {
        amount: newAmount.toNumber(),
        isActive,
        lastBalanceSync: now
      }
    });
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
