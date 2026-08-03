import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

import { highlights, profile } from "@/data/portfolio";

const ROLES = [
  "Full Stack Software Developer",
  "C# / .NET & Angular Engineer",
  "AWS Cloud & Microservices Builder",
  "AI & Agent Workflow Tinkerer",
];

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index] ?? "";
    const done = !deleting && text === word;
    const cleared = deleting && text === "";

    const timeout = setTimeout(
      () => {
        if (done) {
          setDeleting(true);
        } else if (cleared) {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        } else {
          setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
        }
      },
      done ? 1800 : deleting ? 32 : 62,
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28">
      <div className="aurora" />
      <div className="grid-veil pointer-events-none absolute inset-0" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-flex items-center gap-2 rounded-full border bg-surface/60 px-4 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for new opportunities
          </span>
        </div>

        <h1 className="mt-7 animate-in fade-in slide-in-from-bottom-6 text-5xl font-semibold leading-[1.05] duration-1000 sm:text-7xl lg:text-8xl">
          <span className="text-gradient">{profile.name}</span>
        </h1>

        <p className="mt-5 h-8 font-mono text-base text-primary sm:text-lg">
          {typed}
          <span className="ml-0.5 inline-block animate-[blink-caret_1s_step-end_infinite]">|</span>
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          I build and operate resilient backend services and polished front-ends — from multi-tenant
          .NET APIs on AWS to Angular and React interfaces people use every day.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            View my work
            <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
          </button>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full border bg-surface/60 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-primary/60"
          >
            Contact me
          </button>

          <div className="ml-1 flex items-center gap-2">
            {[
              { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: profile.github, icon: Github, label: "GitHub" },
              { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-full border bg-surface/60 p-3 text-muted-foreground backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border/40 sm:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.label} className="bg-surface/70 p-5 backdrop-blur">
              <dt className="font-display text-2xl text-primary">{h.value}</dt>
              <dd className="mt-1 text-xs text-muted-foreground">{h.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
