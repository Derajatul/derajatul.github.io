import Link from "next/link";

export default function ButtonLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-3xl bg-[white] px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-[#1B6DFF]/30 transition-all hover:-translate-y-0.5 hover:bg-[#3B82FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B82FF]"
    >
      {children}
    </Link>
  );
}
