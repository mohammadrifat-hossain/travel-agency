"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Destinations", href: "#" },
    { name: "Packages", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full py-3 sm:py-4 transition-all duration-300 flex items-center">
        <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between px-6 sm:px-10 lg:px-14">
          
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl sm:text-2xl font-semibold text-white tracking-widest uppercase font-serif">
              Travel Agency
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-white/90 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <button className="bg-primary hover:bg-primary/90 text-black font-semibold text-sm py-2.5 px-6 rounded-full flex items-center gap-2 shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer">
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => setIsMobileOpen(true)}
            aria-label="Open mobile menu"
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Menu className="w-6 h-6" />
          </button>

        </div>
      </header>

      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden transition-opacity"
        />
      )}

      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[280px] sm:w-[320px] bg-neutral-950/95 border-l border-white/10 backdrop-blur-xl p-6 flex flex-col justify-between md:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <span className="text-lg font-semibold text-white tracking-wider uppercase font-serif">
              Travel Agency
            </span>
            <button
              onClick={() => setIsMobileOpen(false)}
              aria-label="Close mobile menu"
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-5 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-base font-semibold text-white/90 hover:text-primary transition-colors py-1"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-white/10">
          <button
            onClick={() => setIsMobileOpen(false)}
            className="w-full bg-primary hover:bg-primary/90 text-black font-semibold text-sm py-3 px-6 rounded-full flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Contact Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </aside>
    </>
  );
}
