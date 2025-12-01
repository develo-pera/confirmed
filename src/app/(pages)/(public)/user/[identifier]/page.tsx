import { notFound, permanentRedirect } from "next/navigation";
import { getUserByIdentifier } from "@/lib/api";
import { User } from "@/lib/definitions";
import UserHeader from "@/components/common/user/user-header";

const UserPage = async ({ params }: { params: Promise<{ identifier: string }> }) => {
  const { identifier } = await params;

  const result = await getUserByIdentifier(identifier);

  const { user, canonical } = result as { user: User, canonical: string };

  console.log("user", user);

  if (!user) {
    return notFound();
  }

  if (canonical !== identifier) {
    return permanentRedirect(`/user/${canonical}`);
  }

  return (
    <div className="max-w-6xl w-full mx-auto px-4 py-20 mt-20">
      <UserHeader user={user} isLoading={false} />
      <div className="mt-10">
        <div>
          <h2 className="text-2xl font-bold">
            Events
          </h2>
          <p className="text-foreground/50 text-sm">
            View all your events, past and present.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserPage;