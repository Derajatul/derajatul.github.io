import Image from 'next/image'
import Link from 'next/link'

type ProjectCard = {
  img: string;
  name: string;
  description: string;
  url: string;
  code: string;
}

const Button = ({children,href}:{children: React.ReactNode,href:string}) => {
  return(
    <Link href={href} target="_blank" className="px-2 py-1 border border-neutral-700 bg-neutral-800 rounded h-[44px] text-sm inline-flex items-center leading-4 text-neutral-100 justify-center">{children}</Link>
  )
}

const ProjectCard = ({img,name,description,url,code}: ProjectCard) => {
  return(
    <div className="my-2 w-full sm:w-[48%]" >
      <Image src={img} alt='' width={500} height={500} style={{ maxWidth: '100%', height: 'auto'}} className="hover:shadow-inner" />
      <h3 className="my-5">{name} - {description}</h3>
      <div className="flex flex-wrap gap-2">
        <Button href={url}>preview site &#8599;</Button>
        <Button href={code}>view code &#8599;</Button>
      </div>
      
      
    </div>
  )
}
      
export default ProjectCard