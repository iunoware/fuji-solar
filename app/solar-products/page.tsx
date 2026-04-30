import Hero from "./(components)/Hero";
import SectorsWeServe from "./(components)/SectorWeServe";
import Services from "./(components)/Services";
import Cta from "@/components/Cta";
import Awarness from "./(components)/Awarness";

export const metadata = {
  title:
    "Fuji Solar | Solar Solutions Installation, Maintenance & Solutions in TamilNadu",
  description:
    "Explore our solar services including installation, maintenance, and consultation across Tamil Nadu. Get reliable and affordable solar solutions tailored for homes, businesses, and industries.",
};

export default function SolarProducts() {
  return (
    <div className="bg-background">
      <Hero />
      <SectorsWeServe />
      <Services />
      <Awarness />
      <Cta />
    </div>
  );
}
