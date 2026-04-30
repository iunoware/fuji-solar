"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface ServiceDetail {
  id: number;
  label: string;
  title: string;
  alt: string;
  description: string;
  bullets: string[];
  image: string;
  accent: string;
  link: string;
}

const services: ServiceDetail[] = [
  {
    id: 1,
    label: "Hybrid Systems",
    title: "Hybrid Solar Panel Systems",
    alt: "hybrid solar system Tamil Nadu",
    // description:
    //   "The best of both worlds — our hybrid systems combine grid connectivity with battery backup, ensuring you're never without power. Intelligent energy management switches seamlessly between solar, battery, and grid to deliver maximum savings and zero downtime.",
    // bullets: [
    //   "Seamless switching between solar, battery & grid",
    //   "Ideal for homes, offices & commercial buildings",
    //   "Smart inverter with real-time monitoring",
    //   "Reduces electricity bills by up to 90%",
    // ],
    description:
      "Combining the strengths of on-grid and off-grid systems, our hybrid solution ensures reliable power day and night. It supplies energy for daytime use, stores excess in batteries, and exports surplus power to the grid for maximum efficiency and savings.",
    bullets: [
      "Combines benefits of on-grid and off-grid systems",
      "Supplies power during the day and stores excess energy",
      "Exports surplus energy to the grid via bi-directional meter",
      "Uses stored battery power for uninterrupted night usage",
    ],
    // image: "/images/solar-energy-company-tamilnadu.png",
    image: "/images/hybrid-solar-system-tamilnadu.webp",
    accent: "#f05a1a",
    link: "/solar-products/hybrid-systems",
  },
  {
    id: 2,
    label: "On-Grid Systems",
    title: "On-Grid Solar Systems",
    alt: "on-grid solar system Tamil Nadu",
    // description:
    //   "Feed surplus energy back to the grid and earn credits. Ideal for areas with reliable electricity supply — dramatically reduce your monthly bills with zero battery maintenance overhead.",
    // bullets: [
    //   "Net metering — sell excess energy back",
    //   "Zero battery maintenance required",
    //   "Lower upfront installation cost",
    //   "Eligible for government subsidies",
    // ],
    description:
      "On-grid solar systems generate power during the day for immediate use while exporting excess energy to the grid. Ideal for spaces with high daytime consumption, they help reduce electricity bills through net metering without the need for batteries.",
    bullets: [
      "Generates power during the day for direct consumption",
      "Exports surplus energy to the grid via bi-directional meter",
      "Best suited for offices, schools, hospitals & homes",
      "Reduces electricity bills through net metering adjustments",
    ],
    // image: "/images/water-heater.png",
    image: "/images/on-grid.png",
    accent: "#e6a817",
    link: "/solar-products/on-grid-systems",
  },
  {
    id: 3,
    label: "Off-Grid Systems",
    title: "Off-Grid Solar Systems",
    alt: "off-grid solar system Tamil Nadu",
    description:
      "Complete energy independence for remote locations, farms, and rural setups. Fully self-contained with high-capacity batteries — no grid connection required, ever.",
    bullets: [
      "100% independent from the utility grid",
      "High-capacity deep-cycle battery storage",
      "Perfect for remote farms & rural areas",
      "Backup power during extended outages",
    ],
    // image: "/images/off-grid.png",
    image: "/images/off-grid-solar-system-tamil-nadu.webp",
    accent: "#f05a1a",
    link: "/solar-products/off-grid-systems",
  },
  {
    id: 4,
    label: "Water Pumps",
    title: "Solar Water Pumps",
    alt: "net metering Tamil Nadu",
    // description:
    //   "Reliable solar-powered pumping for agriculture, irrigation, and water supply. Eliminate diesel costs entirely and pump water even in remote fields with no electricity access.",
    // bullets: [
    //   "Eliminates diesel & electricity pump costs",
    //   "AC & DC pump options available",
    //   "Suitable for borewells, open wells & rivers",
    //   "Low maintenance, long operational life",
    // ],
    description:
      "A solar water pumping system acts as a self-sufficient mini power plant, capable of operating anywhere even without grid electricity. It uses a calibrated solar array matched to the pump, ensuring efficient water supply for irrigation, institutions, and residential needs.",
    bullets: [
      "Works independently without grid power",
      "Solar array matched precisely to pump capacity",
      "Supports various pumps for irrigation, homes & institutions",
      "Ideal for farms, schools, hospitals & remote locations",
    ],
    // image: "/images/solar-panel-repair-chennai.webp",
    image: "/images/best-solar-company-in-tirunelveli.webp",
    accent: "#e6a817",
    link: "/solar-products/solar-water-pumps",
  },
  {
    id: 5,
    label: "Street Lights",
    title: "Solar Street Lights",
    alt: "solar inverter installation",
    // description:
    //   "Autonomous, all-in-one street lighting powered entirely by the sun. Smart LED systems auto-dim at low-traffic hours, extending battery life and slashing municipal energy costs.",
    // bullets: [
    //   "Fully autonomous — no wiring needed",
    //   "Smart motion & dusk-to-dawn sensors",
    //   "Long-life lithium battery built in",
    //   "Ideal for roads, parks & housing colonies",
    // ],
    description:
      "An all-in-one solar street light is a compact, hassle-free lighting solution with no cabling required. It integrates a solar panel, lithium (LiFePO4) battery, motion sensor, control system, and high-output LEDs into a single unit for efficient and reliable outdoor lighting.",
    bullets: [
      "All-in-one design with panel, battery, sensor & LEDs",
      "No wiring required with easy installation",
      "Built-in LiFePO4 battery for long-lasting performance",
      "Includes motion sensor and smart control system",
    ],
    // image: "/images/solar-system-price-madurai.webp",
    image: "/images/best-solar-company-in-tamilnadu.webp",
    accent: "#f05a1a",
    link: "/solar-products/solar-street-lights",
  },
  {
    id: 6,
    label: "Water Heaters",
    title: "Solar Water Heaters",
    alt: "solar battery backup system",
    description:
      "High-efficiency flat plate and evacuated tube collectors that harness direct sunlight to heat water for homes, hospitals, hotels, and industries — reducing electricity bills by up to 80%.",
    bullets: [
      "Flat plate & evacuated tube collector options",
      "Cuts water heating costs by up to 80%",
      "Suitable for homes, hotels & hospitals",
      "Backup electric heater for cloudy days",
    ],
    // image: "/images/solar-panel-1.webp",
    image: "/images/solar-panel-repair-madurai.png",
    accent: "#e6a817",
    link: "/solar-products/solar-water-heaters",
  },
];

