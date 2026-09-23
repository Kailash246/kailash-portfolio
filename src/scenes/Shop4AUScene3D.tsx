import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useExhibition } from '../context/ExhibitionContext';

export const Shop4AUScene3D: React.FC<{ isHovered?: boolean }> = ({ isHovered = false }) => {
  const rootGroup = useRef<THREE.Group>(null);
  const notebook = useRef<THREE.Group>(null);
  const ruler = useRef<THREE.Mesh>(null);
  const tokenPlate = useRef<THREE.Mesh>(null);
  const { reducedMotion } = useExhibition();

  useFrame((state) => {
    if (!rootGroup.current) return;

    if (reducedMotion) {
      rootGroup.current.rotation.set(0.25, 0.35, 0);
      return;
    }

    const t = state.clock.getElapsedTime();
    const speed = isHovered ? 1.5 : 0.8;

    rootGroup.current.rotation.y = 0.35 + Math.sin(t * 0.35 * speed) * 0.15;
    rootGroup.current.position.y = Math.sin(t * 1.1 * speed) * 0.05;

    // Pointer tilt
    const mouseX = state.pointer.x * 0.22;
    const mouseY = state.pointer.y * 0.18;
    rootGroup.current.rotation.x = 0.25 - mouseY;
    rootGroup.current.rotation.z = mouseX * 0.1;

    // Dimensional separation on hover
    if (notebook.current && ruler.current && tokenPlate.current) {
      const elevation = isHovered ? 0.25 : 0;
      notebook.current.position.y = THREE.MathUtils.lerp(notebook.current.position.y, 0.05 + elevation * 0.6, 0.08);
      ruler.current.position.y = THREE.MathUtils.lerp(ruler.current.position.y, 0.35 + elevation * 1.2, 0.08);
      tokenPlate.current.position.y = THREE.MathUtils.lerp(tokenPlate.current.position.y, 0.2 + elevation * 0.9, 0.08);
    }
  });

  return (
    <>
      <ambientLight intensity={0.8} color="#FAF8F5" />
      <directionalLight position={[5, 7, 5]} intensity={1.2} color="#FFFDF7" castShadow />
      <directionalLight position={[-4, 2, -3]} intensity={0.4} color="#DDD7CB" />

      <group ref={rootGroup} scale={1.0} position={[0, -0.1, 0]}>
        {/* Base Curated Display Tray */}
        <mesh position={[0, -0.1, 0]} receiveShadow>
          <boxGeometry args={[2.8, 0.06, 2.2]} />
          <meshStandardMaterial color="#EAE5DB" roughness={0.6} metalness={0.05} />
        </mesh>

        {/* Hardcover Academic Journal / Lab Record Block */}
        <group ref={notebook} position={[-0.3, 0.08, -0.1]} rotation={[0, 0.18, 0]}>
          {/* Main Book Block (Cream Pages) */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.5, 0.22, 1.9]} />
            <meshStandardMaterial color="#F4F0E8" roughness={0.7} />
          </mesh>
          {/* Dark Charcoal Hardcover Shell */}
          <mesh position={[0, 0.12, 0]} castShadow>
            <boxGeometry args={[1.54, 0.02, 1.94]} />
            <meshStandardMaterial color="#1A1918" roughness={0.4} />
          </mesh>
          <mesh position={[0, -0.12, 0]} receiveShadow>
            <boxGeometry args={[1.54, 0.02, 1.94]} />
            <meshStandardMaterial color="#1A1918" roughness={0.4} />
          </mesh>
          {/* Spine Binding */}
          <mesh position={[-0.78, 0, 0]} castShadow>
            <boxGeometry args={[0.04, 0.25, 1.94]} />
            <meshStandardMaterial color="#1A1918" roughness={0.4} />
          </mesh>
          {/* Vermilion Bookmark Ribbon */}
          <mesh position={[0.2, 0.13, 0.95]} rotation={[0.1, 0, 0]}>
            <boxGeometry args={[0.1, 0.01, 0.4]} />
            <meshStandardMaterial color="#C84B28" roughness={0.3} />
          </mesh>
        </group>

        {/* Precision Drafting Ruler / Triangular Scale */}
        <mesh
          ref={ruler}
          position={[0.7, 0.18, 0.3]}
          rotation={[-0.05, -0.4, 0.1]}
          castShadow
        >
          <boxGeometry args={[0.22, 0.08, 1.8]} />
          <meshStandardMaterial color="#FAF7F2" roughness={0.3} metalness={0.1} />
        </mesh>

        {/* Digital Stationery Reservation Ticket / Plate */}
        <mesh
          ref={tokenPlate}
          position={[0.5, 0.12, -0.6]}
          rotation={[0.08, -0.2, 0]}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[0.9, 0.04, 0.7]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
        </mesh>

        {/* Verification Stamp on Ticket */}
        <mesh position={[0.7, 0.15, -0.75]}>
          <cylinderGeometry args={[0.08, 0.08, 0.01, 16]} />
          <meshStandardMaterial color="#C84B28" />
        </mesh>
      </group>
    </>
  );
};
