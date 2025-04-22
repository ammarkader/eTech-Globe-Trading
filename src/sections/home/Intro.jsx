import { Link } from "react-router-dom";
import "@/styles/pages/home/_homepage_intro_block.scss";

function Intro() {
  return (
    <section className="homepage-intro__wrapper">
      <div className="homepage-intro__container">
        <div className="section-left__container">
          <h2>Your Trusted Industrial Solutions Partner</h2>
          <p>
            Led by a team of industry veterans with proven track records
            spanning decades across global markets, we specialize in traditional
            bulk commodities and cutting-edge technological solutions.
          </p>
        </div>
        <div className="section-right__container">
          <p>
            Our comprehensive portfolio includes premium energy products like
            Diesel, LNG , agricultural oils including Crude and RBD Palm oil,
            and essential raw materials such as minerals, silica sand, and metal
            scraps. Beyond commodities, our experts excel in advanced industrial
            domains, including AI-driven process optimisation, battery
            technology solutions, renewable energy systems, and environmental
            technologies. Whether you need agricultural products, industrial raw
            materials, or advanced technological solutions, our experienced team
            is your trusted partner in meeting diverse industrial requirements
            while maintaining our focus on sustainability and excellence.
          </p>
          <div className="cta">
            <Link to="/about" aria-label="Learn more about us">
              <span className="fade-out-text">Learn More</span>
              <span className="fade-in-text">Learn More</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
