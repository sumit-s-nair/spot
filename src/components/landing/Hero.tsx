"use client";
import Link from "next/link";
import { Button } from "../ui/Button";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] px-6 text-center pt-24">
      <div
        ref={ref}
        className={`max-w-4xl rounded-lg p-8 transition-all duration-700 ease-out transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-blue-300 text-lg md:text-xl">
          Find Your Perfect Team for Hackathons and Events
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white">
          Welcome to Spot
        </h1>
        <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed">
          Spot is a platform designed to connect individuals for team-based
          events like hackathons, competitions, and collaborative projects.
          Whether you&apos;re looking for teammates, managing your event, or
          simply exploring, Spot has you covered.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md text-base md:text-lg font-medium transition-transform transform hover:scale-105">
            <Link href="/auth/login">Get Started</Link>
          </Button>
          <Button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg shadow-md text-base md:text-lg font-medium transition-transform transform hover:scale-105">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
