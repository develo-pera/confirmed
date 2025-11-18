"use client";

import { motion } from "motion/react";
import { Pointer } from "@/components/ui/pointer";
import { TestimonialsMarquee } from "@/components/blocks/testimonials-marquee"

const testimonials = [
  {
    author: {
      name: "Edvard Thompson",
      position: "Event Organizer at ETH Belgrade",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Confirmed has completely transformed how we manage events. It's a game-changer for organizers like us.",
    href: "https://twitter.com/emmaai"
  },
  {
    author: {
      name: "Tanja Mladenovic",
      position: "Experience and Events Lead at LI.FI",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/davidtech"
  },
  {
    author: {
      name: "Sofia Rodriguez",
      position: "Co-Founder at Superteam Balkan",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive."
  }
]


const Testimonials = () => {
  return (
    <div className="max-w-6xl w-full mx-auto px-4 py-20 relative">
      <h2 className="text-4xl font-bold mb-5">Event organizers love us</h2>
      <p className="text-foreground/50 max-w-5xl text-balance mb-10">Confirmed empowers thousands of event organizers and community leaders to host successful events with ease.</p>
      <TestimonialsMarquee
        testimonials={testimonials}
      />
      <TestimonialsMarquee
        testimonials={testimonials}
        direction="right"
      />
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