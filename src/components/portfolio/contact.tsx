import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Github, Linkedin, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

import { Section } from "./section";
import { profile } from "@/data/portfolio";
import { sendContactEmail } from "@/lib/contact.functions";

export function Contact() {
  const send = useServerFn(sendContactEmail);
  const [pending, setPending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pending) return;
    setPending(true);
    try {
      const result = await send({ data: form });
      if (result.ok) {
        toast.success("Message sent — Vinay will get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error(result.error ?? "Couldn't send the message.");
      }
    } catch {
      toast.error("Couldn't send the message. Please try again.");
    } finally {
      setPending(false);
    }
  };

  const links = [
    { href: profile.linkedin, icon: Linkedin, label: "LinkedIn", value: "in/vinaykumar675" },
    profile.github
      ? { href: profile.github, icon: Github, label: "GitHub", value: "VinayKumar939" }
      : null,
    { href: `mailto:${profile.email}`, icon: Mail, label: "Gmail", value: profile.email },
  ].filter(Boolean) as { href: string; icon: any; label: string; value?: string }[];

  return (
    <Section id="contact" eyebrow="05 — Contact Me" title="Let's build something.">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="flex flex-col gap-4">
          {links.map(({ href, icon: Icon, label, value }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="glow-card group flex items-center gap-4 rounded-2xl p-5"
            >
              <span className="rounded-xl border border-primary/25 bg-primary/10 p-3 text-primary transition-transform duration-300 group-hover:scale-110">
                <Icon size={18} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-medium">{label}</span>
                <span className="block truncate text-xs text-muted-foreground">{value}</span>
              </span>
            </a>
          ))}

          <div className="glow-card rounded-2xl p-5 text-sm text-muted-foreground">
            <p className="flex items-center gap-3">
              <Phone size={16} className="text-primary" /> {profile.phone}
            </p>
            <p className="mt-3 flex items-center gap-3">
              <MapPin size={16} className="text-primary" /> Dallas, TX — open to relocation
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="glow-card rounded-3xl p-7 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="text-muted-foreground">Your name</span>
              <input
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="mt-2 w-full rounded-xl border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/70"
                placeholder="Jane Doe"
              />
            </label>
            <label className="block text-sm">
              <span className="text-muted-foreground">Your email</span>
              <input
                required
                type="email"
                maxLength={200}
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="mt-2 w-full rounded-xl border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/70"
                placeholder="jane@company.com"
              />
            </label>
          </div>

          <label className="mt-4 block text-sm">
            <span className="text-muted-foreground">Message</span>
            <textarea
              required
              rows={6}
              minLength={5}
              maxLength={4000}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="mt-2 w-full resize-none rounded-xl border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/70"
              placeholder="Tell me about the role or project..."
            />
          </label>

          <button
            type="submit"
            disabled={pending}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60"
          >
            {pending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            {pending ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </Section>
  );
}
