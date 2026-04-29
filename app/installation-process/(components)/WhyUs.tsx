"use client";

import React, { useRef } from "react";
import {
  Eye,
  Infinity as EndToEnd,
  FileText,
  Users,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Eye,
    title: "Transparent Process",
    description:
      "Full visibility into every stage of your solar journey, from initial quote to final activation.",
  },
  {
    icon: EndToEnd,
    title: "End-to-End Service",
    description:
      "We handle everything: design, engineering, procurement, and installation—no third parties.",
  },
  {
    icon: FileText,
    title: "Government Subsidy Assistance",
    description:
      "Navigating complex paperwork for local and federal incentives so you maximize your savings.",
  },
  {
    icon: Users,
    title: "Expert Installation Team",
    description:
      "Our certified technicians ensure precision mounting and wiring for peak system performance.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Safety Focus",
    description:
      "Rigorous testing and safety protocols that exceed industry standards for your peace of mind.",
  },
  {
    icon: Headphones,
    // title: "Ongoing Support",
    title: "Support within 48hrs",
    description:
      "Fast-response after-sales assistance with technical support and issue resolution within 24 to 48 hours.",
  },
];

export default function WhyUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Using string selector with scope is more robust
      gsap.fromTo(
        ".feature-card",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".feature-card-grid",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="py-24 lg:py-32 bg-linear-to-b from-white to-[#fcfdfc] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 lg:mb-24">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-red/5 text-brand-red text-sm font-bold tracking-wider uppercase mb-6">
            Our Advantage
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Why Our Process <span className="text-brand-red">Works</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
            Experience a seamless, worry-free transition to renewable energy with a
            methodology refined through thousands of successful installations.
          </p>
        </div>

        <div className="feature-card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group bg-white p-10 rounded-4xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-100/50 flex flex-col items-start hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-red/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-red transition-all duration-500">
                <feature.icon className="w-7 h-7 text-brand-red group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-base font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
