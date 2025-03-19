"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Background from "@/components/ui/Background";
import Hero from "@/components/landing/Hero";
import Header from "@/components/Header";
import Features from "@/components/landing/Features";
import Dashboard from "@/components/landing/Dashboard";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function ScrollSection({ children }: { children: React.ReactNode }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
    >
      {children}
    </motion.section>
  );
}

export default function LandingPage() {
  return (
    <main className="relative min-h-screen text-white">
      {/* Background */}
      <Background />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <ScrollSection>
        <Hero />
      </ScrollSection>

      {/* Features Section */}
      <ScrollSection>
        <Features />
      </ScrollSection>

      {/* How It Works Section */}
      <ScrollSection>
        <Dashboard />
      </ScrollSection>

      {/* Call to Action Section */}
      <ScrollSection>
        <CTA />
      </ScrollSection>

      {/* Footer Section */}
      <ScrollSection>
        <Footer />
      </ScrollSection>
    </main>
  );
}
