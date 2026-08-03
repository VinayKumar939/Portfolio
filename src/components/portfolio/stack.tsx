import { Section } from "./section";
import { stack } from "@/data/portfolio";

export function Stack() {
  return (
    <Section id="stack" eyebrow="04 — Stack" title="Tools I reach for.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((group) => (
          <div key={group.group} className="glow-card rounded-3xl p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              {group.group}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border bg-surface-2 px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
