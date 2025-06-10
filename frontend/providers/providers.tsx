"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode, useState } from "react";
import { WagmiProvider, State } from "wagmi";
import { StakeKitApiClient } from "@stakekit/api-hooks";
import { getConfig } from "../wagmiConfig";

type Props = {
  children: ReactNode;
  initialState?: State | undefined;
};

const STAKEKIT_API_KEY = process.env.NEXT_PUBLIC_STAKEKIT_API_KEY;
const STAKEKIT_API_BASE_URL = process.env.NEXT_PUBLIC_STAKEKIT_API_BASE_URL;

if (!STAKEKIT_API_KEY || !STAKEKIT_API_BASE_URL) {
  throw new Error(
    "StakeKit API key and base URL must be set in environment variables",
  );
}

StakeKitApiClient.configure({
  apiKey: STAKEKIT_API_KEY || "",
  baseURL: STAKEKIT_API_BASE_URL,
});

export function Providers({ children, initialState }: Props) {
  const [config] = useState(() => getConfig());
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
