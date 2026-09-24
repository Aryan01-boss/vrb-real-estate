"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { projects } from "@/lib/site-data";

const fieldClass = "h-12 rounded-none border-0 border-b border-input px-0 shadow-none focus-visible:ring-0 focus-visible:border-wine";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); event.currentTarget.reset(); };
  if (sent) return <div role="status" className="flex min-h-80 flex-col justify-center border-y border-border"><Check className="size-8 text-wine"/><h3 className="mt-5 font-display text-4xl">Thank you for your interest.</h3><p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">Your enquiry has been captured in this preview. Connect a delivery service before launch to route submissions to the VRB team.</p><Button variant="outline" className="mt-8 w-fit" onClick={() => setSent(false)}>Send another enquiry</Button></div>;
  return <form onSubmit={submit} className="grid gap-x-8 gap-y-5 md:grid-cols-2">
    <label className="text-xs font-semibold uppercase tracking-[0.12em]">Name<Input required name="name" autoComplete="name" className={fieldClass} placeholder="Your full name" /></label>
    <label className="text-xs font-semibold uppercase tracking-[0.12em]">Phone<Input required name="phone" type="tel" autoComplete="tel" className={fieldClass} placeholder="Your phone number" /></label>
    <label className="text-xs font-semibold uppercase tracking-[0.12em]">I’m interested in<select required name="interest" defaultValue="" className="h-12 w-full border-0 border-b border-input bg-transparent text-sm font-normal text-muted-foreground focus:border-wine focus:outline-none"><option value="" disabled>Select interest</option><option>Site Visit</option><option>Request Brochure</option><option>Call Back</option><option>Investment Details</option></select></label>
    <label className="text-xs font-semibold uppercase tracking-[0.12em]">Preferred project<select name="project" defaultValue="" className="h-12 w-full border-0 border-b border-input bg-transparent text-sm font-normal text-muted-foreground focus:border-wine focus:outline-none"><option value="">Not decided</option>{projects.map((p) => <option key={p.slug}>{p.name}</option>)}</select></label>
    <label className="text-xs font-semibold uppercase tracking-[0.12em] md:col-span-2">Preferred contact time<select name="time" defaultValue="" className="h-12 w-full border-0 border-b border-input bg-transparent text-sm font-normal text-muted-foreground focus:border-wine focus:outline-none"><option value="">Anytime</option><option>Morning (9 AM - 12 PM)</option><option>Afternoon (12 PM - 4 PM)</option><option>Evening (4 PM - 7 PM)</option></select></label>
    <Button type="submit" variant="wine" size="lg" className="mt-5 w-fit md:col-span-2">Request Project Details <ArrowRight /></Button>
  </form>;
}
