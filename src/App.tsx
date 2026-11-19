import { MainScene } from "./components/Scene/MainScene";
import { Overlay } from "./components/UI/Overlay";

export default function App() {
  return (
    <main className="interface-shell" aria-label="Floating Interface portfolio">
      <MainScene />
      <Overlay />
    </main>
  );
}
