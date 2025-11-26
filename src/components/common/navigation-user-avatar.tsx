"use client"

import Link from "next/link";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import useUser from "@/hooks/useUser";
import { deleteSession } from "@/lib/session";
import { Skeleton } from "../ui/skeleton";

const NavigationUserAvatar = () => {
  const { data, isLoading } = useUser();

  if (isLoading) {
    return <Skeleton className="h-10 w-10 rounded-full bg-foreground/10" />
  }

  console.log(data);

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
          <div onClick={deleteSession}>Logout</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NavigationUserAvatar;