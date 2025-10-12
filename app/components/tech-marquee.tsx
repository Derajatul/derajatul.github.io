"use client";
import Marquee from "react-fast-marquee";
import Badge from "./badge";

const technologyData = [
  {
    logo: "/icons/nextjs.svg",
    title: "NextJS",
    href: "https://nextjs.org/",
    tagline: "Lightning-fast pages that rank well and feel instant.",
  },
  {
    logo: "/icons/react.svg",
    title: "React",
    href: "https://react.dev/",
    tagline: "Reusable components for smooth product flows.",
  },
  {
    logo: "/icons/tailwindcss.svg",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    tagline: "Consistent design without slowing down delivery.",
  },

  {
    logo: "/icons/typescript.svg",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    tagline: "Fewer surprises thanks to typed, reliable code.",
  },
];

export default function TechMarquee({
  direction,
}: {
  direction: "left" | "right";
}) {
  return (
    <Marquee
      autoFill
      className="mb-4"
      direction={direction}
      gradientColor="#000000"
      pauseOnHover
      speed={24}
    >
      <div className="flex items-center">
        {technologyData.map((tech) => (
          <Badge
            key={tech.title}
            title={tech.title}
            href={tech.href}
            logo={tech.logo}
            tagline={tech.tagline}
          />
        ))}
      </div>
    </Marquee>
  );
}
