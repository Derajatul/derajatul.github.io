"use client";
import TechMarquee from "./tech-marquee";
import { useTranslations } from "next-intl";

export default function Technology() {
  const t = useTranslations();
  return (
    <section className="container mb-28 mx-auto">
      <h2 className="text-4xl lg:text-5xl font-bold mb-4">
        {t("technology.title")}
      </h2>
      <p className="max-w-3xl text-lg text-[#B8B8B8] mb-10">
        {t("technology.subtitle")}
      </p>
      <TechMarquee direction="right" />
    </section>
  );
}
