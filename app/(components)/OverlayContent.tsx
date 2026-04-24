"use client";

import React from "react";

export function OverlayContent() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Scene 1 Intro Text */}
      <div
        id="intro-text"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-xl font-medium tracking-widest uppercase opacity-0 transition-opacity duration-1000"
      >
        Scroll to explore
      </div>

      {/* Scene 2 Labels */}
      <div
        id="labels-container"
        className="absolute right-[15%] top-1/2 -translate-y-1/2 space-y-8"
      >
        {[
          {
            id: "label-cells",
            text: "Solar Cells",
            desc: "High-efficiency monocrystalline silicon",
          },
          {
            id: "label-glass",
            text: "Tempered Glass",
            desc: "Anti-reflective and high-transmittance",
          },
          {
            id: "label-frame",
            text: "Aluminum Frame",
            desc: "Corrosion-resistant and robust",
          },
          {
            id: "label-junction",
            text: "Junction Box",
            desc: "IP68 rated for extreme weather",
          },
        ].map((label) => (
          <div
            key={label.id}
            id={label.id}
            className="flex items-center gap-4 group opacity-0 translate-x-10"
          >
            <div className="w-12 h-[1px] bg-white/50 group-hover:bg-white transition-colors" />
            <div>
              <h3 className="text-white text-xl font-bold uppercase tracking-tight">
                {label.text}
              </h3>
              <p className="text-white/60 text-sm">{label.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Scene 4 Installation Text */}
      <div
        id="installation-text"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center opacity-0"
      >
        <h2 className="text-white text-5xl md:text-7xl font-black uppercase leading-tight">
          Perfect for <br />
          <span className="text-blue-400">Residential & Commercial</span> Use
        </h2>
      </div>
    </div>
  );
}
