import { eventsMocks } from "../../../../../../mocks";
import RegisterSection from "@/components/event/register-section";
import EventDate from "@/components/event/event-date";
import EventLocation from "@/components/event/event-location";
import OrganizerSection from "@/components/event/sidebar/organizer-section";
import EventCover from "@/components/event/event-cover";
import { Button } from "@/components/ui/button";
import EventDetailsSection from "@/components/event/sidebar/event-details-section";
import EventLocationSection from "@/components/event/sidebar/event-location-section";

const EventPage = ({ params }: { params: { id: string } }) => {
  const event = eventsMocks[0];
  return (
    <div className="max-w-6xl w-full mx-auto px-4 py-20 mt-20">
      <div className="flex items-center justify-end gap-3 mb-6">
        <Button variant="secondary">Add to calendar</Button>
        <Button variant="secondary">Share</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-8 items-start gap-5">
        <div className="md:col-span-5">
          <EventCover image={event.image} alt={event.title} />
          <h1 className="text-4xl font-extrabold mt-10 mb-5">{event.title}</h1>

          <div className="flex items-center flex-wrap gap-x-10 gap-y-5">
            <EventDate />
            <EventLocation />
          </div>

          <div className="flex flex-col">
            <p
              // className="text-foreground/50 text-sm mt-5 order-2 sm:order-1"
              className="text-foreground/50 mt-5"
            >
              {event.description}
            </p>
            <RegisterSection />
          </div>
        </div>
        <div className="md:col-span-3 space-y-5">
          <OrganizerSection />
          <EventDetailsSection />
          <EventLocationSection />
        </div>
      </div>
    </div>
  );
}

export default EventPage;