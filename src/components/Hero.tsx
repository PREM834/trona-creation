import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
import { motion } from 'framer-motion';

function Logo() {
  return (
    <mesh>
      <torusGeometry args={[2, 0.5, 16, 32]} />
      <meshStandardMaterial color="#0EA5E9" />
    </mesh>
  );
}

export default function Hero() {
  return (
    <section className="h-screen relative bg-gradient-to-b from-sky-100 to-white">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <Logo />
            <OrbitControls enableZoom={false} autoRotate />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold text-sky-900 mb-6"
        >
          Trona Creations
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-sky-800 max-w-2xl"
        >
          Where quality meets sustainability in every stitch
        </motion.p>
      </div>
    </section>
  );
}