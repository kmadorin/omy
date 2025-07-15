"use client";

import { useAccount } from "wagmi";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import type { PortfolioPosition } from "@/lib/portfolio-types";
import { Card, CardContent } from "@/components/ui/card";
import PositionCard from "@/components/position-card";

interface SummaryData {
  totalUsd: number;
  avgApy: number;
}

interface PortfolioData {
  yield_opportunity_id: string;
  principal_sum: string | number;
  on_chain_amount: string | number;
  usd_value_cached: string | number;
  entry_date: string;
  last_balance_sync: string | null;
  wallet_address: string;
  apy: number;
  yieldOpportunity: {
    name: string;
    apy: number;
    tvl: number;
  };
  token_symbol?: string;
  provider_name?: string;
  network: string;
}

function fetcher(url: string) {
  return fetch(url).then((r) => r.json());
}

function SummaryCard({ totalUsd, avgApy }: SummaryData) {
  return (
    <Card className="p-4 bg-cream">
      <CardContent className="space-y-1">
        <div className="text-sm text-navy">Total Value</div>
        <div className="text-2xl font-bold text-navy">
          ${totalUsd.toFixed(2)}
        </div>
        <div className="text-sm text-navy">Avg APY {avgApy.toFixed(2)}%</div>
      </CardContent>
    </Card>
  );
}

function fetchPortfolio(wallet: string): Promise<PortfolioData[]> {
  return fetch(`/api/portfolio?wallet=${wallet}`).then((r) => r.json());
}

function syncPortfolio(wallet: string) {
  return fetch(`/api/portfolio/sync`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ wallet }),
  });
}

export default function PortfolioClient() {
  const { address: wallet } = useAccount();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery<PortfolioData[]>({
    queryKey: ["portfolio", wallet] as const,
    queryFn: () => fetchPortfolio(wallet!),
    enabled: !!wallet,
    staleTime: 30_000,
  });

  const mutation = useMutation({
    mutationFn: () => syncPortfolio(wallet!),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["portfolio"] }),
  });

  useEffect(() => {
    if (wallet) mutation.mutate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet]);

  if (!wallet) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <Card className="p-8 bg-cream-100 border-2 border-gray-900 shadow-md">
          <CardContent className="text-center">
            <p className="text-navy">
              Connect your wallet to view your portfolio.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isLoading || !data) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin h-8 w-8 border-4 border-orange border-t-transparent rounded-full"></div>
        <span className="ml-3 text-navy font-medium">Loading portfolio...</span>
      </div>
    );
  }

  const totalUsd = data.reduce(
    (sum: number, p: PortfolioData) => sum + (Number(p.usd_value_cached) || 0),
    0,
  );
  const totalOnChain = data.reduce(
    (sum: number, p: PortfolioData) => sum + (Number(p.on_chain_amount) || 0),
    0,
  );
  const avgApy =
    data.length > 0
      ? data.reduce((sum: number, p: PortfolioData) => sum + (p.apy || 0), 0) /
        data.length
      : 0;

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-center text-gray-900">
        Your Portfolio
      </h1>

      <div className="w-full max-w-4xl mx-auto">
        <Card className="p-6 bg-cream-100 border-2 border-gray-900 shadow-md">
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-sm text-navy font-medium">Total Value</div>
                <div className="text-3xl font-bold text-navy">
                  ${totalUsd.toFixed(2)}
                </div>
              </div>
              <div>
                <div className="text-sm text-navy font-medium">
                  On-chain Amount
                </div>
                <div className="text-2xl font-bold text-navy">
                  {totalOnChain.toFixed(2)}
                </div>
              </div>
              <div>
                <div className="text-sm text-navy font-medium">Average APY</div>
                <div className="text-2xl font-bold text-navy">
                  {(avgApy * 100).toFixed(2)}%
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {data.length === 0 ? (
        <div className="w-full max-w-4xl mx-auto text-center">
          <Card className="p-8 bg-cream-100 border-2 border-gray-900 shadow-md">
            <CardContent>
              <p className="text-navy">
                No active positions found. Start exploring yield opportunities!
              </p>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((p: PortfolioData, i: number) => (
            <PositionCard
              key={p.yield_opportunity_id + "-" + i}
              wallet_address={p.wallet_address}
              yield_opportunity_id={p.yield_opportunity_id}
              principal_sum={p.principal_sum}
              on_chain_amount={p.on_chain_amount}
              usd_value_cached={p.usd_value_cached}
              entry_date={p.entry_date}
              last_balance_sync={p.last_balance_sync}
              apy={p.apy * 100}
              yieldOpportunity={p.yieldOpportunity}
              token_symbol="USDC" // Need to determine this from yield opportunity
              provider_name={p.yieldOpportunity.name}
              network={p.network} // Need to determine this from API data
            />
          ))}
        </div>
      )}
    </div>
  );
}
