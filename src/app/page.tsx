"use client";

import { useEffect, useRef, useState } from "react";

import Background from "@/components/ui/Background";
import Hero from "@/components/landing/Hero";
import Header from "@/components/Header";
import Features from "@/components/landing/Features";
import Dashboard from "@/components/landing/Dashboard";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/Footer";

function ScrollSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </section>
  );
}

export default function LandingPage() {
  return (
    <main className="relative min-h-screen text-white">
      <Background />
      <Header />
      <ScrollSection><Hero /></ScrollSection>
      <ScrollSection><Features /></ScrollSection>
      <ScrollSection><Dashboard /></ScrollSection>
      <ScrollSection><CTA /></ScrollSection>
      <ScrollSection><Footer /></ScrollSection>
    </main>
  );
}
