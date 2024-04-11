import Link from "next/link";

export default function ButtonLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link href={href} className="bg-[#0070F0] px-6 py-2 rounded-3xl">
      {children}
    </Link>
  );
}
