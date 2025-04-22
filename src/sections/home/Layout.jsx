import Intro from "./Intro";
import FeaturedProdcuts from "./FeaturedProducts";
import WhyChooseUs from "./WhyChooseUs";
import FeaturedServices from "./FeaturedServices";
import FeaturedImg from "@/assets/img-home-featured.webp";
import FeaturedImage from "@/components/FeaturedImage";
import FeaturedQuote from "@/components/FeaturedQuote";

function Layout() {
  const quote = {
    text: `Success isn’t about how fast you climb, but how firmly you plant each step. Build relationships before empires, and remember that the most valuable currency in business is trust earned over time.`,
    author: `Neel Naicker`,
  };

  return (
    <>
      <FeaturedImage image={FeaturedImg} alt="home-featured-image" />
      <Intro />
      <FeaturedProdcuts />
      <WhyChooseUs />
      <FeaturedServices />
      <FeaturedQuote quote={quote} />
    </>
  );
}

export default Layout;
