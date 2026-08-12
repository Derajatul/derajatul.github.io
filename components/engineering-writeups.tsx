import { ArrowUpRight, BookOpenText, Clock3 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

type Writeup = {
  slug: string;
  category: string;
  title: string;
  description: string;
  readTime: string;
  topics: string[];
};

export default function EngineeringWriteups() {
  const t = useTranslations("writeups");
  const writeups = t.raw("items") as Writeup[];

  return (
    <section id="writeups" className="container mx-auto mb-28 scroll-mt-28">
      <header className="mb-10 max-w-3xl">
        <div className="mb-3 flex items-center gap-2 text-sm uppercase tracking-[0.35em] text-pink-300">
          <BookOpenText className="size-4" aria-hidden="true" />
          <p>{t("badge")}</p>
        </div>
        <h2 className="text-4xl font-bold lg:text-5xl">{t("title")}</h2>
        <p className="mt-4 text-lg text-neutral-400">{t("subtitle")}</p>
      </header>

      <div className="grid gap-5 lg:grid-cols-3">
        {writeups.map((writeup, index) => (
          <article
            key={writeup.slug}
            className="glass group flex min-h-[340px] flex-col p-6 transition-transform duration-300 hover:-translate-y-1 md:p-8"
          >
            <div className="mb-8 flex items-start justify-between gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-300">
                {writeup.category}
              </span>
              <span className="font-mono text-sm text-neutral-600">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="text-xl font-semibold leading-snug text-white md:text-2xl">
              {writeup.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-neutral-400">
              {writeup.description}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label={t("topicsLabel")}>
              {writeup.topics.map((topic) => (
                <li
                  key={topic}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-neutral-300"
                >
                  {topic}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex items-end justify-between gap-4 pt-8">
              <span className="flex items-center gap-1.5 text-xs text-neutral-500">
                <Clock3 className="size-3.5" aria-hidden="true" />
                {writeup.readTime}
              </span>
              <Link
                href={`/projects/${writeup.slug}`}
                aria-label={`${t("readArticle")}: ${writeup.title}`}
                className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors group-hover:border-pink-300/50 group-hover:bg-pink-300 group-hover:text-black"
              >
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
