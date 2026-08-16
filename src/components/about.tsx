import { siteConfig } from "@/config/siteConfig";

const About = () => {
  const BASE = "/DevBySanjay";

  return (
    <section className="about section-pt">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-5">
            <div className="about-img-wrapper wow fadeInLeft" data-wow-delay=".3s">
              <img
                width={540}
                height={680}
                src={`${BASE}/images/about/profile-pic-about.jpeg`}
                alt="Sanjay Chauhan - Web Developer"
              />
            </div>
          </div>
          <div className="col-xl-8 col-lg-7">
            <div className="about-content wow fadeInUp" data-wow-delay=".3s">
              <div className="section-title">
                <h3>About Me</h3>
                <span />
              </div>
              <p>
                I'm a Frontend & CMS Web Developer with 4+ years of
                experience delivering 35+ client projects across WordPress,
                Shopify, Webflow, and React/Next.js. Based in Ludhiana, Punjab,
                I specialize in building high-performance, SEO-optimized
                websites that drive real business results.
              </p>
              <p>
                My expertise spans the full spectrum — from custom React-powered
                Shopify storefronts and Next.js 14 SSR/SSG migrations to WordPress
                performance optimization (lifting PageSpeed scores 60 → 85–95) and
                zero-downtime CMS migrations. I build solutions that are
                maintainable, scalable, and designed for non-technical teams to
                manage independently.
              </p>
              <ul className="about-list">
                <li>
                  <strong>Core Stack:</strong> React.js, Next.js, TypeScript,
                  WordPress, Shopify, Webflow
                </li>
                <li>
                  <strong>CMS Mastery:</strong> ACF, Elementor, MetForm, Liquid,
                  Custom Post Types
                </li>
                <li>
                  <strong>Performance:</strong> Core Web Vitals, CDN, Lazy
                  Loading, Database Optimization
                </li>
                <li>
                  <strong>Delivery:</strong> 35+ projects, on-time record, clean
                  code, documentation
                </li>
              </ul>
              <a
                href={siteConfig.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bttn bttn-primary"
              >
                Download CV <i className="bi bi-arrow-up-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;