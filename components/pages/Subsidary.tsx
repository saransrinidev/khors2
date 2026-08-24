import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  ClipboardCheck,
  FileText,
  FileSearch,
  Send,
  CheckCircle2,
  Home,
  IndianRupee,
  Compass,
  ThumbsUp,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    Icon: FileSearch,
    title: "Eligibility Analysis",
    desc: "We assess your profile and solar project to identify all eligible incentives.",
  },
  {
    number: "02",
    Icon: FileText,
    title: "Application Support",
    desc: "We assist in preparing and submitting your subsidy applications accurately.",
  },
  {
    number: "03",
    Icon: ClipboardCheck,
    title: "Documentation Review",
    desc: "Our team reviews all documents to ensure accuracy and compliance.",
  },
  {
    number: "04",
    Icon: Send,
    title: "Final Submission",
    desc: "We handle the final submission and follow-up until you receive your approved incentives.",
  },
];

const subsidyTable = [
  { size: "Up to 1 kW", amount: "₹30,000" },
  { size: "2 kW", amount: "₹60,000" },
  { size: "3 kW", amount: "₹78,000" },
];

const benefits = [
  {
    Icon: CheckCircle2,
    title: "Hassle-Free Process",
    sub: "We handle the paperwork, you enjoy the benefits.",
  },
  {
    Icon: IndianRupee,
    title: "Maximum Benefits",
    sub: "We ensure you get every incentive you deserve.",
  },
  {
    Icon: Compass,
    title: "Expert Guidance",
    sub: "Our experts simplify the process from start to finish.",
  },
  {
    Icon: ThumbsUp,
    title: "Trusted by Customers",
    sub: "Happy customers benefiting every day.",
  },
];

