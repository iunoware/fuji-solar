"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "Your journey to clean energy begins with a personalized assessment of your home's potential.",
    points: [
      "Custom energy consumption analysis",
      "Financial benefit & ROI projection",
      "Tailored system design overview",
    ],
    image: "/images/consultation.png",
  },
  {
    number: "02",
    title: "Precision Site Survey",
    description:
      "Our engineering experts conduct a thorough technical evaluation of your property.",
    points: [
      "3D roof mapping & shadow analysis",
      "Structural integrity verification",
      "Electrical system compatibility check",
    ],
    image: "/images/site-visit.png",
  },
  {
    number: "03",
    title: "Custom System Design",
    description:
      "We engineer a high-performance system optimized for maximum sunlight capture.",
    points: [
      "Engineering-grade CAD layouts",
      "Component selection (Tier-1 only)",
      "Performance simulation reports",
    ],
    image: "/images/system-design.png",
  },
  {
    number: "04",
    title: "Approvals & Subsidies",
    description:
      "We navigate the complex paperwork and regulatory requirements on your behalf.",
    points: [
      "Government subsidy application",
      "Local utility grid-connection permits",
      "Safety & compliance documentation",
    ],
    image: "/images/subsidy.png",
  },
  {
    number: "05",
    title: "Professional Installation",
    description:
      "Our certified technicians bring your solar vision to life with surgical precision.",
    points: [
      "Premium mounting structure setup",
      "Expert panel & inverter integration",
      "Safe and concealed electrical wiring",
    ],
    image: "/images/installation.png",
  },
  {
    number: "06",
    title: "Testing & Activation",
    description:
      "We ensure everything is perfect before you start generating your own power.",
    points: [
      "System efficiency performance test",
      "Smart monitoring dashboard setup",
      "Grid-sync & final power-up",
    ],
    image: "/images/testing.png",
  },
];

export const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      // Progress line animation
      gsap.fromTo(
        progressLineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 25%",
            end: "bottom 75%",
            scrub: 1,
          },
        },
      );

      // Staggered reveal for rows
      rowRefs.current.forEach((row, index) => {
        const textCol = row.querySelector(".text-col");
        const imgCol = row.querySelector(".img-col");
        const node = row.querySelector(".timeline-node");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          node,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5 },
        )
          .fromTo(
            textCol,
            { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            "-=0.3",
          )
          .fromTo(
            imgCol,
            { x: index % 2 === 0 ? 50 : -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            "-=0.6",
          );
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative py-24 lg:py-48 bg-[#fefefe] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-32 lg:mb-48">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-red/5 text-brand-red text-sm font-bold tracking-wider uppercase mb-6">
            The Roadmap
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            Seamlessly Powered by{" "}
            <span className="text-brand-red">Expertise</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg lg:text-xl font-light">
            From the first handshake to the final switch-on, we manage every
            detail of your transition to clean energy.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Central Line Track (Desktop) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-100 hidden lg:block" />

          {/* Progress Fill (Desktop) */}
          <div
            ref={progressLineRef}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-brand-red origin-top shadow-[0_0_15px_rgba(255,105,0,0.3)] hidden lg:block"
          />

          <div className="space-y-32 lg:space-y-48">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) rowRefs.current[index] = el;
                }}
                className={`flex flex-col lg:flex-row items-center justify-between relative ${index % 2 === 0 ? "" : "lg:flex-row-reverse"}`}
              >
                {/* Center Node (Desktop) */}
                <div className="timeline-node hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-2 border-brand-red z-10 items-center justify-center shadow-xl shadow-brand-red/10">
                  <span className="text-brand-red font-bold text-sm">
                    {step.number}
                  </span>
                </div>

                {/* Text Content Column */}
                <div className="text-col w-full lg:w-[42%] space-y-6">
                  <div className="space-y-4">
                    <span className="lg:hidden inline-block text-brand-red font-bold text-lg mb-2">
                      Step {step.number}
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <ul className="space-y-4 pt-2">
                    {step.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-700 group"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-red group-hover:scale-150 transition-transform" />
                        <span className="text-sm md:text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Column */}
                <div className="img-col w-full lg:w-[42%] mt-10 lg:mt-0">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-brand-red/5 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
};
