import Image from "next/image";

const stackGroups = [
  {
    title: "FE",
    stacks: [
      { name: "React", logo: "/icons/react.svg" },
      { name: "Next.js", logo: "/icons/nextjs.svg" },
      { name: "Tailwind CSS", logo: "/icons/tailwindcss.svg" },
      { name: "TypeScript", logo: "/icons/typescript.svg" },
    ],
  },
  {
    title: "BE",
    stacks: [
      { name: "Node.js", logo: "/icons/nodejs.svg" },
      { name: "Express", logo: "/icons/express.svg" },
      { name: "Prisma", logo: "/icons/prisma.svg" },
    ],
  },
  {
    title: "Infra",
    stacks: [
      { name: "Docker", logo: "/icons/docker.svg" },
      { name: "PostgreSQL", logo: "/icons/postgres.svg" },
    ],
  },
  {
    title: "Testing",
    stacks: [
      { name: "vitest", logo: "/icons/vitest.svg" },
    ],
  },
];

export default function TechMarquee() {
  return (
    <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
      {stackGroups.map((group) => (
        <div key={group.title}>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
            {group.title}
          </h3>
          <ul className="flex flex-wrap gap-3" aria-label={`${group.title} stack`}>
            {group.stacks.map((stack) => (
              <li key={stack.name}>
                <div
                  title={stack.name}
                  className="glass flex size-16 items-center justify-center transition-transform duration-200 hover:-translate-y-1 md:size-[72px]"
                >
                  <Image
                    src={stack.logo}
                    alt={stack.name}
                    width={40}
                    height={40}
                    className="size-9 object-contain md:size-10"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
