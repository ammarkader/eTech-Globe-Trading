import SEO from "../components/SEO";
import Header from "../elements/header/Header";
import Layout from "../sections/services/Layout";
import Footer from "../elements/footer/Footer";

const servicesHeaderSEO = {
  title: "Our Services | ETech Globe Trading",
  description:
    "Explore Etech Global Trading's comprehensive services including market intelligence, supply chain logistics, industrial solutions, quality assurance, risk assessment, scrap recycling, and bio-environmental solutions.",
  keywords:
    "market intelligence, logistics management, industrial solutions, risk assessment, financial consultation, legal consultation, raw material supply, quality assurance, scrap recycling, bio-environment, global trading services, sustainability",
};
const servicesHeroContent = {
  title: "Explore Our Range of Tailored Solutions for Global Markets",
  description:
    "We offer tailored solutions designed to drive business growth and enhance operational efficiency. By prioritizing quality and innovation, we ensure that each service delivers measurable results for long-term success.",
};
const isServices = {
  events: false,
  ctaBanner: true,
};

function Services() {
  return (
    <>
      <SEO metaData={servicesHeaderSEO} />
      <Header heroContent={servicesHeroContent} />
      <main>
        <Layout />
      </main>
      <Footer page={isServices} />
    </>
  );
}

export default Services;
