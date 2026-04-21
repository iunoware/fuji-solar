import Link from "next/link";

export default function Hero() {
  return (
    <main
      className="h-screen text-gray-900 flex justify-center items-center flex-col bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/about-hero.webp')",
      }}
    >
      <section className="text-center px-6 pt-16 pb-6 shrink-0">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight max-w-4xl mx-auto">
          Trusted Solar Solutions for Homes <br />
          and Businesses by <span className="text-orange-500">Fuji Solar</span>.
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Fuji Solar provides complete solar solutions—from rooftop to industrial
          systems-focused on quality, efficiency, and long-term performance to reduce
          costs and support sustainable energy.
        </p>

        <div className="mt-6">
          <Link
            href="/contact"
            className="flex items-center gap-2 mx-auto w-fit bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition"
          >
            <span>Get a Free Consultation</span>
            <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
              ↗
            </span>
          </Link>
        </div>
      </section>

      {/* <section className="flex-1 min-h-0">
        <div className="relative h-full bg-cover bg-center rounded-t-[40px] overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 w-full px-6 flex flex-col md:flex-row gap-4 justify-center">
            <Card
              title="Rooftop Solar Solutions"
              desc="Efficient and space-optimized solar systems designed for residential and commercial rooftops."
            />
            <Card
              title="Industrial Solar Systems"
              desc="High-capacity solar installations tailored to reduce operational costs and improve energy efficiency."
            />
            <Card
              title="Maintenance & AMC"
              desc="Comprehensive support and maintenance services to ensure consistent performance and system longevity."
            />
          </div>
        </div>
      </section> */}
    </main>
  );
}

// type CardProps = {
//   title: string;
//   desc: string;
// };

// function Card({ title, desc }: CardProps) {
//   return (
//     <div className="backdrop-blur-md bg-white/20 border border-white/30 text-white rounded-2xl p-5 w-full md:w-72 shadow-lg">
//       <h3 className="font-semibold text-lg">{title}</h3>
//       <p className="text-sm mt-2 text-white/90">{desc}</p>
//       {/* <button className="mt-3 text-sm underline hover:text-orange-300">Learn More</button> */}
//     </div>
//   );
// }
