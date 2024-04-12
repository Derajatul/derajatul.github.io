import Image from "next/image";
import Avatar from "@/public/avatar/dera.avif";
import ButtonLink from "./button-link";

export default function Hero() {
  return (
    <section className="relative container shrink-0 flex justify-center items-center gap-[90px] min-h-[100vh]">
      <div className="flex-1 flex flex-col gap-4 lg:gap-10 items-start justify-start">
        <h1 className="text-5xl lg:text-6xl font-bold">
          Transforming <span className="pink__gradient">Designs</span> into
          Digital Delights.
        </h1>
        <p className="text-light text-xl text-[#979797]">
          Crafting captivating user experiences through cutting-edge frontend
          development.
        </p>
        <ButtonLink href="/">Start project -&gt;</ButtonLink>
      </div>
      <div className="flex-1 lg:flex justify-center items-center hidden">
        <Image
          src={Avatar}
          alt="avatar"
          width={450}
          height={450}
          priority
          className="h-auto w-auto max-w-[450px] max-h-[450px]"
        />
      </div>
    </section>
  );
}
