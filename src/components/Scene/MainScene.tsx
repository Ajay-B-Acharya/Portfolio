import { Canvas } from "@react-three/fiber";
import { CameraController } from "./CameraController";
import { ChromeObjects } from "./ChromeObjects";
import { FloatingPanel } from "./FloatingPanel";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function MainScene() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="scene" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 42 }}
        dpr={[1, 1.5]}
        frameloop={reducedMotion ? "demand" : "always"}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#08090b"]} />
        <ambientLight intensity={0.42} color="#9ca9b0" />
        <directionalLight position={[3, 4, 5]} intensity={2.2} color="#f1f5f6" />
        <pointLight position={[-3, -1, 2]} intensity={1.1} color="#798991" distance={7} />
        <FloatingPanel />
        <ChromeObjects />
        <CameraController />
      </Canvas>
    </div>
  );
}
