import USP from "./usp";

const uspData = [
  {
    title: "Design-to-Dev Harmony",
    description:
      "Design systems translate into pixel-accurate, production-ready interfaces without compromises in motion or layout.",
  },
  {
    title: "Performance First Builds",
    description:
      "Ship responsive experiences tuned for speed, accessibility, and lighthouse scores that make stakeholders smile.",
  },
  {
    title: "Collaborative Delivery",
    description:
      "Transparent communication, async updates, and shared tooling keep every teammate in lockstep from kickoff to launch.",
  },
  {
    title: "Reliable Iteration",
    description:
      "Post-launch support, clear task estimates, and fast feedback loops ensure ongoing improvements stay on schedule.",
  },
];

export default function USPList() {
  return (
    <section className="container mb-28">
      <h3 className="text-3xl lg:text-4xl font-semibold mb-10">
        Why clients trust working with me
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {uspData.map((v: { title: string; description: string }) => (
          <USP key={v.title} title={v.title} description={v.description} />
        ))}
      </div>
    </section>
  );
}
