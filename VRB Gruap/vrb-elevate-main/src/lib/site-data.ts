export const images = { 
  logo: "/vrbgroup.co-images/VRB-NEW-LOGO-01.png",
  heroImage: "/vrbgroup.co-images/ENTRANCE-GATE-C1-scaled.png", 
  vedantaImage: "/vrbgroup.co-images/VBH-View-3.jpg.jpeg", 
  residentialImage: "/vrbgroup.co-images/Gazebos-and-Pergolas-scaled-1.jpg.jpeg", 
  commercialImage: "/vrbgroup.co-images/real-estate-investment-concept-.jpg.jpeg", 
  townshipImage: "/vrbgroup.co-images/SOOD-VIHAAR-VIEW-30.jpg.jpeg", 
  foundationImage: "/vrbgroup.co-images/family-and-real-estate-agent-talking-in-new-apartment.jpg.jpeg", 
  masterplanImage: "/vrbgroup.co-images/WhatsApp-Image-2024-02-01-at-14.51.19_1bd14c2f.jpg.jpeg" 
};

export type Project = {
  slug: string;
  name: string;
  location: string;
  category: string;
  status: "Ongoing" | "Completed" | "Development";
  description: string;
  image: string;
  imageAlt: string;
  rera: string;
  area: string;
  units: string;
  highlights: string[];
};

export const projects: Project[] = [
  { slug: "vrb-vedanta-greens", name: "VRB Vedanta Greens", location: "Jaipur, Rajasthan", category: "Residential Development", status: "Ongoing", description: "A thoughtfully planned community shaped around landscape, connection and enduring value.", image: images.vedantaImage, imageAlt: "Aerial view of a landscaped residential township in Jaipur", rera: "[Verified RERA No.]", area: "[X] Acres", units: "[Y]+ Units", highlights: ["Prime Location", "Premium Amenities", "Secure Campus"] },
  { slug: "royal-residency-phase-1", name: "Royal Residency Phase 1st", location: "Rajasthan", category: "Residential", status: "Development", description: "A considered residential address balancing privacy, community and everyday ease.", image: images.residentialImage, imageAlt: "Contemporary warm-stone residential architecture surrounded by gardens", rera: "[Verified RERA No.]", area: "[X] Acres", units: "[Y]+ Units", highlights: ["Modern Infrastructure", "Green Spaces", "24/7 Security"] },
  { slug: "sky-view-city", name: "Sky View City", location: "Rajasthan", category: "Integrated Township", status: "Development", description: "An expansive urban vision built around open space and connected neighbourhood living.", image: images.townshipImage, imageAlt: "Aerial view of an integrated green township at sunset", rera: "[Verified RERA No.]", area: "[X] Acres", units: "[Y]+ Units", highlights: ["Township Planning", "Commercial Zones", "Strategic Connectivity"] },
  { slug: "anandvan-city", name: "Anandvan City", location: "Rajasthan", category: "Investment Opportunity", status: "Development", description: "Land and infrastructure planned with a clear view toward tomorrow's growth.", image: images.commercialImage, imageAlt: "Contemporary mixed-use property with a landscaped public plaza", rera: "[Verified RERA No.]", area: "[X] Acres", units: "[Y]+ Units", highlights: ["High ROI Potential", "Future-ready Infrastructure", "Clear Titles"] },
];

export const stats = [
  { value: 25, suffix: "+", label: "Years of experience" },
  { value: 10, suffix: "K+", label: "Plots sold" },
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 12, suffix: "K+", label: "Happy families" },
];

export const principles = [
  ["01", "Transparent & Compliant", "Every project is RERA registered with clear titles and transparent documentation."],
  ["02", "Planned Development", "Infrastructure, wide roads, and community spaces designed before the first brick is laid."],
  ["03", "Delivery & Customer Support", "Dedicated relationship managers from site visit to handover and beyond."],
];

export const testimonials = [
  { name: "[Customer Name]", project: "VRB Vedanta Greens", location: "Jaipur", quote: "The transparency in the documentation and the clear communication from the team made our investment decision very easy. The infrastructure is exactly as promised." },
  { name: "[Customer Name]", project: "Sky View City", location: "Rajasthan", quote: "We visited multiple projects, but VRB's focus on wide roads, greenery, and planning stood out. A truly premium township experience." },
  { name: "[Customer Name]", project: "Royal Residency", location: "Rajasthan", quote: "From the first site visit to the final handover, the VRB team was highly professional. They delivered on their commitments on time." },
];

export const navItems = [
  { label: "Projects", to: "/projects" as const },
  { label: "Why VRB", to: "/#why-vrb" as const },
  { label: "About", to: "/about" as const },
  { label: "Media/Insights", to: "/media" as const },
  { label: "Contact", to: "/contact" as const },
];
