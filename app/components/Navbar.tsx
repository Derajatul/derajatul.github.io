import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-center">
        <div className="bg__nav fixed top-[0] py-6 bg-black  w-full container text-[#979797] z-50 flex justify-between items-center ">
          <Link href="/">DERA</Link>
          <div className="flex gap-4">
            {/* <Link href="#stack" className="hover:text-white">
              stack
            </Link>
            <Link href="#projects" className="hover:text-white">
              projects
            </Link> */}
          </div>
        </div>
      </nav>
    </>
  );
}
