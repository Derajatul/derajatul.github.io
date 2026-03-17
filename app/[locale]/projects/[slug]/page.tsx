import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Calendar, User } from "lucide-react";

interface ProjectDetail {
  slug: string;
  title: string;
  role: string;
  timeline: string;
  description: string;
  longDescription: string;
  tech: string[];
  href: string;
  image: string;
}

export default async function ProjectPage(props: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const params = await props.params;
  const t = await getTranslations();
  const projects = t.raw("projects.items") as ProjectDetail[];
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-black/[0.96] antialiased overflow-hidden pb-20">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60 lg:left-80"
        fill="white"
      />

      <div className="container mx-auto px-4 pt-32 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {t("nav.home")}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-8 text-left">
            <header>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white text-balance">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                  <User size={16} />
                  {project.role}
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                  <Calendar size={16} />
                  {project.timeline}
                </div>
              </div>
            </header>

            <div className="space-y-6">
              <p className="text-xl text-neutral-300 leading-relaxed">
                {project.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs uppercase tracking-wider text-pink-300 bg-pink-500/10 border border-pink-500/20 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Button size="lg" className="font-semibold" asChild>
                  <a href={project.href} target="_blank" rel="noopener noreferrer">
                    Visit Project <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl group lg:mt-12">
             <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
          </div>
        </div>
      </div>
    </div>
  );
}
