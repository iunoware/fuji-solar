"use client";

import React, { useEffect, useRef } from "react";
import { ChevronsDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomButton from "./atoms/CustomButton";

gsap.registerPlugin(ScrollTrigger);

export default function RenewableEnergyHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);
  const sideTextRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero text animations
    gsap.fromTo(
      heroTextRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.3 },
    );

    gsap.fromTo(
      subTextRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power3.out" },
    );

    gsap.fromTo(
      sideTextRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1, delay: 0.8, ease: "power3.out" },
    );

    gsap.fromTo(
      rightContentRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 1, delay: 1, ease: "power3.out" },
    );

    // Video shrinking animation
    gsap.to(videoContainerRef.current, {
      width: "92%",
      height: "92%",
      borderRadius: "2.5rem",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full flex items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Background Video */}
      <div
        ref={videoContainerRef}
        className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 overflow-hidden"
      >
        <video
          className="w-full h-full object-cover object-center"
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-black/30" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-30 w-full max-w-8xl py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side - Vertical Text */}
          <div className="hidden translate-y-50 lg:block lg:col-span-1">
            <div
              ref={sideTextRef}
              className="flex items-center justify-center opacity-0"
            >
              <div className="writing-mode-vertical flex items-center justify-center text-white/60 text-[10px] tracking-[0.3em] uppercase font-light">
                Explore <ChevronsDown className="h-5 w-auto" />
              </div>
            </div>
          </div>

          {/* Center - Main Headline */}
          <div className="lg:col-span-6 -translate-y-15">
            <h1
              ref={heroTextRef}
              className="text-5xl md:text-6xl lg:text-7xl text-white font-light leading-[1.1] tracking-tight mb-8 opacity-0"
            >
              Switch to Solar.
              <span className="block mt-2">Save More Every Month.</span>
            </h1>
          </div>

          {/* Right Side - Supporting Content */}
          <div className="lg:col-span-4 translate-y-40">
            <div ref={rightContentRef} className="opacity-0">
              <div className="mb-6">
                <h2 className="text-white/80 text-xs uppercase tracking-[0.2em] font-bold mb-4 border-l-2 border-emerald-500 pl-4">
                  Energy for Tomorrow
                </h2>
                <p
                  ref={subTextRef}
                  className="text-white/90 text-base lg:text-md leading-relaxed mb-8 pl-4"
                >
                  Clean, reliable, and cost-effective energy solutions for homes
                  and businesses. Driving the future of sustainable power.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pl-4">
                <CustomButton variant="primary">
                  <span>Get Started</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </CustomButton>
                <CustomButton variant="secondary">
                  <span>Learn More</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </CustomButton>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats/Info Bar */}
        {/* <div className="mt-20 lg:mt-32 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 border-t border-white/20 pt-8">
          <div className="text-center sm:text-left">
            <div className="text-3xl lg:text-4xl font-light text-white mb-2">
              2,487
            </div>
            <div className="text-white/60 text-sm uppercase tracking-wider">
              Connected Systems
            </div>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-3xl lg:text-4xl font-light text-white mb-2">
              270+
            </div>
            <div className="text-white/60 text-sm uppercase tracking-wider">
              New Projects
            </div>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-3xl lg:text-4xl font-light text-white mb-2">
              98%
            </div>
            <div className="text-white/60 text-sm uppercase tracking-wider">
              Customer Satisfaction
            </div>
          </div>
        </div> */}
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full"></div>
        </div>
      </div> */}

      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
}
