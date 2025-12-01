"use client"

import Link from "next/link";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import useUser from "@/hooks/useUser";
import { deleteSession } from "@/lib/session";
import { Skeleton } from "../ui/skeleton";
import Image from "next/image";

const NavigationUserAvatar = () => {
  const { data: user, isLoading } = useUser();

  if (isLoading) {
    return <Skeleton className="h-10 w-10 rounded-full bg-foreground/10" />
  }

  console.log(user);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {user?.avatar ? (
          <Image src={user.avatar} alt={user.name || "User" + " profile picture"} width={40} height={40} className="rounded-full w-10 h-10" />
        ) : (
          <div className="w-10 h-10 rounded-full bg-foreground/10" />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2" align="end">
        <DropdownMenuItem asChild>
          <Link href={`/user/${user?.username || user.id}`}>View Profile</Link>
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