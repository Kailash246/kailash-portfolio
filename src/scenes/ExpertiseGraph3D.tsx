import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { SKILLS_DATA } from '../data/portfolioData';
import type { SkillNode } from '../types/exhibition';

import { useExhibition } from '../context/ExhibitionContext';

interface NodeMeshProps {
  node: SkillNode;
  isHovered: boolean;
  isSelected: boolean;
  isRelated: boolean;
  isDimmed: boolean;
  onHover: (id: string | null) => void;
  onSelect: (id: string) => void;
}

const NodeMesh: React.FC<NodeMeshProps> = ({
  node,
  isHovered,
  isSelected,
  isRelated,
  isDimmed,
  onHover,
  onSelect,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { reducedMotion } = useExhibition();

  // Compute target z-offset based on interaction state
  const targetZ = useMemo(() => {
    if (isHovered || isSelected) return node.position[2] + 0.65;
    if (isRelated) return node.position[2] + 0.28;
    if (isDimmed) return node.position[2] - 0.45;
    return node.position[2];
  }, [isHovered, isSelected, isRelated, isDimmed, node.position]);

  const targetScale = useMemo(() => {
    if (isHovered || isSelected) return 1.3;
    if (isRelated) return 1.12;
    if (isDimmed) return 0.85;
    return 1.0;
  }, [isHovered, isSelected, isRelated, isDimmed]);

  useFrame(() => {
    if (!meshRef.current) return;
    if (reducedMotion) {
      meshRef.current.position.set(node.position[0], node.position[1], targetZ);
      meshRef.current.scale.set(targetScale, targetScale, targetScale);
      return;
    }

    meshRef.current.position.z = THREE.MathUtils.lerp(
      meshRef.current.position.z,
      targetZ,
      0.1
    );

    const currentScale = meshRef.current.scale.x;
    const lerpedScale = THREE.MathUtils.lerp(currentScale, targetScale, 0.1);
    meshRef.current.scale.set(lerpedScale, lerpedScale, lerpedScale);
  });

  const nodeColor = useMemo(() => {
    if (isHovered || isSelected) return '#C84B28';
    if (isRelated) return '#2C2A29';
    if (isDimmed) return '#DDD7CB';
    switch (node.category) {
      case 'PROGRAMMING':
        return '#1A1918';
      case 'WEB DEVELOPMENT':
        return '#3A3836';
      case 'AI / NLP':
        return '#544F49';
      case 'DATA':
        return '#6E6A63';
      case 'TOOLS':
        return '#8A847B';
      default:
        return '#2C2A29';
    }
  }, [isHovered, isSelected, isRelated, isDimmed, node.category]);

  return (
    <mesh
      ref={meshRef}
      position={[node.position[0], node.position[1], node.position[2]]}
      onPointerOver={(e) => {
        e.stopPropagation();
        onHover(node.id);
      }}
      onPointerOut={() => onHover(null)}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(node.id);
      }}
      castShadow
    >
      <boxGeometry args={[0.28, 0.28, 0.28]} />
      <meshStandardMaterial
        color={nodeColor}
        roughness={0.35}
        metalness={0.1}
        opacity={isDimmed ? 0.35 : 1}
        transparent={isDimmed}
      />

      {/* HTML Label with editorial typography */}
      <Html
        position={[0, 0.28, 0]}
        center
        distanceFactor={6.5}
        zIndexRange={[100, 0]}
        className="pointer-events-none select-none transition-opacity duration-300"
        style={{
          opacity: isDimmed ? 0.3 : 1,
        }}
      >
        <div
          className={`px-2 py-0.5 rounded text-[11px] font-mono-tag tracking-wider whitespace-nowrap shadow-sm border transition-all ${
            isHovered || isSelected
              ? 'bg-[#C84B28] text-white border-[#C84B28] font-bold scale-110'
              : isRelated
              ? 'bg-[#1A1918] text-[#FAF8F5] border-[#1A1918] font-semibold'
              : 'bg-[#FAF8F5]/90 text-[#1A1918] border-[#DDD7CB]'
          }`}
        >
          {node.name}
        </div>
      </Html>
    </mesh>
  );
};

export const ExpertiseGraph3D: React.FC = () => {
  const { hoveredSkill, setHoveredSkill, selectedSkill, setSelectedSkill } = useExhibition();
  const graphGroupRef = useRef<THREE.Group>(null);
  const { reducedMotion } = useExhibition();

  const activeSkillId = hoveredSkill || selectedSkill;

  // Active skill node data
  const activeNode = useMemo(() => {
    return SKILLS_DATA.find((s) => s.id === activeSkillId) || null;
  }, [activeSkillId]);

  // Compute connections
  const connections = useMemo(() => {
    const lines: Array<{
      start: [number, number, number];
      end: [number, number, number];
      id: string;
      isActive: boolean;
    }> = [];

    SKILLS_DATA.forEach((source) => {
      source.relatedSkills.forEach((relId) => {
        const target = SKILLS_DATA.find((s) => s.id === relId);
        if (target && source.id < target.id) {
          const isActive =
            activeSkillId === source.id || activeSkillId === target.id;
          lines.push({
            start: source.position,
            end: target.position,
            id: `${source.id}-${target.id}`,
            isActive,
          });
        }
      });
    });

    return lines;
  }, [activeSkillId]);

  useFrame((state) => {
    if (!graphGroupRef.current || reducedMotion) return;
    const t = state.clock.getElapsedTime();

    // Gentle floating
    graphGroupRef.current.rotation.y = Math.sin(t * 0.2) * 0.08;
    graphGroupRef.current.position.y = Math.cos(t * 0.3) * 0.04;
  });

  return (
    <>
      <ambientLight intensity={0.8} color="#FAF8F5" />
      <directionalLight position={[5, 8, 6]} intensity={1.2} color="#FFFDF7" castShadow />
      <directionalLight position={[-5, 2, -4]} intensity={0.4} color="#DDD7CB" />

      <group ref={graphGroupRef} scale={1.2} position={[0, 0, 0]}>
        {/* Render Connection Lines */}
        {connections.map((conn) => {
          const points = [
            new THREE.Vector3(...conn.start),
            new THREE.Vector3(...conn.end),
          ];
          const geometry = new THREE.BufferGeometry().setFromPoints(points);

          return (
            <primitive
              key={conn.id}
              object={
                new THREE.Line(
                  geometry,
                  new THREE.LineBasicMaterial({
                    color: conn.isActive ? '#C84B28' : '#DDD7CB',
                    linewidth: conn.isActive ? 2 : 1,
                    transparent: true,
                    opacity: conn.isActive ? 0.9 : activeSkillId ? 0.15 : 0.45,
                  })
                )
              }
            />
          );
        })}

        {/* Render Skill Nodes */}
        {SKILLS_DATA.map((node) => {
          const isSelected = selectedSkill === node.id;
          const isHovered = hoveredSkill === node.id;
          const isRelated =
            activeNode !== null &&
            (activeNode.relatedSkills.includes(node.id) ||
              node.relatedSkills.includes(activeNode.id));
          const isDimmed =
            activeSkillId !== null &&
            !isSelected &&
            !isHovered &&
            !isRelated;

          return (
            <NodeMesh
              key={node.id}
              node={node}
              isSelected={isSelected}
              isHovered={isHovered}
              isRelated={isRelated}
              isDimmed={isDimmed}
              onHover={setHoveredSkill}
              onSelect={(id) => {
                setSelectedSkill(selectedSkill === id ? null : id);
              }}
            />
          );
        })}
      </group>
    </>
  );
};
