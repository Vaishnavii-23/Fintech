"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex h-16 items-center justify-between rounded-xl bg-[#2E2F3E]/80 backdrop-blur-md border border-white/10 px-6 shadow-lg">
          
          {/* LOGO */}
          <Link
            href="/"
            className="text-lg font-semibold tracking-wide text-white"
          >
            Elite<span className="text-white/60">Wealth</span>
          </Link>

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <Link href="#" className="hover:text-white transition">
              Solutions
            </Link>
            <Link href="#" className="hover:text-white transition">
              About
            </Link>
            <Link href="#" className="hover:text-white transition">
              Insights
            </Link>
            <Link href="#" className="hover:text-white transition">
              Contact
            </Link>
          </div>

          {/* CTA */}
          <button
            className="
              rounded-md
              bg-[#333440]
              px-5 py-2
              text-sm text-white
              border-[3px] border-[#45464D]
              shadow-[0px_4px_4px_0px_#00000040]
              hover:opacity-90
              transition
            "
          >
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}
