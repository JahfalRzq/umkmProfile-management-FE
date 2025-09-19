"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, MapPin, Truck, Gift, UserPlus, Phone } from "lucide-react";

export default function LandingPage() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpenMenu(false); // Close mobile menu after clicking
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className={`w-full bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}>
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold text-orange-500 flex items-center gap-1">
            <span>Pukis</span>
            <span className="text-black">Ipeng</span>
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <button 
              onClick={() => scrollToSection("hero")} 
              className="hover:text-orange-500 transition"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("outlets")} 
              className="hover:text-orange-500 transition"
            >
              Outlets
            </button>
            <button 
              onClick={() => scrollToSection("menu")} 
              className="hover:text-orange-500 transition"
            >
              Menu
            </button>
         
            <button 
              onClick={() => scrollToSection("order")} 
              className="hover:text-orange-500 transition"
            >
              Order Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="md:hidden text-gray-700"
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Nav */}
        {openMenu && (
          <div className="md:hidden bg-white border-t shadow-md px-6 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection("hero")} 
              className="block text-gray-700 hover:text-orange-500 transition w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("outlets")} 
              className="block text-gray-700 hover:text-orange-500 transition w-full text-left"
            >
              Outlets
            </button>
            <button 
              onClick={() => scrollToSection("menu")} 
              className="block text-gray-700 hover:text-orange-500 transition w-full text-left"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection("order")} 
              className="block text-gray-700 hover:text-orange-500 transition w-full text-left"
            >
              Order Now
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-r from-orange-50 to-yellow-50 py-16 md:py-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 gap-10">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Feast Your Senses,
              <br />
              <span className="text-orange-500">Fast and Fresh</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 max-w-lg">
              Made with love, baked fresh daily — our pukis are the perfect treat for any moment.
              <br />
              <span className="font-semibold text-orange-600">Try it once, you’ll be hooked!</span>
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <input
                type="text"
                placeholder="Enter your location..."
                className="flex-1 px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition font-medium shadow-md">
                Find Nearby
              </button>
            </div> */}
          </div>
          <div className="flex-1">
            <Image
              src="/bannerLP.jpeg"
              alt="Fresh Pukis Ipeng - Handmade & Delicious"
              width={500}
              height={400}
              className="rounded-xl shadow-2xl object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Our Outlet */}
      <section id="outlets" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-center mb-10 text-gray-800 flex items-center justify-center gap-2">
            <MapPin size={24} /> Our Physical Outlets
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1].map((item) => (
              <div
                key={item}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <Image
                  src={`/outlet/outlet${item}.jpeg`}
                  alt={`Outlet ${item}`}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="font-semibold text-gray-800 text-lg">Outlet {item}</h4>
                  <p className="text-gray-600 mt-2">Jl. Dr. Angka No. 123, Jakarta</p>
                  <p className="text-sm text-orange-500 mt-2">Open: 8 AM – 10 PM</p>
                  <button className="mt-4 text-sm text-orange-500 hover:underline">
                    View on Map
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories */}
<section id="menu" className="py-16 bg-gray-50">
  <div className="container mx-auto px-6">
    {/* Judul Section */}
    <h3 className="text-2xl font-bold text-center mb-10 text-gray-800 flex items-center justify-center gap-2">
      <Truck size={24} /> Explore Our Menu
    </h3>

    {/* Grid Produk */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-6">
      {[
        { name: "Pukis Original", img: "/assets/aset_pukis/pukis5.png" },
        { name: "Pukis Keju", img: "/assets/aset_pukis/pukis2.png" },
        { name: "Pukis Coklat", img: "/assets/aset_pukis/pukis1.png" },
        { name: "Pukis Pandan", img: "/assets/aset_pukis/pukis6.png" },
        { name: "Pukis Oreo", img: "/assets/aset_pukis/pukis4.png" },
        { name: "Pukis Custom", img: "/assets/aset_pukis/pukis7.png" },
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
            className="w-full h-48 object-cover group-hover:scale-105 transition"
          />

          {/* Nama Produk */}
          <div className="py-2">
            <p className="text-center text-sm font-semibold text-gray-700">
              {item.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Online Order Partners */}
      <section id="order" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-center mb-10 text-gray-800 flex items-center justify-center gap-2">
            <Gift size={24} /> Available on Popular Platforms
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 justify-center">
            {["gofood.png", "grabfood.png", "shopeefood.png"].map((logo, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-4 rounded-lg flex items-center justify-center hover:bg-orange-50 transition duration-300"
              >
                <Image
                  src={`/icons/${logo}`}
                  alt={logo}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-16 bg-gradient-to-r from-orange-400 to-red-500 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 gap-10">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ordering is More <span className="text-yellow-200">Personalized & Instant</span>
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Download our app for exclusive discounts, faster delivery, and personalized recommendations.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/images/banner.png"
              alt="Promo Banner"
              width={500}
              height={300}
              className="rounded-xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Partner & Rider */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="relative bg-black text-white rounded-xl overflow-hidden">
            <Image
              src="/images/partner.png"
              alt="Partner"
              fill
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Become a Partner</h3>
              <p className="text-gray-300 mb-6">Grow your business with our nationwide delivery network.</p>
              <button className="bg-orange-500 px-6 py-3 rounded-lg text-white font-medium hover:bg-orange-600 transition">
                Apply Now
              </button>
            </div>
          </div>
          <div className="relative bg-black text-white rounded-xl overflow-hidden">
            <Image
              src="/images/rider.png"
              alt="Rider"
              fill
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Work as a Rider</h3>
              <p className="text-gray-300 mb-6">Earn extra income by delivering delicious pukis.</p>
              <button className="bg-orange-500 px-6 py-3 rounded-lg text-white font-medium hover:bg-orange-600 transition">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-center mb-10 text-gray-800 flex items-center justify-center gap-2">
            <Phone size={24} /> Frequently Asked Questions
          </h3>
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              "How does ordering work?",
              "What payment methods do you accept?",
              "Can I track my order in real-time?",
              "Are there any discounts or promotions?",
            ].map((faq, idx) => (
              <button
                key={idx}
                className="w-full text-left bg-orange-50 px-6 py-4 rounded-xl font-medium hover:bg-orange-100 transition"
              >
                {faq}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="text-3xl font-bold">546+</h4>
            <p className="text-sm opacity-90">Registered Riders</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold">789K+</h4>
            <p className="text-sm opacity-90">Orders Delivered</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold">690+</h4>
            <p className="text-sm opacity-90">Restaurants Partnered</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold">17K+</h4>
            <p className="text-sm opacity-90">Food Items</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h5 className="font-bold text-lg mb-4">Pukis Ipeng</h5>
            <p className="text-gray-400 text-sm">
              Fresh, delicious, and delivered fast. Your favorite pukis, anytime.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-4">Legal</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-orange-400">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-orange-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-400">Cookies</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-orange-400">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-orange-400">Tiktok</a>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm mt-8">
          © 2024 Pukis Ipeng. All rights reserved.
        </p>
      </footer>
    </div>
  );
}