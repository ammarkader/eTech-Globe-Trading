import SEO from "../components/SEO";
import Header from "../elements/header/Header";
import Layout from "../sections/contact/Layout";
import Footer from "../elements/footer/Footer";

const contactHeaderSEO = {
  title: "Contact Us | ETech Globe Trading",
  description:
    "Get in touch with Etech Global Trading for inquiries, partnerships, or information about our energy and commodity trading services. We provide global solutions in edible oils, minerals, and more.",
  keywords:
    "contact us, Etech Global Trading, inquiries, trading services, energy, commodities, edible oils, minerals, global trading, business inquiries",
};
const contactHeroContent = {
  title: "For Any Questions or Assistance, Contact Our Dedicated Team Today",
  description:
    "Should you have any questions or require assistance, we invite you to contact us. Our team is here to provide you with the necessary support and guidance.",
};
const isContact = {
  events: false,
  ctaBanner: false,
};

function Contact() {
  return (
    <>
      <SEO metaData={contactHeaderSEO} />
      <Header heroContent={contactHeroContent} />
      <main>
        <Layout />
      </main>
      <Footer page={isContact} />
    </>
  );
}

export default Contact;
