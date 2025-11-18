"use client";

import { GlowingEffect } from "../ui/glowing-effect";
import { cn } from "@/lib/utils";

const Features = () => {
  return (
    <div className="max-w-6xl w-full mx-auto px-4 py-20 mt-20">
      <h2 className="text-4xl font-bold mb-5">Confirmed is made for Event professionals</h2>
      <p className="text-foreground/50 max-w-5xl text-balance">Event management is though, but we are here to assist you. With the rich set of powerful features we make event management and organizaton a bit less stresful and more succesful.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10">
        <div className={cn(
          "border border-foreground/10 rounded-md p-5 lg:col-span-2 relative",
          "bg-gradient-to-b from-muted/50 to-muted/10",
          "hover:from-muted/60 hover:to-muted/20",
          "transition-colors duration-300",
        )}>
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={1}
          />
          <h3 className="text-2xl font-bold mb-3">Understand your audience</h3>
          <p className="text-foreground/50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </div>
        <div className={cn(
          "border border-foreground/10 rounded-md p-5 relative",
          "bg-gradient-to-b from-muted/50 to-muted/10",
          "hover:from-muted/60 hover:to-muted/20",
          "transition-colors duration-300",
        )}>
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={1}
          />
          <h3 className="text-2xl font-bold mb-3">RSVP with skin in the game</h3>
          <p className="text-foreground/50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </div>
        <div className={cn(
          "border border-foreground/10 rounded-md p-5 relative",
          "bg-gradient-to-b from-muted/50 to-muted/10",
          "hover:from-muted/60 hover:to-muted/20",
          "transition-colors duration-300",
        )}>
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={1}
          />
          <h3 className="text-2xl font-bold mb-3">Mesure your success</h3>
          <p className="text-foreground/50">Mesure your success sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </div>
        <div className={cn(
          "border border-foreground/10 rounded-md p-5 relative",
          "bg-gradient-to-b from-muted/50 to-muted/10",
          "hover:from-muted/60 hover:to-muted/20",
          "transition-colors duration-300",
        )}>
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={1}
          />
          <h3 className="text-2xl font-bold mb-3">Engage your community</h3>
          <p className="text-foreground/50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </div>
        <div className={cn(
          "border border-foreground/10 rounded-md p-5 relative",
          "bg-gradient-to-b from-muted/50 to-muted/10",
          "hover:from-muted/60 hover:to-muted/20",
          "transition-colors duration-300",
        )}>
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={1}
          />
          <h3 className="text-2xl font-bold mb-3">Get sponsorships</h3>
          <p className="text-foreground/50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;