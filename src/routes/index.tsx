import { createFileRoute } from "@tanstack/react-router";
import { CustomCursor } from "@/components/CustomCursor";
import { Hero } from "@/components/Hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dotis — Let your feed, feed someone" },
      { name: "description", content: "Share unused internet and generate donations for causes that need it most — at no cost to you." },
      { property: "og:title", content: "Dotis — Let your feed, feed someone" },
      { property: "og:description", content: "Turn unused bandwidth into donations for wildlife, disaster relief, and food aid." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <CustomCursor />
      <Hero />
    </main>
  );
}
