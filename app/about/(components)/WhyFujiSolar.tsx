"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    src: "/images/solar-panel-1.webp",
    alt: "best solar company in Tamil Nadu",
    headline: "43 Years of Expertise",
    desc: "We've been doing this since before solar was mainstream. You're in the most experienced hands in the industry.",
  },
  {
    src: "/images/solar-panel-2.webp",
    alt: "solar panel installation cost Tamil Nadu",
    headline: "End-to-End Service",
    desc: "We handle everything - from initial consultation and setup to the most reliable solar maintenance services Tamil Nadu has to offer.",
  },
  {
    src: "/images/solar-panel-3.webp",
    alt: "Residential solar installation",
    headline: "Tailored for You",
    desc: "No two sites are the same. Every system we build is designed specifically for your roof, your usage, and your budget.",
  },
  {
    src: "/images/solar-panel-1.webp",
    alt: "solar system price Tamil Nadu",
    headline: "Quality Guaranteed",
    desc: "Every installation comes backed by a warranty and components tested to perform for decades — rain, heat, or shine.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const trigger = {
        trigger: sectionRef.current,
        start: "top 80%",
        invalidateOnRefresh: true,
      };

      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: trigger,
        },
      );

      if (cardsRef.current) {
        const cardEls =
          cardsRef.current.querySelectorAll<HTMLElement>(".why-card");
        gsap.fromTo(
          cardEls,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.13,
            scrollTrigger: trigger,
            delay: 0.2,
          },
        );
      }
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-background pt-30 py-20 px-4 md:px-10"
    >
      {/* Heading */}
      <div ref={headingRef} className="text-center mb-12 opacity-0">
        {/* <p className="text-xs font-mono tracking-[0.4em] text-red-500 uppercase mb-3">
          Why Fuji Solar
        </p> */}
        <h2
          className="text-4xl md:text-5xl font-bold text-gray-900 font-sans leading-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          Why <span className="text-brand-red">Fuji Solar.</span>
        </h2>
        <p className="text-gray-500 text-sm mt-4 max-w-lg mx-auto font-sans leading-relaxed">
          From the first call to the final panel - here&apos;s what makes Fuji
          Solar the trusted choice for residential setups and any commercial
          solar installation Tamil Nadu businesses require.
        </p>
      </div>

      {/* Cards grid */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
      >
        {cards.map((card) => (
          <div
            key={card.headline}
            className="why-card group relative rounded-3xl overflow-hidden opacity-0"
            style={{ aspectRatio: "3 / 4" }}
          >
            {/* Background image */}
            <Image
              src={card.src}
              alt={card.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient — dark at bottom */}
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-black/10" />

            {/* Content bottom */}
            <div className="absolute bg-white/5 backdrop-blur-sm bottom-0 left-0 right-0 p-5 flex flex-col gap-2">
              <div className="">
                <h3 className="text-white text-base font-bold font-sans leading-snug">
                  {card.headline}
                </h3>
                <p className="text-white/60 text-xs font-sans leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
