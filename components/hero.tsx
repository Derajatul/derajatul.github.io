"use client";

// import Image from "next/image";
// import Link from "next/link";
// import Avatar from "@/public/avatar/dera.avif";
// import ButtonLink from "./button-link";
// import { useLanguage } from "../i18n/language-context";

// export default function Hero() {
//   const { t } = useLanguage();

//   return (
//     <section className="">
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute left-[-140px] top-[-160px] h-[340px] w-[340px] rounded-full bg-pink-500/20 blur-3xl" />
//         <div className="absolute right-[-180px] bottom-[-160px] h-[360px] w-[360px] rounded-full bg-blue-500/20 blur-3xl" />
//       </div>
//       <div className="container relative flex flex-col items-center text-center gap-10 py-24 lg:py-40">
//         <div className="max-w-4xl flex flex-col items-center gap-8">
//           <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-200">
//             {t.hero.badge}
//           </span>
//           <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
//             {t.hero.title.part1}{" "}
//             <span className="pink__gradient">{t.hero.title.highlight}</span>{" "}
//             {t.hero.title.part2}
//           </h1>
//           <p className="max-w-2xl text-lg lg:text-xl leading-relaxed text-[#C2C2C2]">
//             {t.hero.description}
//           </p>

//           <div className="flex flex-wrap items-center justify-center gap-6">
//             <ButtonLink href="#contact">{t.hero.cta}</ButtonLink>
//             <Link
//               href="#projects"
//               className="text-sm font-semibold text-neutral-100 underline decoration-white/40 underline-offset-8 transition-colors hover:text-pink-300"
//             >
//               {t.hero.viewWork}
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { useLanguage } from "@/app/i18n/language-context";
import ButtonLink from "./button-link";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <div className="relative flex min-h-screen lg:h-[50rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased items-center justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-70 md:left-60 lg:left-80"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 py-20 md:py-0">
        <h1 className="text-white text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
          {t.hero.title.part1}{" "}
          <span className="pink__gradient">{t.hero.title.highlight}</span>{" "}
          {t.hero.title.part2}
        </h1>
        <p className="mx-auto mb-10 mt-6 max-w-2xl text-center text-base sm:text-lg md:text-xl font-normal text-neutral-300 leading-relaxed">
          {t.hero.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Button size="lg" className="w-full sm:w-auto font-semibold">
            {t.hero.cta}
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto font-semibold"
          >
            {t.hero.viewWork}
          </Button>
        </div>
      </div>
    </div>
  );
}
