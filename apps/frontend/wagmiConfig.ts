import { http, createConfig } from "@wagmi/core";
import { createStorage, cookieStorage } from "wagmi";
import {
  base,
  mainnet,
  optimism,
  arbitrum,
  polygon,
  sepolia,
} from "@wagmi/core/chains";
import { injected } from "@wagmi/connectors";

export function getConfig() {
  return createConfig({
    chains: [mainnet, base, optimism, arbitrum, polygon, sepolia],
    connectors: [injected()],
    ssr: true,
    storage: createStorage({
      storage: cookieStorage,
    }),
    transports: {
      [mainnet.id]: http(),
      [base.id]: http(),
      [optimism.id]: http(),
      [arbitrum.id]: http(),
      [polygon.id]: http(),
      [sepolia.id]: http(),
    },
  });
}
