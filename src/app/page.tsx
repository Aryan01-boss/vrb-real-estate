import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactSection } from "@/components/site/contact-section";
import { Reveal, RevealImage, SectionHeading, TextLink } from "@/components/site/primitives";
import { images, principles, projects, stats, testimonials } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VRB Group — Creating Spaces for a Better Tomorrow",
  description: "Explore VRB Group's thoughtfully planned residential developments, townships and long-term real estate opportunities.",
  openGraph: {
    title: "VRB Group — Creating Spaces for a Better Tomorrow",
    description: "Thoughtfully planned developments designed around modern living, lasting value and meaningful communities.",
    type: "website"
  },
  twitter: { card: "summary_large_image" }
};

export default function HomePage() {
  return <>
    {/* 01 Hero Section */}
    <section className="relative min-h-svh overflow-hidden bg-hero text-white">
      <img src={images.heroImage} alt="Contemporary residential community in Jaipur at sunset" width={1920} height={1080} className="absolute inset-0 h-full w-full scale-[1.03] object-cover motion-safe:animate-[heroScale_18s_ease-out_forwards]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="container-shell relative flex min-h-svh flex-col justify-end pb-16 pt-36 md:pb-24">
        <div className="max-w-4xl motion-safe:animate-[introUp_900ms_ease-out_both]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">VRB Group • Real Estate</p>
          <h1 className="mt-4 font-display text-4xl font-normal leading-[1.1] text-balance sm:text-5xl md:text-6xl">
            Planned Townships & Real Estate Developments Built for Long-Term Value.
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
            Developing premium residential communities and commercial spaces across Rajasthan.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="h-12 rounded-none bg-white px-8 text-sm font-semibold text-black hover:bg-white/90">
              <Link href="/projects">Explore Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-none border-white px-8 text-sm font-semibold text-white hover:bg-white hover:text-black">
              <Link href="/contact">Book Site Visit</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* 02 Trust Strip */}
    <section className="bg-hero-foreground/5 py-12 md:py-16">
      <div className="container-shell">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 divide-x divide-border/20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left px-4">
              <p className="font-display text-4xl md:text-5xl text-hero">{stat.value}{stat.suffix}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.1em] text-muted-foreground">{stat.label}</p>
              <p className="mt-1 text-[10px] text-muted-foreground/60">As of Sept 2026</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 03 Featured Ongoing Projects */}
    <section id="featured" className="py-20 md:py-28">
      <div className="container-shell">
        <SectionHeading eyebrow="Featured Projects" title={<>Built for today.<br /><em>Planned for tomorrow.</em></>} body="Spaces thoughtfully planned, developed and built for lasting value." />
        <div className="mt-16 space-y-16">
          {projects.map((project, index) => (
            <Reveal key={project.slug} className={`grid items-center gap-8 lg:grid-cols-12 ${index % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <RevealImage src={project.image} alt={project.imageAlt} className={`${index % 2 ? "lg:col-span-7" : "lg:col-span-7"} aspect-[4/3] rounded-sm overflow-hidden`} />
              <div className={`${index % 2 ? "lg:col-span-5" : "lg:col-span-5"} bg-card p-8 md:p-12 border border-border shadow-sm`}>
                <div className="flex items-center gap-3">
                  <span className="bg-wine/10 text-wine px-2 py-1 text-[10px] font-bold uppercase tracking-widest">{project.status}</span>
                  <p className="micro-label text-muted-foreground">{project.location}</p>
                </div>
                <h3 className="mt-5 font-display text-4xl md:text-5xl">{project.name}</h3>
                <p className="mt-3 text-xs uppercase tracking-[0.13em] text-muted-foreground">RERA: {project.rera}</p>
                
                <div className="mt-6 grid grid-cols-2 gap-4 border-y border-border py-6 text-sm">
                  <div><span className="block text-muted-foreground text-xs uppercase mb-1">Scale</span> {project.area}</div>
                  <div><span className="block text-muted-foreground text-xs uppercase mb-1">Units</span> {project.units}</div>
                </div>

                <ul className="mt-6 space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  {project.highlights?.map(h => <li key={h}>{h}</li>)}
                </ul>

                <div className="mt-8 flex gap-4">
                  <Button asChild variant="default"><Link href={`/projects/${project.slug}`}>View Project</Link></Button>
                  <Button asChild variant="outline"><Link href="/contact">Book Site Visit</Link></Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 04 Explore by Need */}
    <section className="bg-card py-24 md:py-36">
      <div className="container-shell">
        <SectionHeading eyebrow="Explore by Need" title={<>Places with purpose.<br /><em>Value with vision.</em></>} body="From residential communities to investment opportunities, every segment is shaped by context, use and long-term potential." />
        <div className="mt-16 grid gap-3 md:grid-cols-2">
          {[
            ["01", "Residential Plots", "Thoughtfully planned communities for modern family living.", images.residentialImage],
            ["02", "Integrated Townships", "Connected neighbourhoods shaped around landscape and everyday life.", images.townshipImage],
            ["03", "Commercial", "Purposeful destinations designed for work, exchange and growth.", images.commercialImage],
            ["04", "Investment Opportunities", "Real estate opportunities considered through a long-term lens.", images.vedantaImage]
          ].map(([n, title, desc, img]) => (
            <article key={title} className="group relative aspect-[4/3] overflow-hidden bg-hero text-hero-foreground">
              <img src={img} alt={`${title} development`} loading="lazy" width={1400} height={1100} className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-55" />
              <div className="absolute inset-0 bg-gradient-to-t from-hero/90 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
                <span className="font-display text-4xl text-hero-foreground/45">{n}</span>
                <h3 className="mt-4 font-display text-4xl md:text-5xl">{title}</h3>
                <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="max-w-sm pt-4 text-sm leading-6 text-hero-foreground/70">{desc}</p>
                    <div className="pt-5"><TextLink>View Availability</TextLink></div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* 05 Why VRB */}
    <section id="why-vrb" className="py-24 md:py-36">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading eyebrow="Why VRB" title="Building Trust Through Quality" body="We don't just sell properties. We create thoughtfully designed spaces and long-term value—bringing disciplined planning, quality and a customer-first perspective to every development." />
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7 divide-y divide-border border-y border-border">
            {principles.map(([n, title, body]) => (
              <div key={n} className="grid gap-3 py-6 md:grid-cols-12 md:items-start md:py-8">
                <span className="font-display text-3xl text-wine md:col-span-2 pt-1">{n}</span>
                <div className="md:col-span-10">
                  <h3 className="font-display text-2xl md:text-3xl">{title}</h3>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* 06 Project Proof (Masterplan) */}
    <section className="bg-stone py-24 md:py-36">
      <div className="container-shell grid gap-12 lg:grid-cols-12 lg:items-center">
        <RevealImage src={images.masterplanImage} alt="Masterplan visualization" className="aspect-[4/3] lg:col-span-7" />
        <Reveal className="lg:col-span-4 lg:col-start-9">
          <p className="micro-label text-wine">Project Proof</p>
          <h2 className="mt-6 font-display text-5xl leading-[0.92]">Masterplanning <br/><em>Done Right.</em></h2>
          <p className="mt-7 text-sm leading-7 text-muted-foreground">Before any project is launched, the infrastructure—wide roads, water, electricity, and parks—is meticulously planned and executed. You invest in a ready foundation.</p>
        </Reveal>
      </div>
    </section>

    {/* 08 Customer Stories */}
    <section className="py-24 md:py-36 bg-hero text-hero-foreground">
      <div className="container-shell">
        <SectionHeading light eyebrow="Customer Stories" title={<>Trust earned, <br/><em>one family at a time.</em></>} />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <article key={i} className="bg-hero-foreground/5 p-8 border border-hero-foreground/10">
              <div className="text-wine text-2xl mb-4">"</div>
              <p className="text-sm leading-6 text-hero-foreground/80 italic mb-8">{t.quote}</p>
              <div className="mt-auto border-t border-hero-foreground/10 pt-4">
                <p className="font-bold text-sm">{t.name}</p>
                <p className="text-xs text-hero-foreground/60">{t.project}, {t.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* 09 About VRB (Brief) */}
    <section className="bg-card py-24 md:py-36">
      <div className="container-shell grid gap-12 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-5">
          <p className="micro-label text-wine">VRB Foundation & Story</p>
          <h2 className="mt-6 font-display text-6xl leading-[0.92]">Building<br /><em>Beyond Business.</em></h2>
          <p className="mt-7 text-sm leading-7 text-muted-foreground">Our responsibility extends beyond development. From community welfare to environmental sustainability, VRB represents a commitment to stronger communities and a more thoughtful tomorrow.</p>
          <Link href="/about" className="mt-8 inline-block"><TextLink>Discover our story</TextLink></Link>
        </Reveal>
        <RevealImage src={images.foundationImage} alt="Community members planting a tree together" className="aspect-[4/3] lg:col-span-7 lg:col-start-6" />
      </div>
    </section>

    <ContactSection />
  </>;
}
