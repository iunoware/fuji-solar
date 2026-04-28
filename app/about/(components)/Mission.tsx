"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    id: "mission",
    label: "Mission",
    eyebrow: "Why we exist",
    heading: "Energy for everyone, powered by the sun.",
    body: "For over 43 years, Fuji Solar has driven a single purpose - making clean, reliable solar energy accessible to every home, farm, and business across India. We don't just install panels. We dismantle dependency on fossil fuels, one rooftop at a time, building a future where the sun pays your electricity bill.",
    stat: { value: "43+", note: "Years in the field" },
  },
  {
    id: "vision",
    label: "Vision",
    eyebrow: "Where we're headed",
    heading: "India's most trusted name in solar - for the next 43 years.",
    body: "We envision a country where clean energy is the first choice, not the last resort. Where Fuji Solar's name stands behind every panel on every rooftop - from remote villages to metro skylines. A future without energy insecurity, without sky-high bills, and without compromise.",
    stat: { value: "10k+", note: "Installations nationwide" },
  },
  {
    id: "goal",
    label: "Goal",
    eyebrow: "What we're building toward",
    heading: "100,000 solar homes by 2030.",
    body: "Our goal is concrete and measurable: power 100,000 Indian households with clean solar energy by 2030. Every system we install, every watt we generate, every rupee saved on a customer's bill brings us closer. This isn't aspiration - it's a deadline we're already working against.",
    stat: { value: "2030", note: "Our target year" },
  },
];

const SCROLL_PER_STEP = 0.85; // × vh per section

