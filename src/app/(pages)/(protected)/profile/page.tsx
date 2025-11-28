"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import useUser from "@/hooks/useUser";
import Image from "next/image";

const ProfilePage = () => {
  const { data: user, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-6xl w-full mx-auto px-4 py-20 mt-20">
      <div>
        <div className="flex items-center justify-between gap-4">


          {/* TODO: conditional display of edit profile button */}
          <div>
            <Button variant="secondary">
              Edit profile
            </Button>
          </div>
        </div>
      </div>
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

export default ProfilePage;