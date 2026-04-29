// "use client";

// import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// const pricingData = [
//   { capacity: "2 KW", price: "₹99,000" },
//   { capacity: "3 KW", price: "₹1,32,000" },
//   { capacity: "5 KW", price: "₹2,32,000" },
// ];

// const bulletPoints = [
//   "Subsidy credited directly to your bank account",
//   "ROI achievable in less than 5 years",
//   "Complete service: Site survey, installation, commissioning & maintenance",
//   "All EB-related works included (Net meter setup)",
// ];

// export default function SolarSubsidy() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const leftRef = useRef<HTMLDivElement>(null);
//   const bulletsRef = useRef<HTMLDivElement[]>([]);
//   const cardRef = useRef<HTMLDivElement>(null);

//   useGSAP(
//     () => {
//       // Section fade
//       gsap.from(sectionRef.current, {
//         opacity: 0,
//         y: 40,
//         duration: 0.8,
//         ease: "power3.out",
//       });

//       // Left content stagger
//       gsap.from(bulletsRef.current, {
//         opacity: 0,
//         y: 20,
//         stagger: 0.2,
//         duration: 0.6,
//         delay: 0.3,
//         ease: "power3.out",
//       });

//       // Card animation
//       gsap.from(cardRef.current, {
//         opacity: 0,
//         scale: 0.95,
//         y: 30,
//         duration: 0.8,
//         delay: 0.4,
//         ease: "power3.out",
//       });
//     },
//     { scope: sectionRef },
//   );

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full py-16 px-4 md:px-12 bg-linear-to-br from-white to-gray-50"
//     >
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* LEFT CONTENT */}
//         <div ref={leftRef}>
//           <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
//             Thinking of Installing <span className="text-brand-red">Solar?</span>
//           </h2>

//           <p className="text-gray-700 text-lg mb-8">
//             Save energy. Reduce costs. Earn from your rooftop.
//           </p>

//           <div className="space-y-5">
//             {bulletPoints.map((point, index) => (
//               <div
//                 key={index}
//                 // ref={(el) => {
//                 //   if (el) bulletsRef.current[index] = el;
//                 // }}
//                 className="flex items-start gap-4 group transition-all duration-300 hover:translate-x-2"
//               >
//                 <div className="w-6 h-6 flex items-center justify-center rounded-full bg-brand-red text-white text-sm mt-1">
//                   ✓
//                 </div>
//                 <p className="text-gray-900 transition">{point}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT CARD */}
//         <div ref={cardRef} className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
//           <h3 className="text-xl font-semibold text-gray-900 mb-6">
//             Cost of the Plant <span className="text-brand-red">(After Subsidy)</span>
//           </h3>

//           {/* Pricing Table */}
//           <div className="divide-y">
//             {pricingData.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex justify-between py-4 px-2 rounded-lg transition hover:bg-gray-50"
//               >
//                 <span className="text-gray-700 font-medium">{item.capacity}</span>
//                 <span className="text-brand-red font-bold">{item.price}</span>
//               </div>
//             ))}
//           </div>

//           {/* Divider */}
//           <div className="my-6 border-t"></div>

//           {/* Warranty */}
//           <div className="space-y-2 text-gray-700">
//             <p>
//               <span className="font-medium">Panels:</span>{" "}
//               <span className="text-brand-red font-bold">25 Years</span>
//             </p>
//             <p>
//               <span className="font-medium">Inverters:</span>{" "}
//               <span className="text-brand-red font-bold">10 Years</span>
//             </p>
//           </div>

//           {/* Bank Info */}
//           <div className="mt-6 text-sm text-gray-800">
//             Easy loan available with SBI, Canara Bank, Indian Bank
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";

const pricingData = [
  { capacity: "2 KW", price: "₹99,000" },
  { capacity: "3 KW", price: "₹1,32,000" },
  { capacity: "5 KW", price: "₹2,32,000" },
];

const bullets = [
  "Subsidy credited directly to your bank account",
  "ROI achievable in less than 5 years",
  "Complete service: site survey, installation, commissioning & maintenance",
  "All EB-related works included (net meter setup)",
];

