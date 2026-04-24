import Hero from "./(components)/Hero";
import WhoWeAre from "./(components)/WhoWeAre";
import Founder from "./(components)/Founder";
import BentoGrid from "./(components)/BentoGrid";
import WhyFujiSolar from "./(components)/WhyFujiSolar";
import Achievements from "./(components)/Achievements";
import Cta from "@/components/Cta";

export default function About() {
  return (
    <section className="bg-[#fefefe]">
      <Hero />
      <WhoWeAre />
      <Founder />
      <BentoGrid />
      <WhyFujiSolar />
      <Achievements />
      <Cta />
    </section>
  );
}
