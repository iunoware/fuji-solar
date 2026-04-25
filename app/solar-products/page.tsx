import Hero from "./(components)/Hero";
import SectorsWeServe from "./(components)/SectorWeServe";
import Services from "./(components)/Services";

export default function SolarProducts() {
  return (
    <div className="bg-background">
      <Hero />
      <SectorsWeServe />
      <Services />
    </div>
  );
}
