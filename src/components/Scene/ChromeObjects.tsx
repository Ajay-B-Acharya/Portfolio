export function ChromeObjects() {
  return (
    <group>
      <mesh position={[-2.65, 1.32, -1.7]} rotation={[0.55, 0.25, 0.15]}>
        <torusGeometry args={[0.33, 0.035, 8, 32]} />
        <meshStandardMaterial color="#b8bec2" metalness={1} roughness={0.2} />
      </mesh>
      <mesh position={[2.45, -1.28, -1.8]} rotation={[0.2, 0.6, -0.25]}>
        <torusGeometry args={[0.22, 0.028, 8, 24]} />
        <meshStandardMaterial color="#8d979b" metalness={1} roughness={0.25} />
      </mesh>
    </group>
  );
}
