"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Home, Briefcase, Factory } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Sector {
  id: number;
  title: string;
  bg: string;
  icon: React.ReactNode;
  bullets: string[];
  accent: "yellow" | "red";
}

const sectors: Sector[] = [
  {
    id: 1,
    title: "Residential",
    bg: "bg-red-100",
    icon: <Home size={22} strokeWidth={1.8} />,
    bullets: [
      "Individual houses",
      "Villas",
      "Apartments",
      "Gated communities",
      "Farm houses",
    ],
    accent: "yellow",
  },
  {
    id: 2,
    title: "Commercial",
    bg: "bg-amber-100",
    icon: <Briefcase size={22} strokeWidth={1.8} />,
    bullets: [
      "Hospitals",
      "Offices & showrooms",
      "Malls & shopping centers",
      "Cinema theaters",
      "Schools & colleges",
    ],
    accent: "red",
  },
  {
    id: 3,
    title: "Industrial",
    bg: "bg-green-100",
    icon: <Factory size={22} strokeWidth={1.8} />,
    bullets: [
      "Factories",
      "Manufacturing units",
      "Small-scale industries",
      "Estates & farms",
      "Construction & mining",
    ],
    accent: "yellow",
  },
];

export default function SectorsWeServe() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".sector-heading", {
        opacity: 0,
        y: 24,
        duration: 0.65,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".sector-card", {
        opacity: 0,
        y: 36,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      data-navbar-theme="light"
      className="w-full bg-background py-20 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="sector-heading mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-[#eab308]" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a16207]">
              Who We Serve
            </span>
          </div>
          <h2
            className="text-[clamp(24px,4vw,36px)] font-bold text-[#1c1917] leading-[1.1] mb-3"
            style={{ letterSpacing: "-0.03em" }}
          >
            Solar solutions for every sector
          </h2>
          <p className="text-[15px] text-gray-500 max-w-xl leading-relaxed">
            From individual homes to large industrial estates, we deliver reliable solar
            energy tailored to your needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {sectors.map((sector) => {
            const isRed = sector.accent === "red";
            return (
              <div
                key={sector.id}
                // className={`sector-card relative overflow-hidden rounded-2xl bg-gray-50 shadow-lg flex flex-col gap-5 p-7
                //   ${isRed ? "border border-brand-red" : "border border-gray-200"}`}
                className={`${sector.bg} sector-card relative overflow-hidden rounded-2xl shadow-lg flex flex-col gap-5 p-7`}
              >
                {/* Top accent bar for highlighted card */}
                {isRed && (
                  <div className="absolute top-0 left-0 right-0 h-0.75 bg-brand-red rounded-t-2xl" />
                )}

                {/* Icon */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center
                    ${isRed ? "bg-orange-50 text-brand-red" : "bg-yellow-50 text-[#a16207]"}`}
                >
                  {sector.icon}
                </div>

                {/* Title + underline */}
                <div className="flex flex-col gap-2">
                  <h3
                    className="text-lg font-semibold text-[#1c1917]"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {sector.title}
                  </h3>
                  <div
                    className={`h-0.5 w-9 rounded-full ${isRed ? "bg-brand-red" : "bg-[#eab308]"}`}
                  />
                </div>

                {/* Bullets */}
                <ul className="flex flex-col gap-2.5">
                  {sector.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2.5 text-[13.5px] text-gray-800"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
