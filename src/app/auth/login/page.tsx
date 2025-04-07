"use client";
import Background from "@/components/ui/Background";
import Link from "next/link";
import Image from "next/image";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="relative min-h-screen text-white flex flex-col justify-center items-center">
      <Background />
      <div className="px-8 flex flex-col justify-center items-center bg-black/20 backdrop-blur-lg shadow-lg rounded-2xl p-8 m-8 animate-fade-in">
        <div className="mb-4 transition-opacity duration-500 ease-out opacity-100">
          <Link href="/auth/signup" className="text-lg font-bold text-blue-400">
            <Image
              src="/favicon.ico"
              alt="logo"
              className="rounded-full"
              width={64}
              height={64}
            />
          </Link>
        </div>
        <div className="mb-4 transition-transform duration-500 ease-out translate-y-0">
          <Link href="/" className="text-xl font-bold text-3xl">
            SPOT
          </Link>
        </div>
        <div className="transition-all duration-500 ease-out opacity-100 translate-y-0">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
