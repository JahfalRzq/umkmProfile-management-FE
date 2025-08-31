"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Background */}
      <Image
        src="/background-linktree.jpeg"
        alt="Pukis Background"
        fill
        priority
        className="object-cover brightness-75"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Konten */}
      <div className="relative z-10 w-full max-w-md mx-auto px-6 py-10 text-center">
        <Image
          src="/logo-pukis.jpeg"
          alt="UMKM Pukis"
          width={100}
          height={100}
          className="rounded-full mx-auto border-4 border-white shadow-lg"
        />
        <h1 className="text-white text-3xl font-bold mt-4">Pukis Lezat UMKM</h1>
        <p className="text-white/80 text-sm mt-1">
          Rasa Tradisional, Bikin Nagih!
        </p>

        <div className="mt-8 space-y-4">
          <a
            href="https://wa.me/6281234567890"
            className="block w-full bg-white text-gray-900 font-semibold py-3 rounded-2xl shadow hover:bg-gray-200 transition"
          >
            Website
          </a>
          <a
            href="https://instagram.com/umkm_pukis"
            className="block w-full bg-white text-gray-900 font-semibold py-3 rounded-2xl shadow hover:bg-gray-200 transition"
          >
            Instagram
          </a>
          <a
            href="/tiktok"
            className="block w-full bg-white text-gray-900 font-semibold py-3 rounded-2xl shadow hover:bg-gray-200 transition"
          >
            Tiktok
          </a>

          {/* Tombol buka modal */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="block w-full bg-white text-gray-900 font-semibold py-3 rounded-2xl shadow hover:bg-gray-200 transition"
          >
            Online Shop
          </button>

          <a
            href="/location"
            className="block w-full bg-white text-gray-900 font-semibold py-3 rounded-2xl shadow hover:bg-gray-200 transition"
          >
            Location (Google Maps)
          </a>
        </div>
      </div>

{/* Modal */}
{isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
    <div className="bg-white rounded-2xl p-6 w-80 text-center shadow-xl">
      <h2 className="text-lg font-bold mb-4 text-gray-800">Pilih Online Shop</h2>

      <div className="space-y-4">
    {/* GoFood */}
<a
  href="https://gofood.link/umkm-pukis"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-start gap-3 w-full bg-white border-2 border-green-500 text-green-600 font-semibold py-3 px-4 rounded-2xl hover:bg-green-50 transition shadow-sm"
>
  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 flex-shrink-0">
    <Image
      src="/icons/gofood.png"
      alt="GoFood"
      width={24}
      height={24}
      className="object-contain"
    />
  </div>
  <span className="text-base">GoFood</span>
</a>

{/* Shopee Food */}
<a
  href="https://shopeefood.link/umkm-pukis"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-start gap-3 w-full bg-white border-2 border-orange-500 text-orange-600 font-semibold py-3 px-4 rounded-2xl hover:bg-orange-50 transition shadow-sm"
>
  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 flex-shrink-0">
    <Image
      src="/icons/shopeefood.png"
      alt="Shopee Food"
      width={24}
      height={24}
      className="object-contain"
    />
  </div>
  <span className="text-base">Shopee Food</span>
</a>

{/* GrabFood */}
<a
  href="https://grab.link/umkm-pukis"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-start gap-3 w-full bg-white border-2 border-green-600 text-green-700 font-semibold py-3 px-4 rounded-2xl hover:bg-green-50 transition shadow-sm"
>
  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 flex-shrink-0">
    <Image
      src="/icons/grabfood.png"
      alt="GrabFood"
      width={24}
      height={24}
      className="object-contain"
    />
  </div>
  <span className="text-base">GrabFood</span>
</a>

      </div>

      {/* Tombol Tutup */}
      <button
        onClick={() => setIsModalOpen(false)}
        className="mt-6 px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-400 transition text-white"
      >
        Tutup
      </button>
    </div>
  </div>
)}
    </div>
  );
}
