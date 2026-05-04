import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Mnre() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto rounded-xl bg-white shadow-sm border border-red-50 overflow-hidden">
        <div className="grid md:grid-cols-2 items-center">
          {/* Left */}
          <div className="relative flex justify-center items-center bg-red-50/40 p-12 min-h-80">
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
              Fuji Solar is an <span className="text-brand-red">MNRE Approved</span>{" "}
              vendor
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              We provide solar installations aligned with Ministry of New and Renewable
              Energy standards, helping homes and businesses across Tamil Nadu switch to
              reliable clean energy.
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

// import { CheckCircle2, ChevronRight, Sun, Zap, Shield } from "lucide-react";

// export default function Mnre() {
//   return (
//     <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-5xl mx-auto">
//         <div
//           className="
//             rounded-2xl
//             bg-white
//             border border-red-100
//             shadow-[0_4px_32px_rgba(220,38,38,0.07)]
//             overflow-hidden
//             opacity-0
//             animate-[fadeIn_0.6s_ease-out_0.1s_forwards]
//           "
//         >
//           {/* Top accent bar */}
//           <div className="h-1 w-full bg-gradient-to-r from-red-600 via-red-500 to-red-400" />

//           <div className="p-8 sm:p-10 lg:p-12">
//             <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-14">
//               {/* ── LEFT COLUMN ── */}
//               <div className="flex-shrink-0 flex flex-col items-center gap-4 md:w-52">
//                 {/* Government Recognized badge */}
//                 <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-[11px] font-semibold tracking-wider uppercase">
//                   <Shield size={11} strokeWidth={2.5} />
//                   Government Recognized
//                 </span>

//                 {/* MNRE Logo Placeholder */}
//                 <div
//                   className="
//                     relative w-40 h-40 rounded-2xl
//                     bg-gradient-to-br from-red-50 to-white
//                     border-2 border-red-100
//                     flex flex-col items-center justify-center gap-2
//                     shadow-inner
//                   "
//                 >
//                   {/* Decorative sun icon */}
//                   <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-md">
//                     <Sun size={28} color="white" strokeWidth={1.8} />
//                   </div>
//                   <div className="text-center">
//                     <p className="text-red-600 font-extrabold text-lg leading-none tracking-tight">
//                       MNRE
//                     </p>
//                     <p className="text-gray-400 text-[10px] font-medium tracking-widest uppercase mt-0.5">
//                       Registered
//                     </p>
//                   </div>

//                   {/* Corner accent */}
//                   <div className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-red-200" />
//                   <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-red-100" />
//                 </div>
//               </div>

//               {/* Divider – visible on desktop */}
//               <div className="hidden md:block self-stretch w-px bg-gradient-to-b from-transparent via-red-100 to-transparent" />

//               {/* ── RIGHT COLUMN ── */}
//               <div className="flex-1 flex flex-col gap-5 text-center md:text-left">
//                 {/* Label */}
//                 <p className="text-xs font-bold tracking-[0.18em] uppercase text-red-500">
//                   Trusted Solar Partner
//                 </p>

//                 {/* Heading */}
//                 <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug">
//                   Fuji Solar is an{" "}
//                   <span className="text-red-600 relative">
//                     MNRE Registered
//                     {/* Subtle underline accent */}
//                     <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-red-200 rounded-full" />
//                   </span>{" "}
//                   Solar Provider
//                 </h2>

//                 {/* Description */}
//                 <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-prose">
//                   We provide solar installations aligned with Ministry of New and
//                   Renewable Energy standards, helping homes and businesses across Tamil
//                   Nadu switch to reliable clean energy.
//                 </p>

//                 {/* Trust Indicators */}
//                 <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-5 justify-center md:justify-start">
//                   {[
//                     { icon: CheckCircle2, label: "Standards-Compliant Installation" },
//                     { icon: Zap, label: "Subsidy Assistance" },
//                     { icon: Shield, label: "Quality Assured Service" },
//                   ].map(({ icon: Icon, label }) => (
//                     <div
//                       key={label}
//                       className="flex items-center gap-2 text-gray-700 text-sm font-medium"
//                     >
//                       <Icon
//                         size={16}
//                         className="text-red-500 flex-shrink-0"
//                         strokeWidth={2.2}
//                       />
//                       <span>{label}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* CTA Button */}
//                 <div className="mt-1 flex justify-center md:justify-start">
//                   <button
//                     className="
//                       inline-flex items-center gap-1.5
//                       px-5 py-2.5
//                       rounded-lg
//                       border-2 border-red-600
//                       text-red-600
//                       text-sm font-semibold
//                       bg-transparent
//                       transition-all duration-200
//                       hover:bg-red-600 hover:text-white
//                       focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2
//                       group
//                     "
//                   >
//                     Learn More
//                     <ChevronRight
//                       size={15}
//                       strokeWidth={2.5}
//                       className="transition-transform duration-200 group-hover:translate-x-0.5"
//                     />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Keyframe for fade-in — injected via a style tag */}
//       <style>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(12px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </section>
//   );
// }
