"use client";

import Hero from "./(components)/Hero";
import WhoWeAre from "./(components)/WhoWeAre";
import Founder from "./(components)/Founder";
import Mission from "./(components)/Mission";
import BentoGrid from "./(components)/BentoGrid";
import WhyFujiSolar from "./(components)/WhyFujiSolar";
import Achievements from "./(components)/Achievements";
import Cta from "@/components/Cta";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function About() {
  useGSAP(() => {
    // 1. Ensure plugin is registered
    gsap.registerPlugin(ScrollTrigger);

    // 2. Reset scroll position immediately on route change
    window.scrollTo(0, 0);

    // 3. Force a refresh after a small delay to allow children to mount and layout to stabilize
    // We don't call killAll here because it would kill the triggers just created by the children
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
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
