import USP from "./usp";

const uspData = [
  {
    title: "Pixel-Perfect Precision",
    description:
      "I meticulously craft every detail of your website, ensuring seamless design integration and flawless user interaction.",
  },
  {
    title: "Cutting-Edge Technologies",
    description:
      "With my expertise in the latest frontend frameworks and tools, I bring innovation and efficiency to every project.",
  },
  {
    title: "User-Centric Approach",
    description:
      "My focus is on creating intuitive interfaces and engaging user experiences that keep your audience coming back for more.",
  },
  {
    title: "Timely Delivery",
    description:
      "I understand the importance of deadlines. Count on me to deliver high-quality work on time, every time.",
  },
];

export default function USPList() {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-28 ">
      {uspData.map((v: { title: string; description: string }) => (
        <USP key={v.title} title={v.title} description={v.description} />
      ))}
    </section>
  );
}
