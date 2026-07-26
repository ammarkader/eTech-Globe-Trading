import { Link } from "react-router-dom";
import Logo from "@/assets/img-logo.png";
import "@/styles/modules/footer/_footer_main.scss";

function Main() {
  return (
    <section
      className="footer-main__wrapper"
      aria-labelledby="footer-main-heading"
    >
      <div className="footer-main__container">
        <div className="section-left__container">
          <div className="logo">
            <Link to="/" aria-label="Go to homepage">
              <img src={Logo} alt="ETech Logo" />
            </Link>
          </div>
          <div className="description">
            <p>
              With decades of experience and a global network of trusted
              partners, we provide high-quality products and innovative
              solutions across various industries. Our commitment to excellence
              and sustainability ensures that we deliver reliable, tailored
              results to drive your business forward.
            </p>
          </div>
        </div>
        <div className="section-right__container">
          <div className="links">
            <div className="title">
              <h3>Menu</h3>
            </div>
            <ul>
              <li>
                <Link to="/products" aria-label="Our Products">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/services" aria-label="Our Services">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/about" aria-label="About Us">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" aria-label="Contact Us">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="title">
              <h3>Social</h3>
            </div>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/company/etech-group-of-companies/"
                  aria-label="View our Linkedin page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
          <div className="contact">
            <div className="title">
              <h3>Contact</h3>
            </div>
            <div className="content">
              <p className="address">
                <a
                  href="https://maps.app.goo.gl/vVEStcwtiCM38tLe7"
                  aria-label="View our main office location on Google Maps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ETECH Globe Trading Co LLC <br />
                  Office No.43-44, <br />
                  Dubai Municipality, Bur Dubai, <br />
                  Al Fahidi, Dubai
                </a>
              </p>
              <p className="address">
                <a
                  href="https://maps.app.goo.gl/DdmJE4p382dLa4aZA"
                  aria-label="View our second office location on Google Maps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ETECH Globe Trading FZCO <br />
                  IFZA Business Park, DDP, <br />
                  Building A1, Dubai Digital Park, <br />
                  Dubai Silicon Oasis, Dubai
                </a>
              </p>
              <p className="email">
                <a
                  href="mailto:info@etechglobe.com"
                  aria-label="Send us an email"
                >
                  info@etechglobe.com
                </a>
              </p>
              <p className="phone">
                <a
                  href="tel:+971504383543"
                  aria-label="Call us at +971 50 4383543"
                >
                  +971 50 4383543
                </a>
              </p>
              <p className="phone">
                <a
                  href="tel:+919962445641"
                  aria-label="Call us at +91 9962445641"
                >
                  +91 9962445641
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
