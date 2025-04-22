import "@/styles/modules/header/_header_hero.scss";

function Hero({ heroContent }) {
  return (
    <section className="header-hero__wrapper">
      <div className="header-hero__container">
        <div className="section-title">
          <h1 className="home-hero-title">{heroContent.title}</h1>
        </div>
        <div className="section-description">
          <p className="home-hero-description">{heroContent.description}</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
