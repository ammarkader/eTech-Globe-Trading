import ProductCategories from "@/components/ProductCategories";
import "@/styles/pages/prodcuts/_products_categories_block.scss";

function AllProducts() {
  return (
    <section className="productspage-products-collection__wrapper product-categories">
      <div className="productspage-products-collection__container">
        <div className="heading__container">
          <h2>Our Products</h2>
        </div>
        <ProductCategories />
      </div>
    </section>
  );
}

export default AllProducts;
