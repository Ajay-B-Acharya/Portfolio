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
        <color attach="background" args={["#080A0E"]} />
        <ambientLight intensity={0.55} color="#A5ACB7" />
        <directionalLight position={[4, 5, 3]} intensity={2.8} color="#F2F4F7" castShadow={false} />
        <directionalLight position={[-3, -2, 2]} intensity={1.2} color="#69717F" />
        <pointLight position={[0, 0, 4]} intensity={0.8} color="#D9DEE7" distance={10} decay={2} />
        <spotLight position={[0, 4, 2]} intensity={1.5} angle={0.8} penumbra={0.5} color="#F2F4F7" castShadow={false} />

        {/* Desktop: All 6 panels */}
        {showAllPanels && (
          <>
            {/* About Panel - Top Left */}
            <FloatingPanel
              position={[-2.6, 1.8, -0.6]}
              rotation={[0.04, 0.12, 0]}
              width={2.6}
              height={2}
              animationPhase={0}
              animationSpeed={0.9}
            >
              <AboutPanel />
            </FloatingPanel>

            {/* Skills Panel - Top Center */}
            <FloatingPanel
              position={[0, 2.2, -0.9]}
              rotation={[0.06, 0, 0]}
              width={3}
              height={2.2}
              animationPhase={1.5}
              animationSpeed={1.1}
            >
              <SkillsPanel />
            </FloatingPanel>

            {/* Projects Panel - Top Right */}
            <FloatingPanel
              position={[2.6, 1.8, -0.5]}
              rotation={[0.04, -0.12, 0]}
              width={2.6}
              height={2}
              animationPhase={3}
              animationSpeed={0.85}
            >
              <ProjectsPanel />
            </FloatingPanel>

            {/* Experience Panel - Bottom Left */}
            <FloatingPanel
              position={[-2.6, -1.8, -0.7]}
              rotation={[-0.04, 0.1, 0]}
              width={2.6}
              height={1.9}
              animationPhase={4.5}
              animationSpeed={0.95}
            >
              <ExperiencePanel />
            </FloatingPanel>

            {/* Achievements Panel - Bottom Right */}
            <FloatingPanel
              position={[2.6, -1.8, -0.8]}
              rotation={[-0.04, -0.1, 0]}
              width={2.6}
              height={1.9}
              animationPhase={6}
              animationSpeed={1.05}
            >
              <AchievementsPanel />
            </FloatingPanel>

            {/* Contact Panel - Bottom Center */}
            <FloatingPanel
              position={[0, -2.4, -0.6]}
              rotation={[-0.06, 0, 0]}
              width={2.4}
              height={1.7}
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
              position={[-2.2, 1.6, -0.5]}
              rotation={[0.04, 0.1, 0]}
              width={2.3}
              height={1.9}
              animationPhase={0}
              animationSpeed={0.9}
            >
              <AboutPanel />
            </FloatingPanel>

            <FloatingPanel
              position={[2.2, 1.6, -0.4]}
              rotation={[0.04, -0.1, 0]}
              width={2.5}
              height={2.1}
              animationPhase={1.5}
              animationSpeed={1.1}
            >
              <SkillsPanel />
            </FloatingPanel>

            <FloatingPanel
              position={[-2.2, -1.6, -0.6]}
              rotation={[-0.04, 0.08, 0]}
              width={2.3}
              height={1.9}
              animationPhase={3}
              animationSpeed={0.95}
            >
              <ProjectsPanel />
            </FloatingPanel>

            <FloatingPanel
              position={[2.2, -1.6, -0.5]}
              rotation={[-0.04, -0.08, 0]}
              width={2.2}
              height={1.7}
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
              position={[0, 2, -0.7]}
              rotation={[0.03, 0, 0]}
              width={2.5}
              height={1.9}
              animationPhase={0}
              animationSpeed={0.85}
            >
              <AboutPanel />
            </FloatingPanel>

            <FloatingPanel
              position={[0, 0, -0.4]}
              rotation={[0, 0, 0]}
              width={2.7}
              height={2.1}
              animationPhase={2}
              animationSpeed={0.9}
            >
              <SkillsPanel />
            </FloatingPanel>

            <FloatingPanel
              position={[0, -2, -0.6]}
              rotation={[-0.03, 0, 0]}
              width={2.5}
              height={1.9}
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
