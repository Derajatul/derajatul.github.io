"use client";
import React, { useEffect, useState } from "react";
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
    logo: "/icons/typescript.svg",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    tagline: "Fewer surprises thanks to typed, reliable code.",
  },
  {
    logo: "/icons/nodejs.svg",
    title: "Node.js",
    href: "https://nodejs.org/",
    tagline: "High-performance server-side JavaScript runtime.",
  },
  {
    logo: "/icons/express.svg",
    title: "Express",
    href: "https://expressjs.com/",
    tagline: "Fast, unopinionated, minimalist web framework.",
  },
  {
    logo: "/icons/prisma.svg",
    title: "Prisma",
    href: "https://www.prisma.io/",
    tagline: "Next-generation Node.js and TypeScript ORM.",
  },
  {
    logo: "/icons/postgres.svg",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    tagline: "The world's most advanced open source database.",
  },
  {
    logo: "/icons/tailwindcss.svg",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    tagline: "Consistent design without slowing down delivery.",
  },
  {
    logo: "/icons/figma.svg",
    title: "Figma",
    href: "https://www.figma.com/",
    tagline: "Collaborative interface design for modern teams.",
  },
  {
    logo: "/icons/vscode.svg",
    title: "VS Code",
    href: "https://code.visualstudio.com/",
    tagline: "Powerful code editor for efficient development.",
  },
  {
    logo: "/icons/git.svg",
    title: "Git",
    href: "https://git-scm.com/",
    tagline: "Distributed version control for seamless collaboration.",
  },
  {
    logo: "/icons/vercel.svg",
    title: "Vercel",
    href: "https://vercel.com/",
    tagline: "The platform for frontend developers to ship fast.",
  },
];

export default function TechMarquee({
  direction,
}: {
  direction: "left" | "right";
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-16 md:h-[125.6px] mb-4 overflow-hidden flex items-center">
        <div className="flex gap-4 pr-4">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="glass w-16 h-16 md:w-[200px] md:h-[125.6px] flex-shrink-0 animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <Marquee
      autoFill
      className="mb-4"
      direction={direction}
      gradient={true}
      gradientColor="#000000"
      pauseOnHover
      speed={30}
    >
      <div className="flex gap-4 pr-4 items-center">
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
