import Link from "next/link";
import Image from "next/image";

const bottomImages = [
  {
    src: "/images/solar-panel-2.webp",
    alt: "Commercial & Industrial solar installation",
    label: "Commercial",
  },
  {
    src: "/images/solar-panel-3.webp",
    alt: "Residential solar installation",
    label: "Residential",
  },
];

export default function BentoGrid() {
  return (
    <main className="bg-white p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:h-[90vh]">
        {/* left column */}
        <div className="md:col-span-1 grid md:grid-rows-2 gap-3 md:h-full">
          {/* Top card */}
          <div className="bg-red-100 rounded-3xl p-6 flex flex-col justify-between">
            {/* Eyebrow */}
            <p className="text-xs font-semibold tracking-widest text-red-500 uppercase">
              Fuji Solar
            </p>

            {/* Headline + subtext */}
            <div className="flex flex-col gap-2 my-auto py-4">
              <h1 className="text-2xl md:text-3xl font-bold leading-snug text-gray-900">
                Solar for <br />
                <span className="text-red-500">Every Scale.</span>
              </h1>
              <p className="text-sm text-gray-500 leading-relaxed max-w-50">
                From your rooftop to an open field — we design and install solar systems
                that fit every need.
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-white/70 backdrop-blur-lg text-gray-800 text-sm font-medium px-5 py-2.5 rounded-full w-fit hover:bg-white transition-colors group"
            >
              Get a Quote
              <span className="bg-red-500 -rotate-45 group-hover:rotate-0 transition-transform duration-200 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs">
                ➜
              </span>
            </Link>
          </div>

          {/* Bottom two images */}
          <div className="grid grid-cols-2 gap-3 h-56 md:h-auto">
            {bottomImages.map((img) => (
              <div key={img.label} className="relative rounded-2xl overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
                {/* Label badge */}
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="bg-black/50 backdrop-blur-sm text-white text-[10px] font-medium px-2.5 py-1 rounded-full">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT BIG CARD ── */}
        <div className="md:col-span-2 relative rounded-3xl overflow-hidden h-72 md:h-auto">
          <Image
            src="/images/solar-panel-1.webp"
            alt="Utility scale solar installation in open field"
            fill
            className="object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/25" />

          {/* Top category badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {["Products", "Maintenance", "Industries"].map((item) => (
              <span
                key={item}
                className="bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/20"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Bottom label for the big image */}
          <div className="absolute bottom-5 left-5">
            <span className="bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
              Utility &amp; Open Land
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
