import Image from "next/image";
import EventSidebarTitle from "../event-sidebar-title";

const OrganizerSection = () => {
  return (
    <div className="p-5 rounded-sm bg-muted dark:bg-[#131313]">
      <div className="flex items-center gap-3 mb-6">
        <Image src="/tmp/org.jpg" alt="Djoka" width={100} height={100} className="rounded-sm w-12 h-12" />
        <div>
          <p className="text-xs text-foreground/50">Organizer</p>
          <p className=" font-bold">Proof of Rakija</p>
        </div>
      </div>
      <p className="text-sm text-foreground/50">The mission of the Logos is to support and empower developers, teams, and protocols actively building within Logos ecosystem. We will focus on the tech and helping you build!</p>
      <div className="mt-6">
        <EventSidebarTitle title="Hosted by" />
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Image src="/tmp/org.jpg" alt="Djoka" width={40} height={40} className="rounded-full w-10 h-10" />
            <p className="text-sm">Fica Pajic</p>
          </div>
          <div>
            <Image src="/icons/twitter.svg" alt="Instagram" width={14} height={14} />
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Image src="/tmp/org.jpg" alt="Djoka" width={40} height={40} className="rounded-full w-10 h-10" />
            <p className="text-sm">Michelle Wu</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/icons/twitter.svg" alt="Instagram" width={14} height={14} />
            <Image src="/icons/discord.svg" alt="Discord" width={16} height={14} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganizerSection;