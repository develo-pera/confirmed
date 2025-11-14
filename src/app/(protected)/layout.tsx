"use client";

import { usePrivy } from "@privy-io/react-auth";
import { redirect } from "next/navigation";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const { authenticated, ready } = usePrivy();

  if (!ready) {
    return <div>Loading...</div>;
  }

  if (!authenticated) {
    redirect("/");
  }

  return children;
}

export default ProtectedLayout;