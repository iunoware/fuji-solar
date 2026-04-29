"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Sun, Zap, Home, Leaf } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Awarness = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Left side animations
      gsap.fromTo(
        leftRef.current?.children ? Array.from(leftRef.current.children) : [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        },
      );

      // Right side steps animations
      const steps = rightRef.current?.querySelectorAll(".step-card");
      if (steps) {
        gsap.fromTo(
          steps,
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
            },
          },
        );
      }
    },
    { scope: containerRef },
  );

  return (
    <section className="bg-gray-50/50 py-24 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
      >
        {/* Left Column: Awareness Content */}
        <div ref={leftRef} className="flex flex-col">
          <div className="flex items-center gap-3 mb-6 w-fit rounded-full bg-orange-100/50 px-4 py-2 border border-orange-200/50">
            <Leaf className="w-4 h-4 text-brand-red" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-red">
              Environmental Impact
            </span>
          </div>

          <h2 className="text-[clamp(36px,5vw,56px)] leading-[1.1] font-bold text-gray-900 mb-6 tracking-tight">
            Take a <span className="text-brand-red">Decision</span>
            <br />
            Today.
          </h2>

          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl font-medium">
            The sun provides massive energy every single day. Harnessing this{" "}
            <span className="text-brand-red font-semibold">free energy</span> is both
            practical and necessary for a sustainable future.
          </p>

          <p className="text-base text-gray-500 mb-10 leading-relaxed max-w-xl">
            Solar power is clean and renewable, producing{" "}
            <span className="text-gray-900 font-medium">zero emissions</span>. By
            switching to solar, you actively reduce your carbon footprint and contribute
            to a healthier environment for generations to come.
          </p>

          {/* Impact Highlight */}
          <div className="relative overflow-hidden bg-white border border-gray-200 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-lg group hover:border-brand-red/30 transition-colors duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110 duration-500" />
            <div className="relative z-10 flex items-start gap-5">
              <div className="bg-brand-red/10 p-3 rounded-xl">
                <Leaf className="w-6 h-6 text-brand-red" />
              </div>
              <div>
                {/* <p className="text-2xl font-bold text-gray-900 mb-1">52 kg</p> */}
                {/* <p className="text-sm text-gray-600 leading-relaxed">
                  of CO₂ emissions can be saved for every{" "}
                  <strong className="text-gray-900">100 kWh</strong> of solar energy
                  produced.
                </p> */}
                <p className="text-2xl font-bold text-gray-900 mb-1">1.3-2 Metric Tons</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  of CO₂ emissions can be saved annually with a{" "}
                  <strong className="text-gray-900">1kW</strong> solar system
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: How it works */}
        <div className="relative">
          <div className="absolute -inset-4 bg-linear-to-b from-gray-100/50 to-transparent rounded-3xl -z-10" />

          <div className="mb-10 lg:mb-12">
            <h3 className="text-2xl font-bold text-gray-900">How Solar Power Works</h3>
            <p className="text-gray-500 mt-2 text-sm">
              A simple, seamless three-step process.
            </p>
          </div>

          <div ref={rightRef} className="flex flex-col gap-5">
            {/* Step 1 */}
            <div className="step-card group bg-white border border-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-brand-red/20 relative overflow-hidden flex gap-5 items-center">
              <div className="bg-gray-50 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 p-4 rounded-xl shrink-0">
                <Sun className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-bold text-brand-red tracking-wider uppercase">
                    01
                  </span>
                  <h4 className="text-lg font-bold text-gray-900">Solar Panels</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Capture and convert sunlight directly into electricity using the highly
                  efficient photovoltaic effect.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="step-card group bg-white border border-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-brand-red/20 relative overflow-hidden flex gap-5 items-center">
              <div className="bg-gray-50 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 p-4 rounded-xl shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-bold text-brand-red tracking-wider uppercase">
                    02
                  </span>
                  <h4 className="text-lg font-bold text-gray-900">Inverter System</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Converts the generated raw DC power into stable, usable AC power for
                  your household appliances.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="step-card group bg-white border border-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-brand-red/20 relative overflow-hidden flex gap-5 items-center">
              <div className="bg-gray-50 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 p-4 rounded-xl shrink-0">
                <Home className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-bold text-brand-red tracking-wider uppercase">
                    03
                  </span>
                  <h4 className="text-lg font-bold text-gray-900">Seamless Usage</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Powers your home effortlessly, utilizing the smart grid or battery
                  storage during low sunlight conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awarness;
