import { useFrame } from "@react-three/fiber";
import { useMemo } from "react";
import { Vector3 } from "three";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function CameraController() {
  const reducedMotion = useReducedMotion();
  const target = useMemo(() => new Vector3(0, 0, 0), []);

  useFrame((state, delta) => {
    if (reducedMotion) return;
    const drift = Math.sin(state.clock.elapsedTime * 0.18) * 0.05;
    state.camera.position.x += (drift - state.camera.position.x) * Math.min(delta * 0.45, 1);
    state.camera.lookAt(target);
  });

  return null;
}
