import ProjectCard, { Project } from "./project-card";

const projects: Project[] = [
  {
    title: "GourmetGo Delivery Platform",
    description:
      "A responsive food delivery web app with real-time order tracking, optimized for performance and accessibility across devices.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://github.com/Derajatul/gourmetgo",
  },
  {
    title: "PixelCraft Portfolio Builder",
    description:
      "A drag-and-drop portfolio builder for designers to launch pixel-perfect sites without touching code, featuring custom theming.",
    tech: ["React", "Zustand", "Framer Motion"],
    href: "https://github.com/Derajatul/pixelcraft",
  },
  {
    title: "InsightSphere Analytics Dashboard",
    description:
      "An analytics dashboard integrating multiple data sources and presenting insights with interactive charts and automated reporting.",
    tech: ["Next.js", "Supabase", "Recharts"],
    href: "https://github.com/Derajatul/insightsphere",
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
