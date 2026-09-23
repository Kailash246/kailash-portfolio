import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useExhibition } from '../context/ExhibitionContext';

export const GoCartzScene3D: React.FC<{ isHovered?: boolean }> = ({ isHovered = false }) => {
  const cartGroup = useRef<THREE.Group>(null);
  const wheelsRef = useRef<THREE.Group>(null);
  const sensorPulse = useRef<THREE.Mesh>(null);
  const { reducedMotion } = useExhibition();

  useFrame((state) => {
    if (!cartGroup.current) return;

    if (reducedMotion) {
      cartGroup.current.rotation.set(0.18, 0.45, 0);
      return;
    }

    const t = state.clock.getElapsedTime();
    const speed = isHovered ? 1.5 : 0.8;

    // Smooth gentle orbital rotation & elevation
    cartGroup.current.rotation.y = 0.45 + Math.sin(t * 0.5 * speed) * 0.22;
    cartGroup.current.position.y = Math.sin(t * 1.5 * speed) * 0.06;

    // Pointer reactive tilt
    const mouseX = state.pointer.x * 0.25;
    const mouseY = state.pointer.y * 0.2;
    cartGroup.current.rotation.x = 0.18 - mouseY;
    cartGroup.current.rotation.z = mouseX * 0.15;

    // Wheels slow rotation
    if (wheelsRef.current) {
      wheelsRef.current.children.forEach((wheel) => {
        wheel.rotation.x += 0.015 * speed;
      });
    }

    // Telemetry sensor heartbeat pulse
    if (sensorPulse.current) {
      const scale = 1 + Math.sin(t * 4.0) * 0.15;
      sensorPulse.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <>
      <ambientLight intensity={0.8} color="#FAF8F5" />
      <directionalLight position={[4, 6, 4]} intensity={1.2} color="#FFFDF7" castShadow />
      <directionalLight position={[-4, 2, -3]} intensity={0.4} color="#DDD7CB" />

      <group ref={cartGroup} scale={0.95} position={[0, -0.1, 0]}>
        {/* Main Chassis Deck Plate */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.2, 0.14, 1.3]} />
          <meshStandardMaterial color="#FAF7F2" roughness={0.35} metalness={0.1} />
        </mesh>

        {/* Chassis Perimeter Protective Rail */}
        <mesh position={[0, 0.22, 0]} castShadow>
          <boxGeometry args={[2.24, 0.06, 1.34]} />
          <meshStandardMaterial color="#DDD7CB" roughness={0.45} metalness={0.2} />
        </mesh>

        {/* Modular Cargo Box Enclosure */}
        <mesh position={[-0.2, 0.45, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.4, 0.65, 1.1]} />
          <meshStandardMaterial color="#EAE5DB" roughness={0.5} metalness={0.05} />
        </mesh>

        {/* Electric Motor & Battery Pack Housing */}
        <mesh position={[0.7, 0.3, 0]} castShadow>
          <boxGeometry args={[0.5, 0.42, 0.7]} />
          <meshStandardMaterial color="#2C2A29" roughness={0.4} metalness={0.3} />
        </mesh>

        {/* Telemetry Sensor LED / Battery Indicator */}
        <mesh ref={sensorPulse} position={[0.7, 0.54, 0]}>
          <boxGeometry args={[0.15, 0.04, 0.25]} />
          <meshStandardMaterial color="#C84B28" roughness={0.2} emissive="#C84B28" emissiveIntensity={0.6} />
        </mesh>

        {/* Ergonomic Steering Yoke / Control Tiller */}
        <group position={[1.05, 0.55, 0]} rotation={[0, 0, -0.2]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.04, 0.04, 1.0, 16]} />
            <meshStandardMaterial color="#2C2A29" roughness={0.3} metalness={0.4} />
          </mesh>
          {/* Handlebar crossbar */}
          <mesh position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.04, 0.04, 0.7, 16]} />
            <meshStandardMaterial color="#DDD7CB" roughness={0.35} metalness={0.3} />
          </mesh>
          {/* Throttle dial */}
          <mesh position={[0.04, 0.5, 0.22]} castShadow>
            <boxGeometry args={[0.06, 0.06, 0.08]} />
            <meshStandardMaterial color="#C84B28" />
          </mesh>
        </group>

        {/* 4 Wheels Group */}
        <group ref={wheelsRef}>
          {/* Front Left */}
          <mesh position={[0.8, -0.22, 0.75]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.3, 0.3, 0.16, 24]} />
            <meshStandardMaterial color="#1A1918" roughness={0.7} />
          </mesh>
          {/* Front Right */}
          <mesh position={[0.8, -0.22, -0.75]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.3, 0.3, 0.16, 24]} />
            <meshStandardMaterial color="#1A1918" roughness={0.7} />
          </mesh>
          {/* Rear Left */}
          <mesh position={[-0.8, -0.22, 0.75]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.3, 0.3, 0.16, 24]} />
            <meshStandardMaterial color="#1A1918" roughness={0.7} />
          </mesh>
          {/* Rear Right */}
          <mesh position={[-0.8, -0.22, -0.75]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.3, 0.3, 0.16, 24]} />
            <meshStandardMaterial color="#1A1918" roughness={0.7} />
          </mesh>
        </group>

        {/* Ground Shadow Plate */}
        <mesh position={[0, -0.53, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[3.2, 2.2]} />
          <meshBasicMaterial color="#DDD7CB" opacity={0.3} transparent />
        </mesh>
      </group>
    </>
  );
};
