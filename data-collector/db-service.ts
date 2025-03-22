import { PrismaClient } from '@prisma/client';
import { YieldData } from './types';

export class DatabaseService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async upsertYields(yields: YieldData[]): Promise<void> {
    try {
      // Filter out invalid entries first
      const validYields = yields.filter(yieldData => {
        if (!yieldData) {
          console.error('Found undefined yield data entry');
          return false;
        }
        if (!yieldData.id || !yieldData.metadata || !yieldData.token) {
          console.error('Invalid yield data structure:', JSON.stringify(yieldData, null, 2));
          return false;
        }
        return true;
      });

      await Promise.all(
        validYields.map((yieldData) => {
          try {
            const mappedYield = {
              id: yieldData.id,
              name: yieldData.metadata?.name || 'Unknown',
              content: null,
              apy: yieldData.apy || 0,
              rewardType: yieldData.rewardType || 'unknown',
              type: yieldData.metadata?.type || 'unknown',
              network: yieldData.token?.network || 'unknown',
              tokenSymbol: yieldData.token?.symbol || 'unknown',
              tokenAddress: yieldData.token?.address,
              providerId: yieldData.metadata?.provider?.id || 'unknown',
              providerName: yieldData.metadata?.provider?.name || 'Unknown Provider',
              protocol: (yieldData.metadata?.provider?.name || 'unknown').toLowerCase(),
              asset: yieldData.token?.symbol || 'unknown',
              tvl: 0,
              isAvailable: !!yieldData.isAvailable,
              cooldownDays: yieldData.metadata?.cooldownPeriod?.days || null,
              warmupDays: yieldData.metadata?.warmupPeriod?.days || null,
              withdrawDays: yieldData.metadata?.withdrawPeriod?.days || null,
              canEnter: yieldData.status?.enter ?? true,
              canExit: yieldData.status?.exit ?? true,
              updatedAt: new Date(),
              createdAt: new Date(),
            };

            return this.prisma.yieldOpportunity.upsert({
              where: { id: yieldData.id },
              update: mappedYield,
              create: mappedYield,
            });
          } catch (err) {
            console.error('Error mapping yield data:', err);
            console.error('Problematic yield data:', JSON.stringify(yieldData, null, 2));
            return Promise.resolve(); // Skip this entry but continue with others
          }
        }).filter(Boolean) // Remove any undefined entries from failed mappings
      );
    } catch (error: any) {
      console.error('Failed yield data:', JSON.stringify(yields, null, 2));
      throw new Error(`Failed to upsert yields: ${error.message}`);
    }
  }

  async disconnect(): Promise<void> {
    await this.prisma.$disconnect();
  }
} 