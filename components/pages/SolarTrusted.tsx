import Image from "next/image";
import Link from "next/link";
import {
  Landmark,
  IndianRupee,
  Package,
  UsersRound,
  CalendarCheck,
} from "lucide-react";

const cards = [
  {
    Icon: Landmark,
    title: "MNRE COMPLIANT INSTALLATIONS",
    desc: "All our installations are fully compliant with MNRE guidelines and industry standards.",
  },
  {
    Icon: IndianRupee,
    title: "GOVERNMENT SUBSIDY ASSISTANCE",
    desc: "End-to-end support for subsidy applications, documentation and claim processing.",
  },
  {
    Icon: Package,
    title: "PREMIUM QUALITY COMPONENTS",
    desc: "We use Tier-1 solar panels, reliable inverters and durable mounting structures for maximum performance.",
  },
  {
    Icon: UsersRound,
    title: "CERTIFIED INSTALLATION TEAM",
    desc: "Our trained and certified professionals ensure safe, efficient and high-quality installations.",
  },
];

const products = [
  {
    title: "SOLAR PANELS",
    tags: ["High Efficiency", "Tier-1 Quality", "Long Lasting"],
  },
  {
    title: "INVERTERS",
    tags: ["Reliable", "Efficient", "Smart"],
  },
  {
    title: "MOUNTING STRUCTURES",
    tags: ["Corrosion Resistant", "Durable", "Safe"],
  },
];

export default function SolarTrusted() {
  return (
    <section className="relative w-full h-screen max-h-[100svh] overflow-hidden">
      {/* Background image — cover full screen */}
      <Image
        src="/solartrusted.png"
        alt="Khors Renewables trusted solar solutions"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />

      <div className="absolute inset-0 flex flex-col">
        {/* Mobile blur overlay for readability */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] md:hidden" />

        <div className="relative flex flex-1 flex-col px-5 py-[30px] sm:px-8 lg:px-[80px] lg:py-[40px]">
          {/* Heading — centered */}
          <div className="text-center">
            <h2 className="font-display text-[28px] font-bold leading-[1.1] text-navy sm:text-[36px] lg:text-[48px]">
              Trusted <span className="italic">solar</span>
              <br />
              <span className="italic">solutions</span>
            </h2>
            <p className="mt-[8px] text-[13px] leading-[1.5] text-navy/80 sm:text-[14px] lg:mt-[12px] lg:text-[17px]">
              Certified. Compliant. Reliable.
              <br />
              Powering a sustainable tomorrow.
            </p>
          </div>

          {/* Cards — positioned in center area */}
          <div className="mx-auto mt-[20px] grid w-full max-w-[1000px] grid-cols-2 gap-[10px] sm:gap-[14px] lg:mt-[30px] lg:grid-cols-4 lg:gap-[18px]">
            {cards.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="relative rounded-[12px] bg-white/92 px-[12px] pb-[14px] pt-[32px] shadow-[0_4px_16px_rgba(15,26,51,0.1)] backdrop-blur-sm sm:px-[14px] sm:pb-[16px] sm:pt-[36px] lg:rounded-[14px] lg:px-[16px] lg:pb-[20px] lg:pt-[40px]"
              >
                {/* Green check badge */}
                <span className="absolute left-1/2 top-[-12px] flex h-[26px] w-[26px] -translate-x-1/2 items-center justify-center rounded-full bg-brand text-white sm:h-[28px] sm:w-[28px] lg:top-[-14px] lg:h-[30px] lg:w-[30px]">
                  <svg viewBox="0 0 24 24" className="h-[14px] w-[14px] lg:h-[16px] lg:w-[16px]" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12 5 5L20 7" />
                  </svg>
                </span>

                <div className="flex flex-col items-center text-center">
                  <Icon className="h-[28px] w-[28px] text-navy sm:h-[32px] sm:w-[32px] lg:h-[38px] lg:w-[38px]" />
                  <h4 className="mt-[8px] text-[10px] font-bold uppercase tracking-[0.04em] text-navy sm:text-[11px] lg:mt-[10px] lg:text-[12px]">
                    {title}
                  </h4>
                  <p className="mt-[4px] text-[9px] leading-[1.4] text-navy/70 sm:text-[10px] lg:mt-[6px] lg:text-[12px]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Products row + CTA — pushed to bottom */}
          <div className="mt-auto pt-[20px] lg:pt-[30px]">
            <div className="flex flex-col items-center gap-[16px] sm:flex-row sm:items-end sm:justify-between">
              {/* Products */}
              <div className="flex flex-wrap justify-center gap-[20px] sm:gap-[36px] lg:gap-[50px]">
                {products.map(({ title, tags }) => (
                  <div key={title} className="text-center">
                    <h5 className="text-[12px] font-bold uppercase tracking-[0.04em] text-navy sm:text-[13px] lg:text-[15px]">
                      {title}
                    </h5>
                    <p className="mt-[2px] text-[10px] text-navy/60 sm:text-[11px] lg:text-[12px]">
                      {tags.join("  |  ")}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="#contact"
                className="inline-flex h-[44px] items-center gap-[10px] rounded-[10px] bg-brand-btn px-[16px] text-[14px] font-medium text-white shadow-[0_8px_20px_rgba(15,26,51,0.2)] transition-colors hover:bg-brand-btn-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-btn sm:h-[48px] sm:px-[18px] sm:text-[15px] lg:h-[54px] lg:gap-[12px] lg:px-[22px] lg:text-[17px]"
              >
                <CalendarCheck className="h-[17px] w-[17px] lg:h-[20px] lg:w-[20px]" />
                Schedule a free consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
