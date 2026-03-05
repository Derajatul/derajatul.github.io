import { en } from "./en";
import { id } from "./id";

export const locales = {
  en,
  id,
} as const;

export type Locale = keyof typeof locales;

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  id: "Bahasa Indonesia",
};
