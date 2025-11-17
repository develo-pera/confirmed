import { RainbowButton } from "@/components/ui/rainbow-button"

const Hero = () => {
  return (
    <div className="max-w-6xl w-full mx-auto px-4 pt-50 pb-0">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-3 text-balance max-w-4xl mx-auto">Host events smarter. Fill rooms, not spreadsheets.</h1>
      <p className="text-center text-foreground/50 max-w-2xl mx-auto text-balance">
        {/* RSVPs with skin in the game. Confirmed helps event organizers reduce no-shows by letting attendees stake to secure their spot. */}
        {/* With powerful tools like stake to secure your spot and advanced analytics, Confirmed will make success out of your every event. */}
        Confirmed gives you the tools to run world-class events — from staking-based RSVP, to advanced analytics, and engagement insights that turn every event into a success story.
      </p>
      <div className="flex items-center justify-center mt-10 gap-4">
        <RainbowButton>
          Create event for free
        </RainbowButton>
        {/* <Button variant="ghost">See how it works</Button> */}
      </div>
    </div>
  );
}

export default Hero;