import "@/styles/common/_featured_quote_block.scss";

function FeaturedQuote({ quote }) {
  return (
    <section className="featured-quote__wrapper">
      <div className="featured-quote__container">
        <blockquote className="quote">
          <p className="text">"{quote.text}"</p>
          <p className="author" aria-label="Author of the quote">
            – {quote.author}
          </p>
        </blockquote>
      </div>
    </section>
  );
}

export default FeaturedQuote;
