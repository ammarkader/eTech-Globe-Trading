import IMG1 from "@/assets/img-partners-1.png";
import IMG2 from "@/assets/img-partners-2.png";
import IMG3 from "@/assets/img-partners-3.png";
import IMG4 from "@/assets/img-partners-4.png";
// import IMG5 from "@/assets/img-partners-5.png";
import IMG6 from "@/assets/img-partners-6.png";
import "@/styles/pages/about/_aboutpage_partners.scss";

const partnersData = [
  {
    id: 1,
    image: IMG1,
    alt: "logo of our partner",
    url: "https://www.gladdrugs.in/",
  },
  {
    id: 2,
    image: IMG2,
    alt: "logo of our partner",
    url: "",
  },
  {
    id: 3,
    image: IMG3,
    alt: "logo of our partner",
    url: "",
  },
  {
    id: 4,
    image: IMG4,
    alt: "logo of our partner",
    url: "",
  },
  // {
  //   id: 5,
  //   image: IMG5,
  //   alt: "logo of our partner",
  //   url: "",
  // },
  {
    id: 6,
    image: IMG6,
    alt: "logo of our partner",
    url: "",
  },
];

function Partners() {
  return (
    <section className="aboutpage-partners__wrapper">
      <div className="aboutpage-partners__container">
        <div className="section-heading__container">
          <h2>Our Associated Partners</h2>
          <p>
            Our partners play a key role in our success, offering premium
            products and services that align with our commitment to excellence
            and global market leadership.
          </p>
        </div>
        <div className="partners-logo__container">
          {partnersData.map((partner) => (
            <div className="logo" key={partner.id}>
              {partner.url ? (
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View our partner's official website"
                >
                  <img src={partner.image} alt={partner.alt} />
                </a>
              ) : (
                <img src={partner.image} alt={partner.alt} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
