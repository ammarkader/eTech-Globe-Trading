import { Link } from "react-router-dom";
import CtaBannerBg from "@/assets/img-contact.jpg";
import "@/styles/modules/footer/_footer_cta_banner.scss";

function CtaBanner() {
  return (
    <section
      className="footer-cta-banner__wrapper"
      aria-labelledby="cta-banner-heading"
    >
      <div className="footer-cta-banner__container">
        <div className="section-heading">
          <h2 id="cta-banner-heading" data-title>
            Ready to Take the Next Step?
          </h2>
          <p>
            Let’s collaborate and create impactful solutions tailored to your
            needs. Our team is committed to delivering excellence—contact us
            today and let's make it happen!
          </p>
          <div className="cta">
            <Link to="/contact" aria-label="Contact Us">
              <span className="fade-out-text">Contact Us</span>
              <span className="fade-in-text">Contact Us</span>
            </Link>
          </div>
        </div>
        <div className="section-image">
          <img src={CtaBannerBg} alt="CTA Banner Image" />
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
