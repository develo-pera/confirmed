"use client";

import { usePrivy } from "@privy-io/react-auth";
import Link from "next/link";
import SigninButton from "./signin-button";

const NavigationUserAvatar = () => {

  const { authenticated } = usePrivy();

  if (!authenticated) {
    return (
      <div>
        <SigninButton />
      </div>
    );
  }

  return (
    <div>
      <Link href="/profile">
        <div className="h-10 w-10 rounded-full bg-foreground/10" />
      </Link>
    </div>
  );
}

export default NavigationUserAvatar;