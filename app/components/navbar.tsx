"use client";

import Link from "next/link";
import { useLanguage } from "../i18n/language-context";
import LanguageSwitcher from "./language-switcher";

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <>
      <nav className="flex items-center justify-center">
        <div className="bg__nav fixed top-[0] py-6 bg-black  w-full container text-[#979797] z-50 flex justify-between items-center ">
          <Link href="/">DERA</Link>
          <div className="flex gap-4 items-center text-sm uppercase tracking-[0.3em]">
            <Link
              href="#projects"
              className="hover:text-white transition-colors"
            >
              {t.nav.projects}
            </Link>
            <Link
              href="#contact"
              className="hover:text-white transition-colors"
            >
              {t.nav.contact}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </>
  );
}
