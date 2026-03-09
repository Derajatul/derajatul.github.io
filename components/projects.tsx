"use client";

import ProjectCard, { Project } from "./project-card";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations();

  return (
    <section
      id="projects"
      className="container mb-28 flex flex-col gap-10 mx-auto"
    >
      <header>
        <p className="text-sm uppercase tracking-[0.35em] text-pink-300">
          {t("projects.badge")}
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold">
          {t("projects.title.part1")}
          <span className="pink__gradient">
            {t("projects.title.highlight")}
          </span>
          {t("projects.title.part2")}
        </h2>
        <p className="mt-4 max-w-2xl text-[#979797]">
          {t("projects.description")}
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {(t.raw("projects.items") as Project[]).map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
