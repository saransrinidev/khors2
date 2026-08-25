import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Leaf,
  ShieldCheck,
  Clock,
  CalendarCheck,
} from "lucide-react";

const points = [
  {
    logo: "/who-we-are/logo1.png",
    text: "At Khors Renewables, we are committed to making solar energy simple, affordable, and accessible for homeowners and businesses across India.",
  },
  {
    logo: "/who-we-are/logo2.png",
    text: "Our mission is to help customers reduce their electricity costs, achieve energy independence, and contribute to a cleaner, greener future.",
  },
  {
    logo: "/who-we-are/logo3.png",
    text: "With a team of qualified engineers, certified installation professionals, and customer support specialists, we provide end-to-end solar solutions\u2014from consultation and design to installation, commissioning, and after-sales support.",
  },
  {
    logo: "/who-we-are/logo4.png",
    text: "Whether you are looking to power your home, commercial building, or industrial facility, we deliver reliable, high-performance solar systems designed for maximum savings and long-term value.",
  },
];

const benefits = [
  {
    Icon: Zap,
    title: "Lower Electricity Bills",
    sub: "Save up to 95% on your electricity costs.",
  },
  {
    Icon: Leaf,
    title: "Clean & Green Energy",
    sub: "Reduce your carbon footprint and protect the environment.",
  },
  {
    Icon: ShieldCheck,
    title: "Reliable Performance",
    sub: "High-efficiency systems built for Indian conditions.",
  },
  {
    Icon: Clock,
    title: "Long-Term Value",
    sub: "Durable solutions with long life and excellent returns.",
  },
];

export default function WhoWeAre() {
  return (
    <section className="relative isolate flex min-h-[700px] w-full flex-col overflow-hidden lg:min-h-[calc(100svh_-_92px)]">
      {/* Background photo */}
      <Image
        src="/who-we-are/background2.png"
        alt="Khors Renewables team working on solar panel installation"
        fill
        sizes="100vw"
        className="-z-20 object-cover object-[center_30%]"
      />

      {/* White wash for text legibility */}
      <div className="absolute inset-0 -z-10 bg-white/60 backdrop-blur-[3px] md:hidden" />
      <div className="absolute inset-0 -z-10 hidden bg-[linear-gradient(to_right,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.7)_28%,rgba(255,255,255,0.2)_52%,rgba(255,255,255,0)_66%)] md:block" />

      <div className="relative flex w-full flex-1 flex-col justify-between px-5 pb-6 pt-8 sm:px-8 sm:pt-10 lg:px-[100px] lg:pb-[22px] lg:pt-[40px]">
        {/* Left column content */}
        <div className="max-w-[520px] md:max-w-[460px] lg:max-w-[480px]">
          <h2 className="font-display text-[36px] font-bold leading-[1.1] text-navy sm:text-[44px] lg:text-[52px]">
            Who we are
          </h2>

          <p className="mt-[10px] font-display text-[18px] font-bold leading-[1.3] text-brand sm:text-[20px] lg:mt-[14px] lg:text-[23px]">
            Powering Homes and Businesses
            <br />
            with Clean Energy
          </p>

          {/* Divider */}
          <div className="mt-[14px] h-[3px] w-[40px] rounded-full bg-navy lg:mt-[18px] lg:h-[4px] lg:w-[50px]" />

          {/* Points */}
          <div className="mt-[18px] space-y-[0px] lg:mt-[22px] lg:space-y-[0px] [text-shadow:0_0_8px_rgba(255,255,255,0.9),0_0_16px_rgba(255,255,255,0.7)]">
            {points.map(({ logo, text }, i) => (
              <div key={text.slice(0, 30)}>
                {i > 0 && (
                  <div className="ml-[68px] h-px bg-navy/15 lg:ml-[80px]" />
                )}
                <div className="flex items-start gap-[14px] py-[12px] lg:gap-[18px] lg:py-[14px]">
                  <span className="relative flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-navy overflow-hidden lg:h-[62px] lg:w-[62px] [text-shadow:none]">
                    <Image
                      src={logo}
                      alt=""
                      width={62}
                      height={62}
                      className="h-full w-full object-cover"
                      unoptimized
                    />
                  </span>
                  <p className="text-[14px] leading-[1.45] text-navy/90 lg:text-[15px]">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA button — bottom right */}
        <div className="mt-[28px] flex w-full justify-end lg:mt-auto">
          <Link
            href="#contact"
            className="inline-flex h-[50px] items-center gap-[11px] rounded-[10px] bg-brand-btn px-[20px] text-[16px] font-medium text-white shadow-[0_8px_20px_rgba(15,26,51,0.2)] transition-colors hover:bg-brand-btn-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-btn lg:h-[56px] lg:gap-[13px] lg:px-[24px] lg:text-[18px]"
          >
            <CalendarCheck className="h-[19px] w-[19px] lg:h-[22px] lg:w-[22px]" />
            Schedule a free consultation
          </Link>
        </div>
      </div>

      {/* ---------- Benefits bar — full width ---------- */}
      <div className="relative z-10 w-full bg-navy">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ Icon, title, sub }) => (
            <div
              key={title}
              className="relative flex items-center gap-[14px] px-[20px] py-[14px] lg:gap-[18px] lg:px-[22px] lg:py-[18px] lg:before:absolute lg:before:inset-y-[14px] lg:before:left-0 lg:before:w-px lg:before:bg-white/20 lg:first:before:hidden"
            >
              <Icon className="h-[36px] w-[36px] shrink-0 text-brand-leaf lg:h-[42px] lg:w-[42px]" />
              <span className="block">
                <span className="block text-[14px] font-semibold leading-[1.3] text-white lg:text-[16px]">
                  {title}
                </span>
                <span className="block text-[12px] leading-[1.3] text-white/70 lg:text-[13px]">
                  {sub}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
