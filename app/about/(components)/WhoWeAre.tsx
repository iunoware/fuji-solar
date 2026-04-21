"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Leaf, Wrench } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// const stats = [
//   { value: 43, suffix: "yrs", label: "In the Industry" },
//   { value: 800, suffix: "+", label: "Clients Served" },
//   { value: 950, suffix: "+", label: "Projects Completed" },
// ];

const values = [
  {
    icon: <Zap className="text-red-600" />,
    title: "Reliability",
    desc: "Built to perform in the harshest conditions, every system we install is engineered for decades of dependable output.",
  },
  {
    icon: <Leaf className="text-red-600" />,
    title: "Sustainability",
    desc: "We believe clean energy isn't a compromise — it's the smarter, more responsible path forward for every community.",
  },
  {
    icon: <Wrench className="text-red-600" />,
    title: "Craftsmanship",
    desc: "Four decades of hands-on experience means we bring precision and expertise to every project, big or small.",
  },
];

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Left column refs
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const narrativeRef = useRef<HTMLParagraphElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Right column refs
  const rightLabelRef = useRef<HTMLParagraphElement>(null);
  const valueCardsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const trigger = {
        trigger: sectionRef.current,
        start: "top 75%",
      };

      // countdown
      gsap.utils.toArray<HTMLElement>("[data-price]").forEach((el) => {
        const endValue = Number(el.dataset.price);
        const obj = { value: 0 };

        gsap.to(obj, {
          value: endValue,
          duration: 5,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            // once: true,
          },
          onUpdate: () => {
            el.textContent = `${Math.floor(obj.value).toLocaleString("en-IN")}`;
          },
          // onComplete: () => {
          //   el.textContent = "₹****";
          // },
        });
      });

      // Left column — staggered fade-up
      gsap.fromTo(
        [
          eyebrowRef.current,
          headlineRef.current,
          taglineRef.current,
          narrativeRef.current,
          quoteRef.current,
          statsRef.current,
        ],
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: trigger,
        },
      );

      // Right label
      gsap.fromTo(
        rightLabelRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: trigger,
          delay: 0.3,
        },
      );

      // Value cards — staggered
      if (valueCardsRef.current) {
        const cards = valueCardsRef.current.querySelectorAll<HTMLElement>(".value-card");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.14,
            scrollTrigger: trigger,
            delay: 0.35,
          },
        );
      }

      // Footer
      gsap.fromTo(
        footerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: trigger,
          delay: 0.75,
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      // className="relative w-full h-screen max-h-screen overflow-hidden bg-[#fefefe] flex items-center"
      className="relative w-full min-h-screen md:h-screen md:max-h-screen overflow-hidden bg-[#fefefe] flex items-center"
    >
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-linear(circle, #C8102E 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-10 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center h-full py-12">
        {/* left column*/}
        <div className="flex flex-col justify-center gap-6">
          {/* Eyebrow label */}
          <div ref={eyebrowRef} className="flex items-center gap-3 opacity-0">
            <span className="w-6 h-px bg-[#C8102E]" />
            <span className="text-[#C8102E] text-[10px] tracking-[0.4em] uppercase font-mono">
              Who We Are
            </span>
          </div>

          {/* Headline */}
          <div ref={headlineRef} className="opacity-0">
            <h2
              className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight font-sans"
              style={{ letterSpacing: "-0.02em" }}
            >
              Harnessing the sun{" "}
              {/* <span className="[-webkit-text-stroke:1.5px_#C8102E] text-transparent"> */}
              <span className="text-[#C8102E]">since 1982.</span>
            </h2>
          </div>

          {/* Tagline */}
          <p
            ref={taglineRef}
            className="text-lg text-[#C8102E] font-medium font-sans opacity-0"
            style={{ letterSpacing: "0.01em" }}
          >
            Powering lives. Protecting the planet.
          </p>

          {/* Brand narrative */}
          <p
            ref={narrativeRef}
            className="text-gray-600 text-sm leading-relaxed max-w-md font-sans opacity-0"
          >
            Fuji Solar was founded on a single conviction - that clean, affordable energy
            should be accessible to everyone. Over 43 years, we&apos;ve grown from a local
            pioneer into a trusted name across the industry, delivering solar solutions
            that stand the test of time, weather, and scale.
          </p>

          {/* Founder quote */}
          <div ref={quoteRef} className="border-l-2 border-[#E8B800] pl-4 opacity-0">
            <p className="text-gray-700 text-sm italic leading-relaxed font-sans">
              &quot;We didn&apos;t just want to sell solar panels — we wanted to change
              how the world thinks about energy. That mission still drives every project
              we take on.&quot;
            </p>
            <p className="text-gray-400 text-xs mt-2 tracking-widest uppercase font-mono">
              — Founder, Fuji Solar
            </p>
          </div>

          {/* Stats row */}
          {/* <div ref={statsRef} className="flex items-center gap-6 pt-2 opacity-0">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col">
                <div>
                  <span
                    data-price={s.value}
                    data-stat
                    className="text-3xl font-bold text-gray-900 leading-none font-mono"
                  >
                    {s.value}
                  </span>
                  <span className="text-[#C8102E] text-2xl">{s.suffix}</span>
                </div>

                <div>
                  <span className="text-gray-400 text-[10px] tracking-widest uppercase mt-1 font-sans">
                    {s.label}
                  </span>
                </div>
              </div>
            ))}
          </div> */}
        </div>

        {/* right column*/}
        <div className="flex flex-col justify-center gap-4">
          <p
            ref={rightLabelRef}
            className="text-gray-400 text-[10px] tracking-[0.35em] uppercase mb-1 font-mono opacity-0"
          >
            What Drives Us
          </p>

          <div ref={valueCardsRef} className="flex flex-col gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="value-card group flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50 hover:border-[#C8102E]/20 hover:bg-[#C8102E]/2 transition-colors duration-300 opacity-0"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:border-[#C8102E]/20 transition-colors duration-300">
                  {v.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-gray-900 text-sm font-semibold font-sans">
                    {v.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed font-sans">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative bottom element */}
          <div ref={footerRef} className="mt-2 flex items-center gap-3 opacity-0">
            <span className="flex-1 h-px bg-linear-to-r from-[#C8102E]/20 to-transparent" />
            <span className="text-gray-300 text-[10px] tracking-widest uppercase font-mono">
              Est. 1982 · Fuji Solar
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