export default function Mission() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef<number>(0);

  useGSAP(
    () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const vh = window.innerHeight;
      const totalScroll = vh * SCROLL_PER_STEP * (items.length - 1);

      // ── Set initial DOM state ──
      items.forEach((item, i) => {
        const contentEl = wrapper.querySelector(`#content-${item.id}`) as HTMLElement;
        const underline = wrapper.querySelector(`#underline-${item.id}`) as HTMLElement;
        const label = wrapper.querySelector(`#label-${item.id}`) as HTMLElement;
        const counter = wrapper.querySelector(`#counter-${item.id}`) as HTMLElement;

        if (!contentEl || !underline || !label || !counter) return;

        if (i === 0) {
          gsap.set(contentEl, { opacity: 1, y: 0, pointerEvents: "auto" });
          gsap.set(underline, { scaleX: 1, opacity: 1 });
          gsap.set(label, { color: "#1c1917" });
          gsap.set(counter, { color: "#eab308" });
        } else {
          gsap.set(contentEl, { opacity: 0, y: 30, pointerEvents: "none" });
          gsap.set(underline, { scaleX: 0, opacity: 0 });
          gsap.set(label, { color: "#d4cdc7" });
          gsap.set(counter, { color: "#e8e2db" });
        }
      });

      activeIndexRef.current = 0;

      // ── Single ScrollTrigger with onUpdate driving everything ──
      ScrollTrigger.create({
        trigger: wrapper,
        start: "top top",
        end: () => `+=${totalScroll}`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const rawIndex = self.progress * items.length;
          const newIndex = Math.min(Math.floor(rawIndex), items.length - 1);

          if (newIndex === activeIndexRef.current) return;

          const prevIndex = activeIndexRef.current;
          activeIndexRef.current = newIndex;
          const goingForward = newIndex > prevIndex;

          // ── Left labels ──
          items.forEach((item, i) => {
            const underline = wrapper.querySelector(
              `#underline-${item.id}`,
            ) as HTMLElement;
            const label = wrapper.querySelector(`#label-${item.id}`) as HTMLElement;
            const counter = wrapper.querySelector(`#counter-${item.id}`) as HTMLElement;

            if (!underline || !label || !counter) return;

            if (i === newIndex) {
              gsap.to(underline, {
                scaleX: 1,
                opacity: 1,
                duration: 0.45,
                ease: "power3.out",
              });
              gsap.to(label, { color: "#1c1917", duration: 0.35 });
              gsap.to(counter, { color: "#eab308", duration: 0.35 });
            } else {
              gsap.to(underline, {
                scaleX: 0,
                opacity: 0,
                duration: 0.35,
                ease: "power2.in",
              });
              gsap.to(label, { color: "#d4cdc7", duration: 0.35 });
              gsap.to(counter, { color: "#e8e2db", duration: 0.35 });
            }
          });

          // ── Right content swap ──
          const prevEl = wrapper.querySelector(
            `#content-${items[prevIndex].id}`,
          ) as HTMLElement;
          const nextEl = wrapper.querySelector(
            `#content-${items[newIndex].id}`,
          ) as HTMLElement;

          if (prevEl) {
            gsap.killTweensOf(prevEl);
            gsap.to(prevEl, {
              opacity: 0,
              y: goingForward ? -28 : 28,
              duration: 0.38,
              ease: "power2.in",
              onComplete: () => {
                prevEl.style.pointerEvents = "none";
              },
            });
          }

          if (nextEl) {
            gsap.killTweensOf(nextEl);
            gsap.fromTo(
              nextEl,
              { opacity: 0, y: goingForward ? 32 : -32 },
              {
                opacity: 1,
                y: 0,
                duration: 0.52,
                ease: "power3.out",
                delay: 0.22,
                onStart: () => {
                  nextEl.style.pointerEvents = "auto";
                },
              },
            );
          }
        },
      });

      // ── Entrance animation ──
      gsap.from(".mvg-left-col > *", {
        opacity: 0,
        y: 28,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrapper,
          start: "top 82%",
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: wrapperRef },
  );

  return (
    <>
      {/* medium to large screen view section */}
      <section
        ref={wrapperRef}
        data-navbar-theme="light"
        className="relative w-full min-h-screen hidden lg:flex flex-col bg-background py-10"
      >
        {/* Top amber rule */}
        <div className="w-full h-0.75 shrink-0 bg-linear-to-r from-transparent via-[#eab308] to-transparent" />

        <div className="flex flex-col lg:flex-row flex-1 max-w-7xl mx-auto w-full px-8 md:px-16 py-20 gap-16 lg:gap-24">
          {/* left */}
          <div className="mvg-left-col lg:w-[38%] flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-14">
              <span className="w-8 h-0.5 bg-[#eab308]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a16207]">
                Who We Are
              </span>
            </div>

            <div className="flex flex-col gap-10">
              {items.map((item, i) => (
                <div key={item.id} className="flex items-start gap-5">
                  <span
                    id={`counter-${item.id}`}
                    className="text-xs font-bold mt-2"
                    style={{ color: i === 0 ? "#eab308" : "#e8e2db" }}
                  >
                    0{i + 1}
                  </span>

                  <div className="flex flex-col gap-2">
                    <span
                      id={`label-${item.id}`}
                      className="text-[clamp(25px,3.5vw,45px)] font-semibold leading-none cursor-default"
                      style={{
                        color: i === 0 ? "#1c1917" : "#d4cdc7",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {item.label}
                    </span>

                    <div
                      id={`underline-${item.id}`}
                      className="h-0.75 rounded-full bg-[#eab308] origin-left"
                      style={{
                        width: "100%",
                        transform: i === 0 ? "scaleX(1)" : "scaleX(0)",
                        opacity: i === 0 ? 1 : 0,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-16 text-xs uppercase tracking-widest text-gray-800">
              Fuji Solar — Est. 1981
            </p>
          </div>

          {/* right */}
          <div className="lg:w-[62%] relative flex items-center">
            {items.map((item, i) => (
              <div
                key={item.id}
                id={`content-${item.id}`}
                className={`absolute inset-0 flex flex-col justify-center ${i === 0 ? "pointer-events-auto" : "pointer-events-none"} `}
                // style={{ pointerEvents: i === 0 ? "auto" : "none" }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-5 text-[#a16207]">
                  {item.eyebrow}
                </p>

                <h2
                  className="text-[clamp(25px,3.5vw,45px)] font-bold leading-[1.1] mb-7 text-[#1c1917]"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  {item.heading}
                </h2>

                {/* <div className="h-0.5 w-16 mb-7 rounded-full bg-[#eab308]" /> */}

                <p className="text-base md:text-lg leading-relaxed mb-10 max-w-xl text-[#78716c]">
                  {item.body}
                </p>

                <div className="inline-flex items-end gap-4 px-7 py-5 rounded-2xl self-start bg-[#f9f6f1] border border-[#eab308]/20 shadow-sm">
                  <span
                    // className="text-[clamp(40px,5vw,64px)] font-black leading-none text-brand-red"
                    className="text-[clamp(28px,3.5vw,48px)] font-black leading-none text-brand-red"
                    style={{ letterSpacing: "-0.04em" }}
                  >
                    {item.stat.value}
                  </span>
                  <span className="text-sm mb-2 text-[#78716c]">{item.stat.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom rule */}
        <div className="w-full h-0.5 shrink-0 bg-linear-to-r from-transparent via-[#eab308]/30 to-transparent" />
      </section>

      {/* mobile view section */}
      <section className="lg:hidden flex md:p-10 p-7 py-10 bg-background">
        <div className="flex flex-col gap-25">
          {items.map((item, i) => (
            <div key={item.id} className="flex flex-col gap-8">
              {/* title */}
              <div className="flex items-start gap-5">
                <span
                  id={`counter-${item.id}`}
                  className="text-xs font-bold mt-2 text-[#eab308]"
                >
                  0{i + 1}
                </span>

                <div className="flex flex-col gap-2">
                  <span
                    id={`label-${item.id}`}
                    className="text-[clamp(25px,3.5vw,45px)] font-semibold leading-none cursor-default text-gray-900"
                  >
                    {item.label}
                  </span>

                  <div
                    id={`underline-${item.id}`}
                    className="h-0.75 rounded-full bg-[#eab308] origin-left"
                  />
                </div>
              </div>

              {/* content */}
              <div
                key={item.id}
                id={`content-${item.id}`}
                className={`flex flex-col justify-center ${i === 0 ? "pointer-events-auto" : "pointer-events-none"} `}
                // style={{ pointerEvents: i === 0 ? "auto" : "none" }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-5 text-[#a16207]">
                  {item.eyebrow}
                </p>

                <h2
                  className="text-[clamp(25px,3.5vw,45px)] font-bold leading-[1.1] mb-7 text-[#1c1917]"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  {item.heading}
                </h2>

                <p className="text-base md:text-lg leading-relaxed mb-10 max-w-xl text-[#78716c]">
                  {item.body}
                </p>

                <div className="inline-flex items-end gap-4 px-7 py-5 rounded-2xl self-start bg-[#f9f6f1] border border-[#eab308]/20 shadow-sm">
                  <span className="text-[clamp(25px,3.5vw,45px)] font-black leading-none text-red-500">
                    {item.stat.value}
                  </span>
                  <span className="text-sm mb-2 text-[#78716c]">{item.stat.note}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
