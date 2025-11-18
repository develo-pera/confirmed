import Link from "next/link";
import EventCard from "../common/event-card";
import { Button } from "../ui/button";
import { eventsMocks } from "../../../mocks";

const ExploreEvents = () => {
  return (
    <div id="events" className="max-w-6xl w-full mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold mb-5">Explore Events</h2>
      {/* <p className="text-foreground/50 max-w-5xl text-balance mb-10">Discover the latest events and communities on Confirmed. Join the community and get the latest updates.</p> */}
      <p className="text-foreground/50 max-w-5xl text-balance mb-10">Discover the latest events on Confirmed.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {eventsMocks.slice(0, 3).map((event) => (
          <EventCard
            key={event.id}
            image={event.image}
            title={event.title}
            organizer={event.organizer}
            startTime={event.start_time}
            endTime={event.end_time}
            address={event.address}
            city={event.city}
            stakeAmount={event.stakeAmount}
            guests={event.guests}
            className="w-full"
          />
        ))}
      </div>
      <Link href="/events">
        <Button variant="secondary" className="mt-10">View all events</Button>
      </Link>
    </div>
  );
}

export default ExploreEvents;