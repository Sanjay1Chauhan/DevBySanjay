// src/lib/mockData/experienceData.ts

export type ExperienceItem = {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
};

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: "Frontend & CMS Web Developer",
    company: "Avansoar Softech Pvt. Ltd.",
    location: "Ludhiana",
    period: "Aug 2024 – Present",
    current: true,
    highlights: [
      "Deliver and maintain responsive websites across WordPress, Webflow, Shopify, and Wix for 12+ concurrent client accounts.",
      "Engineered a custom Shopify storefront for a laser-engraving retailer — React components for real-time logo upload and live text-engraving previews on product pages.",
      "Led migration of a Canadian marketing agency's site from React/Vite to Next.js 14, implementing SSR/SSG, dynamic generateMetadata SEO tags, and structured data across 25+ city-specific landing pages.",
      "Own the full client lifecycle — discovery, requirements gathering, technical scoping, and delivery.",
    ],
  },
  {
    id: 2,
    role: "WordPress Developer",
    company: "Utopian Gateway",
    location: "Ludhiana",
    period: "Sep 2023 – Jul 2024",
    highlights: [
      "Architected custom WordPress themes and plugins from scratch for 8+ clients, prioritizing code quality and security hardening.",
      "Built a property listings platform with custom post types, ACF fields, and dynamic Elementor/MetForm integrations — giving clients self-service control over 300+ live listings.",
      "Optimized database queries and integrated CDN with lazy loading, lifting Google PageSpeed scores from the 60s to a consistent 85–95 range.",
      "Executed zero-downtime migrations of 6+ legacy sites and integrated third-party APIs — payment gateways, CRM, marketing automation.",
    ],
  },
  {
    id: 3,
    role: "WordPress Developer",
    company: "Virtual View India",
    location: "Ludhiana",
    period: "Apr 2023 – Aug 2023",
    highlights: [
      "Designed and developed 10+ responsive WordPress and Wix websites with custom themes tailored to individual client branding.",
      "Conducted end-to-end SEO audits and implemented technical fixes — meta tags, schema markup, site structure.",
      "Improved Core Web Vitals through targeted image optimization and code minification, cutting average page load time by ~30%.",
    ],
  },
  {
    id: 4,
    role: "Web Developer",
    company: "DezWeb Solutions",
    location: "Ludhiana",
    period: "Oct 2022 – Mar 2023",
    highlights: [
      "Built responsive, cross-browser websites using HTML5, CSS3, JavaScript, and WordPress as an entry-level developer.",
      "Translated UI/UX design mockups into pixel-perfect, functional interfaces in close collaboration with designers.",
      "Participated in peer code reviews and knowledge-sharing sessions, contributing to team-wide coding standards.",
    ],
  },
];

export const educationData = [
  {
    id: 1,
    degree: "Full Stack Web Development Certification",
    institution: "STEP GNE College",
    location: "Ludhiana",
    year: "2022",
  },
  {
    id: 2,
    degree: "Senior Secondary – Computer Science (Vocational)",
    institution: "Government Senior Secondary School",
    location: "Ludhiana",
    year: "2022",
  },
];
