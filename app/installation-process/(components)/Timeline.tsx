"use client";

import React, { useRef } from "react";
import { MapPin, FileCheck, Wrench, Activity, Zap } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: MapPin,
    title: "Site Visit",
    duration: "1 Day",
    description: "On-site technical assessment.",
  },
  {
    icon: FileCheck,
    title: "Design & Approval",
    duration: "1 Day",
    description: "Engineering & permissions.",
  },
  {
    icon: Wrench,
    title: "Installation",
    duration: "2–3 Days",
    description: "Professional system setup.",
  },
  {
    icon: Activity,
    title: "Testing & Connection",
    duration: "1 Day",
    description: "Grid sync & safety checks.",
  },
  {
    icon: Zap,
    title: "System Activation",
    duration: "1 Day",
    description: "Generate clean energy.",
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Line animation
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 1,
          },
        },
      );

      // Steps staggered animation
      const stepElements = containerRef.current?.querySelectorAll(".timeline-step");
      if (stepElements) {
        gsap.from(stepElements, {
          opacity: 0,
          y: 20,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      }
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-red/5 text-brand-red text-sm font-bold tracking-wider uppercase mb-6">
            Project Timeline
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            How Long It <span className="text-brand-red">Takes</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
            A clear breakdown of your transition to clean energy, from the first visit to
            full system activation.
          </p>
        </div>

        <div className="relative">
          {/* Progress Line (Desktop) */}
          <div className="absolute top-12 left-0 w-full h-0.5 bg-gray-100 hidden lg:block" />
          <div
            ref={lineRef}
            className="absolute top-12 left-0 w-full h-0.5 bg-brand-red origin-left hidden lg:block shadow-[0_0_10px_rgba(255,105,0,0.3)]"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-4 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="timeline-step flex flex-col items-center text-center group"
              >
                {/* Icon Circle */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center mb-8 group-hover:border-brand-red transition-colors duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-brand-red/10 group-hover:-translate-y-1 transform">
                  <step.icon className="w-8 h-8 text-gray-400 group-hover:text-brand-red transition-colors duration-500" />

                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-brand-red text-white text-xs font-bold flex items-center justify-center border-4 border-white">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>

                <div className="inline-block px-3 py-1 rounded-lg bg-brand-red/5 text-brand-red text-sm font-bold mb-3">
                  {step.duration}
                </div>

                <p className="text-gray-500 text-sm font-light leading-relaxed max-w-45">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
