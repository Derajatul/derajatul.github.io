import TechMarquee from "./tech-marquee";

export default function Technology() {
  return (
    <section className="container mb-28">
      <h2 className="text-4xl lg:text-5xl font-bold mb-4">
        Tools that keep your next launch smooth
      </h2>
      <p className="max-w-3xl text-lg text-[#B8B8B8] mb-10">
        You don’t need to learn the stack—just know that every choice here keeps
        your site fast, secure, and easy to update. These are the ingredients I
        rely on to ship dependable results.
      </p>
      <TechMarquee direction="right" />
    </section>
  );
}
