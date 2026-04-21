"use client";

import React, { useRef, useState, useEffect } from "react";
import { Star } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Ravi Kumar",
    location: "Chennai, TN",
    quote: "Great service and smooth installation. We've already started saving on our electricity bills significantly!",
    rating: 5,
    initials: "RK",
  },
  {
    id: 2,
    name: "Ananya Mehta",
    location: "Mumbai, MH",
    quote: "The team was professional and handle all the subsidies paper work. Highly recommend Fuji Solar.",
    rating: 5,
    initials: "AM",
  },
  {
    id: 3,
    name: "Suresh Pillai",
    location: "Bangalore, KA",
    quote: "Best investment for our home. The mobile app tracking is brilliant and the power output is as promised.",
    rating: 5,
    initials: "SP",
  },
  {
    id: 4,
    name: "Priya Sharma",
    location: "Delhi, NCR",
    quote: "Switching to solar was seamless. Fuji handles everything from design to installation perfectly.",
    rating: 5,
    initials: "PS",
  },
  {
    id: 5,
    name: "Vikram Singh",
    location: "Jaipur, RJ",
    quote: "Professional setup and excellent customer support. Our monthly bills have dropped by over 80%.",
    rating: 5,
    initials: "VS",
  },
];

const Testimonial = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-6 bg-white overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-50 text-[#16A34A] text-sm font-semibold tracking-wide mb-6">
            💬 Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            What Our <span className="text-brand-red">Customers Say</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            Real experiences from customers who switched to solar with Fuji.
          </p>
        </div>

        {/* Scrollable Container with Faded Edges */}
        <div className="relative group/scroll">
          {/* Edge Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-white to-transparent z-10 pointer-events-none hidden md:block" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-white to-transparent z-10 pointer-events-none hidden md:block" />

          {/* Draggable Area */}
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-8 ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            {testimonials.map((t, index) => (
              <div
                key={t.id}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="min-w-[300px] md:min-w-[380px] snap-center"
              >
                <div className="h-full bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-red/20 transition-all duration-500 group">
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="border-t border-gray-100 pt-6 mt-auto">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-linear-to-br from-green-100 to-white flex items-center justify-center text-green-700 font-bold border border-green-50 shadow-sm">
                        {t.initials}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{t.name}</h4>
                        <p className="text-sm text-gray-500">{t.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;