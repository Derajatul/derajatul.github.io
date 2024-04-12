import Badge from "./badge";
import TechMarquee from "./tech-marquee";

export default function Technology() {
  return (
    <section className="container">
      <h2 className="text-4xl lg:text-5xl font-bold mb-6">
        Crafting Cutting-Edge <span className="pink__gradient">Websites</span>{" "}
        with the Latest Modern Tools
      </h2>
      <TechMarquee direction="right" />
      {/* <TechMarquee direction="left" /> */}
    </section>
  );
}
