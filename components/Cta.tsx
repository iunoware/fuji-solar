import Image from "next/image";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="w-full flex justify-center items-center py-10 bg-background">
      <div className="p-5 w-full max-w-screen-2xl">
        <div className="relative h-90 w-full rounded-2xl overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/rooftop-solar-2.webp"
            alt="Fuji Solar"
            fill
            className="object-cover"
            priority
          />

          {/* Left blur overlay */}
          <div className="absolute inset-0 sm:hidden block backdrop-blur-sm" />

          {/* Text content */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 max-w-lg">
            <h2 className="text-5xl font-bold text-white mb-3">Ready to Go Solar?</h2>
            <p className="text-gray-100 text-sm leading-relaxed mb-6">
              Discover affordable solar solutions for homes in Tamil Nadu and make the
              switch to clean energy today. Our experts are here to guide you.
            </p>

            <Link
              href="/contact"
              className="flex items-center gap-2 bg-white/70 backdrop-blur-lg text-gray-800 text-sm font-medium px-5 py-2.5 rounded-full w-fit hover:bg-gray-100/90 group transition-colors"
            >
              Get a Free Consultation
              <span className="bg-brand-red translate-x-2 -rotate-30 group-hover:rotate-0 transition-all duration-200 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs">
                ➜
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
