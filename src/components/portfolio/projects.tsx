import { ArrowUpRight } from "lucide-react";

import { Section } from "./section";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <Section id="projects" eyebrow="03 — Projects" title="Things I've built end to end.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="glow-card group relative flex flex-col overflow-hidden rounded-3xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                width={1280}
                height={800}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/35 to-transparent" />
              <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-primary/40 bg-background/70 px-3 py-1.5 text-[11px] text-primary opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:translate-y-2">
                Visit project
                <ArrowUpRight size={13} />
              </span>
            </div>

            <div className="flex flex-1 flex-col p-7">
              <h3 className="mt-2 text-xl font-semibold transition-colors group-hover:text-primary">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border bg-surface-2 px-3 py-1 font-mono text-[11px] text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