export default function Subsidary() {
  return (
    <section className="relative isolate w-full flex flex-col overflow-hidden lg:min-h-[calc(100svh_-_92px)]">
      {/* Background image */}
      <Image
        src="/subsidary7.png"
        alt="Government subsidy benefits for solar installations"
        fill
        sizes="100vw"
        className="-z-20 object-cover object-[center_20%]"
        priority
      />

      {/* Mobile blur overlay */}
      <div className="absolute inset-0 -z-10 bg-white/70 backdrop-blur-[3px] md:hidden" />
      {/* Desktop gradient overlay — left side readable */}
      <div className="absolute inset-0 -z-10 hidden bg-[linear-gradient(to_right,rgba(255,255,255,0.93)_0%,rgba(255,255,255,0.78)_28%,rgba(255,255,255,0.25)_52%,rgba(255,255,255,0)_65%)] md:block" />

      {/* Main content */}
      <div className="relative flex flex-1 w-full px-5 py-[28px] sm:px-8 lg:px-[80px] lg:py-[40px]">
        {/* Left column */}
        <div className="flex flex-col justify-center max-w-[400px] lg:max-w-[440px]">
          <h2 className="font-display text-[34px] font-bold leading-[1.08] text-navy sm:text-[42px] lg:text-[52px]">
            Government
            <br />
            subsidy benefits
          </h2>

          {/* Badge */}
          <div className="mt-[14px] inline-flex w-fit items-center gap-[8px] rounded-[6px] bg-navy px-[12px] py-[7px] lg:mt-[16px] lg:px-[14px] lg:py-[8px]">
            <CheckCircle2 className="h-[16px] w-[16px] text-brand-leaf lg:h-[18px] lg:w-[18px]" />
            <span className="text-[13px] font-semibold text-white lg:text-[15px]">Residential Solar Subsidy</span>
          </div>

          {/* Subheading */}
          <div className="mt-[14px] flex items-center gap-[6px] lg:mt-[16px]">
            <CheckCircle2 className="h-[16px] w-[16px] text-navy lg:h-[18px] lg:w-[18px]" />
            <p className="text-[14px] font-bold text-navy lg:text-[16px]">
              Maximum Savings. <span className="italic">Stronger Future.</span>
            </p>
          </div>

          <p className="mt-[10px] text-[13px] font-bold leading-[1.5] text-navy/80 lg:mt-[12px] lg:text-[15px]">
            We navigate the complex landscape of government incentives to ensure you receive <strong>every rupee</strong> you are entitled to.
          </p>

          {/* Process steps */}
          <div className="mt-[18px] space-y-[12px] lg:mt-[22px] lg:space-y-[14px]">
            {processSteps.map(({ number, Icon, title, desc }) => (
              <div key={number} className="flex items-start gap-[10px] lg:gap-[12px]">
                <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-navy text-[11px] font-bold text-white lg:h-[34px] lg:w-[34px] lg:text-[13px]">
                  {number}
                </span>
                <div className="flex items-start gap-[8px]">
                  <span className="mt-[2px] flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[6px] bg-brand/10 lg:h-[30px] lg:w-[30px]">
                    <Icon className="h-[14px] w-[14px] text-brand lg:h-[16px] lg:w-[16px]" />
                  </span>
                  <div>
                    <h4 className="text-[13px] font-bold text-navy lg:text-[15px]">{title}</h4>
                    <p className="text-[11px] font-bold leading-[1.4] text-navy/70 lg:text-[13px]">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — subsidy table card */}
        <div className="hidden flex-1 items-center justify-center md:flex">
          <div className="w-full max-w-[380px] rounded-[16px] bg-white/95 px-[22px] py-[22px] shadow-[0_8px_30px_rgba(15,26,51,0.14)] backdrop-blur-sm lg:max-w-[420px] lg:px-[28px] lg:py-[28px]">
            <div className="flex items-center gap-[8px]">
              <Home className="h-[18px] w-[18px] text-navy lg:h-[20px] lg:w-[20px]" />
              <h3 className="text-[14px] font-bold uppercase tracking-[0.04em] text-navy lg:text-[16px]">
                Residential Solar Subsidy
              </h3>
            </div>

            {/* Table */}
            <div className="mt-[14px] overflow-hidden rounded-[10px] border border-navy/10">
              <div className="grid grid-cols-2 bg-navy/5 px-[14px] py-[10px]">
                <span className="text-[12px] font-semibold text-navy lg:text-[13px]">System Size</span>
                <span className="text-[12px] font-semibold text-navy lg:text-[13px]">Subsidy Available</span>
              </div>
              {subsidyTable.map(({ size, amount }) => (
                <div key={size} className="grid grid-cols-2 border-t border-navy/10 px-[14px] py-[12px] lg:py-[14px]">
                  <div className="flex items-center gap-[6px]">
                    <Home className="h-[16px] w-[16px] text-brand lg:h-[18px] lg:w-[18px]" />
                    <span className="text-[13px] font-bold text-navy lg:text-[15px]">{size}</span>
                  </div>
                  <div className="flex items-center gap-[4px]">
                    <span className="text-[12px] font-bold text-navy/70 lg:text-[13px]">Up to</span>
                    <span className="text-[18px] font-bold text-navy lg:text-[22px]">{amount}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom note */}
            <div className="mt-[14px] flex items-center gap-[6px]">
              <CheckCircle2 className="h-[14px] w-[14px] text-brand lg:h-[16px] lg:w-[16px]" />
              <p className="text-[12px] font-bold text-navy/80 lg:text-[13px]">
                We make the subsidy process simple, fast & hassle-free.
              </p>
            </div>

            <Link
              href="#contact"
              className="mt-[14px] inline-flex h-[44px] items-center gap-[9px] rounded-[8px] bg-brand-btn px-[16px] text-[14px] font-medium text-white shadow-[0_6px_16px_rgba(15,26,51,0.15)] transition-colors hover:bg-brand-btn-hover lg:mt-[16px] lg:h-[48px] lg:gap-[10px] lg:px-[20px] lg:text-[16px]"
            >
              <CalendarCheck className="h-[16px] w-[16px] lg:h-[18px] lg:w-[18px]" />
              Schedule a free consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Benefits bar — bottom */}
      <div className="relative z-10 mx-[10px] mb-[10px] rounded-[14px] bg-navy shadow-[0_-4px_34px_rgba(15,26,51,0.12)] sm:mx-8 lg:mx-[80px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ Icon, title, sub }) => (
            <div
              key={title}
              className="relative flex items-center gap-[14px] px-[18px] py-[14px] lg:gap-[16px] lg:px-[22px] lg:py-[18px] lg:before:absolute lg:before:inset-y-[14px] lg:before:left-0 lg:before:w-px lg:before:bg-white/20 lg:first:before:hidden"
            >
              <Icon className="h-[32px] w-[32px] shrink-0 text-brand-leaf lg:h-[38px] lg:w-[38px]" />
              <span className="block">
                <span className="block text-[13px] font-semibold leading-[1.3] text-white lg:text-[15px]">
                  {title}
                </span>
                <span className="block text-[11px] font-bold leading-[1.3] text-white/70 lg:text-[13px]">
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
