import Hero from "./(components)/Hero";
import WhySolar from "./(components)/WhySolar";
import WhyUs from "./(components)/WhyUs";
import WhatWeOffer from "./(components)/WhatWeOffer";
import HowItWorks from "./(components)/HowItWorks";
import SolarCalculator from "./(components)/SolarCalculator";
import Testimonial from "./(components)/Testimonial";
import Cta from "@/components/Cta";
import SolarPanel from "./(components)/SolarPanel";
import SolarSubsidy from "./(components)/SolarSubsidy";

export default function Home() {
  return (
    <div className="overflow-x-clip bg-background ">
      <Hero />
      <SolarPanel />
      <WhySolar />
      <WhyUs />
      <SolarSubsidy />
      <WhatWeOffer />
      <HowItWorks />
      <SolarCalculator />
      <Testimonial />
      <Cta />
    </div>
  );
}
