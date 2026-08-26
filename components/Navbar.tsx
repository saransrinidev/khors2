"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

const links = [
  { label: "Home", href: "/", active: true, hasMenu: false },
  { label: "Services", href: "#services", active: false, hasMenu: true },
  { label: "Contact Us", href: "#contact", active: false, hasMenu: false },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white shadow-[0_1px_0_rgba(15,26,51,0.08)]">
      <div className="relative flex h-[76px] items-center justify-between px-5 lg:h-[92px] lg:px-10">
        <Link href="/" aria-label="Khors Renewables home" className="shrink-0">
          <Image
            src="/navbar/logo.png"
            alt="Khors Renewables"
            width={300}
            height={300}
            className="h-[60px] w-auto lg:h-[76px]"
            priority
            unoptimized
          />
        </Link>

        {/* Desktop nav — optically centred in the bar */}
        <nav
          aria-label="Main"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-[44px] lg:flex xl:gap-[56px]"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={link.active ? "page" : undefined}
              className="group relative flex items-center gap-[6px] pb-[9px] pt-[9px] text-[17px] font-medium text-navy transition-colors hover:text-brand"
            >
              {link.label}
              {link.hasMenu && (
                <ChevronDownIcon className="mt-[2px] h-[15px] w-[15px]" />
              )}
              <span
                className={`absolute inset-x-0 bottom-0 h-[2.5px] rounded-full bg-brand transition-opacity ${
                  link.active ? "opacity-100" : "opacity-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-navy transition-colors hover:bg-navy/5 lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            {open ? (
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

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-navy/10 bg-white px-5 pb-4 pt-2 lg:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={link.active ? "page" : undefined}
              className={`flex items-center justify-between border-b border-navy/5 py-3 text-[16px] font-medium last:border-0 ${
                link.active ? "text-brand" : "text-navy"
              }`}
            >
              {link.label}
              {link.hasMenu && <ChevronDownIcon className="h-4 w-4" />}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
