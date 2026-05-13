import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Mnre() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto rounded-xl bg-white shadow-sm border border-red-50 overflow-hidden">
        <div className="grid md:grid-cols-2 items-center">
          {/* Left */}
          <div className="relative flex justify-center items-center  p-12 min-h-80">
            <div className="absolute top-8 left-8">
              <span className="inline-flex items-center rounded-full bg-brand-red/10 text-brand-red text-sm font-medium px-4 py-2">
                Government Recognized
              </span>
            </div>

            <div className="w-80 h-80 rounded-xl bg-white flex flex-col items-center justify-center">
              {/* <div className="text-center">
                <ShieldCheck className="w-14 h-14 text-brand-red mx-auto mb-4" />
                <p className="text-gray-500 font-medium">MNRE Logo</p>
              </div> */}
              <div className="relative h-50 w-50">
                <Image src="/images/emblem.svg" fill alt="Fuji solar Madurai" />
              </div>
              <p className="text-center text-gray-900">
                MINISTRY OF NEW AND RENEWABLE ENERGY
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="p-5 md:p-14 animate-fade-in">
            <p className="text-sm font-medium text-brand-red mb-3 tracking-wide uppercase">
              Trusted Solar Partner
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-5">
              Fuji Solar is an{" "}
              <span className="text-brand-red">MNRE Approved</span> Company
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              We provide solar installations aligned with Ministry of New and
              Renewable Energy standards, helping homes and businesses across
              Tamil Nadu switch to reliable clean energy.
            </p>

            {/* Trust indicators */}
            <div className="space-y-3 mb-8">
              {[
                "Standards-Compliant Installation",
                "Subsidy Assistance",
                "Quality Assured Service",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-red" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* <button className="border border-brand-red text-brand-red px-6 py-3 rounded-lg font-medium hover:bg-brand-red hover:text-white transition-all duration-300">
              Learn More
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
