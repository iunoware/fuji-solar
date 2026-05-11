"use client";

import React, { useState, useEffect } from "react";
import { Calculator, CheckCircle2, ArrowRight, Info, Zap } from "lucide-react";
import Link from "next/link";
// import CustomButton from "../../components/atoms/CustomButton";

const solarPlans = [
  {
    min: 2000,
    max: 3000,
    systemSize: 2.2,
    units: 600,
    cost: 100000,
    ebBill: 250,
  },
  {
    min: 4000,
    max: 6000,
    systemSize: 3.3,
    units: 900,
    cost: 132000,
    ebBill: 350,
  },
  {
    min: 7000,
    max: 9000,
    systemSize: 4,
    units: 1200,
    cost: 172000,
    ebBill: 450,
  },
  {
    min: 10000,
    max: 12000,
    systemSize: 5,
    units: 1400,
    cost: 232000,
    ebBill: 550,
  },
  {
    min: 13000,
    max: 15000,
    systemSize: 6,
    units: 1700,
    cost: 282000,
    ebBill: 650,
  },
  {
    min: 16000,
    max: 18000,
    systemSize: 7,
    units: 2000,
    cost: 352000,
    ebBill: 750,
  },
  {
    min: 19000,
    max: 20000,
    systemSize: 8,
    units: 2300,
    cost: 397000,
    ebBill: 850,
  },
  {
    min: 21000,
    max: 23000,
    systemSize: 9,
    units: 2700,
    cost: 447000,
    ebBill: 950,
  },
  {
    min: 24000,
    max: 28000,
    systemSize: 10,
    units: 3000,
    cost: 472000,
    ebBill: 1200,
  },
];

const commercialPlans = [
  { min: 250, max: 600, systemSize: 1 },
  { min: 601, max: 900, systemSize: 2 },
  { min: 901, max: 1200, systemSize: 3 },
  { min: 1201, max: 1400, systemSize: 4 },
  { min: 1401, max: 1700, systemSize: 5 },
  { min: 1701, max: 2000, systemSize: 6 },
  { min: 2001, max: 2300, systemSize: 7 },
  { min: 2301, max: 2700, systemSize: 8 },
  { min: 2701, max: 3000, systemSize: 9 },
  { min: 3001, max: 6000, systemSize: 10 },
];

function AnimatedNumber({
  value,
  isDecimal = false,
}: {
  value: number;
  isDecimal?: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 800;
    const startValue = displayValue;
    if (startValue === value) return;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setDisplayValue(startValue + (value - startValue) * easeProgress);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, displayValue]);

  if (isDecimal) {
    const rounded = Math.round(displayValue * 10) / 10;
    return <>{rounded % 1 === 0 ? rounded : rounded.toFixed(1)}</>;
  }
  return <>{Math.round(displayValue).toLocaleString()}</>;
}

