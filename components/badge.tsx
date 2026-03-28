import Image from "next/image";
import Link from "next/link";

type Badge = {
  title: string;
  href: string;
  logo: string;
  tagline?: string;
};

export default function Badge({ title, href, logo, tagline }: Badge) {
  return (
    <Link
      href={href}
      target="_blank"
      className="glass w-16 h-16 md:w-auto md:h-auto md:px-6 md:py-4 md:min-h-[125.6px] leading-4 text-neutral-100 inline-flex items-center justify-center md:items-start md:justify-start gap-0 md:gap-4 text-left transition-transform flex-shrink-0"
    >
      <div className="relative w-8 h-8 md:w-11 md:h-11 flex-shrink-0">
        <Image
          src={logo}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
      <div className="hidden md:flex flex-col gap-1">
        <p className="text-xl font-semibold">{title}</p>
        {tagline ? (
          <p className="text-sm text-neutral-300 max-w-[200px]">{tagline}</p>
        ) : null}
      </div>
    </Link>
  );
}
