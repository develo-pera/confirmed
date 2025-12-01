"use client";

// import { Button } from "../ui/button";
import EditProfileSection from "./edit-profile-section";
import useUser from "@/hooks/useUser";

const SettingsForm = () => {
  const { data: user, isLoading, updateUser } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <EditProfileSection user={user} updateUser={updateUser} />
      {/* <Button>Save</Button> */}
    </>
  )
}

export default SettingsForm;