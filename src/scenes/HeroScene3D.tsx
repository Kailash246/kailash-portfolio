import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { SignatureMotifK } from '../components/spatial/SignatureMotifK';
import { useExhibition } from '../context/ExhibitionContext';

export const HeroScene3D: React.FC = () => {
  const bgPlanesRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const { reducedMotion } = useExhibition();

  useFrame((state) => {
    if (reducedMotion) return;
    const t = state.clock.getElapsedTime();
    
    // Subtle background plane parallax
    if (bgPlanesRef.current) {
      bgPlanesRef.current.rotation.y = Math.sin(t * 0.2) * 0.04;
      bgPlanesRef.current.position.y = Math.cos(t * 0.3) * 0.05;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.05;
    }
  });

  return (
    <>
      {/* Studio Lighting */}
      <ambientLight intensity={0.7} color="#FAF8F5" />
      <directionalLight
        position={[6, 9, 6]}
        intensity={1.25}
        color="#FFFDF5"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight
        position={[-6, 4, -4]}
        intensity={0.4}
        color="#EAE5DB"
      />
      <pointLight position={[0, -2, 2]} intensity={0.3} color="#C84B28" />

      {/* Hero Centerpiece: Signature 3D 'K' Sculpture */}
      <group position={[0.2, 0.1, 0]}>
        <SignatureMotifK scale={1.15} interactive={true} />
      </group>

      {/* Floating Spatial Backdrop Planes */}
      <group ref={bgPlanesRef} position={[0, 0, -1.8]}>
        {/* Soft Parchment Exhibition Backdrop Plate */}
        <mesh position={[-1.6, 0.4, -0.4]} rotation={[0, 0.15, -0.05]}>
          <boxGeometry args={[2.4, 3.4, 0.02]} />
          <meshStandardMaterial
            color="#F4F0E8"
            roughness={0.7}
            metalness={0.02}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Secondary Warm Stone Elevation Plate */}
        <mesh position={[1.8, -0.2, -0.6]} rotation={[0, -0.2, 0.08]}>
          <boxGeometry args={[2.0, 2.8, 0.02]} />
          <meshStandardMaterial
            color="#EAE5DB"
            roughness={0.65}
            metalness={0.04}
            transparent
            opacity={0.75}
          />
        </mesh>
      </group>

      {/* Exhibition Concentric Compass Ring */}
      <mesh
        ref={ringRef}
        position={[0, -2.1, -0.5]}
        rotation={[-Math.PI / 2.2, 0, 0]}
      >
        <ringGeometry args={[2.8, 2.82, 64]} />
        <meshBasicMaterial color="#DDD7CB" transparent opacity={0.65} />
      </mesh>
    </>
  );
};
