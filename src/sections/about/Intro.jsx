import Img from "@/assets/img-company.webp";
import "@/styles/pages/about/_aboutpage_intro_block.scss";

function Intro() {
  return (
    <section className="aboutpage-intro__wrapper">
      <div className="aboutpage-intro__container">
        <div className="section-left__container">
          <h2>The Company</h2>
          <p>
            We are a team of experienced industry professionals focused on
            delivering high-quality energy products, agricultural oils, and
            essential raw materials, alongside innovative technological
            solutions to meet global market demands.
          </p>
          <p>
            With a proven track record in global markets, we provide premium
            energy resources and essential materials like Diesel, LNG, Palm Oil,
            and minerals, ensuring sustainability and excellence in every
            project.
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
