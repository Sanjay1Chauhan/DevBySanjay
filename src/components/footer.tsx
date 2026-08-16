import { Link } from "react-router-dom";
import { siteConfig } from "@/config/siteConfig";

const Footer = () => {
  return (
    <footer className="footer-section py-4">
      <div className="container">
        <div className="footer-content d-flex justify-content-between align-items-center flex-wrap gap-3">

          {/* Logo */}
          <div className="footer-logo">
            <Link to="/">
              <img
                src={siteConfig.logo}
                alt={`${siteConfig.siteName} Logo`}
                style={{ height: "60px" }}
              />
            </Link>
          </div>

          {/* Copyright */}
          <p className="copy-right mb-0 text-center text-md-start">
            {siteConfig.copyright}
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;