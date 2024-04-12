import Badge from "./components/Badge";
import projects from "./dataProjects.json";
import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import Link from "next/link";
import Hero from "./components/hero";
import USPList from "./components/usp-list";

export default function Home() {
  return (
    <>
      <Hero />
      <USPList />
    </>
  );
}
