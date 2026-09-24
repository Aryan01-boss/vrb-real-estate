import { PageHero, Reveal, RevealImage, SectionHeading } from "@/components/site/primitives";
import { Stats } from "@/components/site/stats";
import { ContactSection } from "@/components/site/contact-section";
import { images, principles } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About VRB Group — Trust, Quality & Commitment",
  description: "Learn about VRB Group's approach to thoughtful real estate development, quality and long-term value.",
  openGraph: {
    title: "About VRB Group",
    description: "Building trust through quality, commitment and considered real estate development.",
    type: "website"
  },
  twitter: { card: "summary_large_image" }
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About VRB Group" title={<>Building Trust Through<br/><em>Quality & Commitment.</em></>} intro="We create thoughtfully planned spaces with a clear focus on people, purpose and enduring value." image={images.residentialImage} imageAlt="Modern residential architecture within a landscaped community"/>
      <section className="py-24 md:py-36">
        <div className="container-shell">
          <SectionHeading eyebrow="Our perspective" title={<>More than property.<br/><em>A long-term promise.</em></>} body="For VRB Group, development is a responsibility—to the people who invest, the families who live there and the communities that grow around each place."/>
          <div className="mt-20"><Stats/></div>
        </div>
      </section>
      <section className="bg-card py-24 md:py-36">
        <div className="container-shell grid gap-14 lg:grid-cols-12">
          <RevealImage src={images.townshipImage} alt="Planned township and green public spaces" className="aspect-[4/3] lg:col-span-7"/>
          <Reveal className="lg:col-span-4 lg:col-start-9 lg:self-center">
            <p className="micro-label text-wine">How we build</p>
            <h2 className="mt-6 font-display text-6xl leading-[0.92]">Clarity in vision.<br/><em>Care in execution.</em></h2>
            <p className="mt-7 text-sm leading-7 text-muted-foreground">Each development begins with context: how people will live, how a neighbourhood can work and how value can endure. That perspective guides planning, design and delivery.</p>
          </Reveal>
        </div>
      </section>
      <section className="py-24 md:py-36">
        <div className="container-shell">
          <SectionHeading eyebrow="The VRB standard" title="Principles in practice"/>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {principles.map(([n,t,b])=><article key={n} className="bg-background p-8 md:p-10"><span className="font-display text-5xl text-wine/40">{n}</span><h3 className="mt-10 font-display text-3xl">{t}</h3><p className="mt-5 text-sm leading-7 text-muted-foreground">{b}</p></article>)}
          </div>
        </div>
      </section>
      <ContactSection/>
    </>
  );
}
