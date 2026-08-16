// src/lib/mockData/portfolioData.ts

export type Portfolio = {
  id: number;
  category: string[];
  size?: "big" | "mid";
  img: string;
  title: string;
  description: string;
  techStack: string[];
};

export const portfolioData: Portfolio[] = [
  {
    id: 1,
    category: ["shopify", "react"],
    size: "big",
    img: "/images/projects/project-1.png",
    title: "Custom React-Powered Shopify Storefront",
    description:
      "Engineered a custom React-powered Shopify storefront for a laser-engraving retailer, building real-time logo upload and live text-engraving previews that let non-technical store admins manage product customization without developer involvement.",
    techStack: ["React.js", "Shopify", "Liquid", "Headless Commerce", "REST API"],
  },
  {
    id: 2,
    category: ["nextjs", "react"],
    size: "mid",
    img: "/images/projects/project-2.png",
    title: "Next.js 14 Marketing Site Migration",
    description:
      "Led migration of a Canadian marketing agency's site from React/Vite to Next.js 14 — implementing SSR/SSG rendering, dynamic generateMetadata SEO tags, and structured data across 25+ city-specific landing pages to support local SEO at scale.",
    techStack: ["Next.js 14", "React", "TypeScript", "SSR/SSG", "SEO"],
  },
  {
    id: 3,
    category: ["wordpress"],
    img: "/images/projects/project-3.png",
    title: "WordPress Property Listings Platform",
    description:
      "Built a property listings platform using custom post types, ACF fields, and dynamic Elementor/MetForm integrations, giving clients self-service control over 300+ live listings and removing developer dependency for routine updates.",
    techStack: ["WordPress", "ACF", "Elementor", "MetForm", "Custom Post Types"],
  },
  {
    id: 4,
    category: ["wordpress", "performance"],
    img: "/images/projects/project-4.png",
    title: "WordPress Performance Optimization",
    description:
      "Optimized database queries and integrated CDN delivery with lazy loading, lifting Google PageSpeed scores from the 60s to a consistent 85–95 range across multiple client sites.",
    techStack: ["WordPress", "CDN", "Database Optimization", "Lazy Loading", "Core Web Vitals"],
  },
  {
    id: 5,
    category: ["shopify", "wordpress", "migration"],
    img: "/images/projects/project-5.png",
    title: "Zero-Downtime CMS Migrations",
    description:
      "Executed zero-downtime migrations of 6+ legacy sites to modern CMS platforms (WordPress, Shopify) and integrated third-party APIs — payment gateways, CRM, marketing automation — preserving data integrity and search rankings throughout.",
    techStack: ["WordPress", "Shopify", "Migration", "API Integration", "CRM", "Payment Gateways"],
  },
  {
    id: 6,
    category: ["webflow", "wordpress", "wix"],
    img: "/images/projects/project-6.png",
    title: "Multi-CMS Client Portfolio",
    description:
      "Deliver and maintain responsive websites across WordPress, Webflow, Shopify, and Wix for 12+ concurrent client accounts, sustaining a consistent on-time delivery record.",
    techStack: ["WordPress", "Webflow", "Shopify", "Wix", "Responsive Design"],
  },
];