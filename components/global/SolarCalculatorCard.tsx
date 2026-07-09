"use client";

import React, { useState, useEffect } from "react";
import { Info, Zap, ArrowRight, Calculator, X } from "lucide-react";
import Link from "next/link";

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

interface SolarCalculatorCardProps {
  onCalculateCallback?: () => void;
  isModal?: boolean;
  onClose?: () => void;
}

export default function SolarCalculatorCard({
  onCalculateCallback,
  isModal = false,
  onClose,
}: SolarCalculatorCardProps) {
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
    if (onCalculateCallback) {
      onCalculateCallback();
    }
  };

  useEffect(() => {
    if (showResults) {
      calculateSavings();
    }
  }, [bill, commercialUnits, propertyType]);

  const rootClasses = isModal
    ? "bg-white rounded-3xl shadow-2xl border border-gray-150 w-[calc(100vw-24px)] sm:w-[90vw] sm:max-w-[480px] md:w-[500px] max-h-[90vh] flex flex-col overflow-hidden relative"
    : "bg-white rounded-3xl shadow-lg shadow-gray-200/50 p-6 md:p-7 border border-gray-100 w-full relative";

  return (
    <div className={rootClasses}>
      {isModal && (
        <div className="flex items-center justify-between px-5 py-4 sm:px-6 border-b border-gray-100 shrink-0">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-brand-red animate-pulse" />
            <span id="modal-title-text">Solar Calculator</span>
          </h3>
          {onClose && (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-red rounded-lg p-1.5 cursor-pointer transition-colors"
              aria-label="Close Solar Calculator"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      )}

      {/* Calculator Body - Scrollable only in Modal Mode */}
      <div
        className={
          isModal
            ? "p-5 sm:p-6 overflow-y-auto overflow-x-hidden flex-1 space-y-6"
            : "space-y-6"
        }
      >
        {/* Property Type Switcher */}
        <div className="flex bg-gray-100 p-1.5 rounded-xl relative shrink-0">
          <div
            className="absolute inset-y-1.5 bg-white rounded-lg shadow-sm transition-all duration-300 ease-in-out"
            style={{
              left: propertyType === "Residential" ? "6px" : "50%",
              right: propertyType === "Residential" ? "50%" : "6px",
            }}
          />
          <button
            onClick={() => setPropertyType("Residential")}
            className={`relative flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors duration-300 z-10 cursor-pointer ${
              propertyType === "Residential"
                ? "text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Residential
          </button>
          <button
            onClick={() => setPropertyType("Commercial")}
            className={`relative flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors duration-300 z-10 cursor-pointer ${
              propertyType === "Commercial"
                ? "text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Commercial
          </button>
        </div>

        {/* Input Area */}
        <div className="space-y-4 shrink-0">
          <div className="flex justify-between items-center gap-4">
            <label className="text-xs sm:text-sm font-bold text-gray-900 tracking-wider">
              {propertyType === "Residential" ? (
                <>
                  <span className="uppercase">Electricity Bill</span>{" "}
                  <span className="text-[10px] text-gray-500 font-normal normal-case">(Bimonthly)</span>
                </>
              ) : (
                <span className="uppercase">Bi-Monthly Units</span>
              )}
            </label>
            <span className="text-base sm:text-lg md:text-xl font-bold text-brand-red shrink-0 whitespace-nowrap">
              {propertyType === "Residential"
                ? `₹${bill.toLocaleString()}`
                : `${commercialUnits.toLocaleString()} Units`}
            </span>
          </div>

          {/* Helper Text */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-[10px] sm:text-xs text-gray-500">
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
            <div className="relative animate-fade-in w-full">
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
                className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer range-slider focus:outline-none focus:ring-2 focus:ring-brand-red/30"
                style={{
                  background: `linear-gradient(to right, #E74C3C 0%, #E74C3C ${((bill - 2000) / (28000 - 2000)) * 100}%, #E5E7EB ${((bill - 2000) / (28000 - 2000)) * 100}%, #E5E7EB 100%)`,
                }}
              />
              <div className="flex justify-between text-[10px] sm:text-xs text-gray-400 font-medium pt-2.5">
                <span>₹2,000</span>
                <span>₹15,000</span>
                <span>₹28,000</span>
              </div>
            </div>
          ) : (
            <div className="relative animate-fade-in w-full">
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
                className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer range-slider focus:outline-none focus:ring-2 focus:ring-brand-red/30"
                style={{
                  background: `linear-gradient(to right, #E74C3C 0%, #E74C3C ${((commercialUnits - 500) / (6000 - 500)) * 100}%, #E5E7EB ${((commercialUnits - 500) / (6000 - 500)) * 100}%, #E5E7EB 100%)`,
                }}
              />
              <div className="flex justify-between text-[10px] sm:text-xs text-gray-400 font-medium pt-2.5">
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
          className="w-full py-3 sm:py-3.5 bg-brand-red text-white rounded-xl font-bold text-sm sm:text-base hover:bg-[#C0392B] transition-all transform active:scale-[0.98] shadow-md shadow-brand-red/20 flex items-center justify-center gap-2 cursor-pointer shrink-0"
        >
          Calculate Savings
        </button>

        {/* Result Section */}
        {showResults && (
          <div className="pt-1 animate-fade-in space-y-4 shrink-0">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 sm:p-5 space-y-4 shadow-sm">
              {/* System Size Block */}
              <div className="flex justify-between items-center pb-4 border-b border-gray-200 gap-4">
                <div className="flex items-center gap-2 min-w-0">
                  <Zap className="w-4 h-4 text-[#16A34A] shrink-0" />
                  <p className="text-[10px] sm:text-xs font-bold text-gray-600 uppercase tracking-wider leading-normal md:leading-relaxed">
                    Recommended Solar System
                  </p>
                </div>
                <p className="text-base sm:text-lg md:text-xl font-extrabold text-gray-900 shrink-0 whitespace-nowrap">
                  <AnimatedNumber
                    value={results.systemSize}
                    isDecimal
                  />{" "}
                  <span className="text-xs sm:text-sm text-gray-500 font-medium">kW</span>
                </p>
              </div>

              {/* Bi-Monthly Savings Block */}
              <div className="flex justify-between items-center gap-4">
                <div className="flex flex-wrap items-center gap-1.5 min-w-0">
                  <p className="text-[10px] sm:text-xs font-bold text-gray-600 uppercase tracking-wider leading-normal md:leading-relaxed">
                    {propertyType === "Residential"
                      ? "Estimated Savings"
                      : "Est. Bi-Monthly Savings"}
                  </p>
                  {propertyType === "Residential" && (
                    <span className="text-[9px] sm:text-[10px] text-green-500 bg-green-100 px-1.5 py-0.5 rounded font-bold tracking-wide shrink-0">
                      BI-MONTHLY
                    </span>
                  )}
                </div>
                <p className="text-base sm:text-lg md:text-xl font-extrabold text-green-600 shrink-0 whitespace-nowrap">
                  ₹<AnimatedNumber value={results.periodSavings} />
                </p>
              </div>

              {/* Yearly Savings Block */}
              <div className="flex justify-between items-center pt-3 border-t border-gray-200/60 gap-4">
                <p className="text-[10px] sm:text-xs font-bold text-gray-600 uppercase tracking-wider leading-normal md:leading-relaxed min-w-0">
                  Est. Yearly Savings
                </p>
                <p className="text-sm sm:text-base md:text-lg font-bold text-green-600 shrink-0 whitespace-nowrap">
                  ₹<AnimatedNumber value={results.yearly} />
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 opacity-75">
              <Info className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
              <p className="text-[9px] sm:text-[10px] text-gray-500 leading-relaxed font-medium">
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
                className="w-full py-3 px-4 sm:py-3.5 bg-gray-900 text-white rounded-xl font-bold text-xs sm:text-sm hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group shadow-md shadow-gray-900/10 cursor-pointer"
              >
                Get a Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            </div>
          </div>
        )}
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
    </div>
  );
}
