import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
} from "lucide-react";

const cards = [
  {
    logo: "/solar-trusted/logo1.png",
    title: "MNRE COMPLIANT INSTALLATIONS",
    desc: "All our installations are fully compliant with MNRE guidelines and industry standards.",
  },
  {
    logo: "/solar-trusted/logo2.png",
    title: "GOVERNMENT SUBSIDY ASSISTANCE",
    desc: "End-to-end support for subsidy applications, documentation and claim processing.",
  },
  {
    logo: "/solar-trusted/logo3.png",
    title: "PREMIUM QUALITY COMPONENTS",
    desc: "We use Tier-1 solar panels, reliable inverters and durable mounting structures for maximum performance.",
  },
  {
    logo: "/solar-trusted/logo4.png",
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
    <section className="relative w-full overflow-hidden">
      {/* Background image — cover full screen */}
      <Image
        src="/solar-trusted/background.png"
        alt="Khors Renewables trusted solar solutions"
        fill
        sizes="100vw"
        className="object-cover object-[center_25%]"
        priority
      />

      <div className="relative flex flex-col lg:min-h-[calc(100svh_-_92px)]">
        {/* Wash for readability on phones and tablets */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] lg:hidden" />

        <div className="relative flex flex-1 flex-col px-5 py-[30px] sm:px-8 lg:px-[80px] lg:py-[40px] [@media(min-width:1024px)_and_(max-height:820px)]:py-[22px]">
          {/* Heading — centered */}
          <div className="text-center">
            <h2 className="font-display text-[28px] font-bold leading-[1.1] text-navy sm:text-[36px] lg:text-[48px] [@media(min-width:1024px)_and_(max-height:820px)]:text-[38px] [@media(min-width:1024px)_and_(max-height:700px)]:text-[31px]">
              Trusted <span className="italic">solar</span>
              <br />
              <span className="italic">solutions</span>
            </h2>
            <p className="mt-[8px] text-[13px] leading-[1.5] text-navy/80 sm:text-[14px] lg:mt-[12px] lg:text-[17px] [@media(min-width:1024px)_and_(max-height:820px)]:mt-[6px] [@media(min-width:1024px)_and_(max-height:820px)]:text-[14px]">
              Certified. Compliant. Reliable.
              <br />
              Powering a sustainable tomorrow.
            </p>
          </div>

          {/* Cards — stacked on phones, 2-up on tablets, 4-up on desktop */}
          <div className="relative mx-auto mt-[20px] grid w-full max-w-[1000px] grid-cols-1 gap-[12px] sm:grid-cols-2 sm:gap-[14px] lg:mt-[30px] lg:grid-cols-4 lg:gap-[18px] [@media(min-width:1024px)_and_(max-height:820px)]:mt-[16px]" style={{ zIndex: 3 }}>
            {cards.map(({ logo, title, desc }) => (
              <div
                key={title}
                className="relative flex items-center gap-[14px] overflow-hidden rounded-[14px] bg-white/95 p-[12px] shadow-[0_4px_16px_rgba(15,26,51,0.1)] backdrop-blur-sm sm:block sm:p-0 lg:rounded-[16px]"
              >
                {/* Green check badge — top left */}
                <span className="absolute left-[10px] top-[10px] z-10 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-brand text-white sm:h-[26px] sm:w-[26px] lg:left-[12px] lg:top-[12px] lg:h-[28px] lg:w-[28px]">
                  <svg viewBox="0 0 24 24" className="h-[14px] w-[14px] lg:h-[16px] lg:w-[16px]" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12 5 5L20 7" />
                  </svg>
                </span>

                {/* Logo image area — big, fills space */}
                <div className="relative h-[86px] w-[86px] shrink-0 sm:h-[130px] sm:w-full lg:h-[160px] [@media(min-width:1024px)_and_(max-height:820px)]:h-[112px] [@media(min-width:1024px)_and_(max-height:700px)]:h-[90px]">
                  <Image
                    src={logo}
                    alt={title}
                    fill
                    sizes="(min-width: 640px) 250px, 86px"
                    className="object-contain object-center p-[6px] sm:p-[8px] lg:p-[10px]"
                    unoptimized
                  />
                </div>

                {/* Text content */}
                <div className="flex min-w-0 flex-col items-start text-left sm:items-center sm:px-[18px] sm:pb-[22px] sm:pt-[16px] sm:text-center lg:px-[24px] lg:pb-[28px] lg:pt-[18px] [@media(min-width:1024px)_and_(max-height:820px)]:px-[16px] [@media(min-width:1024px)_and_(max-height:820px)]:pb-[14px] [@media(min-width:1024px)_and_(max-height:820px)]:pt-[10px]">
                  <h4 className="text-[13px] font-bold uppercase tracking-[0.04em] text-navy sm:text-[13px] lg:text-[15px] [@media(min-width:1024px)_and_(max-height:820px)]:text-[13px]">
                    {title}
                  </h4>
                  <p className="mt-[6px] text-[12px] leading-[1.5] text-navy/70 sm:mt-[8px] sm:text-[12px] lg:mt-[10px] lg:text-[14px] [@media(min-width:1024px)_and_(max-height:820px)]:mt-[6px] [@media(min-width:1024px)_and_(max-height:820px)]:text-[12px] [@media(min-width:1024px)_and_(max-height:700px)]:leading-[1.4]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Humans image — right side, behind cards, visible above/below them */}
          <div className="pointer-events-none absolute bottom-[10px] right-[60px] hidden h-[360px] w-[400px] min-[1815px]:block lg:bottom-[-90px] lg:right-[-80px] lg:h-[440px] lg:w-[500px]" style={{ zIndex: 2 }}>
            <Image
              src="/solar-trusted/team5.png"
              alt="Khors Renewables team members"
              fill
              sizes="440px"
              className="object-contain object-bottom"
              unoptimized
            />
          </div>

        </div>

        {/* ---------- Bottom band: products + CTA ---------- */}
        {/* Kept in normal document flow at every size, so it can never overlap
            the cards above it — the products always sit below them. */}
        <div className="relative z-10 mt-[24px] flex shrink-0 flex-col lg:mt-0 lg:flex-row lg:items-end">
          {/* Strip column — product visuals stacked directly above their labels */}
          <div className="flex min-w-0 flex-1 flex-col">
            {/* Product visuals */}
            <div className="grid grid-cols-3 items-end gap-[8px] px-[10px] pt-[12px] sm:gap-[16px] sm:px-[20px] lg:gap-[24px] lg:px-[30px] lg:pb-[6px] lg:pt-0">
              {products.map(({ image, title }) => (
                <div
                  key={title}
                  className="relative h-[62px] sm:h-[84px] lg:h-[9vh] lg:max-h-[104px] [@media(min-width:1024px)_and_(max-height:700px)]:h-[62px]"
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

            {/* White strip holding the labels */}
            <div className="bg-white/85 backdrop-blur-[2px] lg:rounded-tr-[90px]">
              <div className="grid grid-cols-3 items-start gap-[8px] px-[10px] pb-[14px] pt-[8px] sm:gap-[16px] sm:px-[20px] lg:gap-[24px] lg:px-[30px] lg:pb-[16px] lg:pt-[12px] [@media(min-width:1024px)_and_(max-height:820px)]:pb-[10px] [@media(min-width:1024px)_and_(max-height:820px)]:pt-[8px]">
                {products.map(({ title, tags }) => (
                  <div key={title} className="text-center">
                    <h5 className="text-[10px] font-bold uppercase leading-[1.25] tracking-[0.03em] text-navy sm:text-[13px] lg:text-[15px]">
                      {title}
                    </h5>
                    <p className="mt-[3px] hidden text-[9px] leading-[1.3] text-navy/60 sm:block sm:text-[11px] lg:text-[12px]">
                      {tags.join("  |  ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA — full width bar on mobile, flush corner block on desktop */}
          <Link
            href="#contact"
            className="inline-flex w-full shrink-0 items-center justify-center gap-[10px] rounded-none bg-brand-btn px-[16px] py-[15px] text-[14px] font-medium text-white transition-colors hover:bg-brand-btn-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-btn sm:text-[15px] lg:w-auto lg:justify-start lg:gap-[14px] lg:rounded-tl-[60px] lg:py-[22px] lg:pl-[52px] lg:pr-[36px] lg:text-[18px] [@media(min-width:1024px)_and_(max-height:820px)]:py-[18px]"
          >
            <CalendarCheck className="h-[18px] w-[18px] lg:h-[24px] lg:w-[24px]" />
            Schedule a free consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
