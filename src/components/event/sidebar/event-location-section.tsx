import Image from "next/image";
import EventSidebarTitle from "../event-sidebar-title";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const EventLocationSection = () => {
  return (
    <div className="p-5 rounded-sm bg-muted dark:bg-[#131313]">
      <EventSidebarTitle title="Event location" />
      <p className="mb-2 leading-[1.4]">Please register to see the exact location of this event.</p>
      <p className="text-foreground/50 text-sm">Novi Beograd, Savski Nasip</p>
      <div className="mt-6">
        <AspectRatio ratio={16 / 9} className="rounded-sm bg-muted rounded-sm"></AspectRatio>
      </div>
    </div>
  );
}

export default EventLocationSection;