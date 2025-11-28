"use client";

import useUser from "@/hooks/useUser";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const CompleteProfileOverlay = () => {
  const { data: user, isLoading } = useUser();

  if (isLoading || user.profileCompleted) {
    return null;
  }

  return (
    <Dialog open={!user.profileCompleted}>
      <DialogContent showCloseButton={false}>
        <h2>Please complete your profile to continue</h2>
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Username" />
        <Button>
          Complete profile
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default CompleteProfileOverlay;