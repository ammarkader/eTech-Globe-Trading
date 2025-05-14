import Img from "@/assets/img-company.webp";
import "@/styles/pages/about/_aboutpage_intro_block.scss";

function Intro() {
  return (
    <section className="aboutpage-intro__wrapper">
      <div className="aboutpage-intro__container">
        <div className="section-left__container">
          <h2>The Company</h2>
          <p>
            ETECH Global Trading is a international trading enterprise,
            strategically headquartered in Dubai, with a strong presence in key
            global markets including California, London, and East Asia. With
            decades of proven expertise, we deliver integrated industrial
            solutions that drive business success across industries and borders.
          </p>
          <p>
            Our pioneering legacy dates back to the early 1990s, when our
            founding team (ABS Exporters) became the first to import bitumen to
            India’s east coast via the Vizag port. This milestone was followed
            by a successful road-laying pilot project in central Chennai,
            executed by ABS Construction and approved by the national highway
            authority.
          </p>
        </div>
        <div className="section-right__container">
          <div className="image">
            <img src={Img} alt="img of peoples discussing" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
