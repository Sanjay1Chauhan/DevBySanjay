import { siteConfig } from "@/config/siteConfig";

const Hero = () => {
  const { cvUrl, mailTo } = siteConfig;
  const BASE = "/DevBySanjay";

  return (
    <section className="hero section-pt">
      <div className="section-wrapper">
        <div className="container position-relative">
          <div className="bg-line" />

          {/* Profile Images */}
          <div className="profile-pic-wrapper">
            <img
              width={652}
              height={594}
              className="profile-bg"
              src={`${BASE}/images/hero/profile-pic-bg.png`}
              alt="Profile background"
            />
            <img
              width={501}
              height={526}
              className="profile-pic wow fadeInLeft"
              data-wow-delay=".9s"
              src={`${BASE}/images/hero/profile-pic.jpeg`}
              alt="Sanjay Chauhan - Web Developer"
            />
          </div>

          {/* Intro */}
          <div
            className="d-flex align-items-center wow fadeInUp"
            data-wow-delay=".3s"
          >
            <h6>Hi there!&nbsp;</h6>
            <img
              width={20}
              height={20}
              className="hi-icon"
              src={`${BASE}/images/hero/hi.svg`}
              alt="Waving hand"
            />
            <h6>&nbsp;I'm</h6>
          </div>

          <h1 className="wow fadeInUp" data-wow-delay=".6s">
            Sanjay Chauhan
          </h1>

          {/* Description */}
          <div className="row">
            <div className="col-xl-4 col-lg-4" />
            <div className="col-xl-6 col-lg-8">
              <p
                className="intro-info d-none d-md-block wow fadeInUp"
                data-wow-delay=".9s"
              >
                4+ years building high-performance websites across WordPress,
                Shopify, Webflow & React.js — delivering 35+ client projects
                from discovery to deployment.
              </p>
            </div>
            <div className="col-xl-2" />
          </div>

          {/* Desktop Buttons */}
          <div className="d-none d-md-block" style={{ position: 'relative', zIndex: 10 }}>
            <div className="row">
              <div className="col-md-4" />
              <div className="col-md-8">
                <div className="d-flex align-items-center gap-4">
                  <a
                    href={mailTo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bttn bttn-primary"
                  >
                    Let's Talk <i className="bi bi-arrow-up-right" />
                  </a>
                  <a
                    href={cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bttn bttn-secondary"
                  >
                    Download CV <i className="bi bi-arrow-up-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Profession */}
          <h2 className="profession wow fadeInUp" data-wow-delay="1.0s">
            Web Developer
          </h2>

          {/* Mobile Version */}
          <div className="m-content d-flex flex-wrap d-block d-md-none" style={{ position: 'relative', zIndex: 10 }}>
            <p className="intro-info wow fadeInUp" data-wow-delay="1.2s">
              4+ years building high-performance websites across WordPress,
              Shopify, Webflow & React.js — 35+ client projects delivered
              end-to-end.
            </p>
            <a
              href={mailTo}
              target="_blank"
              rel="noopener noreferrer"
              className="bttn bttn-primary"
            >
              Let's Talk <i className="bi bi-arrow-up-right" />
            </a>
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bttn bttn-secondary"
            >
              Download CV <i className="bi bi-arrow-up-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;