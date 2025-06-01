import Link from "next/link";
import ConnectWallet from "@/components/connect-wallet";
export function Header() {
  return (
    <header className="container mx-auto py-4">
      <div className="flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-bold text-gray-900 uppercase">
            OhMyYield
          </span>
        </Link>
        <ConnectWallet />
      </div>
    </header>
  );
}
