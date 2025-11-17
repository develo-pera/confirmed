"use client";

import { motion } from "motion/react";
import { Pointer } from "@/components/ui/pointer";

const Testimonials = () => {
  return (
    <div className="max-w-6xl w-full mx-auto px-4 py-20 relative">
      <h2 className="text-4xl font-bold mb-5">Event organizers love us</h2>
      <p className="text-foreground/50 max-w-5xl text-balance mb-10">Confirmed empowers thousands of event organizers and community leaders to host successful events with ease.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border border-foreground/10 rounded-md p-5">
          <p className="text-foreground/90">“Confirmed has completely transformed how we manage events. It’s a game-changer for organizers like us.”</p>
          <p className="text-foreground/50 text-sm mt-3">- John Doe, Event Organizer at ETH Belgrade</p>
        </div>
      </div>
      <Pointer>
        <motion.div
          animate={{
            scale: [0.8, 1, 0.8],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-pink-600"
          >
            <motion.path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="currentColor"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>
      </Pointer>
    </div>
  );
}

export default Testimonials;