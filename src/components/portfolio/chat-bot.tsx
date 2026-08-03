import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Bot, Loader2, MessageCircle, Send, X } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { askAboutVinay } from "@/lib/chat.functions";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What does Vinay do at Common APP?",
  "Which AWS services has he used?",
  "Tell me about his RAG chatbot project",
];

const GREETING: Msg = {
  role: "assistant",
  content: `Hi! I'm ${profile.name.split(" ")[0]}'s assistant. Ask me anything about his experience, projects or tech stack.`,
};

export function ChatBot() {
  const ask = useServerFn(askAboutVinay);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, pending]);

  useEffect(() => {
    if (open && !blocked) inputRef.current?.focus();
  }, [open, pending, blocked]);

  const submit = async (text: string) => {
    const question = text.trim();
    if (!question || pending) return;

    const next: Msg[] = [...messages, { role: "user", content: question }];
    setMessages(next);
    setInput("");
    setPending(true);

    try {
      const result = await ask({
        data: { messages: next.filter((m) => m !== GREETING).slice(-12) },
      });

      if (result.outOfScope) {
        setBlocked(true);
        setMessages((m) => m.slice(0, -1));
      } else if (result.ok) {
        setMessages((m) => [...m, { role: "assistant", content: result.reply }]);
      } else {
        setMessages((m) => [
          ...m,
          { role: "assistant", content: result.error ?? "Something went wrong." },
        ]);
      }
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Something went wrong. Please try again." },
      ]);
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Ask about Vinay"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_18px_50px_-12px_oklch(0.79_0.126_300/60%)] transition-transform duration-300 hover:scale-105"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
        {!open && (
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/40" />
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[30rem] w-[min(23rem,calc(100vw-2.5rem))] animate-in fade-in slide-in-from-bottom-4 flex-col overflow-hidden rounded-3xl border bg-surface/95 backdrop-blur-xl duration-300">
          <div className="flex items-center gap-3 border-b px-5 py-4">
            <span className="rounded-xl border border-primary/25 bg-primary/10 p-2 text-primary">
              <Bot size={17} />
            </span>
            <div>
              <p className="text-sm font-medium">Ask about Vinay</p>
              <p className="text-[11px] text-muted-foreground">
                Answers only about his profile
              </p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}
              >
                <p
                  className={cn(
                    "max-w-[85%] whitespace-pre-wrap text-sm leading-relaxed",
                    m.role === "user"
                      ? "rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-primary-foreground"
                      : "text-foreground",
                  )}
                >
                  {m.content}
                </p>
              </div>
            ))}

            {pending && (
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Loader2 size={14} className="animate-spin text-primary" /> Thinking...
              </p>
            )}

            {messages.length === 1 && !pending && (
              <div className="space-y-2 pt-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => submit(s)}
                    className="block w-full rounded-xl border bg-surface-2 px-3 py-2 text-left text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              void submit(input);
            }}
            className="flex items-center gap-2 border-t p-3"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Vinay..."
              maxLength={500}
              className="flex-1 rounded-full border bg-background/60 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary/70"
            />
            <button
              type="submit"
              disabled={pending || !input.trim()}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity disabled:opacity-40"
              aria-label="Send"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <Dialog open={blocked} onOpenChange={setBlocked}>
        <DialogContent className="max-w-sm rounded-3xl border bg-surface">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Bot size={18} className="text-primary" />
              That's outside my scope
            </DialogTitle>
            <DialogDescription className="pt-2 text-sm leading-relaxed">
              I can only answer questions about {profile.name} — his experience, projects, tech
              stack, education and how to reach him. Try asking something like{" "}
              <span className="text-primary">&ldquo;{SUGGESTIONS[0]}&rdquo;</span>.
            </DialogDescription>
          </DialogHeader>
          <button
            onClick={() => setBlocked(false)}
            className="mt-2 w-full rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Got it
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
}
