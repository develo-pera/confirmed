import { Avatar, AvatarImage, AvatarFallback } from "../../ui/avatar";
import EventSideEvents from "../event-side-events";
import EventSidebarTitle from "../event-sidebar-title";
import EventTicketingType from "../event-ticketing-type";

const EventDetailsSection = () => {
  return (
    <div className="p-5 rounded-sm bg-muted dark:bg-[#131313]">
      <EventSidebarTitle title="Event details" />
      <div className="mb-6 space-y-4">
        <EventTicketingType />
        <EventSideEvents />
      </div>
      <EventSidebarTitle title="Who's coming" />
      <div>
        <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/maxleiter.png"
              alt="@maxleiter"
            />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback className="text-[10px]">+250</AvatarFallback>
          </Avatar>
        </div>
        <p className="text-foreground/50 mt-4 text-sm">Petar Popovic, Ivana Spanovic and 250 others</p>
      </div>
    </div>
  );
}

export default EventDetailsSection;