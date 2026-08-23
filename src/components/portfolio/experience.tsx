import { useEffect, useRef, useState } from "react";

import { Section } from "./section";
import { experience } from "@/data/portfolio";

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const [timeline, setTimeline] = useState({ top: 0, height: 0, progress: 0, active: 0 });

  useEffect(() => {
    const updateTimeline = () => {
      const container = timelineRef.current;
      const items = itemRefs.current.filter((item): item is HTMLElement => item !== null);
      if (!container || items.length < 2) return;

      const containerRect = container.getBoundingClientRect();
      const markerPositions = items.map((item) => item.offsetTop + 40);
      const top = markerPositions[0];
      const height = markerPositions.at(-1)! - top;
      const viewportMarker = window.innerHeight * 0.55;
      const progress = Math.min(Math.max(viewportMarker - containerRect.top - top, 0), height);
      const active = markerPositions.reduce(
        (current, position, index) =>
          viewportMarker >= containerRect.top + position ? index : current,
        0,
      );

      setTimeline({ top, height, progress, active });
    };

    updateTimeline();
    window.addEventListener("scroll", updateTimeline, { passive: true });
    window.addEventListener("resize", updateTimeline);
    return () => {
      window.removeEventListener("scroll", updateTimeline);
      window.removeEventListener("resize", updateTimeline);
    };
  }, []);

  return (
    <Section id="experience" eyebrow="02 — Experience" title="">
      <div ref={timelineRef} className="relative space-y-6">
        <span
          aria-hidden="true"
          className="absolute left-[7px] hidden w-px bg-border md:block"
          style={{ top: timeline.top, height: timeline.height }}
        >
          <span
            className="block w-px bg-primary shadow-[0_0_12px_var(--primary)]"
            style={{ height: timeline.progress }}
          />
        </span>

        {experience.map((job, index) => (
          <article
            key={job.company}
            ref={(node) => {
              itemRefs.current[index] = node;
            }}
            className="relative md:pl-12"
          >
            <span
              className={`absolute left-0 top-8 hidden h-4 w-4 items-center justify-center rounded-full border bg-background transition-all duration-300 md:flex ${
                index <= timeline.active
                  ? "border-primary shadow-[0_0_14px_var(--primary)]"
                  : "border-border"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                  index <= timeline.active ? "bg-primary" : "bg-muted-foreground"
                }`}
              />
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

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {job.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
