"use client";

import * as React from "react";
import { Connector, useConnect } from "wagmi";
import { Button } from "@/components/ui/button";

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
      className="bg-cream text-navy font-bold border-2 border-navy retro-shadow hover:bg-cream/90"
    >
      Connect Wallet
      {/* Connect with {connector.name} */}
    </Button>
  );
}
