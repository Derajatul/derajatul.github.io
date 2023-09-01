import Badge from './components/Badge'
import projects from './dataProjects.json'
import Image from 'next/image'
import ProjectCard from './components/ProjectCard'

interface Skill {
  img: string;
  alt: string;
  link: string;
}

const SkillList: React.FC = () => {
  const skills: Skill[] = [
    {
      img: '/icons/typescript.svg',
      alt: 'typescript',
      link: 'https://www.typescriptlang.org/'
    },
    {
      img: '/icons/react.svg',
      alt: 'react',
      link: 'https://react.dev/'
    },
    {
      img: '/icons/nextjs.svg',
      alt: 'nextjs',
      link: 'https://nextjs.org/'
    },
    {
      img: '/icons/tailwindcss.svg',
      alt: 'tailwindcss',
      link: 'https://tailwindcss.com/'
    },
    {
      img: '/icons/jest.svg',
      alt: 'jest',
      link: 'https://jestjs.io/'
    },
    
  ];

  return (
    <div className="flex flex-wrap gap-2 py-2">
      {skills.map((skill: Skill) => (
        <Badge key={skill.alt} href={skill.link}>
          <Image src={skill.img} alt={skill.alt} width={48} height={48} />
        </Badge>
      ))}
    </div>
  );
};

const ProjectList = () => {
  return(
    <div className="flex flex-wrap gap-3 justify-between">
      {projects.map(project => ( 
        <ProjectCard 
          key={project.id}
          img={project.img} 
          name={project.name}
          description={project.description} />
      ))}
    </div> 
  )
}

export default function Home() {
  return (
    <>
      <section id="home">
        <h1 className="text-xl font-bold py-5">halo, nama saya Dera 👋</h1>
        <p className="py-2">Seorang front-end developer dengan fokus pada pengembangan web modern menggunakan teknologi
        <Badge href='https://react.dev/'><img src="/icons/react.svg" className="h-3 px-1" /> React</Badge>
          dan 
        <Badge href="https://nextjs.org/"><img src="/icons/nextjs.svg" className="h-3 px-1"/> Next.js</Badge>
          . Saya memiliki tekad untuk menciptakan antarmuka pengguna yang menarik, responsif, dan berkinerja tinggi.</p>
        <p className="py-2">Telah lulus sebagai Front-end Expert dari 
        <Badge href="https://www.dicoding.com/"><img src="/icons/dicoding.jpeg" className="h-3 px-1"/>Dicoding</Badge>
          , menguasai konsep dan praktik terbaik dalam pengembangan front-end.</p>
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
