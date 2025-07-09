"use client";

import Link from "next/link";
import ConnectWallet from "@/components/connect-wallet";
import { useAccount } from "wagmi";

export function Header() {
  const { isConnected } = useAccount();
  const showPortfolio =
    process.env.NEXT_PUBLIC_FEATURE_PORTFOLIO_V1 === "on" && isConnected;

  return (
    <header className="container mx-auto py-4">
      <div className="flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-bold text-gray-900 uppercase">
            OhMyYield
          </span>
        </Link>
        <div className="flex items-center gap-4">
          {showPortfolio && (
            <Link href="/portfolio" className="font-semibold text-navy">
              Portfolio
            </Link>
          )}
          <ConnectWallet />
        </div>
      </div>
    </header>
  );
}
