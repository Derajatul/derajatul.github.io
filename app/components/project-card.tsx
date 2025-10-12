import Link from "next/link";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  href?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  href,
}: Project) {
  return (
    <article className="glass p-6 flex flex-col gap-4">
      <div>
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-[#979797] leading-relaxed">{description}</p>
      </div>
      <ul className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <li
            key={item}
            className="text-sm uppercase tracking-wide text-neutral-200 bg-white/5 border border-white/10 rounded-full px-3 py-1"
          >
            {item}
          </li>
        ))}
      </ul>
      {href ? (
        <Link
          href={href}
          target="_blank"
          className="self-start text-sm font-medium text-neutral-100 underline underline-offset-4 hover:text-pink-300 transition-colors"
        >
          View project ↗
        </Link>
      ) : null}
    </article>
  );
}
