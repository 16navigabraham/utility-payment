import { wagmiConnectors } from "./wagmiConnectors";
import { Chain, createClient, fallback, http } from "viem";
import { base } from "viem/chains";
import { createConfig } from "wagmi";

// Only support Base chain
const targetNetworks: Chain[] = [base];

export const enabledChains: [Chain] = [base];

export const wagmiConfig = createConfig({
  chains: enabledChains,
  connectors: wagmiConnectors,
  ssr: true,
  client({ chain }) {
    // Use public RPCs or your own endpoints
    let rpcFallbacks = [http()];

    // Example: Add your own custom RPC URLs here if needed
    // if (chain.id === base.id) rpcFallbacks = [http("https://base.public-rpc.com")];

    return createClient({
      chain,
      transport: fallback(rpcFallbacks),
      pollingInterval: 30000, // or your preferred value
    });
  },
});