const SolarCalculator = () => {
  const [propertyType, setPropertyType] = useState<
    "Residential" | "Commercial"
  >("Residential");
  const [bill, setBill] = useState<number>(2000);
  const [commercialUnits, setCommercialUnits] = useState<number>(500);

  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({
    periodSavings: 0,
    yearly: 0,
    systemSize: 0,
    unitsOffset: 0,
  });

  const calculateSavings = () => {
    if (propertyType === "Residential") {
      const billValue = Math.max(
        2000,
        Math.min(28000, Math.round(Number(bill))),
      );
      const plan =
        solarPlans.find((p) => billValue >= p.min && billValue <= p.max) ||
        solarPlans.reduce((prev, curr) =>
          Math.abs(curr.min - billValue) < Math.abs(prev.min - billValue)
            ? curr
            : prev,
        );

      const biMonthlySavings = billValue - plan.ebBill;
      const yearlySavings = biMonthlySavings * 6;

      setResults({
        periodSavings: biMonthlySavings,
        yearly: yearlySavings,
        systemSize: plan.systemSize,
        unitsOffset: plan.units,
      });
    } else {
      const reducedUnits = Math.round(commercialUnits / 2);
      const biMonthlySavings = reducedUnits * 11;
      const yearlySavings = biMonthlySavings * 6;

      const plan =
        commercialPlans.find(
          (p) => reducedUnits >= p.min && reducedUnits <= p.max,
        ) || commercialPlans[0];

      setResults({
        periodSavings: biMonthlySavings,
        yearly: yearlySavings,
        systemSize: plan.systemSize,
        unitsOffset: reducedUnits,
      });
    }
    setShowResults(true);
  };

  useEffect(() => {
    if (showResults) {
      calculateSavings();
    }
  }, [bill, commercialUnits, propertyType]);

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

            <div className="bg-white rounded-3xl shadow-lg shadow-gray-200/50 p-6 md:p-7 border border-gray-100">
              <div className="space-y-6">
                {/* Property Type Switcher */}
                <div className="flex bg-gray-100 p-1.5 rounded-xl relative">
                  <div
                    className="absolute inset-y-1.5 bg-white rounded-lg shadow-sm transition-all duration-300 ease-in-out"
                    style={{
                      left: propertyType === "Residential" ? "6px" : "50%",
                      right: propertyType === "Residential" ? "50%" : "6px",
                    }}
                  />
                  <button
                    onClick={() => setPropertyType("Residential")}
                    className={`relative flex-1 py-2.5 text-sm font-bold rounded-lg transition-colors duration-300 z-10 ${
                      propertyType === "Residential"
                        ? "text-gray-900"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Residential
                  </button>
                  <button
                    onClick={() => setPropertyType("Commercial")}
                    className={`relative flex-1 py-2.5 text-sm font-bold rounded-lg transition-colors duration-300 z-10 ${
                      propertyType === "Commercial"
                        ? "text-gray-900"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Commercial
                  </button>
                </div>

                {/* Input Area */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-bold text-gray-900 tracking-wider">
                      {propertyType === "Residential" ? (
                        <>
                          <span className="uppercase">Electricity Bill</span>{" "}
                          (Bimonthly)
                        </>
                      ) : (
                        <span className="uppercase">
                          Bi-Monthly Unit Consumption
                        </span>
                      )}
                    </label>
                    <span className="text-xl font-bold text-brand-red">
                      {propertyType === "Residential"
                        ? `₹${bill.toLocaleString()}`
                        : `${commercialUnits.toLocaleString()} Units`}
                    </span>
                  </div>

                  {/* Helper Text */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <span className="animate-pulse">←</span>
                      <span className="font-medium">
                        Drag slider to adjust your{" "}
                        {propertyType === "Residential" ? "bill" : "units"}
                      </span>
                      <span className="animate-pulse">→</span>
                    </div>
                  </div>

                  {/* Range Input with Progress Fill */}
                  {propertyType === "Residential" ? (
                    <div className="relative animate-fade-in">
                      <input
                        type="range"
                        min="2000"
                        max="28000"
                        step="1000"
                        value={bill}
                        onChange={(e) =>
                          setBill(
                            Math.max(
                              2000,
                              Math.min(28000, Number(e.target.value)),
                            ),
                          )
                        }
                        className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer range-slider"
                        style={{
                          background: `linear-gradient(to right, #E74C3C 0%, #E74C3C ${((bill - 2000) / (28000 - 2000)) * 100}%, #E5E7EB ${((bill - 2000) / (28000 - 2000)) * 100}%, #E5E7EB 100%)`,
                        }}
                      />
                      <div className="flex justify-between text-xs text-gray-400 font-medium pt-3">
                        <span>₹2,000</span>
                        <span>₹15,000</span>
                        <span>₹28,000</span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative animate-fade-in">
                      <input
                        type="range"
                        min="500"
                        max="6000"
                        step="100"
                        value={commercialUnits}
                        onChange={(e) =>
                          setCommercialUnits(
                            Math.max(
                              500,
                              Math.min(6000, Number(e.target.value)),
                            ),
                          )
                        }
                        className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer range-slider"
                        style={{
                          background: `linear-gradient(to right, #E74C3C 0%, #E74C3C ${((commercialUnits - 500) / (6000 - 500)) * 100}%, #E5E7EB ${((commercialUnits - 500) / (6000 - 500)) * 100}%, #E5E7EB 100%)`,
                        }}
                      />
                      <div className="flex justify-between text-xs text-gray-400 font-medium pt-3">
                        <span>500 Units</span>
                        <span>3,250 Units</span>
                        <span>6,000 Units</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Calculate Button */}
                <button
                  onClick={calculateSavings}
                  className="w-full py-3.5 bg-brand-red text-white rounded-xl font-bold text-base hover:bg-[#C0392B] transition-all transform active:scale-[0.98] shadow-md shadow-brand-red/20 flex items-center justify-center gap-2"
                >
                  Calculate Savings
                </button>

                {/* Result Section */}
                {showResults && (
                  <div className="pt-3 animate-fade-in space-y-4">
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 space-y-4 shadow-sm">
                      {/* System Size Block */}
                      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-[#16A34A]" />
                          <p className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                            Recommended Solar System
                          </p>
                        </div>
                        <p className="text-xl font-extrabold text-gray-900">
                          <AnimatedNumber
                            value={results.systemSize}
                            isDecimal
                          />{" "}
                          <span className="text-sm text-gray-500">kW</span>
                        </p>
                      </div>

                      {/* Bi-Monthly Savings Block */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <p className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                            {propertyType === "Residential"
                              ? "Estimated Savings"
                              : "Est. Bi-Monthly Savings"}
                          </p>
                          {propertyType === "Residential" && (
                            <span className="text-[10px] text-green-500 bg-green-100 px-1.5 py-0.5 rounded font-bold tracking-wide">
                              BI-MONTHLY
                            </span>
                          )}
                        </div>
                        <p className="text-xl font-extrabold text-green-600">
                          ₹<AnimatedNumber value={results.periodSavings} />
                        </p>
                      </div>

                      {/* Yearly Savings Block */}
                      <div className="flex justify-between items-center pt-3 border-t border-gray-200/60">
                        <p className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                          Est. Yearly Savings
                        </p>
                        <p className="text-lg font-bold text-green-600">
                          ₹<AnimatedNumber value={results.yearly} />
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 opacity-75">
                      <Info className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                      <p className="text-[10px] text-gray-500 leading-relaxed font-medium">
                        Estimated savings and system recommendations are
                        approximate values based on average electricity
                        consumption patterns and current EB tariffs. Actual
                        savings may vary depending on usage, weather conditions,
                        tariff changes, roof conditions, and system performance.
                      </p>
                    </div>

                    <div className="pt-1">
                      <Link
                        href="/contact"
                        className="w-full py-3.5 px-6 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group shadow-md shadow-gray-900/10"
                      >
                        Get a Free Consultation
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default SolarCalculator;
