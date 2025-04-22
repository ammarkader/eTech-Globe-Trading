import SEO from "../components/SEO";
import Header from "../elements/header/Header";
import Layout from "../sections/home/Layout";
import Footer from "../elements/footer/Footer";

const homeHeaderSEO = {
  title: "ETech Globe Trading - Global Energy and Commodity Traders",
  description:
    "Welcome to Etech Global Trading, your trusted partner for global energy and commodity trading. We specialize in providing high-quality products like edible oils, minerals, and much more to businesses worldwide.",
  keywords:
    "home, Etech Global Trading, global trading, energy, commodities, edible oils, minerals, business solutions, global market",
};
const homeHeroContent = {
  title: "Empowering Growth, Driving Innovation, Delivering Excellence.",
  description:
    "We focus on providing innovative solutions that accelerate business growth and optimize performance. Our commitment to quality ensures that every outcome contributes to lasting success.",
};
const isHome = {
  events: true,
  ctaBanner: true,
};

function Home() {
  return (
    <>
      <SEO metaData={homeHeaderSEO} />
      <Header heroContent={homeHeroContent} />
      <main>
        <Layout />
      </main>
      <Footer page={isHome} />
    </>
  );
}

export default Home;
