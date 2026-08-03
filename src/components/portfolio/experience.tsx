import { Section } from "./section";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience" eyebrow="02 — Experience" title="Where I've shipped.">
      <div className="relative space-y-6 before:absolute before:left-[7px] before:top-2 before:hidden before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-primary/70 before:via-border before:to-transparent md:before:block">
        {experience.map((job) => (
          <article key={job.company} className="relative md:pl-12">
            <span className="absolute left-0 top-8 hidden h-4 w-4 items-center justify-center rounded-full border border-primary/60 bg-background md:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </span>

            <div className="glow-card rounded-3xl p-7 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold">{job.company}</h3>
                  <p className="mt-1 text-sm text-primary">{job.role}</p>
                </div>
                <p className="font-mono text-xs text-muted-foreground">{job.period}</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-[11px] text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
