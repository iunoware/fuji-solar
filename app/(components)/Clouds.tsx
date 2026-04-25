"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Image } from "@react-three/drei";
import * as THREE from "three";

interface CloudProps {
  position: [number, number, number];
  speed: number;
  scale: number;
  opacity: number;
  blur?: number;
}

function Cloud({ position, speed, scale, opacity }: CloudProps) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      // Subtle floating animation
      ref.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.1;
    }
  });

  return (
    <group ref={ref} position={position}>
      <Image
        url="/assets/cloud.png"
        transparent
        opacity={opacity}
        scale={scale}
        // alt="Clouds"
      />
    </group>
  );
}

export function Clouds() {
  const clouds = [
    {
      position: [-4, 1, -1] as [number, number, number],
      speed: 0.2,
      scale: 3,
      opacity: 0.6,
    },
    {
      position: [2, -1, -2] as [number, number, number],
      speed: 0.3,
      scale: 4,
      opacity: 0.5,
    },
    {
      position: [0, 2, -3] as [number, number, number],
      speed: 0.1,
      scale: 5,
      opacity: 0.6,
    },
    {
      position: [-3, -2, 1] as [number, number, number],
      speed: 0.4,
      scale: 2,
      opacity: 0.6,
    },
    {
      position: [3, 1, 2] as [number, number, number],
      speed: 0.25,
      scale: 2.5,
      opacity: 0.6,
    },
  ];

  return (
    <group>
      {clouds.map((cloud, i) => (
        <Cloud key={i} {...cloud} />
      ))}
    </group>
  );
}
