import Badge from './components/Badge'
import projects from './dataProjects.json'

export default function Home() {
  return (
    <>
      <section id="home">
        <h1 className="text-xl font-bold py-5">halo, nama saya Dera 👋</h1>
        <p className="py-2">Seorang front-end developer dengan fokus pada pengembangan web modern menggunakan teknologi <Badge><img src="/icons/react.svg" className="h-3 px-1" /> React</Badge> dan <Badge><img src="/icons/nextjs.svg" className="h-3 px-1"/> Next.js</Badge>. Saya memiliki tekad untuk menciptakan antarmuka pengguna yang menarik, responsif, dan berkinerja tinggi.</p>
        <p className="py-2">Telah lulus sebagai Front-end Expert dari <Badge><img src="/icons/dicoding.jpeg" className="h-3 px-1"/>Dicoding</Badge>, menguasai konsep dan praktik terbaik dalam pengembangan front-end.</p>
      </section>
      <section id="stack">
        <h2 className="text-xl font-bold py-5">tech stack</h2>
        <div className="flex w-64 justify-between py-2">
          <Badge>
            <img src='/icons/javascript.svg' className="w-12" />
          </Badge>
          <Badge>
            <img src='/icons/react.svg' className="w-12" />
          </Badge>
          <Badge>
            <img src='/icons/nextjs.svg' className="w-12" />
          </Badge>
          <Badge>
            <img src='/icons/jest.svg' className="w-12" />
          </Badge>
        </div>
      </section>
      <section id="projects">
        <h2 className="text-xl font-bold py-5">projects</h2>
        <div className="md:flex md:flex-wrap md:justify-between">
          {projects.map(project => (
            <div className="py-2 md:w-[48%]" key={project.id}>
              <img src={project.img} />
              <h3 className="py-5">{project.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
