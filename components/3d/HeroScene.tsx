import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Add declaration to fix missing intrinsic elements types
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
      color: any;
      fog: any;
      group: any;
      meshStandardMaterial: any;
      sphereGeometry: any;
    }
  }
}

const TechObject = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
      <group ref={groupRef}>
        {/* Outer Wireframe Net */}
        <Icosahedron args={[1.5, 2]}>
          <MeshDistortMaterial
            color="#00D1FF"
            emissive="#00D1FF"
            emissiveIntensity={0.2}
            wireframe
            distort={0.3}
            speed={1.5}
            transparent
            opacity={0.3}
          />
        </Icosahedron>

        {/* Inner Solid Core */}
        <Icosahedron args={[0.8, 1]}>
          <meshStandardMaterial 
            color="#050505" 
            emissive="#00D1FF" 
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={1}
          />
        </Icosahedron>
        
        {/* Floating Data Points */}
        <Points range={100}>
            <sphereGeometry args={[2.2, 32, 32]} />
            <PointMaterial
                transparent
                vertexColors
                size={0.03}
                sizeAttenuation={true}
                depthWrite={false}
                color="#00D1FF"
            />
        </Points>
      </group>
    </Float>
  );
};

const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-100">
      <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 2]} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={2} color="#00D1FF" />
        <pointLight position={[-2, -5, -2]} intensity={1} color="#ffffff" />
        
        <TechObject />
      </Canvas>
    </div>
  );
};

export default HeroScene;