import Hero from "./(components)/Hero";
import SectorsWeServe from "./(components)/SectorWeServe";
import Services from "./(components)/Services";

export const metadata = {
  title: "Solar Services in Tamil Nadu | Installation, Maintenance & Solutions",
  description:
    "Explore our solar services including installation, maintenance, and consultation across Tamil Nadu. Get reliable and affordable solar solutions tailored for homes, businesses, and industries.",
};

export default function SolarProducts() {
  return (
    <div className="bg-background">
      <Hero />
      <SectorsWeServe />
      <Services />
    </div>
  );
}
