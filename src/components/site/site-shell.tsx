"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images, navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const isImageHero = pathname !== "/contact";
  
  useEffect(() => {
    setOpen(false);
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const max = document.documentElement.scrollHeight - innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);
  
  useEffect(() => { 
    document.body.style.overflow = open ? "hidden" : ""; 
    return () => { document.body.style.overflow = ""; }; 
  }, [open]);

  const solid = scrolled || !isImageHero;
  return <>
    <a href="#main" className="fixed left-3 top-3 z-[80] -translate-y-20 bg-primary px-4 py-3 text-xs text-primary-foreground focus:translate-y-0">Skip to content</a>
    <div className="fixed left-0 top-0 z-[70] h-0.5 bg-wine transition-[width]" style={{ width: `${progress}%` }} />
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b transition-all duration-500", solid ? "border-border bg-background/95 text-foreground backdrop-blur-xl" : "border-transparent bg-transparent text-hero-foreground")}>
      <div className="container-shell flex h-20 items-center justify-between lg:h-24">
        <Link href="/" aria-label="VRB Group home" className="relative z-[60] flex items-center gap-3">
          <img src={images.logo} alt="VRB Group Logo" className={cn("h-10 w-auto object-contain transition-all", solid || open ? "invert-0" : "invert brightness-0")} />
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link 
              key={item.to} 
              href={item.to} 
              className={cn(
                "text-[0.66rem] font-semibold uppercase tracking-[0.14em] transition-opacity hover:opacity-100",
                pathname === item.to ? "opacity-100" : "opacity-75"
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-4 flex items-center gap-3">
            <Button asChild variant={solid ? "outline" : "heroGhost"} size="sm"><Link href="/contact">Talk to Advisor</Link></Button>
            <Button asChild variant={solid ? "wine" : "hero"} size="sm"><Link href="/contact">Book Site Visit <ArrowUpRight className="ml-2 size-4" /></Link></Button>
          </div>
        </nav>
        <Button type="button" variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} className={cn("relative z-[60] lg:hidden", open && "text-hero-foreground hover:bg-hero-foreground/10")}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
    </header>
    <div className={cn("fixed inset-0 z-40 bg-hero text-hero-foreground transition-[clip-path] duration-700 lg:hidden", open ? "pointer-events-auto [clip-path:inset(0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]")}>
      <div className="container-shell flex min-h-svh flex-col justify-center pt-24">
        <nav aria-label="Mobile navigation" className="flex flex-col">
          {navItems.map((item, index) => <Link key={item.to} href={item.to} className="border-t border-hero-foreground/20 py-4 font-display text-4xl">0{index + 1} <span className="ml-5">{item.label}</span></Link>)}
        </nav>
        <p className="mt-10 max-w-xs text-sm leading-6 text-hero-foreground/60">Creating spaces. Building trust. Shaping tomorrow.</p>
      </div>
    </div>
    <main id="main">{children}</main>
    <Footer />
  </>;
}

function Footer() {
  return (
    <>
      <section className="bg-stone py-20 md:py-28 text-center border-b border-border">
        <div className="container-shell">
          <p className="micro-label text-wine">Next Steps</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Looking for the right project?</h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" variant="default"><Link href="/contact">Book a Site Visit</Link></Button>
            <Button asChild size="lg" variant="outline"><Link href="/contact">Talk to a Project Advisor</Link></Button>
          </div>
        </div>
      </section>
      <footer className="relative overflow-hidden bg-hero text-hero-foreground">
        <img src={images.heroImage} alt="" width={1920} height={1080} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-10" />
        <div className="container-shell relative py-20 md:py-28">
          <div className="grid gap-14 border-b border-hero-foreground/20 pb-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Link href="/" className="inline-block"><img src={images.logo} alt="VRB Group Logo" className="h-12 w-auto invert brightness-0" /></Link>
              <p className="mt-7 max-w-sm text-sm leading-6 text-hero-foreground/75">Creating spaces. Building trust. Shaping tomorrow. We deliver thoughtfully planned developments across Rajasthan.</p>
              <div className="mt-8 flex flex-col gap-2 text-sm text-hero-foreground/60">
                <p><strong>Corporate Office:</strong> [Verified Address]</p>
                <p><strong>Phone:</strong> [Verified Phone]</p>
                <p><strong>Email:</strong> [Verified Email]</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-10 text-sm lg:col-span-6 lg:col-start-7">
              <div><p className="micro-label text-hero-foreground/45">Quick Links</p><div className="mt-6 flex flex-col gap-4">{navItems.map((item) => <Link key={item.to} href={item.to} className="text-hero-foreground/75 hover:text-hero-foreground">{item.label}</Link>)}</div></div>
              <div>
                <p className="micro-label text-hero-foreground/45">Featured Projects</p>
                <div className="mt-6 flex flex-col gap-4">
                  <Link href="/projects/vrb-vedanta-greens" className="text-hero-foreground/75 hover:text-hero-foreground">VRB Vedanta Greens</Link>
                  <Link href="/projects/royal-residency-phase-1" className="text-hero-foreground/75 hover:text-hero-foreground">Royal Residency</Link>
                  <Link href="/projects/sky-view-city" className="text-hero-foreground/75 hover:text-hero-foreground">Sky View City</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 pt-7 text-[0.65rem] uppercase tracking-[0.14em] text-hero-foreground/50 md:flex-row md:items-center md:justify-between"><p>© {new Date().getFullYear()} VRB Group</p><div className="flex gap-6"><span>Privacy policy</span><span>Terms</span><span>Disclaimer</span></div></div>
        </div>
      </footer>
    </>
  );
}
