import { POST } from '../app/api/transactions/route';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('../lib/prisma', () => {
  const create = vi.fn();
  const findUnique = vi.fn();
  const positionCreate = vi.fn();
  const positionUpdate = vi.fn();
  const oppFind = vi.fn();
  return {
    prisma: {
      portfolioTransaction: { create },
      portfolioPosition: { findUnique, create: positionCreate, update: positionUpdate },
      yieldOpportunity: { findUnique: oppFind }
    }
  };
});

const { prisma } = await import('../lib/prisma');

describe('POST /api/transactions', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns 422 on validation error', async () => {
    const res = await POST(new Request('http://test', { method: 'POST', body: JSON.stringify({}) }));
    expect(res.status).toBe(422);
  });

  it('creates transaction and position', async () => {
    (prisma.portfolioPosition.findUnique as any).mockResolvedValue(null);
    (prisma.yieldOpportunity.findUnique as any).mockResolvedValue({ tokenSymbol: 'ETH', apy: 1 });

    const body = {
      walletAddress: '0xabc',
      integrationId: '1',
      yieldOpportunityId: 'y1',
      direction: 'ENTER',
      amount: '1',
      txHash: '0x1',
      executedAt: new Date().toISOString()
    };
    const res = await POST(new Request('http://test', { method: 'POST', body: JSON.stringify(body) }));
    expect(res.status).toBe(201);
    expect(prisma.portfolioTransaction.create).toHaveBeenCalled();
    expect(prisma.portfolioPosition.create).toHaveBeenCalled();
  });
});
