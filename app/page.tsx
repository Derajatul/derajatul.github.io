import Badge from "./components/Badge";
import projects from "./dataProjects.json";
import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import Avatar from "@/public/avatar/dera.png";

export default function Home() {
  return (
    <section className="container flex justify-center flex-col items-center text-center min-h-[100vh]">
      <Image src={Avatar} alt="avatar" className="mb-6" />
      <h1 className="text-white font-bold text-4xl mb-4">
        Moh Derajatul Ula <span className="text-[#979797]">Frontend Dev</span>
      </h1>
      {/* <h2 className="font-light text-3xl text-[#979797] mb-8"></h2> */}
      <p className="text-white text-lg">{`"Transforming Designs into Digital Delights."`}</p>
    </section>
  );
}
