"use client";

import React, { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, PerspectiveCamera } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { SolarPanelModel } from "./SolarPanelModel";
import { Clouds } from "./Clouds";
import { OverlayContent } from "./OverlayContent";

gsap.registerPlugin(ScrollTrigger);

export default function SolarStorySection() {
  const container = useRef<HTMLDivElement>(null);
  const [model, setModel] = useState<THREE.Group | null>(null);
  const [clouds, setClouds] = useState<THREE.Group | null>(null);

  useGSAP(
    () => {
      if (!container.current || !model || !clouds) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5,
          },
        });

        // SCENE 1 -> 2: Reveal & Explore
        tl.to("#intro-text", { opacity: 0, y: -20, duration: 0.5 }, 0)
          .to(model.position, { x: -2, y: 0, z: 0, duration: 1 }, 0.5)
          .to(model.rotation, { y: 0.5, duration: 1 }, 0.5)
          .to("#label-cells", { opacity: 1, x: 0, duration: 0.5 }, 1)
          .to("#label-glass", { opacity: 1, x: 0, duration: 0.5 }, 1.2)
          .to("#label-frame", { opacity: 1, x: 0, duration: 0.5 }, 1.4)
          .to("#label-junction", { opacity: 1, x: 0, duration: 0.5 }, 1.6);

        // SCENE 2 -> 3: Depth & Cinematic
        tl.to("#labels-container", { opacity: 0, x: 20, duration: 0.5 }, 2.5)
          .to(
            model.position,
            { z: 3, x: 0, duration: 1.5, ease: "power2.inOut" },
            2.5,
          )
          .to(model.rotation, { x: 0.2, y: -0.2, duration: 1.5 }, 2.5)
          .to(clouds.position, { z: 10, duration: 1.5 }, 2.5);

        // SCENE 3 -> 4: Installation
        tl.to(
          ".background-gradient",
          {
            background: "linear-gradient(to bottom, #d3efff, #ffffff)",
            duration: 1,
          },
          3.5,
        )
          .to(model.position, { x: 0, y: 1.5, z: -1, duration: 1.5 }, 3.5)
          .to(model.rotation, { x: 1.2, y: 0, z: 0.5, duration: 1.5 }, 3.5)
          .to(model.scale, { x: 1.5, y: 1.5, z: 1.5, duration: 1.5 }, 3.5)
          .to("#installation-text", { opacity: 1, y: 0, duration: 1 }, 4);
      });

      mm.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });

        tl.to("#intro-text", { opacity: 0, duration: 0.5 })
          .to(model.position, { y: 1, scale: 2, duration: 1 })
          .to("#installation-text", { opacity: 1, y: 0, duration: 1 });

        gsap.set("#labels-container", { display: "none" });
      });

      return () => mm.revert();
    },
    { dependencies: [model, clouds], scope: container },
  );

  return (
    <section ref={container} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background Layer */}
        <div
          //  className="background-gradient absolute inset-0 -z-10 bg-[url('/images/sky.png')] bg-cover bg-center"
          className="background-gradient absolute inset-0 -z-10 bg-[#d3efff] bg-cover bg-center"
        />

        {/* 3D Canvas */}
        <Canvas
          dpr={[1, 1.5]}
          gl={{ antialias: true }}
          className="bg-transparent"
        >
          <React.Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />

            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} />

            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
              <group ref={setModel}>
                <SolarPanelModel scale={1.8} rotation={[0, 0, 0]} />
              </group>
            </Float>

            <group ref={setClouds}>
              <Clouds />
            </group>

            <Environment preset="city" />
          </React.Suspense>
        </Canvas>

        {/* HTML Overlay */}
        <OverlayContent />
      </div>
    </section>
  );
}
