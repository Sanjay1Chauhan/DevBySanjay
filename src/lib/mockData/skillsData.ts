// src/lib/mockData/skillsData.ts

const BASE = "/DevBySanjay";

export type Skill = {
  img: string;
  percent: string;
  name: string;
};

export const skills: Skill[] = [
  {
    img: `${BASE}/images/skills/HTML.png`,
    percent: "95%",
    name: "HTML5",
  },
  {
    img: `${BASE}/images/skills/CSS.png`,
    percent: "92%",
    name: "CSS3",
  },
  {
    img: `${BASE}/images/skills/JS.png`,
    percent: "88%",
    name: "JavaScript (ES6+)",
  },
  {
    img: `${BASE}/images/skills/REACTJS.png`,
    percent: "90%",
    name: "React.js",
  },
  {
    img: `${BASE}/images/skills/NEXTJS.png`,
    percent: "85%",
    name: "Next.js (SSR/SSG)",
  },
  {
    img: `${BASE}/images/skills/WORDPRESS.png`,
    percent: "95%",
    name: "WordPress",
  },
  {
    img: `${BASE}/images/skills/SHOPIFY.png`,
    percent: "88%",
    name: "Shopify",
  },
  {
    img: `${BASE}/images/skills/WEBFLOW.png`,
    percent: "85%",
    name: "Webflow",
  },
  {
    img: `${BASE}/images/skills/WIX.png`,
    percent: "80%",
    name: "Wix",
  },
  {
    img: `${BASE}/images/skills/GIT.png`,
    percent: "90%",
    name: "Git",
  },
  {
    img: `${BASE}/images/skills/GITHUB.png`,
    percent: "90%",
    name: "GitHub",
  },
  {
    img: `${BASE}/images/skills/ACF.png`,
    percent: "90%",
    name: "ACF (Advanced Custom Fields)",
  },
  {
    img: `${BASE}/images/skills/ELEMENTOR.png`,
    percent: "85%",
    name: "Elementor",
  },
  {
    img: `${BASE}/images/skills/TYPESCRIPT.png`,
    percent: "82%",
    name: "TypeScript",
  },
  {
    img: `${BASE}/images/skills/API.png`,
    percent: "85%",
    name: "API Integration",
  },
];