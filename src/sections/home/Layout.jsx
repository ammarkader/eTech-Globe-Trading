import Intro from "./Intro";
import FeaturedProdcuts from "./FeaturedProducts";
import WhyChooseUs from "./WhyChooseUs";
import FeaturedServices from "./FeaturedServices";
import FeaturedImg from "@/assets/img-home-featured.webp";
import FeaturedImage from "@/components/FeaturedImage";
import FeaturedQuote from "@/components/FeaturedQuote";

function Layout() {
  const quote = {
    text: `Businesses need to go beyond the interest of their companies to the communities they serve`,
    author: `Ratan Tata`,
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
