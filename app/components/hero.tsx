"use client";

import Image from "next/image";
import Link from "next/link";
import Avatar from "@/public/avatar/dera.avif";
import ButtonLink from "./button-link";
import { useLanguage } from "../i18n/language-context";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-140px] top-[-160px] h-[340px] w-[340px] rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute right-[-180px] bottom-[-160px] h-[360px] w-[360px] rounded-full bg-blue-500/20 blur-3xl" />
      </div>
      <div className="container relative flex flex-col items-center text-center gap-10 py-24 lg:py-40">
        <div className="max-w-4xl flex flex-col items-center gap-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-200">
            {t.hero.badge}
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            {t.hero.title.part1}{" "}
            <span className="pink__gradient">{t.hero.title.highlight}</span>{" "}
            {t.hero.title.part2}
          </h1>
          <p className="max-w-2xl text-lg lg:text-xl leading-relaxed text-[#C2C2C2]">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <ButtonLink href="#contact">{t.hero.cta}</ButtonLink>
            <Link
              href="#projects"
              className="text-sm font-semibold text-neutral-100 underline decoration-white/40 underline-offset-8 transition-colors hover:text-pink-300"
            >
              {t.hero.viewWork}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
