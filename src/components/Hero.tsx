import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { motion } from "framer-motion";
import logoSvg from "../assest/logoSvg.svg";

function Logo() {
  return (
    <mesh>
      <torusGeometry args={[2, 0.5, 16, 32]} />
      <meshStandardMaterial color="#0ea5e9" />
    </mesh>
  );
}

export default function Hero() {
  return (
    <section className="h-screen relative bg-gradient-to-b from-sky-100 to-white overflow-hidden">
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

      <div className="relative z-10 flex flex-col items-center h-full text-center px-4">
        <div className="flex-1 flex flex-col items-center justify-center ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-4 mb-8"
          >
            <img
              src={logoSvg}
              alt="Trona Creations Logo"
              className="w-16 h-16 transform -translate-x-8 translate-y-6"
            />
            <h1 className="text-6xl font-bold text-sky-900 -translate-x-8 translate-y-6">
              Trona Creations
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-sky-800 max-w-2xl"
          >
            Where quality meets sustainability in every stitch
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pb-16"
        >
          <a
            href="#products"
            className="bg-sky-600 text-white px-8 py-3 rounded-full font-medium hover:bg-sky-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore Collections
          </a>
        </motion.div>
      </div>
    </section>
  );
}
