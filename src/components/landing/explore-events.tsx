import EventCard from "../common/event-card";
import { Button } from "../ui/button";

const eventsMocks = [
  {
    id: 1,
    title: "Event 1",
    description: "Event 1 description",
    image: "https://app.getriver.io/_next/image?url=https%3A%2F%2Fassets.getriver.io%2Fcommunity%2Fbolt%2Fimage-overlays%2Fbqn35.png&w=1920&q=75",
    organizer: "Organizer 1",
    date: "2021-01-01",
    start_time: "10:00",
    end_time: "12:00",
    address: "123 Main St",
    city: "New York",
    stakeAmount: 100,
    guests: [],
  },
  {
    id: 2,
    title: "Event 2",
    description: "Event 2 description",
    image: "https://app.getriver.io/_next/image?url=https%3A%2F%2Fassets.getriver.io%2Fclx0w3e8e00006e5yll2ou532%2Fn6jtx.png&w=1200&q=75",
    organizer: "Organizer 2",
    date: "2021-01-02",
    start_time: "10:00",
    end_time: "12:00",
    address: "123 Main St",
    city: "New York",
    stakeAmount: 100,
    guests: [],
  },
  {
    id: 3,
    title: "Event 3",
    description: "Event 3 description",
    image: "https://app.getriver.io/_next/image?url=https%3A%2F%2Fassets.getriver.io%2Fclxffjj210000x4ofyzkm7hgu%2Ft18p2f.png&w=1080&q=75",
    organizer: "Organizer 3",
    date: "2021-01-03",
    start_time: "10:00",
    end_time: "12:00",
    address: "123 Main St",
    city: "New York",
    stakeAmount: 100,
    guests: [],
  },
];

const ExploreEvents = () => {
  return (
    <div className="max-w-6xl w-full mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold mb-5">Explore Events</h2>
      {/* <p className="text-foreground/50 max-w-5xl text-balance mb-10">Discover the latest events and communities on Confirmed. Join the community and get the latest updates.</p> */}
      <p className="text-foreground/50 max-w-5xl text-balance mb-10">Discover the latest events on Confirmed.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {eventsMocks.map((event) => (
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
      <Button variant="secondary" className="mt-10">View all events</Button>
    </div>
  );
}

export default ExploreEvents;