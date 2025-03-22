import Link from "next/link"
import ConnectWallet from "@/components/connect-wallet"
export function Header() {
  return (
    <header className="container mx-auto py-4">
      <div className="flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-black text-navy">OhMyYield</h1>
        </Link>
        <ConnectWallet />
      </div>
    </header>
  )
} 