"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Founder() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const trigger = {
        trigger: sectionRef.current,
        start: "top 75%",
      };

      // Image slides in from left
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", scrollTrigger: trigger },
      );

      // Content children stagger in from right
      if (contentRef.current) {
        const children = contentRef.current.querySelectorAll<HTMLElement>(".fade-item");
        gsap.fromTo(
          children,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: trigger,
            delay: 0.2,
          },
        );
      }
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="bg-background py-20 px-4 md:px-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* ── LEFT — Founder Image ── */}
        <div ref={imageRef} className="opacity-0 relative">
          {/* Decorative red box behind image */}
          <div className="absolute -bottom-4 -left-4 w-full h-full rounded-3xl border-2 border-red-200 z-0" />

          {/* Image container */}
          <div className="relative z-10 rounded-3xl overflow-hidden aspect-4/5 w-full">
            <Image
              src="/images/founder.webp"
              alt="Immanuvel - Founder of Fuji Solar"
              fill
              className="object-cover object-top"
            />
            {/* Subtle bottom gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />

            {/* Badge over image */}
            <div className="absolute bottom-5 left-5">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-sm">
                <p className="text-gray-900 text-sm font-bold font-sans">Immanuvel</p>
                <p className="text-brand-red text-[10px] font-mono tracking-widest uppercase">
                  Founder · Fuji Solar
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT — Content ── */}
        <div ref={contentRef} className="flex flex-col gap-6">
          {/* Eyebrow */}
          <div className="fade-item opacity-0 flex items-center gap-3">
            <span className="w-6 h-px bg-brand-red" />
            <span className="text-brand-red text-[10px] font-mono tracking-[0.4em] uppercase">
              Meet the Founder
            </span>
          </div>

          {/* Name + title */}
          <div className="fade-item opacity-0">
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 font-sans leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Immanuvel
            </h2>
            <p className="text-gray-400 text-sm font-sans mt-1">
              Founder &amp; Managing Director
            </p>
          </div>

          {/* Quote */}
          <div className="fade-item opacity-0 border-l-2 border-brand-red pl-4">
            <p className="text-gray-700 text-base italic font-sans leading-relaxed">
              &quot;Solar isn&apos;t just our business — it&apos;s our belief. Every panel
              we install is a promise to the next generation.&quot;
            </p>
          </div>

          {/* Bio */}
          <div className="fade-item opacity-0 flex flex-col gap-3">
            <p className="text-gray-500 text-sm font-sans leading-relaxed">
              Immanuvel founded Fuji Solar in 1983 with a simple but powerful conviction —
              that clean, affordable energy should be within reach of every household and
              business. With a background in electrical engineering and a deep passion for
              renewable technology, he built Fuji Solar from the ground up into one of the
              most trusted solar brands in the region.
            </p>
            <p className="text-gray-500 text-sm font-sans leading-relaxed">
              Over 43 years, he has personally overseen hundreds of installations — never
              losing sight of the belief that doing right by the customer and doing right
              by the planet are never in conflict.
            </p>
          </div>

          {/* 43 years badge */}
          <div className="fade-item opacity-0 flex items-center gap-4 pt-2">
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-gray-900 font-mono leading-none">
                43
                <span className="text-brand-red text-2xl">+</span>
              </span>
              <span className="text-gray-400 text-[10px] font-mono tracking-widest uppercase mt-1">
                Years Leading Fuji Solar
              </span>
            </div>
            <span className="w-px h-10 bg-gray-200" />
            <p className="text-gray-400 text-xs font-sans leading-relaxed max-w-45">
              Still hands-on. Still driven by the same mission from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
