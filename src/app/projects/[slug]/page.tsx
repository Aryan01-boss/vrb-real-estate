import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactSection } from "@/components/site/contact-section";
import { RevealImage, SectionHeading } from "@/components/site/primitives";
import { images, projects } from "@/lib/site-data";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find(p => p.slug === resolvedParams.slug);
  
  if (!project) {
    return {
      title: "Project not found — VRB Group",
    };
  }

  return {
    title: `${project.name} — VRB Group`,
    description: project.description ?? "Explore VRB Group developments.",
    openGraph: {
      title: project.name ?? "VRB Group Project",
      description: project.description ?? "Thoughtfully planned real estate developments.",
      type: "website"
    },
    twitter: { card: "summary_large_image" }
  };
}

export default async function ProjectDetail({ params }: Props) {
  const resolvedParams = await params;
  const p = projects.find(p => p.slug === resolvedParams.slug);
  
  if (!p) {
    notFound();
  }

  return (
    <>
      <section className="relative min-h-svh bg-hero text-hero-foreground">
        <img src={p.image} alt={p.imageAlt} width={1600} height={1200} className="absolute inset-0 h-full w-full object-cover opacity-65"/>
        <div className="absolute inset-0 bg-hero-overlay"/>
        <div className="container-shell relative flex min-h-svh flex-col justify-end pb-16 pt-36 md:pb-24">
          <p className="micro-label text-hero-foreground/65">{p.category}</p>
          <h1 className="mt-5 max-w-5xl font-display text-7xl leading-[0.88] md:text-9xl">{p.name}</h1>
          <div className="mt-9 flex flex-wrap gap-x-12 gap-y-4 border-t border-hero-foreground/30 pt-6 text-xs uppercase tracking-[0.14em]">
            <span>{p.location}</span><span>{p.status}</span><span>{p.category}</span>
          </div>
        </div>
      </section>
      
      <section className="py-24 md:py-36">
        <div className="container-shell">
          <SectionHeading eyebrow="Project overview" title={<>Designed around<br/><em>everyday possibility.</em></>} body={p.description}/>
          <dl className="mt-20 grid border-y border-border sm:grid-cols-2 lg:grid-cols-4">
            {[["Location",p.location],["Project type",p.category],["Status",p.status],["Approach","Planned development"]].map(([a,b])=>
              <div key={a} className="border-b border-border py-8 sm:px-7 lg:border-b-0 lg:border-l lg:first:border-l-0">
                <dt className="micro-label text-muted-foreground">{a}</dt>
                <dd className="mt-4 font-display text-2xl">{b}</dd>
              </div>
            )}
          </dl>
        </div>
      </section>
      
      <section className="bg-card py-24 md:py-36">
        <div className="container-shell">
          <SectionHeading eyebrow="Master plan" title="A considered framework" body="Landscape, movement and community spaces brought together in one coherent plan."/>
          <RevealImage src={images.masterplanImage} alt="Conceptual architectural master plan illustration" className="mt-16 aspect-[4/3] md:aspect-[16/10]"/>
        </div>
      </section>
      
      <section className="py-24 md:py-36">
        <div className="container-shell">
          <SectionHeading eyebrow="Amenities" title="Life, thoughtfully composed"/>
          <div className="mt-16 grid gap-3 md:grid-cols-12">
            <RevealImage src={images.residentialImage} alt="Landscaped residential gardens" className="aspect-[4/3] md:col-span-7"/>
            <RevealImage src={images.commercialImage} alt="Contemporary community plaza" className="aspect-[4/3] md:col-span-5"/>
            <div className="md:col-span-12 grid gap-px bg-border sm:grid-cols-3">
              <span className="bg-background p-6 font-display text-2xl">Landscaped greens</span>
              <span className="bg-background p-6 font-display text-2xl">Connected community</span>
              <span className="bg-background p-6 font-display text-2xl">Considered infrastructure</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-stone py-24 md:py-32">
        <div className="container-shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="micro-label text-wine">Location</p>
            <h2 className="mt-6 font-display text-6xl">Connected to what matters.</h2>
            <p className="mt-6 flex items-center gap-3 text-sm text-muted-foreground"><MapPin className="size-4"/>{p.location}</p>
          </div>
          <div className="grid min-h-72 place-items-center border border-wine/25 bg-background lg:col-span-7">
            <div className="text-center">
              <MapPin className="mx-auto size-8 text-wine"/>
              <p className="micro-label mt-4 text-muted-foreground">Location overview</p>
              <p className="mt-2 font-display text-3xl">{p.location}</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-hero py-24 text-hero-foreground md:py-32">
        <div className="container-shell text-center">
          <p className="micro-label text-hero-foreground/55">Your next step</p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-6xl leading-none md:text-8xl">Interested in this development?</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg"><Link href="/contact">Schedule a visit <ArrowRight/></Link></Button>
            <Button asChild variant="heroGhost" size="lg"><Link href="/contact">Request information</Link></Button>
          </div>
        </div>
      </section>
      <ContactSection/>
    </>
  );
}
