"use client";

import * as React from "react";
import { Connector, useConnect } from "wagmi";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

export function WalletOptions() {
  const { connectors, connect } = useConnect();

  if (connectors.length === 0) {
    return null;
  }

  const connector =
    connectors.filter((c) => c.icon !== undefined)[0] || connectors[0];

  return (
    <WalletOption
      key={connector.uid}
      connector={connector}
      onClick={() => connect({ connector })}
    />
  );

  // return connectors.map((connector) => (
  //   <WalletOption
  //     key={connector.uid}
  //     connector={connector}
  //     onClick={() => connect({ connector })}
  //   />
  // ));
}

function WalletOption({
  connector,
  onClick,
}: {
  connector: Connector;
  onClick: () => void;
}) {
  const handleClick = async () => {
    const provider = await connector.getProvider();
    if (provider) {
      onClick();
    }
  };

  return (
    <Button
      onClick={handleClick}
      className="bg-white text-gray-900 hover:bg-gray-100 font-semibold border border-gray-900 shadow-md"
    >
      <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
      {/* Connect with {connector.name} */}
    </Button>
  );
}
