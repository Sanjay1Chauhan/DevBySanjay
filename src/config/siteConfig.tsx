// src/config/siteConfig.ts

const BASE = "/DevBySanjay";

export const siteConfig = {
  // ============================================
  // Basic Branding
  // ============================================
  siteName: "DevBySanjay",
  authorName: "Sanjay Chauhan",
  title: "Sanjay Chauhan | Frontend & CMS Web Developer",
  description:
    "Frontend & CMS Web Developer with 4+ years of experience delivering 35+ client projects across WordPress, Shopify, Webflow, and React/Next.js. Specialized in React-powered Shopify storefronts and Next.js SSR/SSG migrations.",
  url: "https://yourdomain.com",

  // ============================================
  // Logo Paths (Public Folder)
  // ============================================
  logo: `${BASE}/images/DevBySanjay-light-logo-v1.png`,
  logoDark: `${BASE}/images/DevBySanjay-dark-logo-v1.png`,
  favicon: `${BASE}/images/favicon.png`,

  // ============================================
  // Contact Information
  // ============================================
  email: "snjchauhanofficial@gmail.com",
  phone: "+91 98789-63767",
  location: "Ludhiana, Punjab, India",

  // Dynamic mailto with subject
  get mailTo() {
    return `mailto:${this.email}?subject=Project Inquiry&body=Hi ${this.authorName},%0D%0A%0D%0AI would like to discuss a project with you.`;
  },

  // ============================================
  // CV Download
  // ============================================
  cvUrl:
    "https://drive.google.com/uc?export=download&id=1nNOYVDdnpMWvgMObkNuAYkuIQt9VQecE",

  // ============================================
  // Social Links
  // ============================================
  social: {
    facebook: "https://www.facebook.com/",
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com/in/sanjay-chauhan-dev/",
    github: "https://github.com/snjchauhan07",
    behance: "https://www.behance.net/",
    dribbble: "https://dribbble.com/",
  },

  // ============================================
  // Copyright
  // ============================================
  get copyright() {
    return `© ${new Date().getFullYear()} DevBySanjay. All rights reserved.`;
  },
};