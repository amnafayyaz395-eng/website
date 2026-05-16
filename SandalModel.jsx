// components/3d/SandalModel.jsx - Core 3D Hero Component
'use client';
import { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Float, Text } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { useGesture } from 'react-use-gesture';

const SandalModel = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) => {
  const group = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
  });

  const bind = useGesture({
    onHover: ({ hovering }) => setHovered(hovering),
    onDrag: ({ offset: [x, y] }) => {
      group.current.rotation.y += x * 0.01;
      group.current.rotation.x += y * 0.01;
    },
  });

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale} {...bind()}>
      {/* Main Sandal Body - Ultra Realistic */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.08, 32]} />
        <meshStandardMaterial 
          color="#D2B48C"
          metalness={0.1}
          roughness={0.3}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Straps - Premium Leather */}
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.4, 16]} />
        <meshStandardMaterial 
          color="#8B7355"
          map={null} // Would load leather texture
          normalMap={null}
          roughness={0.4}
          metalness={0.05}
        />
      </mesh>

      {/* Heel */}
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.25, 24]} />
        <meshStandardMaterial 
          color="#654321"
          roughness={0.2}
          metalness={0.3}
        />
      </mesh>

      {/* Gold Accents */}
      <mesh position={[0.08, 0.15, 0.02]}>
        <torusGeometry args={[0.02, 0.005, 8, 16]} />
        <meshStandardMaterial 
          color="#D4AF37"
          metalness={0.9}
          roughness={0.1}
          emissive="#D4AF37"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Hover Effect */}
      {hovered && (
        <mesh scale={[1.2, 1.2, 1.2]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshBasicMaterial 
            color="#D4AF37" 
            transparent 
            opacity={0.1}
            side={THREE.BackSide}
          />
        </mesh>
      )}
    </group>
  );
};

const Scene = () => (
  <Canvas 
    camera={{ position: [0, 0, 3], fov: 45 }}
    gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
    style={{ height: '100vh', width: '100%' }}
  >
    <Suspense fallback={null}>
      <Environment preset="studio" />
      
      {/* Floating Elements */}
      <Float speed={0.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <SandalModel position={[-1.5, 0, 0]} scale={0.6} />
      </Float>
      
      <Float speed={0.7} rotationIntensity={0.4} floatIntensity={0.7}>
        <SandalModel position={[1.5, -0.5, -1]} scale={0.8} />
      </Float>
      
      {/* Main Hero Sandal */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
        <SandalModel scale={1.2} />
      </Float>

      <ContactShadows 
        position={[0, -1.5, 0]} 
        opacity={0.4}
        scale={10}
        blur={2}
        far={10}
      />

      <EffectComposer>
        <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>

      <OrbitControls 
        enablePan={false}
        enableZoom={true}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        enableDamping={true}
      />
    </Suspense>
  </Canvas>
);

export default Scene;