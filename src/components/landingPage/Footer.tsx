import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-12">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Info */}
        <div>
          <h2 className="text-lg font-bold">UMKM Online</h2>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} UMKM Online. All Rights Reserved.
          </p>
        </div>

        {/* Logo Platform */}
        <div className="flex items-center gap-6">
          <Image src="/images/gofood.png" alt="GoFood" width={70} height={35} />
          <Image src="/images/shopeefood.png" alt="ShopeeFood" width={70} height={35} />
          <Image src="/images/grabfood.png" alt="GrabFood" width={70} height={35} />
        </div>
      </div>
    </footer>
  );
}
