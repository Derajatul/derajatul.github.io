"use client";
import TechMarquee from "./tech-marquee";
import { useLanguage } from "../app/i18n/language-context";

export default function Technology() {
  const { t } = useLanguage();
  return (
    <section className="container mb-28">
      <h2 className="text-4xl lg:text-5xl font-bold mb-4">
        {t.technology.title}
      </h2>
      <p className="max-w-3xl text-lg text-[#B8B8B8] mb-10">
        {t.technology.subtitle}
      </p>
      <TechMarquee direction="right" />
    </section>
  );
}
