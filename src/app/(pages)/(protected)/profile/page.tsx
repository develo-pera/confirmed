"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProfilePage = () => {
  return (
    <div className="max-w-6xl w-full mx-auto px-4 py-20 mt-20">
      <div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <div className="w-26 h-26 rounded-full bg-foreground/10" />
            <div>
              <h2 className="text-2xl font-bold">
                Name
              </h2>
              <p className="text-foreground/50 text-sm">
                @username
              </p>
              <p className="text-foreground/50 text-sm mt-5">
                Bio goes here on and on, and some more text here and there.
              </p>
              <div className="mt-1 flex items-center gap-2">
                <Link href="https://website.com" target="_blank" rel="noopener noreferrer" className="text-sm">
                  website.com
                </Link>
                <span className="text-foreground/50 text-sm">•</span>
                <Link href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-sm">
                  x
                </Link>
                <span className="text-foreground/50 text-sm">•</span>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm">
                  Linkedin
                </Link>
                <span className="text-foreground/50 text-sm">•</span>
                <Link href="https://farcaster.com" target="_blank" rel="noopener noreferrer" className="text-sm">
                  Farcaster
                </Link>
              </div>
            </div>
          </div>

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