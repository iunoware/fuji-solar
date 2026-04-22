// "use client";

// import React from "react";
// import { Sun } from "lucide-react";

// const ContactHero = () => {
//   return (
//     <section className="relative pt-32 pb-20 px-6 bg-linear-to-b from-green-50/50 to-white overflow-hidden">
//       {/* Decorative Solar Icon in Background */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] select-none">
//         <Sun className="w-[500px] h-[500px] text-[#16A34A]" />
//       </div>

//       <div className="max-w-5xl mx-auto text-center relative z-10">
//         {/* Breadcrumb & Badge */}
//         <div className="flex flex-col items-center mb-4">
//           <nav className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">
//             Home / Contact
//           </nav>
//           <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-100/50 text-[#16A34A] text-sm font-semibold tracking-wide">
//             Contact Us
//           </span>
//         </div>

//         {/* Main Heading */}
//         <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
//           Let’s Talk About Your <br className="hidden md:block" />
//           <span className="text-brand-red">Solar Needs</span>
//         </h1>

//         {/* Subtext */}
//         <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
//           Have questions or ready to switch to solar? Our team of experts is here to guide you every step of the way to energy independence.
//         </p>

//         {/* CTA Button */}
//         <div className="flex justify-center">
//           <button className="bg-brand-red hover:bg-[#C0392B] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl shadow-brand-red/20 flex items-center gap-2 group">
//             Get Free Consultation
//             <svg
//               className="w-5 h-5 group-hover:translate-x-1 transition-transform"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactHero;

"use client";

import React, { useEffect, useRef } from "react";
// import { Sun, ArrowRight } from "lucide-react";
import { gsap } from "gsap";

export default function ContactHero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      badgeRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5 },
    )
      .fromTo(
        headingRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.2",
      )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3",
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.2",
      )
      .fromTo(
        statsRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.2",
      );
  }, []);

  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-white">
      {/* Soft green radial glow — top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-100 bg-green-100/60 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, #16A34A22 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Large ghost sun — bottom right */}
      {/* <div className="absolute -bottom-16 -right-16 pointer-events-none select-none opacity-[0.05]">
        <Sun className="w-95 h-95 text-[#16A34A]" />
      </div> */}

      {/* Thin accent line — top left */}
      <div className="absolute top-20 left-10 w-24 h-px bg-linear-to-r from-transparent via-green-300 to-transparent opacity-60" />
      <div className="absolute top-24 left-10 w-12 h-px bg-linear-to-r from-transparent via-green-200 to-transparent opacity-40" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Breadcrumb */}
        {/* <nav className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-5">
          Home &nbsp;/&nbsp; Contact
        </nav> */}

        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-200 bg-green-50 text-[#16A34A] text-sm font-semibold mb-6 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
          We&apos;re here to help
        </div>

        {/* Heading */}
        <h1
          ref={headingRef}
          className="text-4xl md:text-[3.75rem] font-extrabold text-gray-900 tracking-tight leading-[1.08] mb-6"
        >
          Let&apos;s Talk About Your <br className="hidden md:block" />
          <span className="relative inline-block">
            <span className="text-brand-red">Solar</span>
            {/* underline squiggle */}
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M2 6 C40 2, 80 7, 120 3 S170 6, 198 4"
                stroke="#E63946"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </span>{" "}
          Needs
        </h1>

        {/* Subtext */}
        <p
          ref={subRef}
          className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed mb-10"
        >
          Have questions or ready to switch to solar? Our experts guide you every step
          toward energy independence.
        </p>

        {/* CTA */}
        {/* <div ref={ctaRef} className="flex items-center justify-center gap-4 mb-14">
          <button className="group bg-brand-red hover:bg-[#C0392B] text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-red/25 flex items-center gap-2">
            Get Free Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          <a
            href="tel:+919842076979"
            className="text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors underline underline-offset-4 decoration-gray-200 hover:decoration-gray-400"
          >
            or call us directly
          </a>
        </div> */}

        {/* Stats strip */}
        {/* <div
          ref={statsRef}
          className="inline-flex flex-wrap justify-center gap-px rounded-2xl border border-gray-100 shadow-sm overflow-hidden bg-gray-50"
        >
          {[
            { value: "500+", label: "Installations" },
            { value: "10 yr", label: "Warranty" },
            { value: "24 hr", label: "Response Time" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center px-8 py-4 bg-white hover:bg-green-50/60 transition-colors duration-200"
            >
              <span className="text-xl font-extrabold text-gray-900">{stat.value}</span>
              <span className="text-xs text-gray-400 font-medium mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
