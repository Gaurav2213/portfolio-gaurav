// components/TechBall.jsx
"use client";
import React from 'react';
import { OrbitControls, Sphere, useTexture } from '@react-three/drei';

export default function TechBall({ image }) {
  const texture = useTexture(image);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 1, 1]} />
      <OrbitControls enableZoom={false} />
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial map={texture} />
      </Sphere>
    </>
  );
}
