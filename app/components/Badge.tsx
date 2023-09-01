import Link from 'next/link'

type Badge = {
  children: React.ReactNode;
  href: string;
}

const Badge = ({children,href}:Badge) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="border border-neutral-700 bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-100"
    >
      {children}
    </Link>
  );
}
export default Badge