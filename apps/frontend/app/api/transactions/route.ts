import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { Decimal } from '@prisma/client/runtime/library';
import { randomUUID } from 'crypto';

export const runtime = 'nodejs';

const BodySchema = z.object({
  walletAddress: z.string(),
  yieldOpportunityId: z.string(),
  direction: z.enum(['ENTER', 'EXIT', 'CORRECTION']),
  amount: z.union([z.string(), z.number()]),
  txHash: z.string(),
  executedAt: z.string(),
});

export async function POST(request: Request) {
  const json = await request.json();
  console.log("json", json);
  const parsed = BodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.format() }, { status: 422 });
  }

  const data = parsed.data;
  const amount = new Decimal(data.amount);

  await prisma.portfolioTransaction.create({
    data: {
      walletAddress: data.walletAddress,
      yieldOpportunityId: data.yieldOpportunityId,
      direction: data.direction,
      amount,
      txHash: data.txHash,
      executedAt: new Date(data.executedAt),
    }
  });

  return NextResponse.json({ success: true }, { status: 201 });
}
