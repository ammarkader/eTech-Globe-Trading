import { Link } from "react-router-dom";
import ProductCategories from "@/components/ProductCategories";
import "@/styles/pages/home/_homepage_products_block.scss";

function FeaturedProducts() {
  return (
    <section className="homepage-products__wrapper product-categories">
      <div className="homepage-products__container">
        <div className="section-heading__container">
          <div className="content">
            <h2 data-title>Our Products</h2>
            <p data-description>
              Explore our top products designed to meet your business needs.
              From premium energy solutions to high-quality raw materials, we
              provide only the best.
            </p>
          </div>
          <div className="cta">
            <Link to="/products">
              <span className="fade-out-text">View All Products</span>
              <span className="fade-in-text">View All Products</span>
            </Link>
          </div>
        </div>
        <ProductCategories isHome={true} />
      </div>
    </section>
  );
}

export default FeaturedProducts;
