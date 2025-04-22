import SEO from "../components/SEO";
import Header from "../elements/header/Header";
import Layout from "../sections/products/Layout";
import Footer from "../elements/footer/Footer";

const productsHeaderSEO = {
  title: "Our Products | ETech Globe Trading",
  description:
    "Etech Global Trading specializes in bulk commodities such as minerals, crude oil derivatives, edible oils, automobiles, and agricultural products. We deliver premium quality bulk products worldwide.",
  keywords:
    "bulk commodities, global trading, minerals, metals, crude oil derivatives, edible oils, agricultural products, automobiles, bulk product supply, high-quality bulk commodities, wholesale commodities",
};
const productsHeroContent = {
  title: "Explore Our Product Range for Global Markets",
  description:
    "We offer a diverse range of high-quality, essential products designed to meet the varying needs of industries worldwide, ensuring consistency, reliability, and sustainability.",
};
const isProducts = {
  events: false,
  ctaBanner: true,
};

function Products() {
  return (
    <>
      <SEO metaData={productsHeaderSEO} />
      <Header heroContent={productsHeroContent} />
      <main>
        <Layout />
      </main>
      <Footer page={isProducts} />
    </>
  );
}

export default Products;
