"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SettingsPage = () => {
  const handleCallBackendEndpoint = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/healthcheck`);
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="max-w-6xl w-full mx-auto px-4 py-20 mt-20">
      <h1>Settings</h1>
      <div className="my-10">
        <Tabs>
          <TabsList>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="communities">Communities</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <Button onClick={handleCallBackendEndpoint} variant="secondary">
        Call backend endpoint
      </Button>
    </div>
  );
}

export default SettingsPage;