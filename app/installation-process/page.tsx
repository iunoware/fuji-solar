import Hero from "../installation-process/(components)/Hero";
import { Process } from "../installation-process/(components)/Process";
import Timeline from "../installation-process/(components)/Timeline";
import WhyUs from "../installation-process/(components)/WhyUs";
import Cta from "@/components/Cta";

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
