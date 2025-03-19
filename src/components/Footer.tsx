import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8  text-gray-200 text-center mt-16">
      <div className="max-w-7xl mx-auto backdrop-blur-md bg-black/50 p-8 rounded-2xl shadow-lg">
        <p>&copy; {new Date().getFullYear()} Spot. All rights reserved.</p>
        <nav className="flex justify-center gap-4 mt-4">
          <Link href="#" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white">
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-white">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
}
