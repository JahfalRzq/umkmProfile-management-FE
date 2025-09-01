// src/app/landing-page/page.tsx
"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function LandingPage() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="w-full bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-orange-500">
            Order<span className="text-black">UK</span>
          </h1>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <a href="#" className="hover:text-orange-500">Home</a>
            <a href="#" className="hover:text-orange-500">Browse Menu</a>
            <a href="#" className="hover:text-orange-500">Special Offers</a>
            <a href="#" className="hover:text-orange-500">Restaurants</a>
            <a href="#" className="hover:text-orange-500">Track Order</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Nav */}
        {openMenu && (
          <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-3">
            <a href="#" className="block text-gray-700">Home</a>
            <a href="#" className="block text-gray-700">Browse Menu</a>
            <a href="#" className="block text-gray-700">Special Offers</a>
            <a href="#" className="block text-gray-700">Restaurants</a>
            <a href="#" className="block text-gray-700">Track Order</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="bg-gray-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 py-12 gap-10">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
              Feast Your Senses,{" "}
              <span className="text-orange-500">Fast and Fresh</span>
            </h2>
            <p className="text-gray-600 mt-4">
              Order restaurant food, takeaway and groceries.
            </p>
            <div className="mt-6 flex">
              <input
                type="text"
                placeholder="e.g. E4R 3TE"
                className="flex-1 border rounded-l-lg px-4 py-3 focus:outline-none"
              />
              <button className="bg-orange-500 text-white px-6 rounded-r-lg hover:bg-orange-600">
                Search
              </button>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="/images/hero.png"
              alt="Hero"
              width={500}
              height={400}
              className="object-contain mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Deals */}
      <section className="container mx-auto px-6 py-12">
        <h3 className="text-xl font-bold mb-6">
          🔥 Up to -40% Order.uk exclusive deals
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white shadow rounded-lg overflow-hidden">
              <Image
                src={`/images/deal${item}.png`}
                alt="Deal"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-gray-800">Restaurant {item}</h4>
                <p className="text-gray-500 text-sm">London</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-6 py-12">
        <h3 className="text-xl font-bold mb-6">Order.uk Popular Categories 🍴</h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {["Burgers", "Salads", "Pasta", "Pizza", "Breakfast", "Soups"].map(
            (cat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow text-center p-4 hover:shadow-md transition"
              >
                <Image
                  src={`/images/cat${idx + 1}.png`}
                  alt={cat}
                  width={100}
                  height={100}
                  className="mx-auto mb-2"
                />
                <p className="text-sm font-medium">{cat}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Popular Restaurants */}
      <section className="container mx-auto px-6 py-12">
        <h3 className="text-xl font-bold mb-6">Popular Restaurants</h3>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {["mcd.png", "papa.png", "kfc.png", "texas.png", "burger.png", "shaurma.png"].map(
            (logo, idx) => (
              <div key={idx} className="bg-white shadow rounded-lg p-4 flex items-center justify-center">
                <Image src={`/images/${logo}`} alt="Brand" width={80} height={80} />
              </div>
            )
          )}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="text-3xl font-bold">
              Order<span className="text-orange-500">ing</span> is more{" "}
              <span className="text-orange-500">Personalised</span> & Instant
            </h2>
            <p className="text-gray-600 mt-4">
              Download the Order.uk app for faster ordering
            </p>
            <div className="flex gap-4 mt-4">
              <Image src="/images/appstore.png" alt="App Store" width={150} height={50} />
              <Image src="/images/playstore.png" alt="Play Store" width={150} height={50} />
            </div>
          </div>
          <div className="flex-1">
            <Image src="/images/banner.png" alt="Promo" width={500} height={300} />
          </div>
        </div>
      </section>

      {/* Partner / Rider */}
      <section className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-6">
        <div className="relative bg-black text-white rounded-lg overflow-hidden">
          <Image src="/images/partner.png" alt="Partner" fill className="object-cover opacity-40" />
          <div className="absolute inset-0 flex flex-col justify-center items-center p-6">
            <h3 className="text-xl font-bold">Partner with us</h3>
            <button className="mt-4 bg-orange-500 px-6 py-2 rounded-lg">Get Started</button>
          </div>
        </div>
        <div className="relative bg-black text-white rounded-lg overflow-hidden">
          <Image src="/images/rider.png" alt="Rider" fill className="object-cover opacity-40" />
          <div className="absolute inset-0 flex flex-col justify-center items-center p-6">
            <h3 className="text-xl font-bold">Ride with us</h3>
            <button className="mt-4 bg-orange-500 px-6 py-2 rounded-lg">Get Started</button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-6 py-12">
        <h3 className="text-xl font-bold mb-6">Know more about us!</h3>
        <div className="space-y-4">
          {[
            "How does Order.uk work?",
            "What payment methods are accepted?",
            "Can I track my order in real-time?",
            "Are there discounts available?",
          ].map((faq, idx) => (
            <button
              key={idx}
              className="w-full text-left bg-orange-100 px-4 py-3 rounded-lg font-medium hover:bg-orange-200"
            >
              {faq}
            </button>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-orange-500 text-white py-12">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h4 className="text-3xl font-bold">546+</h4>
            <p className="text-sm">Registered Riders</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold">789,900+</h4>
            <p className="text-sm">Orders Delivered</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold">690+</h4>
            <p className="text-sm">Restaurants Partnered</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold">17,457+</h4>
            <p className="text-sm">Food Items</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-auto">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h5 className="font-bold mb-3">OrderUK</h5>
            <p className="text-gray-400 text-sm">
              Best food ordering service in town.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-3">Legal Pages</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-3">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="#">FB</a>
              <a href="#">IG</a>
              <a href="#">TW</a>
            </div>
          </div>
          <div>
            <h5 className="font-bold mb-3">Subscribe</h5>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-l-lg text-black"
              />
              <button className="bg-orange-500 px-4 rounded-r-lg">
                Go
              </button>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm mt-6">
          © 2024 OrderUK. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
