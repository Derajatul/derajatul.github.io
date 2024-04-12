import Marquee from "react-fast-marquee";
import Badge from "./badge";

const technologyData = [
  {
    logo: "/icons/nextjs.svg",
    title: "NextJS",
    href: "https://nextjs.org/",
  },
  {
    logo: "/icons/react.svg",
    title: "React",
    href: "https://react.dev/",
  },
  {
    logo: "/icons/tailwindcss.svg",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
  },

  {
    logo: "/icons/typescript.svg",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
  },
];

export default function TechMarquee({
  direction,
}: {
  direction: "left" | "right";
}) {
  return (
    <Marquee
      autoFill={true}
      className="mb-4"
      direction={direction}
      gradient={true}
      gradientColor="#000000"
    >
      <div className="flex items-center">
        {technologyData.map((v) => (
          <Badge key={v.title} title={v.title} href={v.href} logo={v.logo} />
        ))}
      </div>
    </Marquee>
  );
}
