import Link from "next/link";
import { PageHero, Reveal, RevealImage, SectionHeading, TextLink } from "@/components/site/primitives";
import { ContactSection } from "@/components/site/contact-section";
import { images, projects } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — VRB Group",
  description: "Explore selected VRB Group residential developments, integrated townships and investment opportunities.",
  openGraph: {
    title: "Selected Developments — VRB Group",
    description: "Spaces thoughtfully planned, developed and built for lasting value.",
    type: "website"
  },
  twitter: { card: "summary_large_image" }
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Selected developments" title={<>Spaces with purpose.<br/><em>Value that endures.</em></>} intro="A considered portfolio of residential communities, integrated townships and opportunities shaped for long-term growth." image={images.vedantaImage} imageAlt="Aerial view of a green residential development"/>
      <section className="py-24 md:py-36">
        <div className="container-shell">
          <SectionHeading eyebrow="The portfolio" title="Selected developments" body="Each project responds to its place, its people and the possibilities of what comes next."/>
          <div className="mt-20 space-y-28">
            {projects.map((p,i)=>(
              <Reveal key={p.slug} className="grid gap-8 lg:grid-cols-12 lg:items-end">
                <RevealImage src={p.image} alt={p.imageAlt} className={`aspect-[4/3] ${i%2 ? "lg:order-2 lg:col-span-7 lg:col-start-6":"lg:col-span-8"}`}/>
                <div className={`${i%2?"lg:order-1 lg:col-span-4":"lg:col-span-4"}`}>
                  <p className="micro-label text-wine">0{i+1} — {p.category}</p>
                  <h2 className="mt-5 font-display text-5xl md:text-6xl">{p.name}</h2>
                  <p className="mt-4 text-xs uppercase tracking-[0.14em] text-muted-foreground">{p.location} · {p.status}</p>
                  <p className="mt-6 text-sm leading-7 text-muted-foreground">{p.description}</p>
                  <Link href={`/projects/${p.slug}`} className="mt-8 inline-block"><TextLink>Explore project</TextLink></Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ContactSection/>
    </>
  );
}
