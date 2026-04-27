"use client";

import Hero from "./(components)/Hero";
import WhoWeAre from "./(components)/WhoWeAre";
import Founder from "./(components)/Founder";
import Mission from "./(components)/Mission";
import BentoGrid from "./(components)/BentoGrid";
import WhyFujiSolar from "./(components)/WhyFujiSolar";
import Achievements from "./(components)/Achievements";
import Cta from "@/components/Cta";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0); // reset scroll position on navigation
    ScrollTrigger.refresh();
  }, []);

  return (
    <section className="bg-background overflow-x-clip">
      <Hero />
      <WhoWeAre />
      <Founder />
      <Mission />
      <BentoGrid />
      <WhyFujiSolar />
      <Achievements />
      <Cta />
    </section>
  );
}
