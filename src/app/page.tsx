"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalSocialMedia, setIsModalSocialMediaOpen] = useState(false);
  const [isModalMenu, setIsModalMenuOpen] = useState(false);

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
            href="/landing-page"
            className="block w-full bg-white text-gray-900 font-semibold py-3 rounded-2xl shadow hover:bg-gray-200 transition"
          >
            Website
          </a>
          <button
            onClick={() => setIsModalMenuOpen(true)}
            className="block w-full bg-white text-gray-900 font-semibold py-3 rounded-2xl shadow hover:bg-gray-200 transition"
          >
            Menu
          </button>
         <button
            onClick={() => setIsModalSocialMediaOpen(true)}
            className="block w-full bg-white text-gray-900 font-semibold py-3 rounded-2xl shadow hover:bg-gray-200 transition"
          >
            Social Media
          </button>

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

{/* online shop */}

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

{/* social media */}

{isModalSocialMedia && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
    <div className="bg-white rounded-2xl p-6 w-80 text-center shadow-xl">
      <h2 className="text-lg font-bold mb-4 text-gray-800">Pilih Media Sosial</h2>

      <div className="space-y-4">
    {/* Instagram */}
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
  <span className="text-base">Instagram</span>
</a>

{/* Tiktok */}
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
  <span className="text-base">Tiktok</span>
</a>

{/* Facebook */}
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
  <span className="text-base">Facebook</span>
</a>

      </div>

      {/* Tombol Tutup */}
      <button
        onClick={() => setIsModalSocialMediaOpen(false)}
        className="mt-6 px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-400 transition text-white"
      >
        Tutup
      </button>
    </div>
  </div>
)}

{/* menu */}

{isModalMenu && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 overflow-y-auto">
    <div className="bg-white rounded-2xl p-6 w-[95%] max-w-3xl text-center shadow-xl">
      <h2 className="text-lg font-bold mb-6 text-gray-800">Menu Tersedia</h2>

      {/* Grid Produk */}
      <div className="grid grid-cols-2 gap-6">
        {[
          { name: "Pukis Original",img: "/assets/aset_pukis/pukis5.png" },
          { name: "Pukis Keju",img: "/assets/aset_pukis/pukis2.png" },
          { name: "Pukis Coklat",img: "/assets/aset_pukis/pukis1.png" },
          { name: "Pukis Pandan",img: "/assets/aset_pukis/pukis6.png" },
          { name: "Pukis Oreo",img: "/assets/aset_pukis/pukis4.png" },
          { name: "Pukis Custom",img: "/assets/aset_pukis/pukis7.png" },

        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden group"
          >
            {/* Gambar Produk */}
            <Image
              src={item.img}
              alt={item.name}
              width={300}
              height={200}
              className="w-full h-40 object-cover group-hover:scale-105 transition"
            />

            {/* Nama + Harga */}
            <div className="py-2">
              <p className="text-center text-sm font-semibold text-gray-700">
                {item.name}
              </p>
              {/* <p className="text-center text-xs font-bold text-orange-500">
                {item.price}
              </p> */}
            </div>
          </div>
        ))}
      </div>

      {/* Tombol Tutup */}
      <button
        onClick={() => setIsModalMenuOpen(false)}
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
