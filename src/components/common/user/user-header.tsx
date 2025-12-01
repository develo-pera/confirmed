import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { User } from "@/lib/definitions";
import UserHeaderLinks from "./user-header-links";

const UserHeader = ({ user, isLoading }: { user: User, isLoading: boolean }) => {

  if (isLoading) {
    return <Skeleton className="h-26 w-26 rounded-full bg-foreground/10" />
  }

  return (
    <div className="flex items-center gap-5">
      {
        user?.avatar ? (
          <Image src={user.avatar} alt={user.name || "User" + " profile picture"} width={104} height={104} className="rounded-full w-26 h-26 object-cover" />
        ) : (
          <div className="w-26 h-26 rounded-full bg-foreground/10" />
        )
      }
      <div>
        <h2 className="text-2xl font-bold">
          {user?.name || "Anonymous"}
        </h2>
        {user?.username && (
          <p className="text-foreground/50 text-sm">
            @{user.username}
          </p>
        )}
        {user?.bio ? (
          <p className="text-foreground/50 text-sm mt-5">{user.bio}</p>
        ) : (
          <div className="mt-5" /> // Just a separator in case the user doesn't have a bio
        )}
        <UserHeaderLinks
          website={user?.website}
          x={user?.twitter}
          linkedin={user?.linkedin}
          farcaster={user?.farcaster}
        />
      </div>
    </div>
  );
}

export default UserHeader;