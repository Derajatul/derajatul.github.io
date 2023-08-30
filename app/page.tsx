import Badge from './components/Badge'
import projects from './dataProjects.json'
import Image from 'next/image'

interface Skill {
  img: string;
  alt: string;
}

const SkillList: React.FC = () => {
  const skills: Skill[] = [
    {
      img: '/icons/javascript.svg',
      alt: 'javascript'
    },
    {
      img: '/icons/react.svg',
      alt: 'react'
    },
    {
      img: '/icons/nextjs.svg',
      alt: 'nextjs'
    },
    {
      img: '/icons/jest.svg',
      alt: 'jest'
    }
  ];

  return (
    <div className="flex flex-wrap gap-2 py-2">
      {skills.map((skill: Skill) => (
        <Badge key={skill.alt}>
          <Image src={skill.img} alt={skill.alt} width={48} height={48} />
        </Badge>
      ))}
    </div>
  );
};

const ProjectList = () => {
  return(
    <div className="md:flex md:flex-wrap md:justify-between">
      {projects.map(project => ( 
        <div className="py-2 md:w-[48%]" key={project.id}>
          <img src={project.img} />
          <h3 className="py-5">{project.name} - {project.description}</h3>
        </div>
      ))}
    </div> 
  )
}

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
        <SkillList />
      </section>
      
      <section id="projects">
        <h2 className="text-xl font-bold py-5">projects</h2>
          <ProjectList />
      </section>
    </>
  )
}
