import IMG1 from "@/assets/img-access.png";
import IMG2 from "@/assets/img-excellence.png";
import IMG3 from "@/assets/img-integration.png";
import IMG4 from "@/assets/img-support.png";
import "@/styles/pages/home/_homepage_why_choose_us_block.scss";

const whyChooseUsData = [
  {
    id: 1,
    title: "Access to Premium Resources",
    description:
      "Gain access to a range of high-grade products, from diesel and palm oil to cutting-edge AI solutions and renewable energy systems, ensuring your business stays ahead of the competition.",
    image: IMG1,
    alt: "An Icon that defines Access",
  },
  {
    id: 2,
    title: "Global Supply Chain Excellence",
    description:
      "We ensure a seamless global supply chain for the timely delivery of quality products and services, helping you optimize operations and meet demand efficiently.",
    image: IMG2,
    alt: "An Icon that defines Excellence",
  },
  {
    id: 3,
    title: "Innovative Technology Integration",
    description:
      "We integrate cutting-edge technologies into your business processes, driving efficiency and improving performance through tailored, state-of-the-art solutions.",
    image: IMG3,
    alt: "An Icon that defines Integration",
  },
  {
    id: 4,
    title: "End-to-End Support",
    description:
      "From planning to execution, we provide comprehensive support to ensure smooth operations, offering guidance every step of the way to ensure your success.",
    image: IMG4,
    alt: "An Icon that defines End-to-End Support",
  },
];

function WhyChooseUs() {
  return (
    <section className="homepage-why-choose-us__wrapper">
      <div className="homepage-why-choose-us__container">
        <div className="section-heading__container">
          <h2>Why Choose Us?</h2>
          <p>
            With decades of experience and a global network of trusted partners,
            we deliver high-quality products and innovative solutions. Our
            commitment to excellence ensures tailored, reliable results that
            drive your business forward.
          </p>
        </div>
        <div className="section-cards__container">
          {whyChooseUsData.map((data) => (
            <article className="section-card" key={data.id}>
              <div className="image card-image">
                <img src={data.image} alt={data.alt} />
              </div>
              <div className="content card-content">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
