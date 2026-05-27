import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ClientLogos } from "@/components/ClientLogos";
import { About } from "@/components/About";
import { Journey } from "@/components/Journey";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingActions } from "@/components/FloatingActions";
import { PageLoader } from "@/components/PageLoader";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mahefa Landrie",
  jobTitle: "IA Data Expert & Web Marketer",
  url: "https://mahefalandrie.tech",
  email: "landriejames@gmail.com",
  telephone: "+261349174020",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Antananarivo",
    addressCountry: "MG",
  },
  sameAs: [
    "https://github.com/mahefa-landrie",
    "https://www.linkedin.com/in/mahefa-landrie",
  ],
  knowsAbout: [
    "Data Annotation",
    "Computer Vision",
    "Web Marketing",
    "SEO",
    "WordPress",
    "Data Quality",
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mahefa Landrie — IA Data Expert & Web Marketer" },
      {
        name: "description",
        content:
          "Portfolio de Mahefa Landrie : annotation de données IA, contrôle qualité, SEO/SEA et développement web. Disponible pour vos missions.",
      },
      { property: "og:title", content: "Mahefa Landrie — IA Data Expert & Web Marketer" },
      {
        property: "og:description",
        content: "Data Labeling, Computer Vision QA & Web Marketing — basé à Antananarivo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mahefalandrie.tech" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mahefa Landrie — IA Data Expert & Web Marketer" },
      {
        name: "twitter:description",
        content: "Data Labeling, Computer Vision QA & Web Marketing.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(personSchema),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageLoader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        <About />
        <Journey />
        <Skills />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <FloatingActions />
    </div>
  );
}
