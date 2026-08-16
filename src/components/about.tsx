const About = () => {
  return (
    <section id="about" className="about section-pt">
      <div className="container wow fadeInUp" data-wow-delay=".3s">
        <div className="section-title">
          <h3>About Me</h3>
          <span />
        </div>
        <h3 className="about-info wow fadeInUp" data-wow-delay=".4s">
          Frontend &amp; CMS Web Developer with 4+ years delivering{" "}
          <span className="txt-orange">
            WordPress, Shopify, Webflow &amp; React.js
          </span>{" "}
          solutions — 35+ client projects from kickoff to launch, improving
          performance, SEO visibility, and conversion outcomes.
        </h3>
        <div className="row">
          <div className="col-md-6 d-inline-flex flex-column justify-content-between">
            <div className="year-exp wow fadeInLeft" data-wow-delay=".5s">
              <div className="year-exp-txt text-center text-md-start">
                <span>4+</span>
                <h4 className="text-center text-md-start">
                  Years
                  <br />
                  Experience
                </h4>
              </div>
            </div>
            <a href="#contact" className="bttn-round">
              <span className="btn-txt">
                Hire Me <i className="bi bi-arrow-up-right" />
              </span>
            </a>
          </div>
          <div className="col-md-6">
            <figure className="wow fadeInRight" data-wow-delay=".5s">
              <img
                width={636}
                height={614}
                src="/images/about/profile-pic.png"
                alt="Sanjay Chauhan – Frontend & CMS Web Developer"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
