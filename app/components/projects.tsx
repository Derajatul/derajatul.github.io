import ProjectCard, { Project } from "./project-card";

const projects: Project[] = [
  {
    title: "BCA - Promo",
    description:
      "A dynamic promotional website for Bank Central Asia (BCA) showcasing current offers and services with a focus on user engagement and conversion.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://promo.bca.co.id/",
  },
  {
    title: "BCA - Ocean",
    description:
      "Ocean by BCA connects businesses with banking, operational, and industry network ecosystems.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://ocean.bca.co.id/",
  },
  {
    title: "BCA - Piala Presiden",
    description:
      "Piala Presiden esport 2023 is a premier esports tournament in Indonesia, showcasing top-tier competitive gaming talent across the nation.",
    tech: ["React", "Tailwind"],
    href: "https://www.bca.co.id/id/Campaign/2021/Piala-Presiden",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container mb-28 flex flex-col gap-10">
      <header>
        <p className="text-sm uppercase tracking-[0.35em] text-pink-300">
          Featured Work
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold">
          Showcasing <span className="pink__gradient">Projects</span> that
          deliver results
        </h2>
        <p className="mt-4 max-w-2xl text-[#979797]">
          From immersive marketing sites to data-rich dashboards, here are a few
          highlights from recent collaborations that blend aesthetics and
          engineering discipline.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
