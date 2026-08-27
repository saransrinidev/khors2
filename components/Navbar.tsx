"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

const serviceItems = [
  { label: "Who We Are", href: "#who-we-are" },
  { label: "Rooftop Solar", href: "#rooftop" },
  { label: "Trusted Solutions", href: "#solar-trusted" },
  { label: "Government Subsidy", href: "#subsidary" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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
            href="/"
            aria-current="page"
            className="group relative flex items-center pb-[0.5625rem] pt-[0.5625rem] text-[1.0625rem] font-medium text-navy transition-colors hover:text-brand"
          >
            Home
            <span className="absolute inset-x-0 bottom-0 h-[0.1562rem] rounded-full bg-brand opacity-100" />
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              className="group relative flex items-center gap-[0.375rem] pb-[0.5625rem] pt-[0.5625rem] text-[1.0625rem] font-medium text-navy transition-colors hover:text-brand"
            >
              Services
              <ChevronDownIcon
                className={`mt-[0.125rem] h-[0.9375rem] w-[0.9375rem] transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
              <span className="absolute inset-x-0 bottom-0 h-[0.1562rem] rounded-full bg-brand opacity-0" />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full z-50 mt-[0.25rem] w-[13.75rem] -translate-x-1/2 rounded-[0.75rem] border border-navy/10 bg-white py-[0.5rem] shadow-[0_0.625rem_1.875rem_rgba(15,26,51,0.12)]">
                {serviceItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setServicesOpen(false)}
                    className="block px-[1.125rem] py-[0.625rem] text-[0.9375rem] font-medium text-navy transition-colors hover:bg-brand/5 hover:text-brand"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

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
            href="/"
            onClick={() => setMobileOpen(false)}
            aria-current="page"
            className="flex items-center border-b border-navy/5 py-3 text-[1rem] font-medium text-brand"
          >
            Home
          </Link>

          {/* Services accordion */}
          <div className="border-b border-navy/5">
            <button
              type="button"
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="flex w-full items-center justify-between py-3 text-[1rem] font-medium text-navy"
            >
              Services
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="pb-2 pl-4">
                {serviceItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className="block py-[0.5rem] text-[0.9375rem] font-medium text-navy/80 transition-colors hover:text-brand"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

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
