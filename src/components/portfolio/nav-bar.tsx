import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { sections } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function NavBar() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "backdrop-blur-xl" : "",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-500",
          scrolled ? "my-2 rounded-2xl border bg-surface/70 py-3" : "border-transparent py-5",
        )}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-sm font-semibold tracking-tight text-foreground"
        >
          VKM<span className="text-primary">.</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => go(s.id)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm transition-colors",
                active === s.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {s.label}
              <span
                className={cn(
                  "absolute inset-x-4 -bottom-0.5 h-px origin-left bg-primary transition-transform duration-300",
                  active === s.id ? "scale-x-100" : "scale-x-0",
                )}
              />
            </button>
          ))}
        </nav>

        <button
          className="rounded-lg border p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="mx-5 mt-1 animate-in fade-in slide-in-from-top-2 rounded-2xl border bg-surface/95 p-2 backdrop-blur-xl md:hidden">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => go(s.id)}
              className="block w-full rounded-xl px-4 py-3 text-left text-sm text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
