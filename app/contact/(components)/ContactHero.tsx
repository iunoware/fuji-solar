"use client";

import React from "react";
import { Sun } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-green-50/50 to-white overflow-hidden">
      {/* Decorative Solar Icon in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] select-none">
        <Sun className="w-[500px] h-[500px] text-[#16A34A]" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Breadcrumb & Badge */}
        <div className="flex flex-col items-center mb-4">
          <nav className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">
            Home / Contact
          </nav>
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-100/50 text-[#16A34A] text-sm font-semibold tracking-wide">
            Contact Us
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
          Let’s Talk About Your <br className="hidden md:block" />
          <span className="text-brand-red">Solar Needs</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
          Have questions or ready to switch to solar? Our team of experts is here to guide you every step of the way to energy independence.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-brand-red hover:bg-[#C0392B] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl shadow-brand-red/20 flex items-center gap-2 group">
            Get Free Consultation
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
