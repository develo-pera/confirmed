"use client";

import { ThemeProvider } from "./theme-provider";
import PrivyProviderWrapper from "./privy-provider";
import { AuthProvider } from "./auth-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <PrivyProviderWrapper>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </AuthProvider>
      </PrivyProviderWrapper>
    </ThemeProvider >
  );
}