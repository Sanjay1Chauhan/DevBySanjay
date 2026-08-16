import { menuList } from "@/lib/mockData/menuList";
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/siteConfig";

const Contact = () => {
  return (
    <section id="contact" className="contact section-mt">

      {/* Marquee Section */}
      <div className="marquee-contact section-pt">
        <h3>
          <span className="marquee-contact-wrapper">
            {[...Array(2)].map((_, i) => (
              <span key={i} className="marquee-contact-title">
                {[...Array(3)].map((_, index) => (
                  <span key={index}>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="marquee-contact-link text-stroke-white"
                    >
                      {siteConfig.email}
                    </a>
                    {" _\u00A0"}
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                      className="marquee-contact-link"
                    >
                      {siteConfig.phone}
                    </a>
                    {" _\u00A0"}
                  </span>
                ))}
              </span>
            ))}
          </span>
        </h3>
      </div>


      <div className="container">
        <div className="contact-content row">

          {/* Left Side */}
          <div className="col-lg-6">
            <span className="large-txt wow fadeInUp" data-wow-delay=".3s">
              Let's Connect!
            </span>

            <p className="wow fadeInUp" data-wow-delay=".4s">
              I’m always open to discussing new projects, creative ideas, or
              collaboration opportunities. Feel free to reach out using the form
              below or contact me directly.
            </p>

            <form
              id="contact-form"
              action="send_email.php"
              method="POST"
              className="wow fadeInLeft"
              data-wow-delay=".5s"
            >
              <div className="user-details row">
                <div className="input-box col-md-6">
                  <label className="details" htmlFor="first-name">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="text"
                    name="first_name"
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="input-box col-md-6">
                  <label className="details" htmlFor="last-name">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="text"
                    name="last_name"
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="input-box col-md-6">
                  <label className="details" htmlFor="mail">
                    Email
                  </label>
                  <input
                    type="email"
                    id="mail"
                    className="text"
                    name="email"
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="input-box col-md-6">
                  <label className="details" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="text"
                    name="phone"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>

              <div className="user-message">
                <label className="details" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  cols={1}
                  rows={2}
                  placeholder="Write your message..."
                  autoComplete="off"
                  required
                />
              </div>

              <button type="submit" className="bttn bttn-theme">
                Let’s Talk <i className="bi bi-arrow-up-right" />
              </button>
            </form>

            <p id="form-message" />
          </div>

          {/* Right Side */}
          <div className="col-lg-5 ms-auto my-auto">
            <div className="py-auto">
              
              {/* Navigation */}
              <nav className="wow fadeInRight" data-wow-delay=".7s">
                <ul>
                  {menuList.map(({ href, label }, index) => (
                    <li key={index}>
                      <Link to={href}>
                        <div className="link-txt d-flex justify-content-between">
                          <span>{label}</span>
                          <span>{String(index + 1).padStart(2, "0")}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Social Media */}
              <div className="social-media wow fadeInUp" data-wow-delay=".9s">
                <ul>
                  <li>
                    <a
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-x-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.social.behance}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-behance" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.social.dribbble}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-dribbble" />
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;