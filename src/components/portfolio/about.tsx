import { GraduationCap, Quote } from "lucide-react";

import { Section } from "./section";
import { profile } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about" eyebrow="01 — About Me" title="Engineer first, problem-solver always.">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="glow-card rounded-3xl p-8">
          <Quote className="text-primary/70" size={24} />
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.summary}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.summary2}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="glow-card rounded-3xl p-8">
            <GraduationCap className="text-primary" size={22} />
            <h3 className="mt-4 text-lg font-semibold">{profile.education.degree}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{profile.education.school}</p>
            <p className="mt-1 font-mono text-xs text-primary">{profile.education.years}</p>
          </div>

          <div className="glow-card rounded-3xl p-8">
            <h3 className="text-lg font-semibold">What I care about</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                "Clean API design and honest data models",
                "Observability before the incident, not after",
                "CI/CD that makes releases boring",
                "Using AI where it genuinely removes toil",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
