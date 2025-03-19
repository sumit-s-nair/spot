import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Spot – The Ultimate Productivity Platform",
  description:
    "Spot helps you streamline your workflow, boost productivity, and achieve your goals effortlessly. Discover powerful features designed for modern professionals.",
  keywords: [
    "Spot",
    "SaaS",
    "productivity",
    "AI automation",
    "business tools",
    "startup",
    "workflow optimization",
  ],
  authors: [{ name: "Spot Team", url: "https://spot-us.vercel.app" }],
  creator: "Spot",
  publisher: "Spot Inc.",
  metadataBase: new URL("https://spot-us.vercel.app"),
  openGraph: {
    title: "Spot – The Ultimate Productivity Platform",
    description:
      "Join thousands of users who trust Spot to improve their workflow and efficiency. Start today and take your productivity to the next level.",
    url: "https://spot-us.vercel.app",
    siteName: "Spot",
    images: [
      {
        url: "/favicon.ico", // Replace later with actual OG image URL
        width: 1200,
        height: 630,
        alt: "Spot – Your Ultimate Productivity Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spot – The Ultimate Productivity Platform",
    description:
      "Supercharge your workflow with Spot. Built for efficiency, designed for success. Try it today!",
    images: ["https://yourwebsite.com/twitter-card.jpg"], // Replace later with actual image URL
    creator: "@yourtwitterhandle", // Replace later with actual Twitter handle
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <link
          rel="preload"
          href="/fonts/Geist.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/GeistMono.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <meta name="theme-color" content="#000000" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white scrollbar-none`}
      >
        {children}
      </body>
    </html>
  );
}
