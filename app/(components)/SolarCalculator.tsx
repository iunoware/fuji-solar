"use client";

import React, { useState, useEffect } from "react";
import { Calculator, CheckCircle2, ArrowRight } from "lucide-react";
// import CustomButton from "../../components/atoms/CustomButton";

const SolarCalculator = () => {
  const [bill, setBill] = useState<number>(3000);
  const [propertyType, setPropertyType] = useState<string>("Residential");
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({
    monthly: 0,
    yearly: 0,
    systemSize: 0,
  });

  const calculateSavings = () => {
    // Simple logic as requested
    const monthlySavings = bill * 0.7;
    const yearlySavings = monthlySavings * 12;
    const systemSize = bill / 1000;

    setResults({
      monthly: Math.round(monthlySavings),
      yearly: Math.round(yearlySavings),
      systemSize: parseFloat(systemSize.toFixed(1)),
    });
    setShowResults(true);
  };

  // Recalculate if bill changes after results are shown
  useEffect(() => {
    if (showResults) {
      calculateSavings();
    }
  }, [bill, propertyType]);

  return (
    <section className="py-24 px-6 bg-[#F1F5F4]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
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
                Estimate how much you can save on your electricity bills by
                switching to solar energy. Our tool provides a quick projection
                based on your current usage.
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
          <div className="relative lg:col-span-5 lg:justify-self-end w-full max-w-lg">
            {/* Background decorative blob */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -z-10" />

            <div className="bg-white rounded-4xl shadow-xl shadow-gray-200/50 p-6 md:p-8 border border-gray-100">
              <div className="space-y-8">
                {/* Bill Input */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                      Monthly Electricity Bill
                    </label>
                    <span className="text-xl font-bold text-brand-red">
                      ₹{bill.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="50000"
                    step="500"
                    value={bill}
                    onChange={(e) => setBill(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-brand-red"
                  />
                  <div className="flex justify-between text-xs text-gray-400 font-medium pt-1">
                    <span>₹500</span>
                    <span>₹25,000</span>
                    <span>₹50,000+</span>
                  </div>
                </div>

                {/* Property Type Dropdown */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                    Property Type
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all appearance-none cursor-pointer text-gray-700"
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Industrial">Industrial</option>
                  </select>
                </div>

                {/* Calculate Button */}
                <button
                  onClick={calculateSavings}
                  className="w-full py-4 bg-brand-red text-white rounded-full font-bold text-lg hover:bg-[#C0392B] transition-all transform active:scale-[0.98] shadow-lg shadow-brand-red/20 flex items-center justify-center gap-2"
                >
                  Calculate Savings
                </button>

                {/* Result Section */}
                {showResults && (
                  <div className="pt-6 animate-fade-in">
                    <div className="bg-[#16A34A]/5 border border-[#16A34A]/10 rounded-2xl p-6 space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">
                            Monthly Savings
                          </p>
                          <p className="text-2xl font-bold text-[#16A34A]">
                            ₹{results.monthly.toLocaleString()}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">
                            System Size
                          </p>
                          <p className="text-2xl font-bold text-gray-900">
                            {results.systemSize}{" "}
                            <span className="text-sm font-medium">kW</span>
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-[#16A34A]/10">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">
                              Yearly Potential Savings
                            </p>
                            <p className="text-3xl font-extrabold text-[#16A34A]">
                              ₹{results.yearly.toLocaleString()}
                            </p>
                          </div>
                          <div className="bg-[#16A34A] text-white px-3 py-1 rounded-lg text-xs font-bold">
                            ~70% OFF
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <button className="w-full flex items-center justify-center gap-2 text-gray-900 font-bold hover:text-brand-red transition-colors group">
                        Get a Free Consultation Based on Result
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
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
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default SolarCalculator;
