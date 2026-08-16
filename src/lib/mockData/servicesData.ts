// src/lib/mockData/servicesData.ts

export type Service = {
  id: number;
  title: string;
  features: string[];
};

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Frontend Development",
    features: [
      "HTML5, CSS3 & JavaScript (ES6+) development",
      "React.js & Next.js (SSR/SSG, generateMetadata) applications",
      "Responsive, mobile-first UI implementation",
      "Pixel-perfect conversion from design mockups",
      "Core Web Vitals & performance optimization",
    ],
  },
  {
    id: 2,
    title: "CMS Development",
    features: [
      "Custom WordPress themes & plugins from scratch",
      "Webflow design & development",
      "Shopify theme customization & app integration",
      "Wix website design & configuration",
      "CMS migrations with zero data loss & SEO preservation",
    ],
  },
  {
    id: 3,
    title: "React + Shopify Integration",
    features: [
      "Custom React components embedded in Shopify storefronts",
      "Headless-style, highly interactive commerce builds",
      "Dynamic product customization (live previews, configurators)",
      "Shopify Liquid + React hybrid architectures",
      "Performance-tuned storefronts for conversion optimization",
    ],
  },
  {
    id: 4,
    title: "SEO & Performance",
    features: [
      "On-page SEO — meta tags, schema markup, structured data",
      "Technical SEO audits & fixes",
      "Core Web Vitals optimization (LCP, CLS, INP)",
      "Site speed & image optimization",
      "City-specific / local SEO landing pages at scale (25+ pages)",
    ],
  },
  {
    id: 5,
    title: "API Integration & Automation",
    features: [
      "Payment gateway integration (Stripe, PayPal, Razorpay)",
      "CRM integration (HubSpot, Salesforce, Zoho)",
      "Marketing automation (Mailchimp, ActiveCampaign, Klaviyo)",
      "Third-party REST/GraphQL API consumption",
      "Custom webhook & event-driven architectures",
    ],
  },
  {
    id: 6,
    title: "Client & Project Management",
    features: [
      "End-to-end project ownership — discovery to deployment",
      "Requirements gathering & technical scoping",
      "Agile delivery in cross-functional teams",
      "Ongoing maintenance & support for 12+ concurrent accounts",
      "Conversion-focused feature delivery tied to client KPIs",
    ],
  },
];