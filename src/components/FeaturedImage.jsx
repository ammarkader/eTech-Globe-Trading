import "@/styles/common/_featured_image_block.scss";

function FeaturedImage({ image, alt }) {
  return (
    <section className="featured-image-block__wrapper">
      <div className="featured-image-block__container">
        <div className="featured-image">
          <img src={image} alt={alt} />
        </div>
      </div>
    </section>
  );
}

export default FeaturedImage;
