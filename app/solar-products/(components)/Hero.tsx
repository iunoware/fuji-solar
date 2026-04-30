"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  // const statsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(badgeRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.7,
      })
        .from(
          taglineRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 0.7,
          },
          "-=0.4",
        )
        .from(
          headingRef.current,
          {
            opacity: 0,
            y: 50,
            duration: 0.9,
          },
          "-=0.5",
        )
        .from(
          subRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 0.7,
          },
          "-=0.5",
        )
        .from(
          dividerRef.current,
          {
            opacity: 0,
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.8,
          },
          "-=0.4",
        );
      // .from(
      //   statsRef.current!.children,
      //   {
      //     opacity: 0,
      //     y: 30,
      //     duration: 0.6,
      //     stagger: 0.15,
      //   },
      //   "-=0.4",
      // );
    },
    { scope: sectionRef },
  );
  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-background">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(234, 179, 8, 0.04) 0%, transparent 60%),
                            radial-gradient(circle at 80% 20%, rgba(234, 179, 8, 0.06) 0%, transparent 50%)`,
        }}
      />

      {/* Decorative sun arc — top right */}
      <div className="absolute -top-24 -right-24 w-105 h-105 rounded-full pointer-events-none border border-amber-100" />
      <div className="absolute -top-10 -right-10 w-65 h-65 rounded-full pointer-events-none border border-amber-100" />

      {/* Thin horizontal rule at the very top */}
      <div
        className="w-full h-0.75 "
        style={{
          background:
            "linear-gradient(to right, transparent, #eab308 30%, #f59e0b 70%, transparent)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 pt-20 pb-20 md:pt-28 md:pb-28">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* left — text content */}
          <div>
            {/* Main heading */}
            <h1
              ref={headingRef}
              className="text-5xl md:text-6xl font-bold mb-6 text-gray-900"
            >
              Solar Solutions,{" "}
              <span className="text-brand-red inline-block">Built to Last.</span>
            </h1>

            {/* tag line */}
            <p
              ref={taglineRef}
              className="text-sm font-semibold uppercase tracking-widest font-mono text-brand-red mb-4"
            >
              We make your roof work for you
            </p>

            {/* Sub-description */}
            <p
              ref={subRef}
              className="text-base md:text-lg leading-relaxed mb-10 text-gray-700"
            >
              From residential rooftops to large industrial installations, Fuji Solar
              delivers clean, reliable energy systems tailored to every need - engineered
              with four decades of precision and trust.
            </p>

            {/* Horizontal divider */}
            <div
              ref={dividerRef}
              className="h-px mb-10"
              style={{
                background:
                  "linear-gradient(to right, #eab308 0%, rgba(234,179,8,0.15) 100%)",
                maxWidth: "480px",
              }}
            />

            {/* Stats row */}
            {/* <div ref={statsRef} className="flex gap-10 flex-wrap">
              {[
                { value: "43+", label: "Years in Industry" },
                { value: "7", label: "Core Services" },
                { value: "950+", label: "Projects completed" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-3xl font-bold text-[#1c1917]">{stat.value}</span>
                  <span className="text-xs uppercase tracking-widest font-mono text-gray-700">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div> */}
          </div>

          {/* RIGHT — visual panel */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* Outer ring */}
            <div className="absolute w-95 h-95 rounded-full border-dashed border-2 border-amber-200" />

            {/* Inner glow card */}
            <div
              className="relative w-75 h-75 rounded-full flex flex-col items-center justify-center text-center"
              style={{
                background:
                  "radial-gradient(circle at 40% 35%, #fefce8 0%, #fef9c3 60%, #fde68a 100%)",
                boxShadow:
                  "0 30px 80px rgba(234,179,8,0.18), 0 0 0 1px rgba(234,179,8,0.12)",
              }}
            >
              {/* Sun icon SVG */}
              <svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-3"
              >
                <circle cx="36" cy="36" r="14" fill="#eab308" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                  <line
                    key={i}
                    x1="36"
                    y1="36"
                    x2={36 + 24 * Math.cos((deg * Math.PI) / 180)}
                    y2={36 + 24 * Math.sin((deg * Math.PI) / 180)}
                    stroke="#eab308"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.7"
                  />
                ))}
              </svg>

              <p className="text-sm font-semibold uppercase tracking-widest font-mono text-black">
                Fuji Solar
              </p>
              <p className="text-xs mt-1 text-gray-800">Powering Tomorrow</p>
            </div>

            {/* Floating service chips */}
            {[
              { label: "Hybrid Solar", angle: -60, r: 190 },
              { label: "Water Pump", angle: 0, r: 195 },
              { label: "Street Light", angle: 60, r: 190 },
              { label: "On-Grid", angle: 180, r: 195 },
              { label: "Off-Grid", angle: 240, r: 190 },
              { label: "Water Heater", angle: 120, r: 195 },
            ].map((chip) => {
              const rad = (chip.angle * Math.PI) / 180;
              const x = Math.cos(rad) * chip.r;
              const y = Math.sin(rad) * chip.r;
              return (
                <div
                  key={chip.label}
                  className="absolute px-3 py-1.5 rounded-full text-xs shadow-sm text-gray-700 font-semibold whitespace-nowrap font-mono bg-background border border-gray-300"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  {chip.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(254,254,254,0.8))",
        }}
      />
    </section>
  );
}
