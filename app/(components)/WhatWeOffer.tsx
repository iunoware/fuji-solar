"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ServiceCard {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

// const services: ServiceCard[] = [
//   {
//     id: 1,
//     title: "Hybrid Solar Systems",
//     category: "Hybrid",
//     image: "/images/Hybrid.png",
//     description: "Best of both worlds - grid and battery backup",
//   },
//   {
//     id: 2,
//     title: "Off-Grid Solutions",
//     category: "Off-Grid",
//     image: "/images/Offgrid.jpg",
//     description: "Complete energy independence for remote locations",
//   },
//   {
//     id: 3,
//     title: "On-Grid Systems",
//     category: "On-Grid",
//     image: "/images/Ongrid.jpg",
//     description: "Connect to the grid and reduce your electricity bills",
//   },
//   {
//     id: 4,
//     title: "Solar Water Pumps",
//     category: "Water Pumps",
//     image: "/images/Solar-Agro-Pumps.jpg",
//     description: "Efficient irrigation and water supply solutions",
//   },
//   {
//     id: 5,
//     title: "Solar Street Lights",
//     category: "Street Lights",
//     image: "/images/solar-lights.jpg",
//     description: "Illuminate streets with sustainable energy",
//   },
//   {
//     id: 6,
//     title: "Solar Water Heaters",
//     category: "Water Heaters",
//     image: "/images/water-heater.jpg",
//     description: "Hot water powered by the sun",
//   },
// ];

const services: ServiceCard[] = [
  {
    id: 1,
    title: "Hybrid Solar Systems",
    category: "Hybrid",
    image: "/images/hybrid.png",
    description: "Grid + battery backup for uninterrupted power.",
  },
  {
    id: 2,
    title: "Off-Grid Solutions",
    category: "Off-Grid",
    image: "/images/off-grid.png",
    description: "Complete energy independence for remote areas.",
  },
  {
    id: 3,
    title: "On-Grid Systems",
    category: "On-Grid",
    image: "/images/on-grid.png",
    description: "Reduce bills with a solar system for home with subsidy in Tamil Nadu.",
  },
  {
    id: 4,
    title: "Solar Water Pumps",
    category: "Water Pumps",
    image: "/images/water-pumps.png",
    description: "Efficient solar-powered irrigation solutions.",
  },
  {
    id: 5,
    title: "Solar Street Lights",
    category: "Street Lights",
    image: "/images/street-lights.png",
    description: "Sustainable lighting for streets and outdoor spaces.",
  },
  {
    id: 6,
    title: "Solar Water Heaters",
    category: "Water Heaters",
    image: "/images/water-heater.png",
    description: "Reliable hot water powered by solar energy.",
  },
];

export default function WhatWeOffer() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (!cardsRef.current.length) return;
      // Animate cards on load
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: scrollContainerRef.current,
            start: "top 85%",
            invalidateOnRefresh: true,
          },
        },
      );
    },
    { scope: scrollContainerRef },
  );

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(
      e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0),
    );
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x =
      e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section className="py-20 select-none lg:py-28 bg-gray-50">
      <div className="max-w-350 mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 lg:mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-2">
              Our <span className="text-brand-red!">solutions</span>
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 px-6 py-3 border border-gray-300 hover:border-gray-900 rounded-full text-sm font-medium transition-all duration-300 group">
            <span>Discover all solutions</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Draggable Cards Container */}
        <div
          ref={scrollContainerRef}
          className={`overflow-x-auto scrollbar-hide ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          <div className="flex gap-6 pb-4" style={{ width: "max-content" }}>
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="group relative w-70 sm:w-85 lg:w-95 h-100 sm:h-120 lg:h-130 rounded-3xl overflow-hidden shrink-0 opacity-0"
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <div
                    className={`bg-center w-full h-full  bg-cover transition-transform duration-700 group-hover:scale-110`}
                    style={{
                      backgroundImage: `url(${service.image})`,
                    }}
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8 lg:p-10 z-10">
                  {/* Category Badge */}
                  <div className="mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span className="text-white/90 text-sm font-medium tracking-wide">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-light mb-3 leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 text-sm lg:text-base mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* See Project Button */}
                  <button className="inline-flex items-center gap-2 text-white text-sm font-medium group/btn opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="border-b border-white/40 pb-1 group-hover/btn:border-white transition-colors">
                      Learn more
                    </span>
                    <svg
                      className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Hover Effect - Border Glow */}
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-3xl transition-all duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Discover Button */}
        <div className="flex md:hidden justify-center mt-8">
          <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 hover:border-gray-900 rounded-full text-sm font-medium transition-all duration-300 group">
            <span>Discover all solutions</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Scroll Hint */}
        <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-400">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          <span>Drag to explore more</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
