import "@rainbow-me/rainbowkit/styles.css";
import { ThemeProvider } from "~~/components/ThemeProvider";
import "~~/styles/globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "WagmiCharge App",
  description: "Built with 🏗 Scaffold-ETH 2",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem>
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

export const dynamic = "force-dynamic";
