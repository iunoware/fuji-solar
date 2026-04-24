"use client";

import React, { useRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function SolarPanelModel({ ...props }) {
  // Load the model
  const { scene } = useGLTF("/assets/solarpanel.glb");
  const modelRef = useRef<THREE.Group>(null);

  // Clone the scene to avoid sharing state if multiple instances exist
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  return (
    <primitive 
      ref={modelRef}
      object={clonedScene} 
      {...props} 
      dispose={null} 
    />
  );
}

// Preload the model
useGLTF.preload("/assets/solarpanel.glb");
