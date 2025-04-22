import IMG1 from "@/assets/img-service-1.jpg";
import IMG2 from "@/assets/img-service-2.jpeg";
import IMG3 from "@/assets/img-service-3.png";
import IMG4 from "@/assets/img-service-4.jpeg";
import IMG5 from "@/assets/img-service-5.jpeg";
import IMG6 from "@/assets/img-service-6.jpeg";
import IMG7 from "@/assets/img-service-7.jpeg";
import IMG8 from "@/assets/img-service-8.jpg";
import IMG9 from "@/assets/img-service-9.png";
import "@/styles/pages/services/_service_options_block.scss";

const serviceCardsData = [
  {
    id: 1,
    title: "Real-time analysis and Market Intelligence",
    description:
      "Our Real-time Analysis and Market Intelligence service delivers timely insights to help businesses navigate market trends and risks. Leverage data-driven intelligence to make informed, strategic decisions in a dynamic environment.",
    image: IMG1,
  },
  {
    id: 2,
    title: "Supply chain Logistics Management",
    description:
      "Our Supply Chain Logistics Management service optimizes the flow of goods, from procurement to delivery, ensuring timely and cost-effective operations. We streamline logistics to enhance efficiency, reduce costs, and improve overall supply chain performance.",
    image: IMG2,
  },
  {
    id: 3,
    title: "Industrial Solutions",
    description:
      "Our Industrial Solutions service provides tailored strategies to enhance operational efficiency across manufacturing and production sectors. We deliver innovative solutions that optimize processes, improve performance, and drive sustainable growth within industrial environments.",
    image: IMG3,
  },
  {
    id: 4,
    title: "Risk Assessment",
    description:
      "Our Risk Assessment service identifies potential risks and vulnerabilities across your business operations. We provide comprehensive evaluations and actionable strategies to mitigate risks, ensuring the stability and long-term success of your business.",
    image: IMG4,
  },
  {
    id: 5,
    title: "Financial and Legal consultation",
    description:
      "Our Financial and Legal Consultation service offers expert guidance to navigate complex financial and legal landscapes. We provide strategic advice on risk management, compliance, and financial planning to ensure your business’s long-term stability and success.",
    image: IMG5,
  },
  {
    id: 6,
    title: "Raw material supply",
    description:
      "Our Raw Material Supply service ensures a consistent and reliable supply of high-quality materials to support your production needs. We source and deliver raw materials efficiently, helping businesses maintain smooth operations and meet production demands on time.",
    image: IMG6,
  },
  {
    id: 7,
    title: "Quality Assurance and compliance",
    description:
      "We ensure your products and processes meet industry standards and regulations through thorough quality checks and compliance protocols, minimizing risks and enhancing reliability.",
    image: IMG7,
  },
  {
    id: 8,
    title: "Scrap Recycling",
    description:
      "Our Scrap Recycling service provides efficient and environmentally responsible solutions for recycling scrap materials. We help reduce waste and recover valuable resources, supporting sustainability and contributing to a circular economy.",
    image: IMG8,
  },
  {
    id: 9,
    title: "Bio-Environment",
    description:
      "Our Bio-Environment service focuses on sustainable and eco-friendly solutions to protect and preserve the environment. We provide innovative approaches to waste management, renewable energy, and environmental conservation to foster a greener future.",
    image: IMG9,
  },
];

function ServiceCards() {
  return (
    <section className="servicespage-service-options__wrapper">
      <div className="servicespage-service-options__container">
        <div className="service-cards__container">
          {serviceCardsData.map((card) => (
            <article className="service-card" key={card.id}>
              <div className="image">
                <img src={card.image} alt={`img of ${card.title}`} />
              </div>
              <div className="content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceCards;
