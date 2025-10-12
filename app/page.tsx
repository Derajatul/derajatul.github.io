import Hero from "./components/hero";
import USPList from "./components/usp-list";
import Projects from "./components/projects";
import Technology from "./components/technology";
import ContactSection from "./components/contact-section";

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
