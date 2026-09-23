import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useExhibition } from '../context/ExhibitionContext';

export const EliteQueueScene3D: React.FC<{ isHovered?: boolean }> = ({ isHovered = false }) => {
  const rootGroup = useRef<THREE.Group>(null);
  const token1 = useRef<THREE.Mesh>(null);
  const token2 = useRef<THREE.Mesh>(null);
  const token3 = useRef<THREE.Mesh>(null);
  const { reducedMotion } = useExhibition();

  useFrame((state) => {
    if (!rootGroup.current) return;

    if (reducedMotion) {
      rootGroup.current.rotation.set(0.35, 0.4, 0);
      return;
    }

    const t = state.clock.getElapsedTime();
    const speed = isHovered ? 1.8 : 1.0;

    rootGroup.current.rotation.y = 0.4 + Math.sin(t * 0.3 * speed) * 0.12;
    rootGroup.current.position.y = Math.sin(t * 1.0 * speed) * 0.04;

    // Pointer tilt
    const mouseX = state.pointer.x * 0.2;
    const mouseY = state.pointer.y * 0.15;
    rootGroup.current.rotation.x = 0.35 - mouseY;
    rootGroup.current.rotation.z = mouseX * 0.1;

    // Sequential tokens advancing through the queue track
    const cycle1 = (t * 0.6 * speed) % 1;
    const cycle2 = (t * 0.6 * speed + 0.33) % 1;
    const cycle3 = (t * 0.6 * speed + 0.66) % 1;

    if (token1.current) {
      token1.current.position.x = -1.2 + cycle1 * 2.4;
      token1.current.position.z = Math.sin(cycle1 * Math.PI) * 0.4 - 0.2;
      token1.current.position.y = 0.15 + Math.sin(cycle1 * Math.PI) * 0.1;
    }
    if (token2.current) {
      token2.current.position.x = -1.2 + cycle2 * 2.4;
      token2.current.position.z = Math.sin(cycle2 * Math.PI) * 0.4 - 0.2;
      token2.current.position.y = 0.15 + Math.sin(cycle2 * Math.PI) * 0.1;
    }
    if (token3.current) {
      token3.current.position.x = -1.2 + cycle3 * 2.4;
      token3.current.position.z = Math.sin(cycle3 * Math.PI) * 0.4 - 0.2;
      token3.current.position.y = 0.15 + Math.sin(cycle3 * Math.PI) * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.8} color="#FAF8F5" />
      <directionalLight position={[4, 7, 4]} intensity={1.2} color="#FFFDF7" castShadow />
      <directionalLight position={[-4, 2, -3]} intensity={0.35} color="#DDD7CB" />

      <group ref={rootGroup} scale={1.0} position={[0, -0.1, 0]}>
        {/* Base Queue Trajectory Platform */}
        <mesh position={[0, -0.05, 0]} receiveShadow>
          <boxGeometry args={[3.2, 0.08, 1.8]} />
          <meshStandardMaterial color="#F4F0E8" roughness={0.5} metalness={0.05} />
        </mesh>

        {/* Guided Lane Ticker Rails */}
        <mesh position={[0, 0.02, 0.45]}>
          <boxGeometry args={[2.8, 0.04, 0.04]} />
          <meshStandardMaterial color="#DDD7CB" />
        </mesh>
        <mesh position={[0, 0.02, -0.45]}>
          <boxGeometry args={[2.8, 0.04, 0.04]} />
          <meshStandardMaterial color="#DDD7CB" />
        </mesh>

        {/* Counter Station 01 (Left / Intake Desk) */}
        <group position={[-1.2, 0.25, -0.35]}>
          <mesh castShadow>
            <boxGeometry args={[0.5, 0.5, 0.4]} />
            <meshStandardMaterial color="#FAF7F2" roughness={0.35} />
          </mesh>
          {/* Status screen */}
          <mesh position={[0, 0.35, 0]}>
            <boxGeometry args={[0.3, 0.16, 0.05]} />
            <meshStandardMaterial color="#1A1918" />
          </mesh>
        </group>

        {/* Counter Station 02 (Right / Active Dispatch Desk) */}
        <group position={[1.2, 0.25, 0.35]}>
          <mesh castShadow>
            <boxGeometry args={[0.5, 0.5, 0.4]} />
            <meshStandardMaterial color="#EAE5DB" roughness={0.35} />
          </mesh>
          {/* Active Call Status Sign */}
          <mesh position={[0, 0.35, 0]}>
            <boxGeometry args={[0.3, 0.16, 0.05]} />
            <meshStandardMaterial color="#C84B28" roughness={0.2} emissive="#C84B28" emissiveIntensity={0.5} />
          </mesh>
        </group>

        {/* Orderly Virtual Tokens (Discs in Motion) */}
        <mesh ref={token1} castShadow>
          <cylinderGeometry args={[0.16, 0.16, 0.06, 24]} />
          <meshStandardMaterial color="#FAF7F2" roughness={0.3} metalness={0.1} />
        </mesh>

        <mesh ref={token2} castShadow>
          <cylinderGeometry args={[0.16, 0.16, 0.06, 24]} />
          <meshStandardMaterial color="#C84B28" roughness={0.3} metalness={0.15} />
        </mesh>

        <mesh ref={token3} castShadow>
          <cylinderGeometry args={[0.16, 0.16, 0.06, 24]} />
          <meshStandardMaterial color="#2C2A29" roughness={0.4} metalness={0.2} />
        </mesh>

        {/* Queue Sequence Waypoint Node Rings */}
        {[-0.8, -0.3, 0.2, 0.7].map((x, i) => (
          <mesh key={i} position={[x, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.12, 0.15, 24]} />
            <meshBasicMaterial color="#DDD7CB" opacity={0.6} transparent />
          </mesh>
        ))}
      </group>
    </>
  );
};
