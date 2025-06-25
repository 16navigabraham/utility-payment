import { http, createConfig } from "wagmi";
import { base } from "wagmi/chains";
import { coinbaseWallet } from "wagmi/connectors";

export const cbWalletConnector = coinbaseWallet({
  appName: "WagmiCharge",
  preference: "smartWalletOnly",
});

export const config = createConfig({
  chains: [base],
  multiInjectedProviderDiscovery: false,
  connectors: [cbWalletConnector],
  ssr: true,
  transports: {
    [base.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
