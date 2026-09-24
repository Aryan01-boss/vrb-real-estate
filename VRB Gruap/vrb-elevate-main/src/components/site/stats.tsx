"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/site-data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      const start = performance.now();
      const duration = 1100;
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setShown(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.4 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);
  return <span ref={ref}>{shown.toLocaleString("en-IN")}{suffix}</span>;
}

export function Stats() {
  return <div className="grid border-y border-border sm:grid-cols-2 lg:grid-cols-5">
    {stats.map((stat) => <div key={stat.label} className="border-b border-border px-0 py-8 sm:px-6 sm:nth-[2n]:border-l lg:border-b-0 lg:border-l lg:first:border-l-0">
      <div className="font-display text-5xl text-wine md:text-6xl"><Counter value={stat.value} suffix={stat.suffix} /></div>
      <p className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">{stat.label}</p>
    </div>)}
  </div>;
}
