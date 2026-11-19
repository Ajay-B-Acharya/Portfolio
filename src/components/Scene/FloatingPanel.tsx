import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function FloatingPanel() {
  const panelRef = useRef<Mesh>(null);
  const reducedMotion = useReducedMotion();

  useFrame((state, delta) => {
    if (reducedMotion || !panelRef.current) return;
    const t = state.clock.elapsedTime;
    panelRef.current.position.y = Math.sin(t * 0.55) * 0.12;
    panelRef.current.rotation.y += delta * 0.045;
    panelRef.current.rotation.x = Math.sin(t * 0.32) * 0.025;
  });

  return (
    <mesh ref={panelRef} position={[0, 0, -0.2]} rotation={[0.06, -0.23, 0]}>
      <boxGeometry args={[3.25, 1.95, 0.075, 1, 1, 1]} />
      <meshPhysicalMaterial
        color="#b7c4cb"
        metalness={0.35}
        roughness={0.18}
        transparent
        opacity={0.22}
        clearcoat={1}
        clearcoatRoughness={0.12}
      />
    </mesh>
  );
}
