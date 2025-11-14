const Testimonials = () => {
  return (
    <div className="max-w-6xl w-full mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold mb-5">Event organizers love us</h2>
      <p className="text-foreground/50 max-w-5xl text-balance mb-10">Confirmed empowers thousands of event organizers and community leaders to host successful events with ease.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border border-foreground/10 rounded-md p-5">
          <p className="text-foreground/90">“Confirmed has completely transformed how we manage events. It’s a game-changer for organizers like us.”</p>
          <p className="text-foreground/50 text-sm mt-3">- John Doe, Event Organizer at ETH Belgrade</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;