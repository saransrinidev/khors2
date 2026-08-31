"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_0.0625rem_0_rgba(15,26,51,0.08)]">
      <div className="relative flex h-[4.75rem] items-center justify-between px-5 lg:h-[5.75rem] lg:px-10">
        <Link href="/" aria-label="Khors Renewables home" className="shrink-0">
          <Image
            src="/navbar/logo.png"
            alt="Khors Renewables"
            width={300}
            height={300}
            className="h-[3.75rem] w-auto lg:h-[4.75rem]"
            priority
            unoptimized
          />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Main"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-[2.75rem] lg:flex xl:gap-[3.5rem]"
        >
          {/* Home */}
          <Link
            href="#home"
            aria-current="page"
            className="group relative flex items-center pb-[0.5625rem] pt-[0.5625rem] text-[1.0625rem] font-medium text-navy transition-colors hover:text-brand"
          >
            Home
            <span className="absolute inset-x-0 bottom-0 h-[0.1562rem] rounded-full bg-brand opacity-100" />
          </Link>

          {/* Services */}
          <Link
            href="#rooftop"
            suppressHydrationWarning
            className="group relative flex items-center pb-[0.5625rem] pt-[0.5625rem] text-[1.0625rem] font-medium text-navy transition-colors hover:text-brand"
          >
            Services
            <span className="absolute inset-x-0 bottom-0 h-[0.1562rem] rounded-full bg-brand opacity-0 group-hover:opacity-100" />
          </Link>

          {/* Contact Us */}
          <Link
            href="#contact"
            className="group relative flex items-center pb-[0.5625rem] pt-[0.5625rem] text-[1.0625rem] font-medium text-navy transition-colors hover:text-brand"
          >
            Contact Us
            <span className="absolute inset-x-0 bottom-0 h-[0.1562rem] rounded-full bg-brand opacity-0" />
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-navy transition-colors hover:bg-navy/5 lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            {mobileOpen ? (
              <path
                d="m5 5 14 14M19 5 5 19"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3.5 7h17M3.5 12h17M3.5 17h17"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-navy/10 bg-white px-5 pb-4 pt-2 lg:hidden"
        >
          <Link
            href="#home"
            onClick={() => setMobileOpen(false)}
            aria-current="page"
            className="flex items-center border-b border-navy/5 py-3 text-[1rem] font-medium text-brand"
          >
            Home
          </Link>

          {/* Services */}
          <Link
            href="#rooftop"
            onClick={() => setMobileOpen(false)}
            className="flex items-center border-b border-navy/5 py-3 text-[1rem] font-medium text-navy"
          >
            Services
          </Link>

          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center py-3 text-[1rem] font-medium text-navy"
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}
