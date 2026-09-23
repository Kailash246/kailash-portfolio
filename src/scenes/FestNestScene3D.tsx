import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useExhibition } from '../context/ExhibitionContext';

export const FestNestScene3D: React.FC<{ isHovered?: boolean }> = ({ isHovered = false }) => {
  const rootGroup = useRef<THREE.Group>(null);
  const card1 = useRef<THREE.Group>(null);
  const card2 = useRef<THREE.Group>(null);
  const card3 = useRef<THREE.Group>(null);
  const { reducedMotion } = useExhibition();

  useFrame((state) => {
    if (!rootGroup.current) return;

    if (reducedMotion) {
      rootGroup.current.rotation.set(0.1, 0.25, 0);
      return;
    }

    const t = state.clock.getElapsedTime();
    const speed = isHovered ? 1.4 : 0.8;

    rootGroup.current.rotation.y = 0.25 + Math.sin(t * 0.4 * speed) * 0.15;
    rootGroup.current.position.y = Math.sin(t * 1.2 * speed) * 0.05;

    // Pointer reactive tilt
    const mouseX = state.pointer.x * 0.2;
    const mouseY = state.pointer.y * 0.15;
    rootGroup.current.rotation.x = 0.1 - mouseY;
    rootGroup.current.rotation.z = mouseX * 0.1;

    // Dynamic fanning out of event flyers on hover
    if (card1.current && card2.current && card3.current) {
      const spread = isHovered ? 1.25 : 1.0;
      card1.current.position.x = THREE.MathUtils.lerp(card1.current.position.x, -0.65 * spread, 0.08);
      card1.current.position.z = THREE.MathUtils.lerp(card1.current.position.z, -0.2 * spread, 0.08);

      card3.current.position.x = THREE.MathUtils.lerp(card3.current.position.x, 0.65 * spread, 0.08);
      card3.current.position.z = THREE.MathUtils.lerp(card3.current.position.z, 0.25 * spread, 0.08);
    }
  });

  return (
    <>
      <ambientLight intensity={0.8} color="#FAF8F5" />
      <directionalLight position={[5, 7, 5]} intensity={1.2} color="#FFFDF7" castShadow />
      <directionalLight position={[-4, 3, -3]} intensity={0.4} color="#DDD7CB" />

      <group ref={rootGroup} scale={0.95} position={[0, 0, 0]}>
        {/* Layer 1: Left Background Event Flyer (Hackathon / Tech Symposia) */}
        <group ref={card1} position={[-0.65, 0.2, -0.2]} rotation={[0, 0.35, -0.05]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.3, 1.8, 0.02]} />
            <meshStandardMaterial color="#FAF7F2" roughness={0.45} metalness={0.05} />
          </mesh>
          {/* Header Accent Band */}
          <mesh position={[0, 0.72, 0.015]}>
            <boxGeometry args={[1.14, 0.18, 0.01]} />
            <meshStandardMaterial color="#DDD7CB" />
          </mesh>
          {/* Text Line Mock */}
          <mesh position={[-0.15, 0.45, 0.015]}>
            <boxGeometry args={[0.7, 0.04, 0.01]} />
            <meshStandardMaterial color="#6E6A63" opacity={0.6} transparent />
          </mesh>
          <mesh position={[-0.25, 0.32, 0.015]}>
            <boxGeometry args={[0.5, 0.03, 0.01]} />
            <meshStandardMaterial color="#989287" opacity={0.5} transparent />
          </mesh>
          {/* Pin Badge */}
          <mesh position={[0.45, 0.75, 0.025]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial color="#2C2A29" />
          </mesh>
        </group>

        {/* Layer 2: Center Featured Event Flyer (Annual University Fest / Main Stage) */}
        <group ref={card2} position={[0, 0, 0.05]} rotation={[0, 0, 0]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.4, 2.0, 0.025]} />
            <meshStandardMaterial color="#FFFFFF" roughness={0.35} metalness={0.04} />
          </mesh>
          {/* Prominent Vermilion Event Badge */}
          <mesh position={[0, 0.75, 0.02]}>
            <boxGeometry args={[1.2, 0.28, 0.01]} />
            <meshStandardMaterial color="#C84B28" roughness={0.3} />
          </mesh>
          {/* Event Content Blocks */}
          <mesh position={[0, 0.35, 0.02]}>
            <boxGeometry args={[1.0, 0.22, 0.008]} />
            <meshStandardMaterial color="#F4F0E8" />
          </mesh>
          <mesh position={[-0.2, 0.05, 0.02]}>
            <boxGeometry args={[0.65, 0.04, 0.008]} />
            <meshStandardMaterial color="#1A1918" />
          </mesh>
          <mesh position={[-0.1, -0.1, 0.02]}>
            <boxGeometry args={[0.85, 0.03, 0.008]} />
            <meshStandardMaterial color="#6E6A63" />
          </mesh>
          {/* Calendar Date Block */}
          <mesh position={[0.38, -0.65, 0.02]}>
            <boxGeometry args={[0.38, 0.38, 0.01]} />
            <meshStandardMaterial color="#EAE5DB" />
          </mesh>
        </group>

        {/* Layer 3: Right Foreground Event Flyer (Design Workshop & Community) */}
        <group ref={card3} position={[0.65, -0.2, 0.25]} rotation={[0, -0.32, 0.06]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.2, 1.7, 0.02]} />
            <meshStandardMaterial color="#FAF7F2" roughness={0.4} metalness={0.05} />
          </mesh>
          {/* Accent Header */}
          <mesh position={[0, 0.65, 0.015]}>
            <boxGeometry args={[1.0, 0.16, 0.01]} />
            <meshStandardMaterial color="#EAE5DB" />
          </mesh>
          <mesh position={[-0.15, 0.35, 0.015]}>
            <boxGeometry args={[0.65, 0.04, 0.01]} />
            <meshStandardMaterial color="#6E6A63" opacity={0.6} transparent />
          </mesh>
          {/* Registration Indicator Pin */}
          <mesh position={[0.42, 0.68, 0.025]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.02, 16]} />
            <meshStandardMaterial color="#C84B28" />
          </mesh>
        </group>

        {/* Spatial Connection Pin Tethers */}
        <mesh position={[0, -1.35, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.4, 1.42, 48]} />
          <meshBasicMaterial color="#DDD7CB" opacity={0.4} transparent />
        </mesh>
      </group>
    </>
  );
};
