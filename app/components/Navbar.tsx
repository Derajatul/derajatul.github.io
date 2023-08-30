import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-36 gap-5 flex items-center flex-row'>
      <Link href='#home' className="hover:text-white">home</Link>
      <Link href='#stack' className="hover:text-white">stack</Link>
      <Link href='#projects' className="hover:text-white">projects</Link>
    </nav>
  )
}
export default Navbar