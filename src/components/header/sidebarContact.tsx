import { siteConfig } from "@/config/siteConfig";
import type { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

const SidebarContact = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`subside-barmenu sub-contact ${
        isSidebarOpen ? "active" : ""
      }`}
    >
      <div
        onClick={() => setIsSidebarOpen(false)}
        className="remove-click d-flex justify-content-center align-items-center"
      >
        <i className="bi bi-x-lg" />
      </div>
      <div className="sub-contact-wrapper d-grid">
        <Link to="/" className="logo" onClick={() => setIsSidebarOpen(false)}>
          <h4>
            Dev <span className="txt-orange">By</span> Sanjay
          </h4>
        </Link>
        <p>
          Frontend &amp; CMS Web Developer specializing in modern, responsive,
          and high-performance websites. Let's build something great together.
        </p>
        <div className="sub-contact-left d-grid">
          <div className="sub-contac-item">
            <div className="address-widget">
              <span className="address d-block">location</span>
              <span className="textp">{siteConfig.location}</span>
            </div>
          </div>
          <div className="sub-contac-item">
            <div className="address-widget">
              <span className="address d-block">email</span>
              <a href={`mailto:${siteConfig.email}`} className="textp">
                {siteConfig.email}
              </a>
            </div>
          </div>
          <div className="sub-contac-item">
            <div className="address-widget">
              <span className="address d-block">call now</span>
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                className="textp"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
        <div className="sub-contac-right mb-60 position-relative">
          <ul className="social d-flex gap-3">
            <li>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook" />
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter-x" />
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin" />
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github" />
              </a>
            </li>
          </ul>
        </div>
        <a
          href="#contact"
          className="d-flex justify-content-center lets-talk-btn align-items-center gap-2"
          onClick={() => setIsSidebarOpen(false)}
        >
          <span className="get-text">Let's Talk</span>
          <span>
            <i className="bi bi-arrow-up-right" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default SidebarContact;
