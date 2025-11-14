"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import { useTheme } from "next-themes";

const PrivyProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
      // clientId="your-app-client-id"
      config={{
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          ethereum: {
            createOnLogin: "users-without-wallets"
          }
        },
        appearance: {
          theme: theme === "dark" ? "dark" : "light"
        }
      }}
    >
      {children}
    </PrivyProvider>
  );
}

export default PrivyProviderWrapper;