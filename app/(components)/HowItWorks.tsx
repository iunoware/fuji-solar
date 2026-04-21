"use client";

import React, { useEffect, useRef } from "react";
import { MessageSquare, Ruler, Settings, Zap } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: "01",
    title: "Consultation",
    description: "Share your energy needs with us for a personalized plan.",
    icon: <MessageSquare className="w-8 h-8" />,
    offset: "-translate-y-8",
  },
  {
    id: "02",
    title: "Site Assessment",
    description:
      "We design the ideal solar solution for your specific property.",
    icon: <Ruler className="w-8 h-8" />,
    offset: "translate-y-8",
  },
  {
    id: "03",
    title: "Installation",
    description: "Professional setup by our certified solar experts.",
    icon: <Settings className="w-8 h-8" />,
    offset: "-translate-y-8",
  },
  {
    id: "04",
    title: "Power & Savings",
    description: "Start saving immediately with clean, renewable energy.",
    icon: <Zap className="w-8 h-8" />,
    offset: "translate-y-8",
  },
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const connectorRef = useRef<HTMLDivElement>(null);
  const stepsRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the connector line growth
      gsap.fromTo(
        connectorRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );

      // Animate steps
      stepsRefs.current.forEach((step, index) => {
        gsap.fromTo(
          step,
          { opacity: 0, y: index % 2 === 0 ? 50 : -50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 bg-green-50/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It <span className="text-brand-red">Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From consultation to installation, we make switching to solar simple
            and seamless.
          </p>
        </div>

        {/* Journey Container */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div
            ref={connectorRef}
            className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-linear-to-r from-[#16A34A] to-brand-red opacity-30 -translate-y-1/2 z-0"
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => {
                  stepsRefs.current[index] = el;
                }}
                className={`flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 group`}
              >
                {/* Desktop Alternating Layout wrapper */}
                <div
                  className={`flex flex-col items-center ${
                    index % 2 === 0 ? "md:-translate-y-12" : "md:translate-y-12"
                  }`}
                >
                  {/* Step Number & Icon */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full bg-white border border-gray-100 shadow-xl flex items-center justify-center text-brand-yellow transition-colors duration-300 group-hover:border-brand-red">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-white border-2 border-gray-50 flex items-center justify-center text-xs font-bold text-gray-400 shadow-sm transition-colors duration-300 group-hover:text-brand-red group-hover:border-brand-red/20">
                      {step.id}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="max-w-[240px]">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-brand-red">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Mobile Connector (Vertical) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden w-px h-12 bg-linear-to-b from-[#16A34A] to-brand-red opacity-30 my-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-green-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default HowItWorks;
