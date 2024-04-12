import projects from "./dataProjects.json";
import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import Link from "next/link";
import Hero from "./components/hero";
import USPList from "./components/usp-list";
import Technology from "./components/technology";
import Badge from "./components/badge";

export default function Home() {
  return (
    <>
      <Hero />
      <USPList />
      <Technology />
      
    </>
  );
}
