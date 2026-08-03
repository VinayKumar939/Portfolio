import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/portfolio/about";
import { ChatBot } from "@/components/portfolio/chat-bot";
import { Contact } from "@/components/portfolio/contact";
import { Experience } from "@/components/portfolio/experience";
import { Footer } from "@/components/portfolio/footer";
import { Hero } from "@/components/portfolio/hero";
import { NavBar } from "@/components/portfolio/nav-bar";
import { Projects } from "@/components/portfolio/projects";
import { Stack } from "@/components/portfolio/stack";

const title = "Vinay Kumar Mannava — Full Stack Software Developer";
const description =
  "Portfolio of Vinay Kumar Mannava, a full stack software developer building C#/.NET, Angular and AWS microservices, plus AI-powered products.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}
