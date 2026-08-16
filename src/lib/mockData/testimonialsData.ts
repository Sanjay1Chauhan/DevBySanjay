// src/lib/mockData/testimonialsData.ts

export type TestimonialType = {
  id: number;
  author: string;
  role: string;
  text: string;
};

export const testimonialsData: TestimonialType[] = [
  {
    id: 1,
    author: "Laser Engraving Retailer",
    role: "Shopify + React E-Commerce Client",
    text: "Sanjay delivered our Shopify storefront with a custom React product configurator that our team couldn't believe was possible. The live engraving preview feature has directly increased our conversion rate. Truly exceptional work.",
  },
  {
    id: 2,
    author: "Canadian Marketing Agency",
    role: "Next.js Migration Client",
    text: "We hired Sanjay to migrate our agency site from React/Vite to Next.js with local SEO landing pages for 25+ cities. He handled everything — SSR, structured data, metadata — and our organic traffic grew significantly within weeks.",
  },
  {
    id: 3,
    author: "Real Estate Platform",
    role: "WordPress Custom Development Client",
    text: "Sanjay rebuilt our WordPress property listings platform from scratch. With 300+ live listings now fully managed by our team through ACF, the site runs faster than ever and PageSpeed scores jumped from the 60s to 90+.",
  },
  {
    id: 4,
    author: "Early-Stage Startup Founder",
    role: "WordPress & Shopify Build Client",
    text: "Sanjay delivered our startup's WordPress and Shopify sites in just 3-4 weeks from kickoff to launch. His ability to work across multiple CMS platforms and integrate payment gateways, CRM, and marketing automation saved us months of development time.",
  },
];