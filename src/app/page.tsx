import Hero from "@/components/landing/hero";
import TrustedBy from "@/components/landing/trusted-by";
import Features from "@/components/landing/features";
import ExploreEvents from "@/components/landing/explore-events";
import ExploreCommunites from "@/components/landing/explore-communites";
import Testimonials from "@/components/landing/testimonials";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

export default function Home() {
  return (
    <>
      <Header isLandingPage />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <Features />
        <Testimonials />
        <ExploreEvents />
        <ExploreCommunites />
      </main>
      <Footer />
    </>
  );
}
