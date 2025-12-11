import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles, Float, Icosahedron, Octahedron, Torus, Dodecahedron, Box } from '@react-three/drei';
import * as THREE from 'three';

const ObjectShape = ({ type, color }: { type: number, color: string }) => {
  const materialProps = {
    color: color,
    wireframe: true,
    transparent: true,
    opacity: 0.15,
    emissive: color,
    emissiveIntensity: 0.2
  };

  switch (type) {
    case 0: return <Icosahedron args={[1, 0]}><meshStandardMaterial {...materialProps} /></Icosahedron>;
    case 1: return <Octahedron args={[1, 0]}><meshStandardMaterial {...materialProps} /></Octahedron>;
    case 2: return <Torus args={[0.8, 0.2, 16, 32]}><meshStandardMaterial {...materialProps} /></Torus>;
    case 3: return <Dodecahedron args={[1, 0]}><meshStandardMaterial {...materialProps} /></Dodecahedron>;
    case 4: return <Box args={[1.5, 1.5, 1.5]}><meshStandardMaterial {...materialProps} /></Box>;
    default: return <Icosahedron args={[1, 0]}><meshStandardMaterial {...materialProps} /></Icosahedron>;
  }
}

const FloatingObject = ({ position, rotation, scale, type, color }: any) => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Slow rotation for dynamic feel
      meshRef.current.rotation.x += 0.001 * (type + 1);
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5} floatingRange={[-0.5, 0.5]}>
      <group ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <ObjectShape type={type} color={color} />
      </group>
    </Float>
  );
};

const RandomFloatingObjects = () => {
  const count = 30; 
  const items = useMemo(() => {
    return new Array(count).fill(0).map((_, i) => ({
      // Spread them out widely to cover the viewport
      position: [
        (Math.random() - 0.5) * 35, 
        (Math.random() - 0.5) * 35, 
        (Math.random() - 0.5) * 20 - 5
      ] as [number, number, number],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
      scale: Math.random() * 1.5 + 0.5,
      type: Math.floor(Math.random() * 5),
      color: Math.random() > 0.6 ? "#00D1FF" : "#333333" // Mix of accent and subtle grey
    }))
  }, []);

  return (
    <group>
      {items.map((item, i) => (
        <FloatingObject key={i} {...item} />
      ))}
    </group>
  )
}

const BackgroundCanvas: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#050505]">
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }} dpr={[1, 2]}>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Sparkles count={100} scale={15} size={2} speed={0.4} opacity={0.5} color="#00D1FF" />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#00D1FF" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#ffffff" />
        
        <RandomFloatingObjects />
        
        <fog attach="fog" args={['#050505', 5, 35]} />
      </Canvas>
    </div>
  );
};

export default BackgroundCanvas;