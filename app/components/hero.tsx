import Image from "next/image";
import Link from "next/link";
import Avatar from "@/public/avatar/dera.avif";
import ButtonLink from "./button-link";

export default function Hero() {
  return (
    <section className="">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-140px] top-[-160px] h-[340px] w-[340px] rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute right-[-180px] bottom-[-160px] h-[360px] w-[360px] rounded-full bg-blue-500/20 blur-3xl" />
      </div>
      <div className="container relative flex flex-col-reverse lg:flex-row items-center justify-between gap-16 py-24 lg:py-32">
        <div className="flex-1 flex flex-col items-start gap-8 text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-200">
            Solo Frontend Partner
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Build <span className="pink__gradient">polished websites</span> that
            help your business grow.
          </h1>
          <p className="max-w-xl text-lg lg:text-xl leading-relaxed text-[#C2C2C2]">
            I help founders, agencies, and small teams turn their ideas into
            fast, reliable Next.js sites that look great and feel even better to
            use.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink href="#projects">Start a build sprint →</ButtonLink>
            <Link
              href="#projects"
              className="text-sm font-semibold text-neutral-100 underline decoration-white/40 underline-offset-8 transition-colors hover:text-pink-300"
            >
              View recent work
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-[#B1B1B1]">
            <div>
              <p className="text-3xl font-semibold text-neutral-100">48h</p>
              <p>for your first working preview</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-neutral-100">100%</p>
              <p>remote-friendly and async-ready</p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[36px] bg-white/5 blur-3xl" />
            <Image
              src={Avatar}
              alt="Portrait of Derajatul, frontend engineer"
              width={450}
              height={450}
              priority
              className="h-auto w-auto max-w-[420px] rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
