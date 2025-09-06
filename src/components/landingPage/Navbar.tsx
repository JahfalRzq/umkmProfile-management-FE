"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/gofood.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="font-bold text-lg">UMKM Online</span>
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <li>
            <Link href="/" className="hover:text-red-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/landing-page" className="hover:text-red-500 transition">
              Landing Page
            </Link>
          </li>
          <li>
            <Link href="/cms-dashboard" className="hover:text-red-500 transition">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
