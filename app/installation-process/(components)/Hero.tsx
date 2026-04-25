"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8 },
    )
      .fromTo(
        paragraphRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.5",
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4",
      );
  });

  return (
    <main
      className="h-screen text-gray-900 flex justify-center items-center flex-col bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/about-hero.webp')",
      }}
    >
      <section className="text-center px-6 pt-16 pb-6 shrink-0">
        <h1
          ref={headingRef}
          className="text-3xl md:text-5xl font-semibold leading-tight max-w-4xl mx-auto opacity-0"
        >
          Our Seamless Solar <br />
          Installation <span className="text-red-500">Process</span>.
        </h1>

        <p
          ref={paragraphRef}
          className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base opacity-0"
        >
          Our end-to-end solar journey ensures a simple transition to clean
          energy. From site inspection to system activation, we handle every
          step with precision, transparency, and expert care.
        </p>

        <div ref={ctaRef} className="mt-6 opacity-0">
          <Link
            href="/contact"
            className="flex items-center gap-2 mx-auto w-fit bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition"
          >
            <span>Book Free Site Visit</span>
            <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
              ↗
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
