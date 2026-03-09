import USPList from "../components/usp-list";
import Projects from "../components/projects";
import Technology from "../components/technology";
import ContactSection from "../components/contact-section";
import Hero from "../components/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <USPList />
      <Projects />
      <Technology />
      <ContactSection />
    </>
  );
}
