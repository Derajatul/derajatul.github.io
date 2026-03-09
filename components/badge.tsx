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
      className="ml-4 glass px-6 py-4 min-h-[125.6px] leading-4 text-neutral-100 inline-flex items-start gap-4 text-left transition-transform"
    >
      <Image
        src={logo}
        alt={title}
        width={44}
        height={44}
        className="w-auto h-auto max-w-[44px] max-h-[44px]"
      />
      <div className="flex flex-col gap-1">
        <p className="text-xl font-semibold">{title}</p>
        {tagline ? (
          <p className="text-sm text-neutral-300 max-w-[200px]">{tagline}</p>
        ) : null}
      </div>
    </Link>
  );
}
