"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const leaders = [
  {
    image: "/images/dayalRajesvaran.jpeg",
    alt: "D.Dayal Rajesvaran - Founder & CEO of Fuji Solar",
    name: "D.Dayal Rajesvaran",
    role: "Founder & CEO",
    heading: "The Foundation of Fuji Solar",
    body: "D.Dayal Rajesvaran founded Fuji Solar in 1983 with a simple but powerful conviction - that clean, affordable energy should be within reach of every household and business. Through deep technical expertise, he built Fuji Solar into one of the region's most trusted solar brands.",
    quote: "Building trust takes decades. Preserving it takes purpose.",
    imageLeft: true,
  },
  {
    image: "/images/immanuvelDevavaram.webp",
    alt: "Immanuvel Devavaram - Director Corporate Strategy & Marketing",
    name: "Immanuvel Devavaram",
    role: "Director – Corporate Strategy & Marketing",
    heading: "Leading Fuji Solar Forward",
    body: "As Director of Corporate Strategy & Marketing, Immanuvel drives Fuji Solar's next chapter through strategic growth, customer-first innovation, and a forward-thinking approach to renewable energy.",
    quote: "Trust is earned over time and protected through every action.",
    imageLeft: false,
  },
  {
    image: "/images/mohammedAli.png",
    alt: "Mohammed Ali - Head of Technology & Implementation",
    name: "Mohammed Ali",
    role: "Head – Technology & Implementation",
    heading: "Engineering Solar Excellence",
    body: "As Head of Technology & Implementation, Mohammed Ali leads the technical backbone of Fuji Solar. From system architecture to on-ground execution, he ensures every solar solution is delivered with precision, performance, and uncompromising quality.",
    quote: "Innovation succeeds when precision meets execution.",
    imageLeft: true,
  },
];

export default function Founder() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        },
      );

      // Each card animates on scroll
      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        const imageEl = card.querySelector(".card-image-wrap");
        const contentEl = card.querySelector(".card-content");
        const quoteEl = card.querySelector(".card-quote");

        const fromLeft = leaders[i].imageLeft;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            invalidateOnRefresh: true,
          },
        });

        // Image slides in from its side
        tl.fromTo(
          imageEl,
          { opacity: 0, x: fromLeft ? -60 : 60 },
          { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
        );

        // Content fades up
        tl.fromTo(
          contentEl,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6",
        );

        // Quote draws in last
        tl.fromTo(
          quoteEl,
          { opacity: 0, x: fromLeft ? 30 : -30 },
          { opacity: 1, x: 0, duration: 0.7, ease: "power3.out" },
          "-=0.5",
        );

        // Subtle parallax on image
        gsap.to(imageEl, {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 lg:py-28 w-full">
        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col items-center text-center mb-16 lg:mb-20 opacity-0"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-px bg-brand-red opacity-60" />
            <span className="text-brand-red text-sm font-mono tracking-[0.45em] uppercase font-semibold">
              Leadership Legacy
            </span>
            <span className="w-12 h-px bg-brand-red opacity-60" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[110%] max-w-4xl mb-4">
            Built by Vision. Carried Forward by Innovation.
          </h2>

          <p className="max-w-3xl text-gray-600 text-md leading-relaxed">
            For over 43 years, Fuji Solar has grown through generational leadership —
            built on D.Dayal Rajesvaran&apos;s pioneering vision and strengthened by
            Immanuvel&apos;s strategic direction for the future.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-16 lg:gap-24">
          {leaders.map((leader, i) => (
            <div
              key={leader.name}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className={`flex flex-col ${
                leader.imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-10 lg:gap-16 items-center`}
            >
              {/* Image */}
              <div className="card-image-wrap opacity-0 shrink-0 w-full max-w-sm lg:max-w-none lg:w-[320px] xl:w-90">
                <div className="relative w-full aspect-3/4 rounded-4xl overflow-hidden shadow-[0_24px_64px_-12px_rgba(0,0,0,0.12)] border border-white/20">
                  {/* Inner glow border */}
                  <div className="absolute inset-0 rounded-4xl border border-brand-red/20 shadow-[inset_0_0_24px_rgba(239,68,68,0.05)] z-20 pointer-events-none" />

                  <Image
                    src={leader.image}
                    alt={leader.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 360px"
                  />

                  {/* Name badge */}
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 w-[calc(100%-2.5rem)]">
                    <div className="bg-white/65 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-xl border border-white/50">
                      <h3 className="text-lg font-bold text-gray-900 leading-tight">
                        {leader.name}
                      </h3>
                      <p className="text-brand-red font-semibold text-xs mt-1">
                        {leader.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content + Quote */}
              <div className="flex flex-col gap-8 flex-1 min-w-0">
                {/* Main content */}
                <div className="card-content opacity-0">
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    {leader.heading}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                    {leader.body}
                  </p>
                </div>

                {/* Quote */}
                <div className="card-quote opacity-0">
                  <div className="border-l-4 border-brand-red pl-6 py-1">
                    {/* Large decorative quote mark */}
                    <span className="block text-brand-red/20 font-serif text-6xl leading-none -mb-4 select-none">
                      &ldquo;
                    </span>
                    <p className="text-gray-700 text-lg lg:text-xl italic font-serif leading-relaxed">
                      {leader.quote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
