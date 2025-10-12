import Link from "next/link";
import ButtonLink from "./button-link";

export default function ContactSection() {
  const mailto =
    "mailto:derajatul@gmail.com?subject=Project%20Inquiry&body=Hi%20Dera,%20I'd%20love%20to%20work%20with%20you%20on...";

  return (
    <section
      id="contact"
      className="container py-24 lg:py-32 flex flex-col gap-16"
    >
      <header className="max-w-3xl flex flex-col gap-6">
        <p className="text-sm uppercase tracking-[0.35em] text-pink-300">
          Let's work together
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
          Share your project details and I'll reply within one business day.
        </h1>
        <p className="text-lg text-[#C2C2C2]">
          Want to chat through scope first? Send a quick email with timelines,
          goals, and any design files. I’ll reply personally within one business
          day.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <ButtonLink href={mailto}>Email me your project →</ButtonLink>
          {/* <Link
            href="https://cal.com/"
            target="_blank"
            className="text-sm font-semibold text-neutral-100 underline decoration-white/40 underline-offset-8 transition-colors hover:text-pink-300"
          >
            Prefer a quick call?
          </Link> */}
        </div>
      </header>

      {/* <div className="grid gap-6 lg:grid-cols-3 text-sm text-[#9E9E9E]">
        <div className="glass p-6">
          <h2 className="text-xl font-semibold text-neutral-100 mb-2">
            Process
          </h2>
          <p>
            Kickoff call, scoped milestones, and weekly updates to keep everyone
            aligned.
          </p>
        </div>
        <div className="glass p-6">
          <h2 className="text-xl font-semibold text-neutral-100 mb-2">
            Availability
          </h2>
          <p>
            Booking limited build sprints each month for product and marketing
            teams worldwide.
          </p>
        </div>
        <div className="glass p-6">
          <h2 className="text-xl font-semibold text-neutral-100 mb-2">
            Time zones
          </h2>
          <p>
            Fully remote and async—ideal for US, Europe, and Asia-Pacific
            collaboration.
          </p>
        </div>
      </div> */}
    </section>
  );
}
