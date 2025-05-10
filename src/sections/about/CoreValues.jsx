import IMG1 from "@/assets/img-transparency.png";
import IMG2 from "@/assets/img-efficiency.png";
import IMG3 from "@/assets/img-profit.png";
import IMG4 from "@/assets/img-customer-centric.png";
import IMG5 from "@/assets/img-integrity.png";
import IMG6 from "@/assets/img-collab.png";
import "@/styles/pages/about/_aboutpage_core_values_block.scss";

const coreValuesData = [
  {
    id: 1,
    title: "Transparency",
    description:
      "We prioritize open communication and honesty, ensuring every action and decision is clear and accountable, building trust with our clients and partners.",
    image: IMG1,
    alt: "An Icon that defines Transparency",
  },
  {
    id: 2,
    title: "Efficiency",
    description:
      "We focus on streamlining operations to deliver the best solutions with minimal waste, maximizing value for our clients and ensuring optimal results.",
    image: IMG2,
    alt: "An Icon that defines Efficiency",
  },
  {
    id: 3,
    title: "Profitability",
    description:
      "We aim to drive sustainable profitability by combining cost-effective solutions with market insights to help businesses grow and succeed.",
    image: IMG3,
    alt: "An Icon that defines Profitability",
  },
  {
    id: 4,
    title: "Customer Centricity",
    description:
      "Our clients are at the heart of everything we do. We tailor our solutions to meet their needs, ensuring exceptional service and results.",
    image: IMG4,
    alt: "An Icon that defines Customer Centricity",
  },
  {
    id: 5,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in all our interactions, ensuring fairness, honesty, and respect in every aspect of our business.",
    image: IMG5,
    alt: "An Icon that defines Integrity",
  },
  {
    id: 6,
    title: "Collaboration",
    description:
      "We believe in the power of teamwork, working together with clients and partners to achieve shared goals and deliver innovative solutions.",
    image: IMG6,
    alt: "An Icon that defines Collaboration",
  },
];

function CoreValues() {
  return (
    <section className="aboutpage-core-values__wrapper">
      <div className="aboutpage-core-values__container">
        <div className="section-heading__container">
          <h2>Core Values</h2>
          <p>
            Backed by a global network of meticulously vetted suppliers and
            channel partners, our organization ensures that every product and
            service meets the highest standards of quality and reliability.
          </p>
        </div>
        <div className="section-cards__container">
          {coreValuesData.map((coreValue) => (
            <article className="section-card" key={coreValue.id}>
              <div className="image card-image">
                <img src={coreValue.image} alt={coreValue.alt} />
              </div>
              <div className="content card-content">
                <h3>{coreValue.title}</h3>
                <p>{coreValue.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
