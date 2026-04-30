// "use client";

import Hero from "./(components)/Hero";
import WhoWeAre from "./(components)/WhoWeAre";
import Founder from "./(components)/Founder";
import Mission from "./(components)/Mission";
import BentoGrid from "./(components)/BentoGrid";
import WhyFujiSolar from "./(components)/WhyFujiSolar";
import Awards from "./(components)/Awards";
// import Achievements from "./(components)/Achievements";
import Cta from "@/components/Cta";
import OurJourney from "./(components)/OurJourney";

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

export const metadata = {
  title: "Fuji Solar | About Our Solar Energy Company in Tamil Nadu",
  description:
    "Learn about our fuji solar company serving Tamil Nadu. We specialize in solar panel installation, maintenance, and cost-effective solar solutions for residential, commercial, and industrial needs.",
};

export default function About() {
  return (
    <section className="bg-background overflow-x-clip">
      <Hero />
      <WhoWeAre />
      <Founder />
      <OurJourney />
      <Mission />
      <BentoGrid />
      <WhyFujiSolar />
      <Awards />
      {/* <Achievements /> */}
      <Cta />
    </section>
  );
}
