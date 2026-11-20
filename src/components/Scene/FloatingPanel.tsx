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
      {/* Panel geometry */}
      <mesh>
        <boxGeometry args={[width, height, depth, 2, 2, 1]} />
        <meshPhysicalMaterial
          color="#1a1f22"
          metalness={0.28}
          roughness={0.15}
          transparent
          opacity={0.65}
          clearcoat={0.85}
          clearcoatRoughness={0.08}
        />
      </mesh>
      
      {/* Border frame */}
      <mesh>
        <boxGeometry args={[width + 0.015, height + 0.015, depth - 0.005, 2, 2, 1]} />
        <meshStandardMaterial
          color="#8a959c"
          metalness={0.72}
          roughness={0.18}
          transparent
          opacity={0.35}
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
              padding: "1.2rem 1.5rem",
              color: "#d4dce0",
              fontSize: "0.72rem",
              lineHeight: "1.55",
            }}
          >
            {children}
          </div>
        </Html>
      )}
    </group>
  );
}
