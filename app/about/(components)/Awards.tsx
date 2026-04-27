"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Award, History, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    icon: <Award className="w-5 h-5 text-brand-red" />,
    value: "6",
    suffix: "+",
    label: "Industry Awards",
  },
  {
    icon: <History className="w-5 h-5 text-brand-red" />,
    value: "40",
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: <Zap className="w-5 h-5 text-brand-red" />,
    value: "500",
    suffix: "+",
    label: "Installations",
  },
];

export default function Awards() {
  const containerRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const trigger = {
        trigger: containerRef.current,
        start: "top 80%",
        invalidateOnRefresh: true,
      };

      // Left column animations
      gsap.fromTo(
        leftColRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: trigger,
        },
      );

      // Right column animation
      gsap.fromTo(
        rightColRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: trigger,
          delay: 0.3,
        },
      );

      // Stat count-up
      const statNumbers = containerRef.current.querySelectorAll("[data-stat]");
      statNumbers.forEach((el) => {
        const targetValue = parseInt((el as HTMLElement).dataset.stat || "0");
        const obj = { value: 0 };
        gsap.to(obj, {
          value: targetValue,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: trigger,
          delay: 0.6,
          onUpdate: () => {
            el.textContent = Math.floor(obj.value).toString();
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="bg-background py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ── LEFT COLUMN ── */}
        <div ref={leftColRef} className="space-y-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-brand-red" />
            <span className="text-brand-red text-xs font-mono tracking-[0.3em] uppercase">
              Excellence in Solar
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-sans"
            style={{ letterSpacing: "-0.02em" }}
          >
            Recognized by <br />
            <span className="text-brand-red">Industry Leaders.</span>
          </h2>

          {/* Subtext */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-xl font-sans">
            At Fuji Solar, our commitment to technical excellence and customer
            trust has earned us multiple prestigious recognitions. With over a
            decade of hands-on experience, we continue to lead the region in
            high-performance solar installations and sustainable energy
            strategy.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-xl bg-brand-red/5 flex items-center justify-center mb-1">
                  {stat.icon}
                </div>
                <div className="flex items-baseline gap-0.5">
                  <span
                    data-stat={stat.value}
                    className="text-3xl font-bold text-gray-900 font-mono"
                  >
                    0
                  </span>
                  <span className="text-xl font-bold text-brand-red font-mono">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-gray-500 text-[10px] font-mono tracking-widest uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-brand-red transition-all duration-300 group shadow-lg shadow-gray-900/10"
            >
              View All Achievements
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div ref={rightColRef} className="relative opacity-0">
          {/* Decorative Background Elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-red/10 rounded-full blur-2xl -z-10" />

          {/* Main Image Container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/20 aspect-square lg:aspect-4/5">
            <Image
              src="/images/solar-company-in-tamilnadu.webp"
              alt="Fuji Solar Industry Awards"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden sm:block">
            <p className="text-gray-900 text-xl font-bold font-sans">
              Top Rated
            </p>
            <p className="text-brand-red text-xs font-mono tracking-widest uppercase mt-1">
              Solar Installer 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
