"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    stat: 950,
    suffix: "+",
    label: "Projects Completed",
    desc: "From rooftops to open fields, every project delivered with precision.",
  },
  {
    stat: 43,
    suffix: "+",
    label: "Years of Experience",
    desc: "Four decades of expertise in solar design, installation, and service.",
  },
  {
    stat: 800,
    suffix: "+",
    label: "Happy Customers",
    desc: "Homes and businesses across the region running on clean solar energy.",
  },
];

export default function Achievements() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const trigger = {
        trigger: sectionRef.current,
        start: "top 80%",
      };

      // Heading
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", scrollTrigger: trigger },
      );

      // Stat items stagger
      if (rowRef.current) {
        const items = rowRef.current.querySelectorAll<HTMLElement>(".achievement-item");
        gsap.fromTo(
          items,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: trigger,
            delay: 0.15,
          },
        );

        // Dividers
        const dividers = rowRef.current.querySelectorAll<HTMLElement>(".divider");
        gsap.fromTo(
          dividers,
          { opacity: 0, scaleY: 0 },
          {
            opacity: 1,
            scaleY: 1,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.15,
            scrollTrigger: trigger,
            delay: 0.3,
          },
        );
      }

      // Count-up
      if (rowRef.current) {
        rowRef.current.querySelectorAll<HTMLElement>("[data-stat]").forEach((el) => {
          const endValue = Number(el.dataset.stat);
          const obj = { value: 0 };
          gsap.to(obj, {
            value: endValue,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
            delay: 0.3,
            onUpdate: () => {
              el.textContent = Math.floor(obj.value).toLocaleString("en-IN");
            },
          });
        });
      }
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="bg-background py-20 px-4 md:px-10">
      {/* Heading */}
      <div ref={headingRef} className="text-center mb-14 opacity-0">
        <p className="text-xs font-mono tracking-[0.4em] text-red-500 uppercase mb-3">
          Our Legacy
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold text-gray-900 font-sans"
          style={{ letterSpacing: "-0.02em" }}
        >
          Milestones that <span className="text-red-500">matter.</span>
        </h2>
      </div>

      {/* Stats row */}
      <div
        ref={rowRef}
        className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center"
      >
        {achievements.map((a, i) => (
          <div key={a.label} className="flex sm:flex-row items-center w-full">
            {/* Stat item */}
            <div className="achievement-item opacity-0 flex flex-col items-center text-center px-8 py-8 sm:py-0 flex-1 gap-3">
              {/* Number */}
              <div className="flex items-end gap-1 leading-none">
                <span
                  data-stat={a.stat}
                  className="text-6xl md:text-7xl font-bold text-gray-900 font-mono leading-none"
                >
                  {a.stat}
                </span>
                <span className="text-3xl font-bold text-red-500 font-mono leading-none mb-1">
                  {a.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="text-gray-900 text-sm font-semibold font-sans tracking-wide uppercase">
                {a.label}
              </p>

              {/* Desc */}
              <p className="text-gray-400 text-xs font-sans leading-relaxed max-w-50">
                {a.desc}
              </p>
            </div>

            {/* Divider — between items only */}
            {i < achievements.length - 1 && (
              <div className="divider opacity-0 origin-center hidden sm:block w-px h-24 bg-gray-200 shrink-0" />
            )}
          </div>
        ))}
      </div>

      {/* Bottom red line */}
      <div className="mt-14 max-w-4xl mx-auto flex items-center gap-4">
        <span className="flex-1 h-px bg-gray-100" />
        <span className="text-gray-700 text-[10px] font-mono tracking-widest uppercase">
          Est. 1982 · Fuji Solar
        </span>
        <span className="flex-1 h-px bg-gray-100" />
      </div>
    </section>
  );
}
