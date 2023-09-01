import Image from 'next/image'

type ProjectCard = {
  img: string;
  name: string;
  description: string;
  href: string;
  
}

const ProjectCard = ({img,name,description,href}: ProjectCard) => {
  return(
    <Link className="my-2 w-full sm:w-[48%]" >
      <Image src={img} alt='' width={500} height={500} style={{ maxWidth: '100%', height: 'auto'}} className="hover:shadow-inner" />
      <h3 className="my-5">{name} - {description}</h3>
    </Link>
  )
}
      
export default ProjectCard