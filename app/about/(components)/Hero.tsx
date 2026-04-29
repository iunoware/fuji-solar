"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Ensure elements are at their starting positions before animating
      gsap.set([headingRef.current, paragraphRef.current, ctaRef.current], {
        opacity: 0,
        y: (i) => [40, 30, 20][i],
      });

      tl.to(headingRef.current, { opacity: 1, y: 0, duration: 0.8 })
        .to(paragraphRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");
    },
    { scope: containerRef },
  );

  return (
    <main
      ref={containerRef}
      className="h-screen text-gray-900 flex justify-center items-center flex-col bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/solar-panel-installation-tamilnadu.webp')",
      }}
    >
      <section className="text-center px-6 pt-16 pb-6 shrink-0">
        {/* <h1
          ref={headingRef}
          className="text-3xl md:text-5xl font-semibold leading-tight max-w-4xl mx-auto opacity-0"
        >
          Trusted Solar Panel Installation Madurai <br />
          and Beyond by <span className="text-brand-red">Fuji Solar</span>.
        </h1> */}
        <h1
          ref={headingRef}
          className="text-3xl md:text-5xl font-semibold leading-tight max-w-4xl mx-auto opacity-0"
        >
          Renewable energy <br /> for a sustainable{" "}
          <span className="text-green-600">Green Future</span>.
        </h1>

        <p
          ref={paragraphRef}
          className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base opacity-0"
        >
          Fuji Solar provides complete solar solutions - from premium rooftop solar
          installation Tamil Nadu relies on, to complex commercial setups. We focus on
          quality, efficiency, and long-term performance to reduce costs and advance
          sustainable energy.
        </p>

        <div ref={ctaRef} className="mt-6 opacity-0">
          <Link
            href="/contact"
            className="flex items-center gap-2 mx-auto group w-fit bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition"
          >
            <span>Get a Free Consultation</span>
            <span className="bg-brand-red text-white -rotate-40 group-hover:rotate-0 transition-all duration-200 rounded-full w-6 h-6 p-1 flex items-center justify-center text-sm">
              <ArrowRight />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
