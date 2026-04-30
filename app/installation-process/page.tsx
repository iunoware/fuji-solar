import Hero from "../installation-process/(components)/Hero";
import { Process } from "../installation-process/(components)/Process";
import Timeline from "../installation-process/(components)/Timeline";
import WhyUs from "../installation-process/(components)/WhyUs";
import Cta from "@/components/Cta";

export const metadata = {
  title: "Fuji Solar | Solar Panel Installation Cost Tamil Nadu | Solar Experts",
  description:
    "Get expert solar panel installation in Madurai with transparent pricing. Discover solar system cost in Tamil Nadu and choose the best rooftop solar system for your home or business.",
};

const installationProcess = () => {
  return (
    <>
      <Hero />
      <Process />
      <Timeline />
      <WhyUs />
      <Cta />
    </>
  );
};

export default installationProcess;