export default function SolarSubsidySection() {
  return (
    <section className="bg-amber-50 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT */}
        <div className="flex flex-col gap-6">
          {/* <span className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full w-fit">
            ☀ Government Subsidy Available
          </span> */}

          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Thinking of <span className="text-red-600">Installing Solar?</span>
            </h2>
            <p className="mt-3 text-gray-500 text-lg font-medium">
              Save energy. Reduce costs. Earn from your rooftop.
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100 shadow-sm hover:translate-x-1 transition-transform"
              >
                <span className="mt-0.5 shrink-0 bg-red-100 text-red-600 rounded-lg p-1.5">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-gray-700 font-medium text-sm leading-relaxed">
                  {b}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex gap-3 flex-wrap">
            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-md"
            >
              Get Free Quote
            </Link>
            <Link
              href="/solar-products"
              className="border border-gray-300 hover:border-red-600 hover:text-red-600 text-gray-700 font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* RIGHT — Pricing Card */}
        <div className="flex flex-col gap-3">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            {/* Card header */}
            <div className="bg-red-600 px-6 py-5">
              <p className="text-red-200 text-xs font-bold uppercase tracking-widest mb-1">
                Government Subsidy Applied
              </p>
              <h3 className="text-white text-2xl font-extrabold leading-tight">
                Cost of the Plant
                <span className="block text-base font-medium opacity-80">
                  After Subsidy
                </span>
              </h3>
            </div>

            {/* Table header */}
            <div className="grid grid-cols-2 px-6 py-2 bg-red-50 border-b border-red-100">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Capacity
              </span>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider text-right">
                Price
              </span>
            </div>

            {/* Rows */}
            {pricingData.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-2 px-6 py-4 items-center hover:bg-orange-50 transition-colors border-b border-gray-50 last:border-none"
              >
                <div className="flex items-center gap-2">
                  <span className="bg-red-100 rounded-lg p-1.5">
                    <svg className="w-3.5 h-3.5 fill-red-600" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  <span className="font-bold text-gray-900">{row.capacity}</span>
                </div>
                <span className="text-red-600 font-extrabold text-right text-lg">
                  {row.price}
                </span>
              </div>
            ))}

            <div className="mx-6 border-t border-gray-100" />

            {/* Warranty */}
            <div className="px-6 py-4">
              <p className="text-xs font-bold text-gray-800 uppercase tracking-widest mb-3">
                Warranty Included
              </p>
              <div className="flex gap-3">
                {[
                  { icon: "☀️", label: "Panels", value: "25 Years" },
                  { icon: "⚡", label: "Inverters", value: "10 Years" },
                ].map((w) => (
                  <div
                    key={w.label}
                    className="flex-1 bg-gray-50 rounded-xl p-3 border border-gray-100"
                  >
                    {/* <span className="text-lg">{w.icon}</span> */}
                    <p className="text-xs text-gray-700 font-semibold mt-1">{w.label}</p>
                    <p className="text-base font-extrabold text-brand-red">{w.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-6 border-t border-gray-100" />

            {/* Bank info */}
            <div className="px-6 py-4 flex items-start gap-3">
              <span className="bg-blue-50 rounded-lg p-1.5 shrink-0">
                <svg className="w-4 h-4 fill-blue-600" viewBox="0 0 24 24">
                  <path d="M3 10h2v7H3v-7zm4-2h2v9H7V8zm4-4h2v13h-2V4zm4 6h2v7h-2v-7zm4-3h2v10h-2V7zM1 20h22v2H1v-2zM1 4l11-3 11 3v2H1V4z" />
                </svg>
              </span>
              <p className="text-sm text-gray-500 leading-relaxed">
                Easy loan available with{" "}
                <strong className="text-gray-700">SBI, Canara Bank</strong> &amp;{" "}
                <strong className="text-gray-700">Indian Bank</strong>
              </p>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex gap-2 justify-center flex-wrap">
            {["MNRE Approved", "ISO Certified", "5★ Rated"].map((b) => (
              <span
                key={b}
                className="text-xs font-bold text-gray-500 bg-white border border-gray-200 rounded-full px-3 py-1"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
