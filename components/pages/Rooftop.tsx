import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  SearchCheck,
  PencilRuler,
  FileCheck2,
  HardHat,
  BarChart3,
  HeadsetIcon,
  IndianRupee,
  TrendingUp,
  ShieldCheck,
  Leaf,
} from "lucide-react";

const steps = [
  {
    Icon: SearchCheck,
    number: 1,
    title: "Site Assessment & Consultation",
    desc: "We evaluate your rooftop suitability, energy needs and savings potential.",
  },
  {
    Icon: PencilRuler,
    number: 2,
    title: "Custom System Design",
    desc: "Our experts design a custom solar system maximizing efficiency and savings.",
  },
  {
    Icon: FileCheck2,
    number: 3,
    title: "Approvals & Documentation",
    desc: "We handle all approvals, net metering and documentation for a hassle-free process.",
  },
  {
    Icon: HardHat,
    number: 4,
    title: "Professional Installation",
    desc: "Our certified team ensures safe, high-quality installation using premium components.",
  },
  {
    Icon: BarChart3,
    number: 5,
    title: "System Testing & Commissioning",
    desc: "We test and commission your system to ensure optimal performance and safety.",
  },
  {
    Icon: HeadsetIcon,
    number: 6,
    title: "Monitoring & After-Sales Support",
    desc: "Real-time monitoring and dedicated support for continuous performance and peace of mind.",
  },
];

const benefits = [
  {
    Icon: IndianRupee,
    title: "Reduce Electricity Bills",
    sub: "Save up to 95% on your electricity bills.",
  },
  {
    Icon: TrendingUp,
    title: "High ROI",
    sub: "Enjoy attractive returns on your investment.",
  },
  {
    Icon: ShieldCheck,
    title: "25+ Years Performance",
    sub: "Long-lasting systems with strong warranties.",
  },
  {
    Icon: Leaf,
    title: "Clean & Green Energy",
    sub: "Contribute to a sustainable and greener tomorrow.",
  },
];

export default function Rooftop() {
  return (
    <section className="w-full">
      {/* Hero area — content left, image right */}
      <div className="relative w-full overflow-hidden bg-white lg:min-h-[440px]">
        <div className="flex w-full flex-col lg:flex-row">
          {/* Left content */}
          <div className="flex flex-1 flex-col justify-center px-5 py-8 sm:px-8 lg:max-w-[50%] lg:px-[100px] lg:py-[40px]">
            <div className="max-w-[480px]">
              <h2 className="font-display text-[36px] font-bold leading-[1.1] text-navy sm:text-[44px] lg:text-[52px]">
                Rooftop Solar
                <br />
                <span className="text-brand">Solutions</span>
              </h2>

              {/* Divider */}
              <div className="mt-[14px] h-[3px] w-[40px] rounded-full bg-navy lg:mt-[18px] lg:h-[4px] lg:w-[50px]" />

              <p className="mt-[16px] text-[15px] leading-[1.5] text-navy/80 lg:mt-[20px] lg:text-[17px]">
                Smart, Sustainable, Savings for a lifetime.
                <br />
                Power your home or business with clean solar energy.
              </p>

              <Link
                href="#contact"
                className="mt-[22px] inline-flex h-[50px] items-center gap-[11px] rounded-[10px] bg-brand-btn px-[20px] text-[16px] font-medium text-white shadow-[0_8px_20px_rgba(15,26,51,0.2)] transition-colors hover:bg-brand-btn-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-btn lg:mt-[28px] lg:h-[56px] lg:gap-[13px] lg:px-[24px] lg:text-[18px]"
              >
                <CalendarCheck className="h-[19px] w-[19px] lg:h-[22px] lg:w-[22px]" />
                Schedule a free consultation
              </Link>
            </div>
          </div>

          {/* Right image */}
          <div className="relative min-h-[260px] w-full lg:min-h-[440px] lg:w-[50%]">
            <Image
              src="/rooftop/house.png"
              alt="House with rooftop solar panels"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
            {/* Fade edges */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,white_0%,transparent_20%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,white_0%,transparent_15%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,white_0%,transparent_15%)]" />
          </div>
        </div>
      </div>

      {/* Services grid */}
      <div className="w-full bg-white px-5 py-[24px] sm:px-8 lg:px-[40px] lg:py-[36px]">
        <div className="w-full text-center">
          <h3 className="font-display text-[26px] font-bold text-navy sm:text-[30px] lg:text-[36px]">
            Our Rooftop Solar Services
          </h3>
          <p className="mt-[6px] text-[14px] text-navy/70 lg:text-[16px]">
            Complete solutions tailored to your energy needs.
          </p>

          <div className="mt-[20px] grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:mt-[28px] lg:grid-cols-3 xl:grid-cols-6 xl:gap-[10px]">
            {steps.map(({ Icon, number, title, desc }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center"
              >
                <span className="flex h-[56px] w-[56px] items-center justify-center rounded-[12px] border-2 border-navy/20 text-navy lg:h-[64px] lg:w-[64px]">
                  <Icon className="h-[28px] w-[28px] lg:h-[32px] lg:w-[32px]" />
                </span>
                <h4 className="mt-[12px] text-[14px] font-bold leading-[1.3] text-navy lg:mt-[16px] lg:text-[15px]">
                  {number}. {title}
                </h4>
                <p className="mt-[6px] text-[12px] leading-[1.4] text-navy/70 lg:text-[13px]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- Benefits bar ---------- */}
      <div className="w-full bg-white shadow-[0_4px_24px_rgba(15,26,51,0.1)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ Icon, title, sub }) => (
            <div
              key={title}
              className="relative flex items-center gap-[14px] px-[20px] py-[20px] lg:gap-[18px] lg:px-[28px] lg:py-[26px] lg:before:absolute lg:before:inset-y-[16px] lg:before:left-0 lg:before:w-px lg:before:bg-navy/10 lg:first:before:hidden"
            >
              <Icon className="h-[36px] w-[36px] shrink-0 text-brand lg:h-[42px] lg:w-[42px]" />
              <span className="block">
                <span className="block text-[14px] font-semibold leading-[1.3] text-navy lg:text-[16px]">
                  {title}
                </span>
                <span className="block text-[12px] leading-[1.3] text-navy/60 lg:text-[13px]">
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
