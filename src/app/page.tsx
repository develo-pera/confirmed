import Hero from "@/components/landing/hero";
import TrustedBy from "@/components/landing/trusted-by";
import Features from "@/components/landing/features";
import ExploreEvents from "@/components/landing/explore-events";
import ExploreCommunites from "@/components/landing/explore-communites";
import Testimonials from "@/components/landing/testimonials";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <TrustedBy />
      <Features />
      <Testimonials />
      <ExploreEvents />
      <ExploreCommunites />
    </main>
  );
}
