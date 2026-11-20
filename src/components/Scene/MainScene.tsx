import { Canvas } from "@react-three/fiber";
import { CameraController } from "./CameraController";
import { ChromeObjects } from "./ChromeObjects";
import { FloatingPanel } from "./FloatingPanel";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useViewportSize } from "../../hooks/useViewportSize";
import {
  AboutPanel,
  SkillsPanel,
  ProjectsPanel,
  ExperiencePanel,
  AchievementsPanel,
  ContactPanel,
} from "../Panels";

export function MainScene() {
  const reducedMotion = useReducedMotion();
  const breakpoint = useViewportSize();

  // Responsive scale factors
  const isDesktop = breakpoint === "desktop";
  const isTablet = breakpoint === "tablet";
  const isMobile = breakpoint === "mobile";

  // On mobile, show only 3 key panels with simplified layout
  const showAllPanels = isDesktop;
  const showReducedPanels = isTablet;

  return (
    <div className="scene" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, isMobile ? 8 : isTablet ? 7 : 6], fov: 42 }}
        dpr={[1, 1.5]}
        frameloop={reducedMotion ? "demand" : "always"}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#08090b"]} />
        <ambientLight intensity={0.42} color="#9ca9b0" />
        <directionalLight position={[3, 4, 5]} intensity={2.2} color="#f1f5f6" />
        <pointLight position={[-3, -1, 2]} intensity={1.1} color="#798991" distance={7} />

        {/* Desktop: All 6 panels */}
        {showAllPanels && (
          <>
            {/* About Panel - Top Left */}
            <FloatingPanel
              position={[-3.2, 2.2, -0.8]}
              rotation={[0.05, 0.15, 0]}
              width={2.8}
              height={2.2}
              animationPhase={0}
              animationSpeed={0.9}
            >
              <AboutPanel />
            </FloatingPanel>

            {/* Skills Panel - Top Center */}
            <FloatingPanel
              position={[0, 2.8, -1.2]}
              rotation={[0.08, 0, 0]}
              width={3.2}
              height={2.4}
              animationPhase={1.5}
              animationSpeed={1.1}
            >
              <SkillsPanel />
            </FloatingPanel>

            {/* Projects Panel - Top Right */}
            <FloatingPanel
              position={[3.2, 2.2, -0.5]}
              rotation={[0.05, -0.15, 0]}
              width={2.8}
              height={2.2}
              animationPhase={3}
              animationSpeed={0.85}
            >
              <ProjectsPanel />
            </FloatingPanel>

            {/* Experience Panel - Bottom Left */}
            <FloatingPanel
              position={[-3.2, -2.2, -0.6]}
              rotation={[-0.05, 0.12, 0]}
              width={2.8}
              height={2}
              animationPhase={4.5}
              animationSpeed={0.95}
            >
              <ExperiencePanel />
            </FloatingPanel>

            {/* Achievements Panel - Bottom Right */}
            <FloatingPanel
              position={[3.2, -2.2, -0.9]}
              rotation={[-0.05, -0.12, 0]}
              width={2.8}
              height={2}
              animationPhase={6}
              animationSpeed={1.05}
            >
              <AchievementsPanel />
            </FloatingPanel>

            {/* Contact Panel - Bottom Center */}
            <FloatingPanel
              position={[0, -2.8, -1]}
              rotation={[-0.08, 0, 0]}
              width={2.6}
              height={1.8}
              animationPhase={7.5}
              animationSpeed={0.88}
            >
              <ContactPanel />
            </FloatingPanel>
          </>
        )}

        {/* Tablet: 4 panels with adjusted positions */}
        {showReducedPanels && (
          <>
            <FloatingPanel
              position={[-2.4, 1.8, -0.6]}
              rotation={[0.05, 0.12, 0]}
              width={2.4}
              height={2}
              animationPhase={0}
              animationSpeed={0.9}
            >
              <AboutPanel />
            </FloatingPanel>

            <FloatingPanel
              position={[2.4, 1.8, -0.5]}
              rotation={[0.05, -0.12, 0]}
              width={2.6}
              height={2.2}
              animationPhase={1.5}
              animationSpeed={1.1}
            >
              <SkillsPanel />
            </FloatingPanel>

            <FloatingPanel
              position={[-2.4, -1.8, -0.7]}
              rotation={[-0.05, 0.1, 0]}
              width={2.4}
              height={2}
              animationPhase={3}
              animationSpeed={0.95}
            >
              <ProjectsPanel />
            </FloatingPanel>

            <FloatingPanel
              position={[2.4, -1.8, -0.6]}
              rotation={[-0.05, -0.1, 0]}
              width={2.3}
              height={1.8}
              animationPhase={4.5}
              animationSpeed={0.88}
            >
              <ContactPanel />
            </FloatingPanel>
          </>
        )}

        {/* Mobile: 3 key panels in vertical stack */}
        {isMobile && (
          <>
            <FloatingPanel
              position={[0, 2.2, -0.8]}
              rotation={[0.05, 0, 0]}
              width={2.6}
              height={2}
              animationPhase={0}
              animationSpeed={0.85}
            >
              <AboutPanel />
            </FloatingPanel>

            <FloatingPanel
              position={[0, 0, -0.5]}
              rotation={[0, 0, 0]}
              width={2.8}
              height={2.2}
              animationPhase={2}
              animationSpeed={0.9}
            >
              <SkillsPanel />
            </FloatingPanel>

            <FloatingPanel
              position={[0, -2.2, -0.7]}
              rotation={[-0.05, 0, 0]}
              width={2.6}
              height={2}
              animationPhase={4}
              animationSpeed={0.88}
            >
              <ProjectsPanel />
            </FloatingPanel>
          </>
        )}

        <ChromeObjects />
        <CameraController />
      </Canvas>
    </div>
  );
}
