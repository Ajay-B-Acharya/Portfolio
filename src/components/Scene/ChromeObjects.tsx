export function ChromeObjects() {
  return (
    <group>
      {/* Top left torus */}
      <mesh position={[-2.2, 1.5, -1.9]} rotation={[0.6, 0.3, 0.2]}>
        <torusGeometry args={[0.35, 0.04, 10, 36]} />
        <meshStandardMaterial 
          color="#D9DEE7" 
          metalness={0.95} 
          roughness={0.15}
          emissive="#69717F"
          emissiveIntensity={0.08}
        />
      </mesh>
      
      {/* Bottom right torus */}
      <mesh position={[2.1, -1.4, -2.1]} rotation={[0.3, 0.7, -0.3]}>
        <torusGeometry args={[0.26, 0.032, 8, 32]} />
        <meshStandardMaterial 
          color="#A5ACB7" 
          metalness={0.92} 
          roughness={0.18}
          emissive="#69717F"
          emissiveIntensity={0.06}
        />
      </mesh>
      
      {/* Small accent sphere top right */}
      <mesh position={[1.8, 1.8, -2.3]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial 
          color="#F2F4F7" 
          metalness={1} 
          roughness={0.1}
          emissive="#D9DEE7"
          emissiveIntensity={0.1}
        />
      </mesh>
    </group>
  );
}
