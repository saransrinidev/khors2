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
    image: "/solar-trusted/solar-panels.png",
    title: "SOLAR PANELS",
    tags: ["High Efficiency", "Tier-1 Quality", "Long Lasting"],
  },
  {
    image: "/solar-trusted/inverters.png",
    title: "INVERTERS",
    tags: ["Reliable", "Efficient", "Smart"],
  },
  {
    image: "/solar-trusted/mounting-structures.png",
    title: "MOUNTING STRUCTURES",
    tags: ["Corrosion Resistant", "Durable", "Safe"],
  },
];

export default function SolarTrusted() {
  return (
    <section className="relative w-full h-screen max-h-[100svh] overflow-hidden">
      {/* Background image — cover full screen */}
      <Image
        src="/solar-trusted/background.png"
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
          <div className="relative mx-auto mt-[20px] grid w-full max-w-[1000px] grid-cols-2 gap-[10px] sm:gap-[14px] lg:mt-[30px] lg:grid-cols-4 lg:gap-[18px]" style={{ zIndex: 3 }}>
            {cards.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="relative overflow-hidden rounded-[14px] bg-white/95 shadow-[0_4px_16px_rgba(15,26,51,0.1)] backdrop-blur-sm lg:rounded-[16px]"
              >
                {/* Green check badge — top left */}
                <span className="absolute left-[12px] top-[12px] flex h-[24px] w-[24px] items-center justify-center rounded-full bg-brand text-white sm:h-[26px] sm:w-[26px] lg:left-[14px] lg:top-[14px] lg:h-[28px] lg:w-[28px]">
                  <svg viewBox="0 0 24 24" className="h-[14px] w-[14px] lg:h-[16px] lg:w-[16px]" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12 5 5L20 7" />
                  </svg>
                </span>

                {/* Icon area with light bg */}
                <div className="flex items-center justify-center bg-navy/5 px-[16px] pt-[40px] pb-[20px] sm:pt-[44px] sm:pb-[22px] lg:pt-[48px] lg:pb-[24px]">
                  <Icon className="h-[40px] w-[40px] text-navy sm:h-[48px] sm:w-[48px] lg:h-[56px] lg:w-[56px]" />
                </div>

                {/* Text content */}
                <div className="flex flex-col items-center px-[16px] pb-[20px] pt-[14px] text-center sm:px-[18px] sm:pb-[22px] sm:pt-[16px] lg:px-[24px] lg:pb-[28px] lg:pt-[18px]">
                  <h4 className="text-[12px] font-bold uppercase tracking-[0.04em] text-navy sm:text-[13px] lg:text-[15px]">
                    {title}
                  </h4>
                  <p className="mt-[8px] text-[11px] leading-[1.5] text-navy/70 sm:text-[12px] lg:mt-[10px] lg:text-[14px]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Humans image — bottom right, behind button, overlapping cards */}
          <div className="pointer-events-none absolute bottom-0 right-[40px] hidden h-[420px] w-[480px] md:block lg:right-[60px] lg:h-[520px] lg:w-[580px]" style={{ zIndex: 1 }}>
            <Image
              src="/solar-trusted/team.png"
              alt="Khors Renewables team members"
              fill
              sizes="580px"
              className="object-contain object-bottom"
              unoptimized
            />
          </div>

          {/* Spacer so the bottom band never overlaps the cards */}
          <div className="mt-auto h-[150px] lg:h-[210px]" />
        </div>

        {/* ---------- Bottom band: products + CTA connected ---------- */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex items-stretch">
          {/* Light strip — holds the labels; visuals rise above it */}
          <div className="relative flex-1 rounded-tr-[70px] bg-white/85 backdrop-blur-[2px] lg:rounded-tr-[90px]">
            {/* Product visuals, sitting on top of the strip */}
            <div className="pointer-events-none absolute bottom-full left-0 right-0 flex items-end gap-[8px] px-[10px] sm:gap-[16px] sm:px-[20px] lg:gap-[24px] lg:px-[30px]">
              {products.map(({ image, title }) => (
                <div
                  key={title}
                  className="relative h-[76px] flex-1 sm:h-[100px] lg:h-[130px]"
                >
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 1024px) 280px, 33vw"
                    className="object-contain object-bottom"
                    unoptimized
                  />
                </div>
              ))}
            </div>

            {/* Labels — each column lines up with its visual above */}
            <div className="flex items-start gap-[8px] px-[10px] pb-[10px] pt-[8px] sm:gap-[16px] sm:px-[20px] lg:gap-[24px] lg:px-[30px] lg:pb-[14px] lg:pt-[10px]">
              {products.map(({ title, tags }) => (
                <div key={title} className="flex-1 text-center">
                  <h5 className="text-[11px] font-bold uppercase tracking-[0.04em] text-navy sm:text-[13px] lg:text-[15px]">
                    {title}
                  </h5>
                  <p className="mt-[2px] text-[9px] text-navy/60 sm:text-[11px] lg:text-[12px]">
                    {tags.join("  |  ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA — flush against the strip, same height */}
          <Link
            href="#contact"
            className="inline-flex shrink-0 items-center gap-[10px] rounded-tl-[40px] bg-brand-btn pl-[30px] pr-[16px] text-[13px] font-medium text-white transition-colors hover:bg-brand-btn-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-btn sm:gap-[12px] sm:rounded-tl-[50px] sm:pl-[40px] sm:pr-[24px] sm:text-[15px] lg:gap-[14px] lg:rounded-tl-[60px] lg:pl-[52px] lg:pr-[36px] lg:text-[18px]"
          >
            <CalendarCheck className="h-[18px] w-[18px] lg:h-[24px] lg:w-[24px]" />
            Schedule a free consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
