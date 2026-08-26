import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  Mail,
  Phone,
  MapPin,
  Clock,
  Calendar,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative isolate w-full flex flex-col overflow-hidden lg:min-h-[calc(100svh_-_92px)]">
      {/* Background image */}
      <Image
        src="/contact/background2.png"
        alt="Khors Renewables customer support representative"
        fill
        sizes="100vw"
        className="-z-20 object-cover object-[center_bottom]"
        priority
      />

      {/* Wash for readability on phones and tablets */}
      <div className="absolute inset-0 -z-10 bg-white/75 backdrop-blur-[3px] lg:hidden" />
      {/* Desktop gradient overlay */}
      <div className="absolute inset-0 -z-10 hidden bg-[linear-gradient(to_right,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.85)_30%,rgba(255,255,255,0.3)_55%,rgba(255,255,255,0)_68%)] lg:block" />

      {/* Main content */}
      <div className="relative flex w-full flex-1 flex-col justify-center px-5 py-[32px] sm:px-8 lg:px-[80px] lg:py-[48px]">
        {/* Heading row — the tagline sits on the same line as the heading */}
        <div className="flex w-full items-start gap-[36px] lg:gap-[70px]">
          <h2 className="w-full font-display text-[30px] font-bold leading-[1.08] text-navy sm:text-[44px] md:max-w-[460px] lg:max-w-[500px] lg:text-[54px]">
            Connect with us
          </h2>

          {/* Tagline — aligned with the heading, hidden on phones */}
          <div className="hidden min-w-0 flex-1 text-left [text-shadow:0_0_12px_rgba(255,255,255,0.9),0_0_24px_rgba(255,255,255,0.7)] md:block">
            <p className="font-display text-[20px] font-bold uppercase leading-[1.3] text-navy lg:text-[26px]">
              Clean Energy.
            </p>
            <p className="font-display text-[20px] font-bold uppercase leading-[1.3] text-navy lg:text-[26px]">
              Lower Bills.
            </p>
            <p className="font-display text-[20px] font-bold uppercase leading-[1.3] text-brand lg:text-[26px]">
              Better Tomorrow.
            </p>
          </div>
        </div>

        {/* Remaining content, constrained to the left column width */}
        <div className="flex w-full flex-col md:max-w-[460px] lg:max-w-[500px]">
          {/* Tagline — shown inline on phones where the image version is cropped out */}
          <div className="mt-[12px] md:hidden">
            <p className="font-display text-[15px] font-bold uppercase leading-[1.35] text-navy">
              Clean Energy. Lower Bills.
            </p>
            <p className="font-display text-[15px] font-bold uppercase leading-[1.35] text-brand">
              Better Tomorrow.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="#contact"
            className="mt-[18px] inline-flex h-[48px] w-full items-center justify-center gap-[10px] rounded-[8px] border-2 border-brand-btn bg-transparent px-[18px] text-[14px] font-bold text-brand-btn transition-colors hover:bg-brand-btn hover:text-white sm:w-fit sm:text-[15px] lg:mt-[22px] lg:h-[52px] lg:gap-[12px] lg:px-[22px] lg:text-[17px]"
          >
            <CalendarCheck className="h-[18px] w-[18px] lg:h-[20px] lg:w-[20px]" />
            Schedule a free consultation
          </Link>

          {/* Contact Information card */}
          <div className="mt-[28px] rounded-[14px] border border-navy/10 bg-white/80 px-[20px] py-[18px] backdrop-blur-sm lg:mt-[34px] lg:px-[24px] lg:py-[22px]">
            <div className="flex items-center gap-[12px]">
              <span className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-brand/10 lg:h-[50px] lg:w-[50px]">
                <Mail className="h-[22px] w-[22px] text-brand lg:h-[26px] lg:w-[26px]" />
              </span>
              <h3 className="text-[17px] font-bold text-navy lg:text-[20px]">Contact Information</h3>
            </div>

            <div className="mt-[14px] space-y-[10px] lg:mt-[16px] lg:space-y-[12px]">
              <div className="flex min-w-0 items-center gap-[10px]">
                <Mail className="h-[16px] w-[16px] shrink-0 text-navy/60 lg:h-[18px] lg:w-[18px]" />
                <a
                  href="mailto:info@khorsrenewables.com"
                  className="min-w-0 break-all text-[13.5px] font-semibold text-navy transition-colors hover:text-brand sm:text-[14px] lg:text-[16px]"
                >
                  info@khorsrenewables.com
                </a>
              </div>
              <div className="flex min-w-0 items-center gap-[10px]">
                <Phone className="h-[16px] w-[16px] shrink-0 text-navy/60 lg:h-[18px] lg:w-[18px]" />
                <a
                  href="tel:+919844515676"
                  className="text-[13.5px] font-semibold text-navy transition-colors hover:text-brand sm:text-[14px] lg:text-[16px]"
                >
                  +91 9844515676
                </a>
              </div>
              <div className="flex items-start gap-[10px]">
                <MapPin className="mt-[2px] h-[16px] w-[16px] shrink-0 text-navy/60 lg:h-[18px] lg:w-[18px]" />
                <span className="text-[13.5px] font-semibold leading-[1.4] text-navy sm:text-[14px] lg:text-[16px]">
                  #5A, Taramani Link Road, Baby Nagar,
                  <br className="hidden sm:block" /> Velachery, Chennai, Tamil
                  Nadu – 600042
                </span>
              </div>
            </div>
          </div>

          {/* Business Hours card */}
          <div className="mt-[16px] rounded-[14px] border border-navy/10 bg-white/80 px-[20px] py-[18px] backdrop-blur-sm lg:mt-[18px] lg:px-[24px] lg:py-[22px]">
            <div className="flex items-center gap-[12px]">
              <span className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-brand/10 lg:h-[50px] lg:w-[50px]">
                <Clock className="h-[22px] w-[22px] text-brand lg:h-[26px] lg:w-[26px]" />
              </span>
              <h3 className="text-[17px] font-bold text-navy lg:text-[20px]">Business Hours</h3>
            </div>

            <div className="mt-[14px] flex items-center gap-[10px] lg:mt-[16px]">
              <Calendar className="h-[16px] w-[16px] shrink-0 text-navy/60 lg:h-[18px] lg:w-[18px]" />
              <span className="text-[14px] font-semibold text-navy lg:text-[16px]">MON–SAT: 10:30 AM – 7:30 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
