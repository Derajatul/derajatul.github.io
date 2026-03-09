"use client";

import ButtonLink from "./button-link";
import { useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations("contact");
  const mailto =
    "mailto:derajatul@gmail.com?subject=Project%20Inquiry&body=Hi%20Dera,%20I'd%20love%20to%20work%20with%20you%20on...";

  return (
    <section
      id="contact"
      className="container py-24 lg:py-32 flex flex-col gap-16"
    >
      <header className="max-w-3xl flex flex-col gap-6">
        <p className="text-sm uppercase tracking-[0.35em] text-pink-300">
          {t("title")}
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
          {t("subtitle")}
        </h1>
        <p className="text-lg text-[#C2C2C2]">
          Want to chat through scope first? Send a quick email with timelines,
          goals, and any design files. I’ll reply personally within one business
          day.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <ButtonLink href={mailto}>{t("send")}</ButtonLink>
        </div>
      </header>
    </section>
  );
}