const SCROLL_PER_STEP = 0.85; // × vh per section

export default function Services() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef<number>(0);

  useGSAP(
    () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const vh = window.innerHeight;
      const totalScroll = vh * SCROLL_PER_STEP * (services.length - 1);

      // Set initial DOM state
      services.forEach((service, i) => {
        const contentEl = wrapper.querySelector(
          `#svc-content-${service.id}`,
        ) as HTMLElement;
        const underline = wrapper.querySelector(
          `#svc-underline-${service.id}`,
        ) as HTMLElement;
        const label = wrapper.querySelector(`#svc-label-${service.id}`) as HTMLElement;
        const counter = wrapper.querySelector(
          `#svc-counter-${service.id}`,
        ) as HTMLElement;

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
        end: `+=${totalScroll}`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const rawIndex = self.progress * services.length;
          const newIndex = Math.min(Math.floor(rawIndex), services.length - 1);

          if (newIndex === activeIndexRef.current) return;

          const prevIndex = activeIndexRef.current;
          activeIndexRef.current = newIndex;
          const goingForward = newIndex > prevIndex;

          // ── Left labels ──
          services.forEach((service, i) => {
            const underline = wrapper.querySelector(
              `#svc-underline-${service.id}`,
            ) as HTMLElement;
            const label = wrapper.querySelector(
              `#svc-label-${service.id}`,
            ) as HTMLElement;
            const counter = wrapper.querySelector(
              `#svc-counter-${service.id}`,
            ) as HTMLElement;

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
            `#svc-content-${services[prevIndex].id}`,
          ) as HTMLElement;
          const nextEl = wrapper.querySelector(
            `#svc-content-${services[newIndex].id}`,
          ) as HTMLElement;

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
        },
      });

      // ── Entrance animation ──
      gsap.from(".svc-left-col > *", {
        opacity: 0,
        y: 28,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: wrapper, start: "top 82%" },
      });
    },
    { scope: wrapperRef },
  );

  // for navigating to the section on click
  const goToIndex = (newIndex: number) => {
    const wrapper = wrapperRef.current;
    if (!wrapper || newIndex === activeIndexRef.current) return;

    const prevIndex = activeIndexRef.current;
    activeIndexRef.current = newIndex;
    const goingForward = newIndex > prevIndex;

    // Update left labels
    services.forEach((service, i) => {
      const underline = wrapper.querySelector(
        `#svc-underline-${service.id}`,
      ) as HTMLElement;
      const label = wrapper.querySelector(`#svc-label-${service.id}`) as HTMLElement;
      const counter = wrapper.querySelector(`#svc-counter-${service.id}`) as HTMLElement;

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

    // Swap right content
    const prevEl = wrapper.querySelector(
      `#svc-content-${services[prevIndex].id}`,
    ) as HTMLElement;
    const nextEl = wrapper.querySelector(
      `#svc-content-${services[newIndex].id}`,
    ) as HTMLElement;

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
  };

  return (
    <>
      {/* ── Medium to large screen view ── */}
      <section
        ref={wrapperRef}
        data-navbar-theme="light"
        className="relative w-full min-h-screen hidden lg:flex flex-col bg-background py-10"
      >
        {/* Top amber rule */}
        <div className="w-full h-0.75 shrink-0 bg-linear-to-r from-transparent via-[#eab308] to-transparent" />

        <div className="flex flex-col lg:flex-row flex-1 max-w-7xl mx-auto w-full px-8 md:px-16 py-20 gap-16 lg:gap-24">
          {/* Left column — service labels */}
          <div className="svc-left-col lg:w-[38%] flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-14">
              <span className="w-8 h-0.5 bg-[#eab308]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a16207]">
                Our Services
              </span>
            </div>

            <div className="flex flex-col gap-8">
              {services.map((service, i) => (
                <div
                  key={service.id}
                  className="flex items-start gap-5 "
                  onClick={() => goToIndex(i)}
                >
                  <span
                    id={`svc-counter-${service.id}`}
                    className="text-xs font-bold mt-2 cursor-pointer"
                    style={{ color: i === 0 ? "#eab308" : "#e8e2db" }}
                  >
                    0{i + 1}
                  </span>

                  <div className="flex flex-col gap-2">
                    <span
                      id={`svc-label-${service.id}`}
                      // className="text-[clamp(18px,2.5vw,32px)] font-semibold leading-none cursor-default"
                      className="text-[clamp(14px,1.8vw,24px)] font-semibold leading-none cursor-default"
                      style={{
                        color: i === 0 ? "#1c1917" : "#d4cdc7",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {service.label}
                    </span>

                    <div
                      id={`svc-underline-${service.id}`}
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
              Fuji Solar — Est. 1983
            </p>
          </div>

          {/* Right column — service content */}
          <div className="lg:w-[62%] relative flex items-center">
            {services.map((service, i) => (
              <div
                key={service.id}
                id={`svc-content-${service.id}`}
                className={`absolute inset-0 flex flex-col justify-center ${
                  i === 0 ? "pointer-events-auto" : "pointer-events-none"
                }`}
              >
                {/* Image */}
                <div className="relative w-full h-75 mb-7 rounded-2xl overflow-hidden bg-[#f9f6f1]">
                  <Image
                    fill
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2
                  // className="text-[clamp(22px,3vw,40px)] font-bold leading-[1.1] mb-4 text-[#1c1917]"
                  className="text-[clamp(16px,2vw,28px)] font-bold leading-[1.1] flex gap-3 items-center mb-4 text-[#1c1917]"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  {service.title}

                  <Link
                    href={service.link}
                    className="inline-flex items-center justify-between gap-2 shadow-md bg-brand-red text-gray-50 backdrop-blur-lg text-sm font-medium px-3 py-1 rounded-full w-fit group transition-colors"
                  >
                    Learn More
                    <span className="bg-gray-50 translate-x-2 shadow-lg -rotate-40 group-hover:rotate-0 transition-all duration-200 text-brand-red rounded-full w-7 h-7 p-2 flex items-center justify-center text-xs">
                      <ArrowRight />
                    </span>
                  </Link>

                  {/* <span className="text-sm ml-2 text-brand-red group transition-colors">
                    <Link href={service.link}>
                      Learn More{" "}
                      <span>
                        <ArrowRight
                          className="inline -rotate-40 group-hove:translate-y-10"
                          size={15}
                        />
                      </span>
                    </Link>
                  </span> */}
                </h2>

                <p className="md:text-sm leading-relaxed mb-4 max-w-xl text-gray-600">
                  {service.description}
                </p>

                {/* Bullet list */}
                {/* <ul className="flex flex-col gap-2 mb-4">
                  {service.bullets.map((bullet, bi) => (
                    <li
                      key={bi}
                      className="flex items-start gap-3 text-sm text-[#57534e]"
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: service.accent }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul> */}

                {/* <Link
                  href={service.link}
                  className="flex items-center gap-2 shadow-md bg-brand-red text-gray-50 backdrop-blur-lg text-sm font-medium px-5 py-2 rounded-full w-fit group transition-colors"
                >
                  Learn More
                  <span className="bg-gray-50 translate-x-2 shadow-lg -rotate-40 group-hover:rotate-0 transition-all duration-200 text-brand-red rounded-full w-8 h-8 p-2 flex items-center justify-center text-xs">
                    <ArrowRight />
                  </span>
                </Link> */}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom rule */}
        <div className="w-full h-0.5 shrink-0 bg-linear-to-r from-transparent via-[#eab308]/30 to-transparent" />
      </section>

      {/* ── Mobile view ── */}
      <section className="lg:hidden flex p-4 py-10 bg-background">
        <div className="flex flex-col gap-25">
          {services.map((service, i) => (
            <div key={service.id} className="flex flex-col gap-6">
              {/* Label row */}
              <div className="flex items-start gap-5">
                <span className="text-xs font-bold mt-2 text-[#eab308]">0{i + 1}</span>

                <div className="flex flex-col gap-2">
                  <span className="text-[clamp(20px,5vw,30px)] font-semibold leading-none cursor-default text-gray-900">
                    {service.label}
                  </span>
                  <div className="h-0.75 rounded-full bg-[#eab308] origin-left" />
                </div>
              </div>

              {/* Image */}
              <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-[#f9f6f1]">
                {/* <div className="relative h-20 w-30"> */}
                <Image
                  fill
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover"
                />
                {/* </div> */}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4">
                <h2
                  className="text-[clamp(20px,5vw,30px)] font-bold leading-[1.1] flex flex-wrap text-[#1c1917]"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  {service.title}

                  <span className="text-sm ml-2 text-brand-red group transition-colors">
                    <Link href={service.link}>
                      Learn More{" "}
                      <span>
                        <ArrowRight
                          className="inline -rotate-40 group-hove:translate-y-10"
                          size={15}
                        />
                      </span>
                    </Link>
                  </span>
                </h2>

                <p className="text-base leading-relaxed text-gray-700">
                  {service.description}
                </p>

                <ul className="flex flex-col gap-2">
                  {service.bullets.map((bullet, bi) => (
                    <li
                      key={bi}
                      className="flex items-start gap-3 text-sm text-[#57534e]"
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: service.accent }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.link}
                  className="flex items-center gap-2 shadow-md bg-brand-red text-gray-50 backdrop-blur-lg text-sm font-medium px-5 py-2 rounded-full w-fit group transition-colors"
                >
                  Learn More
                  <span className="bg-gray-50 translate-x-2 shadow-lg -rotate-40 group-hover:rotate-0 transition-all duration-200 text-brand-red rounded-full w-8 h-8 p-2 flex items-center justify-center text-xs">
                    {/* ➜ */}
                    <ArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
