// src/pages/home-2/index.tsx

import About from "@/components/about";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services/services";
import Skills from "@/components/skills";
import Testimonial from "@/components/testimonial";

const HomeTwo = () => {
  return (
    <main>
      <Hero />
      <Skills />
      <About />
      <Experience />
      <Portfolio />
      <Services />
      <Testimonial />
      <Marquee />
    </main>
  );
};

export default HomeTwo;
