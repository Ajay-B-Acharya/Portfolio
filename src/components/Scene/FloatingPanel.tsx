import { useFrame } from "@react-three/fiber";
import { useRef, type ReactNode } from "react";
import type { Group } from "three";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { Html } from "@react-three/drei";

interface FloatingPanelProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  width?: number;
  height?: number;
  depth?: number;
  animationPhase?: number;
  animationSpeed?: number;
  children?: ReactNode;
}

export function FloatingPanel({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  width = 3.2,
  height = 2.4,
  depth = 0.08,
  animationPhase = 0,
  animationSpeed = 1,
  children,
}: FloatingPanelProps) {
  const groupRef = useRef<Group>(null);
  const reducedMotion = useReducedMotion();

  useFrame((state) => {
    if (reducedMotion || !groupRef.current) return;
    const t = state.clock.elapsedTime + animationPhase;
    
    // Subtle vertical floating
    groupRef.current.position.y = position[1] + Math.sin(t * 0.48 * animationSpeed) * 0.08;
    
    // Gentle rotation oscillation
    groupRef.current.rotation.y = rotation[1] + Math.sin(t * 0.28 * animationSpeed) * 0.04;
    groupRef.current.rotation.x = rotation[0] + Math.sin(t * 0.35 * animationSpeed) * 0.02;
  });

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      {/* Panel geometry - improved visibility */}
      <mesh>
        <boxGeometry args={[width, height, depth, 2, 2, 1]} />
        <meshPhysicalMaterial
          color="#171B23"
          metalness={0.42}
          roughness={0.12}
          transparent
          opacity={0.88}
          clearcoat={0.95}
          clearcoatRoughness={0.05}
          envMapIntensity={1.2}
        />
      </mesh>
      
      {/* Border frame - more visible */}
      <mesh>
        <boxGeometry args={[width + 0.02, height + 0.02, depth - 0.01, 2, 2, 1]} />
        <meshStandardMaterial
          color="#69717F"
          metalness={0.85}
          roughness={0.12}
          transparent
          opacity={0.68}
          emissive="#69717F"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Inner highlight edge */}
      <mesh>
        <boxGeometry args={[width - 0.04, height - 0.04, depth + 0.005, 2, 2, 1]} />
        <meshStandardMaterial
          color="#D9DEE7"
          metalness={0.92}
          roughness={0.08}
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* Content */}
      {children && (
        <Html
          position={[0, 0, depth / 2 + 0.01]}
          transform
          distanceFactor={1.8}
          style={{
            width: `${width * 100}px`,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          <div
            style={{
              width: "100%",
              padding: "1.6rem 2rem",
              color: "#F2F4F7",
              fontSize: "0.85rem",
              lineHeight: "1.6",
            }}
          >
            {children}
          </div>
        </Html>
      )}
    </group>
  );
}
