export interface YieldOpportunity {
  id: string;
  name: string;
  content?: string;
  apy: number;
  rewardType: string;
  type: string;
  network: string;
  tokenSymbol: string;
  tokenAddress?: string;
  providerId: string;
  providerName: string;
  protocol: string;
  asset: string;
  tvl: number;
  isAvailable: boolean;
  cooldownDays?: number;
  warmupDays?: number;
  withdrawDays?: number;
  canEnter: boolean;
  canExit: boolean;
  updatedAt: Date;
  createdAt: Date;
}

export interface StakeKitYieldResponse {
  data: YieldData[];
  hasNextPage: boolean;
  limit: number;
  page: number;
}

export interface YieldData {
  id: string;
  apy: number;
  rewardType: string;
  token: {
    network: string;
    name: string;
    symbol: string;
    address?: string;
    decimals: number;
    coinGeckoId: string;
    logoURI: string;
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
      description: string;
      externalLink: string;
      logoURI: string;
    };
  };
  status: {
    enter: boolean;
    exit: boolean;
  };
  isAvailable: boolean;
}

export interface PortfolioPosition {
  id: string;
  yieldOpportunityId: string;
  amount: number;
  category: string;
  entryDate: Date;
  lastModified: Date;
  currentApy: number;
  isActive: boolean;
  exitTxHash?: string;
  entryTxHash?: string;
  tokenAddress?: string;
  tokenSymbol: string;
}

export interface PortfolioRebalance {
  id: string;
  fromPositionId: string;
  toPositionId: string;
  amount: number;
  executedAt: Date;
  fromApy: number;
  toApy: number;
  gasCost: number;
  annualIncomeChange: number;
} 