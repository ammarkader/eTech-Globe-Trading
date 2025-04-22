import "@/styles/modules/footer/_footer_newsletter.scss";

function Newsletter() {
  return (
    <section
      className="footer-newsletter__wrapper"
      aria-labelledby="newsletter-heading"
    >
      <div className="footer-newsletter__container">
        <div className="section-heading__container">
          <h2 id="newsletter-heading" data-title>
            Stay Informed with Our Newsletter
          </h2>
          <p>
            Get the latest industry insights, updates, and exclusive offers
            directly in your inbox. Subscribe now and never miss out on
            important news!
          </p>
        </div>
        <div className="section-form__container">
          <form
            className="newsletter-form"
            aria-labelledby="newsletter-heading"
          >
            <div className="input-field">
              <input
                type="email"
                id="newsletter-email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="submit-button">
              <button
                className="submit-btn"
                id="submit-btn"
                type="submit"
                aria-label="Subscribe to Newsletter"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
