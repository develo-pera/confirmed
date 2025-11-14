"use client";

import { usePrivy } from "@privy-io/react-auth";
import { Button } from "@/components/ui/button";

const ProfilePage = () => {
  const { user, logout } = usePrivy();

  return (
    <div className="max-w-6xl w-full mx-auto px-4 py-20 mt-20">
      <div className="mb-5">
        {JSON.stringify(user, null, 2)}
      </div>

      <Button onClick={logout}>Logout</Button>
    </div>
  );
}

export default ProfilePage;