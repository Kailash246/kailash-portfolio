import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useExhibition } from '../../context/ExhibitionContext';

interface SignatureMotifKProps {
  scale?: number;
  interactive?: boolean;
  wireframe?: boolean;
}

export const SignatureMotifK: React.FC<SignatureMotifKProps> = ({
  scale = 1,
  interactive = true,
  wireframe = false,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const accentRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const { reducedMotion } = useExhibition();

  // Pointer tracking target
  const targetRotation = useRef({ x: 0.05, y: 0.28 });

  useFrame((state) => {
    if (!groupRef.current) return;

    if (reducedMotion) {
      // Fixed elegant studio orientation
      groupRef.current.rotation.x = 0.08;
      groupRef.current.rotation.y = 0.32;
      groupRef.current.position.y = 0;
      return;
    }

    const t = state.clock.getElapsedTime();

    // Harmonic subtle floating
    groupRef.current.position.y = Math.sin(t * 1.2) * 0.08;

    if (interactive) {
      // Smooth lerp toward mouse pointer
      const mouseX = state.pointer.x * 0.45;
      const mouseY = state.pointer.y * 0.35;
      
      targetRotation.current.y = 0.32 + mouseX + Math.sin(t * 0.4) * 0.05;
      targetRotation.current.x = 0.08 - mouseY + Math.cos(t * 0.3) * 0.03;

      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotation.current.y,
        0.06
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotation.current.x,
        0.06
      );
    } else {
      groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.2 + 0.3;
    }

    // Subtle orbital pulse of accent mark
    if (accentRef.current) {
      accentRef.current.position.y = 1.35 + Math.sin(t * 2.0) * 0.04;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.15;
    }
  });

  return (
    <group ref={groupRef} scale={scale} dispose={null}>
      {/* Central Stem of the 'K' */}
      <mesh position={[-0.75, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.42, 3.2, 0.42]} />
        <meshStandardMaterial
          color="#FAF7F2"
          roughness={0.42}
          metalness={0.06}
          wireframe={wireframe}
        />
      </mesh>

      {/* Stem Chamfered Architectural Cap Top */}
      <mesh position={[-0.75, 1.66, 0]} castShadow>
        <boxGeometry args={[0.46, 0.1, 0.46]} />
        <meshStandardMaterial color="#EAE5DB" roughness={0.35} metalness={0.1} />
      </mesh>

      {/* Stem Chamfered Architectural Cap Bottom */}
      <mesh position={[-0.75, -1.66, 0]} receiveShadow>
        <boxGeometry args={[0.46, 0.1, 0.46]} />
        <meshStandardMaterial color="#EAE5DB" roughness={0.35} metalness={0.1} />
      </mesh>

      {/* Upper Diagonal Arm of 'K' (ascending) */}
      <mesh
        position={[0.22, 0.82, 0.05]}
        rotation={[0, 0, -Math.PI / 4]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[0.38, 2.2, 0.38]} />
        <meshStandardMaterial
          color="#FAF7F2"
          roughness={0.42}
          metalness={0.06}
          wireframe={wireframe}
        />
      </mesh>

      {/* Upper Arm Beveled Finial */}
      <mesh
        position={[0.98, 1.58, 0.05]}
        rotation={[0, 0, -Math.PI / 4]}
        castShadow
      >
        <boxGeometry args={[0.42, 0.12, 0.42]} />
        <meshStandardMaterial color="#DDD7CB" roughness={0.3} metalness={0.12} />
      </mesh>

      {/* Lower Diagonal Leg of 'K' (descending) */}
      <mesh
        position={[0.26, -0.78, -0.04]}
        rotation={[0, 0, Math.PI / 3.8]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[0.38, 2.1, 0.38]} />
        <meshStandardMaterial
          color="#FAF7F2"
          roughness={0.42}
          metalness={0.06}
          wireframe={wireframe}
        />
      </mesh>

      {/* Lower Leg Ground Anchor Block */}
      <mesh
        position={[0.98, -1.54, -0.04]}
        rotation={[0, 0, Math.PI / 3.8]}
        receiveShadow
      >
        <boxGeometry args={[0.42, 0.12, 0.42]} />
        <meshStandardMaterial color="#DDD7CB" roughness={0.3} metalness={0.12} />
      </mesh>

      {/* Intersecting Spatial Joint Prism */}
      <mesh position={[-0.2, 0.05, 0.02]} castShadow>
        <boxGeometry args={[0.4, 0.4, 0.46]} />
        <meshStandardMaterial color="#EAE5DB" roughness={0.4} metalness={0.08} />
      </mesh>

      {/* Signature Architectural Vermilion Accent Seal (Floating Sphere) */}
      <mesh ref={accentRef} position={[1.05, 1.35, 0.22]} castShadow>
        <sphereGeometry args={[0.16, 32, 32]} />
        <meshStandardMaterial
          color="#C84B28"
          roughness={0.25}
          metalness={0.2}
        />
      </mesh>

      {/* Spatial Reference Coordinate Ring */}
      <mesh ref={ringRef} position={[0, -1.85, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <ringGeometry args={[1.5, 1.54, 48]} />
        <meshStandardMaterial color="#DDD7CB" opacity={0.6} transparent />
      </mesh>
    </group>
  );
};
