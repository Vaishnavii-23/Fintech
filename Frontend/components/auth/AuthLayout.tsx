import type { ReactNode } from "react";
import Image from "next/image";

interface AuthLayoutProps {
  children: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

export default function AuthLayout({
  children,
  imageSrc = "/image.jpg",
  imageAlt = "Auth Visual",
}: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col overflow-auto md:grid md:grid-cols-[60%_40%] md:overflow-hidden">

      {/* LEFT */}
      <div className="order-2 flex items-center justify-center bg-gradient-to-b from-[#2B2F4A] via-[#4B4F72] to-[#7A7FA6] md:order-1">
        <div className="w-full max-w-md px-6 py-10 text-white">
          {children}
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative order-1 h-48 w-full sm:h-64 md:order-2 md:h-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
      </div>

    </div>
  );
}
