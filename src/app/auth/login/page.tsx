"use client";
import { motion } from "framer-motion";
import Background from "@/components/ui/Background";
import Link from "next/link";
import Image from "next/image";
import LoginForm from "@/components/auth/LoginForm";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function LoginPage() {
  return (
    <main className="relative min-h-screen text-white flex flex-col justify-center items-center">
      <Background />
      <motion.div
        className="px-8 flex flex-col justify-center items-center bg-black/20 backdrop-blur-lg shadow-lg rounded-2xl p-8 m-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="mb-4">
          <Link href="/auth/signup" className="text-lg font-bold text-blue-400">
            <Image
              src="/favicon.ico"
              alt="logo"
              className="rounded-full"
              width={64}
              height={64}
            />
          </Link>
        </motion.div>
        <motion.div variants={itemVariants} className="mb-4">
          <Link href="/" className="text-xl font-bold text-3xl">
            SPOT
          </Link>
        </motion.div>
        <motion.div variants={itemVariants}>
          <LoginForm />
        </motion.div>
      </motion.div>
    </main>
  );
}
