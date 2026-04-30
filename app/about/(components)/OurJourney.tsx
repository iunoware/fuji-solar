"use client";

import React, { useRef } from "react";
import { Zap, Battery, Sun } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "1983",
    title: "The Beginning",
    description:
      "Started with TV signal boosters and voltage stabilizers, delivering reliable performance for everyday needs.",
    icon: Zap,
  },
  {
    year: "Growth",
    title: "Growth & Innovation",
    description:
      "Expanded into online and offline UPS systems, providing uninterrupted power solutions for homes and businesses.",
    icon: Battery,
  },
  {
    year: "Present",
    title: "The Solar Era",
    description:
      "For the past 16 years, focusing on Fuji Solar, delivering clean and sustainable energy solutions.",
    icon: Sun,
  },
];

const OurJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const mobileLineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Header animation
      gsap.fromTo(
        ".journey-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".journey-header",
            start: "top 85%",
          },
        },
      );

      // Line growing animation
      const lineAnim = {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          end: "bottom 80%",
          scrub: 1,
        },
      };

      if (lineRef.current) {
        gsap.fromTo(lineRef.current, { scaleY: 0 }, lineAnim);
      }
      if (mobileLineRef.current) {
        gsap.fromTo(mobileLineRef.current, { scaleY: 0 }, lineAnim);
      }

      // Timeline items animation
      itemRefs.current.forEach((item) => {
        if (!item) return;

        const node = item.querySelector(".timeline-node");
        const card = item.querySelector(".timeline-card");
        const year = item.querySelector(".timeline-year");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          },
        });

        if (node) {
          tl.fromTo(
            node,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
          );
        }

        if (card) {
          tl.fromTo(
            card,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
            "-=0.4",
          );
        }

        if (year) {
          tl.fromTo(
            year,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
            "-=0.6",
          );
        }
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="py-24 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 journey-header">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light">
            From powering homes to powering the future
          </p>
        </div>

        <div className="relative">
          {/* Vertical Center Line (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-0.5 bg-gray-200 hidden md:block">
            <div
              ref={lineRef}
              className="w-full h-full bg-emerald-500 origin-top"
            />
          </div>

          {/* Vertical Left Line (Mobile) */}
          <div className="absolute left-6 top-0 bottom-0 md:hidden w-0.5 bg-gray-200 -ml-px">
            <div
              ref={mobileLineRef}
              className="w-full h-full bg-emerald-500 origin-top"
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              const Icon = milestone.icon;

              return (
                <div
                  key={index}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className={`relative flex flex-col md:flex-row md:items-center justify-between w-full group ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Center Node */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-10 md:top-1/2 flex items-center justify-center w-12 h-12 bg-white rounded-full border-[3px] border-emerald-500 shadow-md z-10 timeline-node">
                    <Icon className="w-5 h-5 text-emerald-600" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-[45%] pl-20 md:pl-0 ${
                      isLeft
                        ? "md:pr-14 md:text-right"
                        : "md:pl-14 md:text-left"
                    } timeline-card`}
                  >
                    {/* Mobile Year */}
                    <div className="md:hidden mb-2 timeline-year">
                      <span className="text-sm font-bold text-emerald-600 tracking-widest uppercase">
                        {milestone.year}
                      </span>
                    </div>
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(16,185,129,0.08)] transition-all duration-300 hover:-translate-y-1 relative">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop Year */}
                  <div
                    className={`hidden md:flex w-[45%] ${
                      isLeft ? "pl-14 justify-start" : "pr-14 justify-end"
                    } timeline-year items-center`}
                  >
                    <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-200 group-hover:text-emerald-100 transition-colors duration-500 tracking-tighter">
                      {milestone.year}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
