"use client";

import { ThemeProvider } from "./theme-provider";
import PrivyProviderWrapper from "./privy-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <PrivyProviderWrapper>
        {children}
      </PrivyProviderWrapper>
    </ThemeProvider >
  );
}