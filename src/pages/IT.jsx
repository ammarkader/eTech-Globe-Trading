import SEO from "../components/SEO";
import Header from "../elements/header/Header";
import Layout from "../sections/it/Layout";
import Footer from "../elements/footer/Footer";

const itHeaderSEO = {
  title: "IT Solutions | ETech Global Trading",
  description:
    "ETech Global Trading delivers integrated IT solutions across web development, SEO, digital marketing, content, cloud infrastructure, DevOps, and AI.",
  keywords:
    "IT solutions, web development, web design, SEO, digital marketing, cloud infrastructure, DevOps, AI solutions, ETech Global Trading",
};

const itHeroContent = {
  title: "Engineering Digital Ecosystems That Drive Growth",
  description:
    "We combine software engineering, digital strategy, cloud infrastructure, and industry expertise to build secure, high-performance digital ecosystems for businesses that demand more.",
};
const isIT = {
  events: true,
  ctaBanner: true,
};

function It() {
  return (
    <>
      <SEO metaData={itHeaderSEO} />
      <Header heroContent={itHeroContent} />
      <main>
        <Layout />
      </main>
      <Footer page={isIT} />
    </>
  );
}

export default It;
