"use client";

import { usePrivy } from "@privy-io/react-auth";
import Link from "next/link";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import SigninButton from "./signin-button";

const NavigationUserAvatar = () => {
  const { authenticated, logout } = usePrivy();

  if (!authenticated) {
    return (
      <div>
        <SigninButton />
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="h-10 w-10 rounded-full bg-foreground/10" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2" align="end">
        <DropdownMenuItem asChild>
          <Link href="/profile">View Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/settings">Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <div onClick={logout}>Logout</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NavigationUserAvatar;