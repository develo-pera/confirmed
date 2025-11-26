// "use client";

// import { usePrivy } from "@privy-io/react-auth";
// import Link from "next/link";
// import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import SigninButton from "./sign-in/sign-in-button";
// import { deleteSession } from "@/lib/session";
import { verifySession } from "@/lib/dal";
import NavigationUserAvatar from "./navigation-user-avatar";

const NavigationUser = async () => {
  const { isAuthenticated } = await verifySession();

  if (!isAuthenticated) {
    return (
      <div className="w-[150px] flex justify-end">
        <SigninButton />
      </div>
    );
  }

  return (
    <div className="w-[150px] flex justify-end">
      <NavigationUserAvatar />
    </div>
  );
}

export default NavigationUser;