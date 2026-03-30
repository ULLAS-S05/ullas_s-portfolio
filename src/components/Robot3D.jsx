import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

function Robot3D() {
  return (
    <div className="w-64 h-64 md:w-80 md:h-80">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} />

        {/* Simple Robot (composed shapes) */}
        <Float speed={2} rotationIntensity={1}>
          <mesh>
            <boxGeometry args={[1, 1.5, 0.6]} />
            <meshStandardMaterial color="#3b82f6" />
          </mesh>

          <mesh position={[0, 1.2, 0]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color="#6366f1" />
          </mesh>
        </Float>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default Robot3D;