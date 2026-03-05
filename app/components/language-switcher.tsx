"use client";

import { useLanguage } from "../i18n/language-context";
import { Locale, localeNames } from "../i18n/locales";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const toggleLocale = () => {
    const newLocale: Locale = locale === "en" ? "id" : "en";
    setLocale(newLocale);
  };

  return (
    <button
      onClick={toggleLocale}
      className="group relative flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-neutral-200 transition-all hover:border-white/20 hover:bg-white/10"
      aria-label="Switch language"
    >
      {/* Globe Icon */}
      <svg
        className="h-4 w-4 text-neutral-400 transition-colors group-hover:text-neutral-200"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>

      {/* Language Code */}
      <span className="uppercase">{locale}</span>

      {/* Tooltip */}
      <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-neutral-900 px-3 py-1.5 text-xs opacity-0 transition-opacity group-hover:opacity-100">
        {locale === "en" ? "Switch to Bahasa Indonesia" : "Ganti ke English"}
      </span>
    </button>
  );
}
