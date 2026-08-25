import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Sprout,
  Factory,
  ShieldCheck,
  Settings,
  TrendingUp,
  Globe,
  CalendarCheck,
} from "lucide-react";

const bullets = [
  {
    Icon: Zap,
    title: "Save more on bills.",
    sub: "Use that money for what matters.",
  },
  {
    Icon: Sprout,
    title: "Save the planet",
    sub: "for generations to come.",
  },
  {
    Icon: Factory,
    title: "Reduce carbon emissions today.",
    sub: "Build a cleaner tomorrow.",
  },
];

const trust = [
  { Icon: ShieldCheck, title: "High Quality", sub: "Solar Solutions" },
  { Icon: Settings, title: "Expert Installation", sub: "& Support" },
  { Icon: TrendingUp, title: "Maximum Savings", sub: "Guaranteed" },
  { Icon: Globe, title: "A Greener Planet", sub: "for Our Future" },
];

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[740px] w-full flex-col overflow-hidden sm:min-h-[820px] lg:min-h-[calc(100svh_-_92px)]">
      {/* Background photo */}
      <Image
        src="/hero/background.png"
        alt="Solar technician standing above a city neighbourhood of rooftop solar homes"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[68%_70%] md:object-[center_70%]"
      />

      {/* White wash so the copy stays legible over the photo */}
      <div className="absolute inset-0 -z-10 bg-white/60 backdrop-blur-[3px] md:hidden" />
      <div className="absolute inset-0 -z-10 hidden bg-[linear-gradient(to_right,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.66)_24%,rgba(255,255,255,0.18)_50%,rgba(255,255,255,0)_66%)] md:block" />

      <div className="relative flex w-full max-w-[1440px] flex-1 flex-col justify-between px-5 pb-6 pt-6 sm:px-8 sm:pt-8 lg:px-[100px] lg:pb-[22px] lg:pt-[32px]">


        {/* ---------- Left column ---------- */}
        <div className="max-w-[700px] md:max-w-[780px] lg:max-w-[900px] [text-shadow:0_0_10px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.6)]">
          <h1 className="font-display font-bold tracking-[-0.015em] text-navy">
            <span className="block whitespace-nowrap text-[38px] leading-[1.14] sm:text-[49px] lg:text-[61px]">
              Cut your electricity bills
            </span>
            <span className="block text-[38px] leading-[1.14] sm:text-[49px] lg:text-[61px]">
              by up to{" "}
              <span className="text-[43px] leading-none text-brand sm:text-[56px] lg:text-[74px]">
                95%.
              </span>
            </span>
          </h1>

          {/* Benefit rows */}
          <div className="mt-[20px] max-w-[460px] lg:mt-[23px]">
            {bullets.map(({ Icon, title, sub }, i) => (
              <div key={title}>
                {i > 0 && (
                  <div className="ml-[70px] my-[8px] h-px bg-navy/20 lg:ml-[86px] lg:my-[10px]" />
                )}
                <div className="flex min-h-[47px] items-center gap-[20px] lg:min-h-[59px] lg:gap-[25px]">
                  <span className="flex h-[47px] w-[47px] shrink-0 items-center justify-center rounded-full bg-navy text-white lg:h-[59px] lg:w-[59px]">
                    <Icon className="h-[24px] w-[24px] lg:h-[28px] lg:w-[28px]" />
                  </span>
                  <span className="block">
                    <span className="block text-[18px] font-semibold leading-[1.35] text-navy lg:text-[23px]">
                      {title}
                    </span>
                    <span className="block text-[18px] leading-[1.35] text-navy/90 lg:text-[23px]">
                      {sub}
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Short rule */}
          <div className="mt-[22px] h-[3px] w-[36px] rounded-full bg-navy lg:mt-[27px] lg:h-[4px] lg:w-[45px]" />

          <p className="mt-[12px] font-display text-[22px] font-bold leading-[1.38] text-navy lg:mt-[14px] lg:text-[30px]">
            Your choice today powers a better
            <br />
            tomorrow for{" "}
            <span className="text-brand">you and the planet.</span>
          </p>

          <Link
            href="#contact"
            className="mt-[16px] inline-flex h-[50px] items-center gap-[11px] rounded-[10px] bg-brand-btn px-[20px] text-[16px] font-medium text-white shadow-[0_8px_20px_rgba(15,26,51,0.2)] transition-colors hover:bg-brand-btn-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-btn lg:mt-[18px] lg:h-[59px] lg:gap-[13px] lg:px-[27px] lg:text-[20px] [text-shadow:none]"
          >
            <CalendarCheck className="h-[19px] w-[19px] lg:h-[22px] lg:w-[22px]" />
            Schedule a free consultation
          </Link>
        </div>
      </div>

      {/* ---------- Trust bar — full width ---------- */}
      <div className="relative z-10 mb-[10px] ml-[10px] mr-[10px] rounded-[14px] bg-white shadow-[0_-4px_34px_rgba(15,26,51,0.12)] sm:ml-8 lg:ml-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map(({ Icon, title, sub }) => (
            <div
              key={title}
              className="relative flex items-center justify-center gap-[18px] px-[22px] py-[16px] lg:gap-[24px] lg:px-[26px] lg:py-[21px] lg:before:absolute lg:before:inset-y-[16px] lg:before:left-0 lg:before:w-px lg:before:bg-navy/15 lg:first:before:hidden"
            >
              <Icon className="h-[38px] w-[38px] shrink-0 text-navy lg:h-[47px] lg:w-[47px]" />
              <span className="block">
                <span className="block text-[15px] font-semibold leading-[1.3] text-navy lg:text-[20px]">
                  {title}
                </span>
                <span className="block text-[15px] leading-[1.3] text-navy/65 lg:text-[20px]">
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
