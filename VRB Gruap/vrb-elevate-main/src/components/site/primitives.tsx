"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, body, light = false, className }: { eyebrow: string; title: ReactNode; body?: string; light?: boolean; className?: string }) {
  return <header className={cn("grid gap-8 lg:grid-cols-12 lg:items-end", className)}>
    <div className="lg:col-span-8">
      <p className={cn("micro-label", light && "text-hero-foreground/70")}>{eyebrow}</p>
      <h2 className={cn("mt-5 font-display text-5xl leading-[0.94] text-balance md:text-7xl", light && "text-hero-foreground")}>{title}</h2>
    </div>
    {body && <p className={cn("max-w-md text-sm leading-7 text-muted-foreground lg:col-span-4 lg:pb-2", light && "text-hero-foreground/70")}>{body}</p>}
  </header>;
}

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry?.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.15 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={cn("reveal", visible && "is-visible", className)} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function RevealImage({ src, alt, className, imgClassName, eager = false }: { src: string; alt: string; className?: string; imgClassName?: string; eager?: boolean }) {
  return <Reveal className={cn("image-reveal overflow-hidden", className)}><img src={src} alt={alt} width={1600} height={1100} loading={eager ? "eager" : "lazy"} className={cn("h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.025]", imgClassName)} /></Reveal>;
}

export function TextLink({ children }: { children: ReactNode }) {
  return <span className="link-arrow inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em]">{children}<ArrowUpRight aria-hidden="true" className="size-4 transition-transform" /></span>;
}

export function PageHero({ eyebrow, title, intro, image, imageAlt }: { eyebrow: string; title: ReactNode; intro: string; image: string; imageAlt: string }) {
  return <section className="relative min-h-[78svh] overflow-hidden bg-hero text-hero-foreground">
    <img src={image} alt={imageAlt} width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover opacity-55" />
    <div className="absolute inset-0 bg-hero-overlay" />
    <div className="container-shell relative flex min-h-[78svh] flex-col justify-end pb-16 pt-36 md:pb-24">
      <p className="micro-label text-hero-foreground/70">{eyebrow}</p>
      <h1 className="mt-6 max-w-5xl font-display text-6xl leading-[0.88] text-balance md:text-8xl lg:text-[7.5rem]">{title}</h1>
      <p className="mt-8 max-w-xl text-sm leading-7 text-hero-foreground/75 md:text-base">{intro}</p>
    </div>
  </section>;
}
