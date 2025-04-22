import IMG1 from "@/assets/img-service-1.jpg";
import IMG2 from "@/assets/img-service-2.jpeg";
import IMG3 from "@/assets/img-service-3.png";
import { Link } from "react-router-dom";
import "@/styles/pages/home/_homepage_services_block.scss";

const featuredServicesData = [
  {
    id: 1,
    title: "Real-time analysis and Market Intelligence",
    description:
      "Our Real-time Analysis and Market Intelligence service delivers timely insights to help businesses navigate market trends and risks. Leverage data-driven intelligence to make informed, strategic decisions in a dynamic environment.",
    image: IMG1,
    alt: "An Icon that defines Real-time analysis and Market Intelligence",
  },
  {
    id: 2,
    title: "Supply chain Logistics Management",
    description:
      "Our Supply Chain Logistics Management service optimizes the flow of goods, from procurement to delivery, ensuring timely and cost-effective operations. We streamline logistics to enhance efficiency, reduce costs, and improve overall supply chain performance.",
    image: IMG2,
    alt: "An Icon that defines Supply chain Logistics Management",
  },
  {
    id: 3,
    title: "Industrial Solution",
    description:
      "Our Industrial Solutions service provides tailored strategies to enhance operational efficiency across manufacturing and production sectors. We deliver innovative solutions that optimize processes, improve performance, and drive sustainable growth within industrial environments.",
    image: IMG3,
    alt: "An Icon that defines Industrial Solution",
  },
];

function FeaturedServices() {
  return (
    <section className="homepage-services__wrapper">
      <div className="homepage-services__container">
        <div className="section-heading__container">
          <div className="content">
            <h2>Our Services</h2>
            <p>
              We offer a wide range of services designed to help you achieve
              your business goals. From customized solutions to expert
              consultation, we provide services tailored to your needs.
            </p>
          </div>
          <div className="cta">
            <Link to="/services" aria-label="View all our services">
              <span className="fade-out-text">View All Services</span>
              <span className="fade-in-text">View All Services</span>
            </Link>
          </div>
        </div>
        <div className="service-cards__container">
          {featuredServicesData.map((data) => (
            <article className="service-card" key={data.id}>
              <div className="image">
                <img src={data.image} alt={data.alt} />
              </div>
              <div className="content">
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

export default FeaturedServices;
