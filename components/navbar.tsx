"use client";

import React, { useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./language-switcher";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const isOpenRef = useRef(isOpen);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDistance = currentScrollY - lastScrollY.current;

      if (currentScrollY < 40 || isOpenRef.current) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
      } else if (scrollDistance > 8) {
        setIsVisible(false);
        lastScrollY.current = currentScrollY;
      } else if (scrollDistance < -8) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#projects", label: t("nav.projects") },
    { href: "#github", label: t("nav.github") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-transform duration-300 ease-out sm:p-6",
        isVisible ? "translate-y-0" : "pointer-events-none -translate-y-full",
      )}
    >
      <nav
        className={cn(
          "bg__nav w-full max-w-7xl rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md transition-all duration-300",
          isOpen ? "rounded-b-none" : "",
        )}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-xl tracking-tighter text-white"
            onClick={() => setIsOpen(false)}
          >
            DERA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6 items-center text-xs uppercase tracking-[0.2em] font-medium text-[#979797]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="h-4 w-[1px] bg-white/10" />
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-white/5 bg-black/80 backdrop-blur-xl rounded-b-2xl",
            isOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none",
          )}
        >
          <div className="flex flex-col gap-4 p-6 items-center text-sm uppercase tracking-[0.2em] font-medium text-[#979797]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="w-full h-[1px] bg-white/5 my-2" />
            <div onClick={() => setIsOpen(false)}>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
