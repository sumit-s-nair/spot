"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-br from-black via-gray-800 to-blue-950">
      {/* Primary dynamic blobs */}
      <motion.div
        className="absolute top-[10%] left-[15%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-500 to-teal-500 blur-[140px] opacity-40"
        animate={{
          x: [0, Math.random() * 80 - 40, Math.random() * -80 + 40, 0],
          y: [0, Math.random() * -80 + 40, Math.random() * 80 - 40, 0],
          scale: [1, 1.1, 0.9, 1],
          opacity: [0.4, 0.6, 0.3, 0.4],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[20%] h-[450px] w-[450px] rounded-full bg-gradient-to-br from-blue-700 to-purple-600 blur-[130px] opacity-35"
        animate={{
          x: [0, Math.random() * -90 + 45, Math.random() * 90 - 45, 0],
          y: [0, Math.random() * 90 - 45, Math.random() * -90 + 45, 0],
          scale: [1, 1.15, 0.85, 1],
          opacity: [0.35, 0.5, 0.25, 0.35],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Secondary blobs*/}
      <motion.div
        className="absolute top-[50%] left-[40%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 blur-[160px] opacity-25"
        animate={{
          x: [0, -50, 50, -50, 50, 0],
          y: [0, 50, -50, 50, -50, 0],
          scale: [1, 1.1, 0.9, 1],
          opacity: [0.25, 0.4, 0.2, 0.25],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-[20%] right-[10%] h-[350px] w-[350px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 blur-[120px] opacity-20"
        animate={{
          x: [0, 30, -30, 30, -30, 0],
          y: [0, -30, 30, -30, 30, 0],
          rotate: [0, 15, -15, 15, -15, 0],
          scale: [1, 1.05, 0.95, 1],
          opacity: [0.2, 0.3, 0.15, 0.2],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-[70%] right-[30%] h-[250px] w-[250px] rounded-full bg-gradient-to-br from-purple-500 to-pink-400 blur-[110px] opacity-10"
        animate={{
          x: [0, 15, -15, 15, -15, 0],
          y: [0, -15, 15, -15, 15, 0],
          scale: [1, 1.05, 0.95, 1],
          opacity: [0.1, 0.15, 0.05, 0.1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[15%] left-[25%] h-[300px] w-[300px] rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 blur-[120px] opacity-12"
        animate={{
          x: [0, 20, -20, 20, -20, 0],
          y: [0, -20, 20, -20, 20, 0],
          scale: [1, 1.08, 0.92, 1],
          opacity: [0.12, 0.2, 0.08, 0.12],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
