# VRB Group Premium Website Rebuild

## Goal
Build a production-ready, multi-page real-estate website that positions VRB Group as a serious developer and long-term investment brand. The experience will use warm ivory surfaces, charcoal typography, restrained burgundy accents, architectural photography, editorial layouts, and subtle cinematic motion.

## Current-state findings
- The project is a clean TanStack Start starter with only the `/` placeholder route.
- There are no existing project images, content files, forms, integrations, or backend workflows to preserve.
- Existing UI primitives and Tailwind v4 are available; no database is connected.
- Only facts explicitly supplied in the brief will be presented as facts. Missing addresses, contact details, land areas, unit counts, and project locations will not be invented.

## Pages and journey
1. **Shared site frame** — transparent-to-ivory sticky navigation, desktop links, full-screen mobile menu, scroll progress, and a large architectural footer.
2. **Home `/`** — cinematic image-led opening, featured development, company statement and editorial statistics, development segments, asymmetric selected-project showcase, “Why VRB,” trust/philosophy, foundation impact, editorial news, and enquiry section.
3. **About `/about`** — focused company positioning, principles, track record, and trust narrative.
4. **Projects `/projects`** — editorial portfolio view for the four supplied developments.
5. **Project detail `/projects/$slug`** — immersive project opening, overview, known facts, master-plan presentation, amenities, location context, masonry gallery, and enquiry call-to-action.
6. **Foundation `/foundation`** — emotionally distinct community-impact presentation without invented initiative claims.
7. **Media `/media`** — editorial news/events/announcements layout using clearly labeled sample editorial content where exact articles are unavailable.
8. **Contact `/contact`** — clean enquiry form and contact-intent paths; no invented phone, email, or office address.

## Visual system
- Create semantic Tailwind tokens for ivory, charcoal, wine, warm stone, fine borders, overlays, and restrained shadows.
- Use Cormorant Garamond for editorial display type and Manrope for interface/body type, loaded in the document head.
- Use a 12-column composition, generous whitespace, sharp/slightly softened edges, refined rules, oversized numbering, and image-first layouts.
- Generate a coherent architectural image set for the hero, developments, foundation, editorial stories, gallery, and footer rather than using stock placeholders.

## Interaction and motion
- Build lightweight scroll-aware navigation, image parallax, reveal transitions, counters, image clipping, hover disclosures, animated arrows, and a desktop cursor treatment.
- Use GPU-friendly CSS and small React observers instead of adding a heavy animation stack unless needed.
- Respect reduced-motion preferences and preserve keyboard access, focus visibility, and touch-friendly behavior.

## Reusable building blocks
Create shared navigation, footer, section heading, animated text, reveal image, project showcase/card, statistics, category panel, article feature, and enquiry form components, plus a central content model for projects and site copy.

## Forms and data boundaries
- The enquiry form will be fully validated and provide clear success/error feedback in the interface.
- Because no backend or delivery service is connected, submission will remain an in-page demonstration rather than sending leads externally.
- A real map/API integration will not be added without verified locations and a connected mapping service; project pages will use an editorial location panel based only on known location data.

## SEO, accessibility, and performance
- Add unique title, description, Open Graph, Twitter card, semantic headings, and appropriate structured data to every content page.
- Add accurate alt text, labels, error associations, skip navigation, keyboard-safe menus, and reduced-motion behavior.
- Lazy-load below-fold imagery, reserve image dimensions, limit animation work, and keep mobile layouts intentionally recomposed rather than mechanically stacked.

## Verification
- Check all public routes, navigation, project links, menus, forms, and interactive states.
- Review at desktop, tablet, and mobile widths for overflow, typography, image framing, and touch targets.
- Confirm build health, runtime/console errors, image loading, metadata, keyboard flow, and reduced-motion behavior.
