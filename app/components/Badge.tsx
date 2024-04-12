import Image from "next/image";
import Link from "next/link";

type Badge = {
  title: string;
  href: string;
  logo: string;
};

const Badge = ({ title, href, logo }: Badge) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="ml-4 glass px-6 py-2 min-h-[61.6px] leading-4 text-neutral-100 inline-flex items-center gap-4 text-2xl"
      // className="bg-white block"
    >
      <Image src={logo} alt={title} width={44} height={44} />
      <p>{title}</p>
    </Link>
  );
};
export default Badge;
