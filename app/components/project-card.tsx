import Image from "next/image";
import Link from "next/link";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  href?: string;
  image?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  href,
  image,
}: Project) {
  const CardContent = (
    <article className="glass p-6 flex flex-col h-full relative overflow-hidden group cursor-pointer">
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-semibold leading-tight pr-8">{title}</h3>
          {href && (
            <div className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-pink-300"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          )}
        </div>
        <p className="text-[#979797] leading-relaxed mb-4">{description}</p>
        <ul className="flex flex-wrap gap-2 mb-6">
          {tech.map((item) => (
            <li
              key={item}
              className="text-[10px] uppercase tracking-wider text-neutral-300 bg-white/5 border border-white/10 rounded-full px-2.5 py-1"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {image && (
        <div className="mt-auto relative h-[180px] w-full pointer-events-none">
          <div className="absolute -right-20 -bottom-16 w-[125%] h-[260px] rotate-[-7deg] transform group-hover:rotate-[-4deg] group-hover:-translate-x-3 group-hover:-translate-y-3 transition-all duration-500 group-hover:scale-105">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-2xl border-4 border-white/10 shadow-2xl"
            />
          </div>
        </div>
      )}
    </article>
  );

  if (href) {
    return (
      <Link href={href} target="_blank" className="block h-full group">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}
