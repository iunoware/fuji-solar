"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Founder() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const headerRef = useRef<HTMLDivElement>(null);
  const founderCardRef = useRef<HTMLDivElement>(null);
  const founderContentRef = useRef<HTMLDivElement>(null);
  const directorCardRef = useRef<HTMLDivElement>(null);
  const connectorRef = useRef<HTMLDivElement>(null);
  const connectorLineRef = useRef<SVGPathElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const trigger = {
        trigger: sectionRef.current,
        start: "top 80%",
        invalidateOnRefresh: true,
      };

      const tl = gsap.timeline({
        scrollTrigger: trigger,
      });

      // 1. Header fades up
      tl.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      );

      // 2. Founder card reveals
      tl.fromTo(
        founderCardRef.current,
        { opacity: 0, scale: 0.96, x: -40 },
        { opacity: 1, scale: 1, x: 0, duration: 1, ease: "power3.out" },
        "-=0.4",
      );

      // 3. Founder content stagger
      if (founderContentRef.current) {
        const children = founderContentRef.current.querySelectorAll(".fade-item");
        tl.fromTo(
          children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out" },
          "-=0.6",
        );
      }

      // 4. Director card floats in
      tl.fromTo(
        directorCardRef.current,
        { opacity: 0, x: 80 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power3.out" },
        "-=0.8",
      );

      // 5. Connector line draws
      if (connectorLineRef.current && connectorRef.current) {
        const length = connectorLineRef.current.getTotalLength();
        gsap.set(connectorLineRef.current, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        tl.fromTo(
          connectorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: "power1.inOut" },
          "-=0.5",
        );

        tl.to(
          connectorLineRef.current,
          { strokeDashoffset: 0, duration: 1, ease: "power3.out" },
          "-=0.3",
        );
      }

      // 6. Stats rise
      if (statsRef.current) {
        const stats = statsRef.current.querySelectorAll(".stat-item");
        tl.fromTo(
          stats,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" },
          "-=0.5",
        );
      }

      // Parallax on Founder Image
      const founderImg = founderCardRef.current?.querySelector(".founder-image");
      if (founderImg) {
        gsap.to(founderImg, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: founderCardRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-300 overflow-hidden bg-white flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10 w-full">
        {/* header */}
        <div
          ref={headerRef}
          className="flex flex-col items-center text-center mb-10 lg:mb-12 opacity-0"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-px bg-brand-red opacity-60" />
            <span className="text-brand-red text-sm font-mono tracking-[0.45em] uppercase font-semibold">
              Leadership Legacy
            </span>
            <span className="w-12 h-px bg-brand-red opacity-60" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[110%] max-w-4xl mb-4">
            Built by Vision. Carried Forward by Innovation.
          </h2>

          <p className="max-w-3xl text-gray-600 text-md leading-relaxed">
            For over 43 years, Fuji Solar has grown through generational leadership -
            built on DayalanRaj Sekar’s pioneering vision and strengthened by Immanuvel’s
            strategic direction for the future.
          </p>
        </div>

        <div className="flex justify-center w-full">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 items-center w-full max-w-5xl">
            {/* left side */}
            <div className="flex flex-col gap-6 lg:gap-8 relative z-10 w-full max-w-lg lg:max-w-none mx-auto lg:mx-0">
              <div
                ref={founderCardRef}
                className="relative w-full h-[42vh] lg:h-[52vh] max-h-135 rounded-[36px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/20"
              >
                <div className="absolute inset-0 rounded-[36px] border border-brand-red/20 shadow-[inset_0_0_20px_rgba(239,68,68,0.05)] z-20 pointer-events-none" />

                <Image
                  // src="/images/off-grid.png"
                  src="/images/dayalu-raj-sekar.webp"
                  alt="Dayalan Raj Sekar - Founder of Fuji Solar"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />

                <div className="absolute bottom-5 left-5 lg:bottom-8 lg:left-8 z-30">
                  <div className="bg-white/65 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-white/50 w-64 lg:w-70">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 font-sans">
                      Dayalan Raj Sekar
                    </h3>
                    <p className="text-brand-red font-semibold text-xs lg:text-sm mt-1">
                      Founder
                    </p>
                  </div>
                </div>
              </div>

              <div ref={founderContentRef} className="max-w-2xl px-2 lg:px-4">
                <h3 className="fade-item text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  The Foundation of Fuji Solar
                </h3>
                <p className="fade-item text-gray-600 text-md leading-relaxed mb-6">
                  Dayalan Raj Sekar founded Fuji Solar in 1983 with a simple but powerful
                  conviction - that clean, affordable energy should be within reach of
                  every household and business. Through deep technical expertise, he built
                  Fuji Solar into one of the region&apos;s most trusted solar brands.
                </p>
                <div className="fade-item border-l-4 border-brand-red pl-5 py-1">
                  <p className="text-gray-700 text-lg italic font-serif leading-relaxed">
                    &quot;Building trust takes decades. Preserving it takes purpose.&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* right side */}
            <div className="relative flex flex-col items-center lg:items-start z-20 w-full mt-4 lg:mt-0 lg:ml-20">
              <div
                ref={directorCardRef}
                className="relative w-full max-w-100 rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] lg:-ml-12 bg-white flex flex-col border border-brand-red/10"
              >
                <div className="relative w-full h-72 shrink-0">
                  <Image
                    src="/images/immanuvel.webp"
                    alt="Immanuvel - Director & Head of Marketing"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 30vw"
                  />

                  <div className="absolute bottom-2 left-2 z-30">
                    <div className="bg-white/65 backdrop-blur-sm rounded-2xl p-3 shadow-xl border border-white/50">
                      <h3 className="text-xl font-bold text-gray-900 font-sans">
                        Immanuvel
                      </h3>
                      <p className="text-brand-red font-semibold text-xs mt-1">
                        Director & Marketing Head
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative  flex-1 p-5 lg:p-6 flex flex-col justify-between z-20 bg-white">
                  <div>
                    <p className="text-brand-red text-[9px] lg:text-[10px] font-bold uppercase tracking-widest mb-2">
                      Director &amp; Head of Marketing
                    </p>
                    <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">
                      Leading Fuji Solar Forward
                    </h4>
                    <p className="text-gray-500 text-xs lg:text-sm leading-relaxed">
                      As Director &amp; Head of Marketing, Immanuvel drives Fuji
                      Solar&apos;s next chapter through strategic growth, customer-first
                      innovation, and a forward-thinking approach to renewable energy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
