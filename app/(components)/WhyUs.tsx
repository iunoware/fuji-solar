"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Users,
  Settings,
  ShieldCheck,
  Zap,
  HeartHandshake,
  Headset,
  ArrowRight,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Engineering Expertise",
    description:
      "Led by experienced engineering professionals ensuring technical precision in every project.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "End-to-End Solutions",
    description:
      "From custom design and feasibility studies to installation and lifetime support.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Trusted Quality",
    description:
      "High-performance systems using Tier-1 components built to last for decades.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Competitive Pricing",
    description:
      "Best market value without compromising on quality or safety standards.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "Customer-First Approach",
    description:
      "Focused on long-term relationships, transparency, and building lasting trust.",
  },
  {
    icon: <Headset className="w-6 h-6" />,
    title: "Reliable Support",
    description:
      "Dedicated after-sales service and remote monitoring you can count on 24/7.",
  },
];

const WhyUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in left content
      gsap.fromTo(
        leftContentRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );

      // Staggered fade in features
      featuresRef.current.forEach((feature, index) => {
        gsap.fromTo(
          feature,
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: feature,
              start: "top 85%",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Side: Content */}
          <div ref={leftContentRef} className="lg:sticky lg:top-32 space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-[#16A34A] text-sm font-semibold tracking-wide mb-6">
                ⭐ Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1] mb-6">
                Redefining Solar with{" "}
                <span className="text-brand-red">Excellence</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                As the best solar panel installation in Madurai, we combine
                engineering expertise and quality to deliver reliable solar
                solutions that stand the test of time.
              </p>
            </div>

            <div className="pt-4">
              <Link href={"/contact"}>
                <button className="flex items-center gap-2 text-gray-900 font-bold hover:text-brand-red transition-colors group">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side: Feature List */}
          <div className="relative pl-0 md:pl-8">
            {/* Timeline Vertical Line (Optional Premium) */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-linear-to-b from-green-50 via-green-100 to-transparent hidden md:block" />

            <div className="space-y-10 md:space-y-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    featuresRef.current[index] = el;
                  }}
                  className="relative group"
                >
                  {/* Item Bullet for Line */}
                  <div className="absolute -left-[33px] top-1 w-2 h-2 rounded-full bg-green-100 border-2 border-white ring-4 ring-white z-10 hidden md:block transition-colors group-hover:bg-brand-red" />

                  <div className="flex items-start gap-5">
                    {/* Icon Container */}
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-green-50/50 flex items-center justify-center text-[#16A34A] transition-all duration-300 group-hover:bg-brand-red group-hover:text-white group-hover:scale-110 shadow-sm">
                      {feature.icon}
                    </div>

                    {/* Text Content */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-brand-red">
                        {feature.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed max-w-md">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
