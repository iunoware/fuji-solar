"use client";

import React from "react";
import { Calculator, CheckCircle2 } from "lucide-react";
import SolarCalculatorCard from "@/components/global/SolarCalculatorCard";

const SolarCalculator = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Side: Content */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-green-100 text-[#16A34A] text-sm font-semibold shadow-sm mb-6">
                <Calculator className="w-4 h-4" /> Solar Calculator
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Calculate Your{" "}
                <span className="text-brand-red">Solar Savings</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Estimate your solar system price Tamil Nadu and see how much you
                can save on your electricity bills by switching to clean energy
                today.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Instant savings estimate",
                "Tailored for your usage",
                "No commitment required",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <p className="text-sm text-gray-500 italic">
                *Estimates are based on standard solar efficiency and average
                sunlight hours.
              </p>
            </div>
          </div>

          {/* Right Side: Calculator UI */}
          <div className="relative lg:col-span-5 lg:justify-self-end w-full max-w-md">
            {/* Background decorative blob */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -z-10" />
            <SolarCalculatorCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarCalculator;
