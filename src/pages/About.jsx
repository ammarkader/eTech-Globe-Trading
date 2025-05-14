import SEO from "../components/SEO";
import Header from "../elements/header/Header";
import Layout from "../sections/about/Layout";
import Footer from "../elements/footer/Footer";

const aboutHeaderSEO = {
  title: "About Us | ETech Globe Trading",
  description:
    "Learn about Etech Global Trading, a global leader in energy and commodity trading. Discover our mission, values, and our commitment to delivering high-quality products and services worldwide.",
  keywords:
    "about us, Etech Global Trading, energy trading, commodity trading, company values, global business",
};
const aboutHeroContent = {
  title: "Pioneering Innovation in Energy and Commodity Trading",
  description:
    "We combine industry insight, technological advancement, and entrepreneurial drive to lead the way in cross-border commerce and beyond.",
};
const isAbout = {
  events: true,
  ctaBanner: true,
};

function About() {
  return (
    <>
      <SEO metaData={aboutHeaderSEO} />
      <Header heroContent={aboutHeroContent} />
      <main>
        <Layout />
      </main>
      <Footer page={isAbout} />
    </>
  );
}

export default About;
