import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import Img1 from "@/assets/img-oil-1.jpg";
import Img2 from "@/assets/img-oil-2.jpg";
import Img3 from "@/assets/img-oil-3.jpeg";
import Img4 from "@/assets/img-oil-4.jpg";
import Img11 from "@/assets/img-sugar-spices-1.jpg";
import Img22 from "@/assets/img-sugar-spices-2.jpeg";
import Img33 from "@/assets/img-sugar-spices-3.jpg";
import Img44 from "@/assets/img-sugar-spices-4.jpeg";
import Img111 from "@/assets/img-rice-1.jpg";
import Img222 from "@/assets/img-rice-2.webp";
import Img333 from "@/assets/img-rice-3.jpg";
import Img444 from "@/assets/img-rice-4.jpg";
import Img1111 from "@/assets/img-agri-1.jpg";
import Img2222 from "@/assets/img-agri-2.jpg";
import Img3333 from "@/assets/img-agri-3.jpg";
import Img11111 from "@/assets/img-energy-1.jpeg";
import Img22222 from "@/assets/img-energy-2.jpg";
import Img33333 from "@/assets/img-energy-3.png";
import Img44444 from "@/assets/img-energy-4.jpg";
import Img55555 from "@/assets/img-energy-5.jpeg";
import Img111111 from "@/assets/img-minerals-1.jpeg";
import Img222222 from "@/assets/img-minerals-2.jpeg";
import Img333333 from "@/assets/img-minerals-3.jpg";
import Img444444 from "@/assets/img-minerals-4.jpg";
import Img555555 from "@/assets/img-minerals-5.jpg";
import Img666666 from "@/assets/img-minerals-6.jpg";

const productsData = [
  {
    id: "category-1",
    title: "Energy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis.",
    image: Img11111,
    alt: "An image of Energy",
    products: [
      {
        id: "product-11111",
        title: "Premium Wood Pellet",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img22222,
        alt: "An image of Premium Wood Pellet",
      },
      {
        id: "product-22222",
        title: "LNG",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img33333,
        alt: "An image of LNG",
      },
      {
        id: "product-33333",
        title: "EN59010PPM",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img44444,
        alt: "An image of EN59010PPM",
      },
      {
        id: "product-44444",
        title: "A1 Jet Fuel",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img55555,
        alt: "An image of A1 Jet Fuel",
      },
    ],
  },
  {
    id: "category-2",
    title: "Agriculture Fertilizers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis.",
    image: Img1111,
    alt: "An image of Agriculture Fertilizers",
    products: [
      {
        id: "product-1111",
        title: "Premium Cocopeat",
        description:
          "Our superior cocopeat offers exceptional water retention and aeration for optimal plant growth. Made from processed coconut husks, this sustainable growing medium features balanced pH, low EC levels, and superior root development properties.",
        image: Img2222,
        alt: "An image of Premium Cocopeat",
      },
      {
        id: "product-2222",
        title: "Sulphur",
        description:
          "Sulfur in different forms, shapes, sizes and quality parameters is generally used for manufacturing fertilisers, as bleaching agents, as Bi-sulfates, Carbon disulfides and Sulfites, as Granular Sulphur 99.95%.",
        image: Img3333,
        alt: "An image of Sulphur",
      },
    ],
  },
  {
    id: "category-3",
    title: "Palm Oil & Bi Products",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis.",
    image: Img555555,
    alt: "An image of Palm Oil & Bi Products",
    products: [
      {
        id: "product-111111",
        title: "Crude Palm Oil (CPO)",
        description:
          "Premium-grade crude palm oil sourced from sustainable plantations, offering superior quality with carefully monitored Free Fatty Acid (FFA) levels. Our CPO meets international quality standards with optimal moisture content and impurity levels, making it ideal for refineries and industrial processing.",
        image: Img111111,
        alt: "An image of Crude Palm Oil (CPO)",
      },
      {
        id: "product-111111",
        title: "RBD Palm Oil CP10 & CP8",
        description:
          "Refined, Bleached, and Deodorized (RBD) palm oil with Certified Cloud Point 10°C, featuring exceptional clarity and stability. Meticulously processed to ensure consistent quality, ideal for food manufacturing and industrial applications requiring specific cold temperature performance. Meets international food safety standards.",
        image: Img111111,
        alt: "An image of RBD Palm Oil CP10 & CP8",
      },
    ],
  },
  {
    id: "category-4",
    title: "Minerals",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis.",
    image: Img555555,
    alt: "An image of Minerals",
    products: [
      {
        id: "product-444444",
        title: "Fe 62+ Iron Ore",
        description:
          "Our premium Fe 62+ iron ore offers superior iron content, minimal impurities, and consistent sizing, maximising yield while reducing costs for efficient blast furnace operations.",
        image: Img444444,
        alt: "An image of Fe 62+ Iron Ore",
      },
      {
        id: "product-333333",
        title: "Silica Sand",
        description:
          "Premium silica sand from our mines offers exceptional purity, consistent grain size, and low iron content—ideal for glass manufacturing, foundry work, and industrial applications worldwide.",
        image: Img333333,
        alt: "An image of Silica Sand",
      },
      {
        id: "product-111111",
        title: "Gypsum",
        description:
          "Export-grade gypsum from our mines provides high purity, consistent texture, and optimal setting properties—perfect for construction, agriculture, and industrial applications worldwide.",
        image: Img111111,
        alt: "An image of Gypsum",
      },
      {
        id: "product-222222",
        title: "Magnesium",
        description:
          "Our export-grade magnesium features exceptional purity, consistent quality, and versatile forms—perfect for aerospace, automotive, and alloy manufacturing applications requiring lightweight, high-strength materials.",
        image: Img222222,
        alt: "An image of Magnesium",
      },
    ],
  },
  {
    id: "category-5",
    title: "Edible Oils",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis.",
    image: Img1,
    alt: "An image of Edible Oils",
    products: [
      {
        id: "product-11",
        title: "Soybean Oil",
        description:
          "Refined soybean oil, light and healthy, rich in essential fatty acids. Ideal for cooking and food processing. Export-grade, hygienically processed and securely packaged for shipment.",
        image: Img2,
        alt: "An image of Soybean Oil",
      },
      {
        id: "product-22",
        title: "Coconut Oil",
        description:
          "Pure coconut oil, cold-pressed for maximum nutrients and rich aroma. Ideal for cooking, cosmetics, and wellness. Export-quality, securely packed to preserve freshness and quality",
        image: Img3,
        alt: "An image of Coconut Oil",
      },
      {
        id: "product-22",
        title: "Avocado Oil",
        description:
          "High-quality avocado oil, cold-pressed for maximum nutrients and rich flavor. Ideal for cooking, skincare, and wellness. Export-grade, securely packed to maintain purity and freshness.",
        image: Img3,
        alt: "An image of Avocado Oil",
      },
      {
        id: "product-33",
        title: "Groundnut Oil",
        description:
          "Premium groundnut oil, cold-pressed and rich in natural antioxidants. Ideal for cooking and frying. Export-quality, hygienically processed, securely packaged to ensure freshness and purity.",
        image: Img4,
        alt: "An image of Groundnut Oil",
      },
    ],
  },
  {
    id: "category-6",
    title: "Livestocks",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis.",
    image: Img1,
    alt: "An image of Livestocks",
    products: [
      {
        id: "product-11",
        title: "Chicken – Brazilian",
        description:
          "We export high-quality Brazilian whole chickens, midjoints, and paws, sourced from trusted farms. These protein-rich products are carefully processed to meet international standards, ensuring freshness and superior flavor. Perfect for culinary use and food industries, our products are securely packaged, maintaining optimal quality for global markets and customer satisfaction.",
        image: Img2,
        alt: "An image of whole Chicken – Brazilian",
      },
      {
        id: "product-11",
        title: "Beef",
        description:
          "We export high-quality Brazilian whole chickens, midjoints, and paws, sourced from trusted farms. These protein-rich products are carefully processed to meet international standards, ensuring freshness and superior flavor. Perfect for culinary use and food industries, our products are securely packaged, maintaining optimal quality for global markets and customer satisfaction.",
        image: Img2,
        alt: "An image of Beef",
      },
      {
        id: "product-11",
        title: "Lamb",
        description:
          "We export high-quality Brazilian whole chickens, midjoints, and paws, sourced from trusted farms. These protein-rich products are carefully processed to meet international standards, ensuring freshness and superior flavor. Perfect for culinary use and food industries, our products are securely packaged, maintaining optimal quality for global markets and customer satisfaction.",
        image: Img2,
        alt: "An image of Lamb",
      },
    ],
  },
  {
    id: "category-7",
    title: "Sugar",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus.",
    image: Img11,
    alt: "An image of Sugar",
    products: [
      {
        id: "product-21",
        title: "ICUMSA 45",
        description:
          "Premium ICUMSA 45 sugar delivers exceptional purity, brilliant white crystals, and consistent grain size—meeting international quality standards for beverage production, confectionery, and pharmaceutical applications worldwide.",
        image: Img22,
        alt: "An image of ICUMSA 45",
      },
      {
        id: "product-22",
        title: "Indian Jaggery",
        description:
          "Our export-quality Indian jaggery features rich caramel flavor, natural golden hue, and traditional processing—delivering pure, unrefined sweetness with essential minerals for global health-conscious consumers.",
        image: Img33,
        alt: "An image of Indian Jaggery",
      },
      {
        id: "product-23",
        title: "S30",
        description:
          "S30 Sugar is premium-grade refined sugar, crystal white, ideal for food processing and beverages. Consistently high quality, hygienically packed, perfect for international export standards.",
        image: Img44,
        alt: "An image of S30",
      },
    ],
  },
  {
    id: "category-8",
    title: "Spices",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus.",
    image: Img11,
    alt: "An image of Spices",
    products: [
      {
        id: "product-21",
        title: "Clove",
        description:
          "Premium quality cloves, sun-dried and hand-picked for purity. Rich aroma, high oil content, ideal for culinary and medicinal use. Export-ready with strict quality assurance.",
        image: Img22,
        alt: "An image of Clove",
      },
      {
        id: "product-23",
        title: "Cardamon",
        description:
          "Green cardamom pods, aromatic and flavorful, hand-harvested for superior quality. Ideal for culinary, tea, and medicinal use. Carefully packed, export-grade with rich essential oils.",
        image: Img44,
        alt: "An image of Cardamon",
      },
      {
        id: "product-22",
        title: "Red Chilli",
        description:
          "Premium red chillies, sun-dried for vibrant color and intense heat. Rich in flavor and aroma, hygienically packed, export-grade quality for culinary and industrial applications.",
        image: Img33,
        alt: "An image of Red Chilli",
      },
      {
        id: "product-22",
        title: "Cinamom",
        description:
          "High-quality cinnamon sticks, naturally dried for rich aroma and sweet-spicy flavor. Ideal for culinary, medicinal, and cosmetic use. Carefully packed, export-ready with strict quality control.",
        image: Img33,
        alt: "An image of Cinamom",
      },
    ],
  },
  {
    id: "category-9",
    title: "Sea Foods",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus.",
    image: Img11,
    alt: "An image of Sea Foods",
    products: [
      {
        id: "product-21",
        title: "TIN Fishes – Sardine",
        description:
          "High-quality tin fish (sardines), packed for freshness and flavor. Rich in nutrients and ideal for various cuisines. Export-ready, hygienically packed to meet international standards.",
        image: Img22,
        alt: "An image of TIN Fishes – Sardine",
      },
      {
        id: "product-22",
        title: "Tuna",
        description:
          "Premium tuna, carefully sourced and packed to preserve freshness and flavor. Rich in protein and omega-3, ideal for culinary uses. Export-ready, high-quality packaging.",
        image: Img33,
        alt: "An image of Tuna",
      },
      {
        id: "product-23",
        title: "Crabs",
        description:
          "Fresh, premium-quality crabs, harvested and packed to maintain natural flavor and texture. Ideal for culinary uses, rich in protein. Export-ready, hygienically packed for global markets.",
        image: Img44,
        alt: "An image of Crabs",
      },
      {
        id: "product-23",
        title: "Shrimps",
        description:
          "Premium shrimps, fresh and sustainably sourced, packed to preserve flavor and texture. Ideal for cooking and seafood dishes. Export-quality, hygienically processed and securely packaged.",
        image: Img44,
        alt: "An image of Shrimps",
      },
    ],
  },
  {
    id: "category-10",
    title: "Pharma",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus.",
    image: Img11,
    alt: "An image of Pharma",
    products: [
      {
        id: "product-21",
        title: "Diaper",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img22,
        alt: "An image of Diaper",
      },
      {
        id: "product-22",
        title: "Nitrile Gloves",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img33,
        alt: "An image of Nitrile Gloves",
      },
    ],
  },
  {
    id: "category-11",
    title: "Rice",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis.",
    image: Img111,
    alt: "An image of Rice",
    products: [
      {
        id: "product-111",
        title: "Broken Rice",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img222,
        alt: "An image of Broken Rice",
      },
      {
        id: "product-222",
        title: "Basmati Rice",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img333,
        alt: "An image of Basmati Rice",
      },
      {
        id: "product-333",
        title: "Parboiled Rice",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img444,
        alt: "An image of Parboiled Rice",
      },
      {
        id: "product-333",
        title: "Boiled Rice",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img444,
        alt: "An image of Boiled Rice",
      },
    ],
  },
  {
    id: "category-12",
    title: "Lentils & Cereals",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus.",
    image: Img22,
    alt: "An image of Lentils & Cereals",
    products: [
      {
        id: "product-21",
        title: "Lentils",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img22,
        alt: "An image of Lentils",
      },
      {
        id: "product-22",
        title: "Refined Sugar",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img33,
        alt: "An image of Refined Sugar",
      },
      {
        id: "product-23",
        title: "Cardamon",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img44,
        alt: "An image of Cardamon",
      },
    ],
  },
  {
    id: "category-13",
    title: "Cocunut",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus.",
    image: Img22,
    alt: "An image of Cocunut",
    products: [
      {
        id: "product-21",
        title: "Matured Coconut",
        description:
          "The matured coconuts while de-husking, the husk is left intact over the “eyes” of the coconut.",
        image: Img22,
        alt: "An image of Matured Coconut",
      },
      {
        id: "product-22",
        title: "Tender Coconut",
        description:
          "Our export-grade tender coconuts deliver perfectly sweet water, pristine white flesh, and extended freshness—harvested at optimal maturity for superior taste and nutritional value worldwide.",
        image: Img33,
        alt: "An image of Tender Coconut",
      },
    ],
  },
  {
    id: "category-14",
    title: "Cattle Feed",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus.",
    image: Img22,
    alt: "An image of Cattle Feed",
    products: [
      {
        id: "product-21",
        title: "Maize",
        description:
          "Premium export maize offers exceptional kernel quality, consistent moisture content, and high nutritional value—certified pest-free and sustainably grown for food production and animal feed worldwide.",
        image: Img22,
        alt: "An image of Maize",
      },
    ],
  },
];

function ProductCategories({ isHome }) {
  const [activePopup, setActivePopup] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const openPopup = (id) => {
    setActivePopup(id);
    setCurrentSlideIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    gsap.to(".product-popup__wrapper", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setActivePopup(null);
        document.body.style.overflow = "auto";
      },
    });
  };

  const handleNext = (totalSlides) => {
    if (currentSlideIndex < totalSlides - 1) {
      const current = document.querySelectorAll(
        `.product-slide-${activePopup}`
      )[currentSlideIndex];
      const next = document.querySelectorAll(`.product-slide-${activePopup}`)[
        currentSlideIndex + 1
      ];

      gsap.to(current, { opacity: 0, duration: 0 });
      gsap.fromTo(next, { opacity: 0 }, { opacity: 1, duration: 0 });

      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      const current = document.querySelectorAll(
        `.product-slide-${activePopup}`
      )[currentSlideIndex];
      const prev = document.querySelectorAll(`.product-slide-${activePopup}`)[
        currentSlideIndex - 1
      ];

      gsap.to(current, { opacity: 0, duration: 0 });
      gsap.fromTo(prev, { opacity: 0 }, { opacity: 1, duration: 0 });

      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (activePopup !== null) {
      gsap.fromTo(
        ".product-popup__wrapper",
        { opacity: 0 },
        { opacity: 1, duration: 0.4 }
      );
      gsap.fromTo(
        ".product-popup__container",
        { opacity: 0, scale: 0.99 },
        { opacity: 1, scale: 1, duration: 0.4 }
      );

      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          closePopup();
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [activePopup]);

  const productsCategoriesData = isHome
    ? productsData.slice(0, 3)
    : productsData;

  return (
    <div className="products__container">
      {productsCategoriesData.map((category) => (
        <article className="single-product__container" key={category.id}>
          <div
            className="product__container"
            onClick={() => openPopup(category.id)}
          >
            <div className="image">
              <img src={category.image} alt={category.alt} />
            </div>
            <div className="content">
              <h3>{category.title}</h3>
              <h4>({category.products.length} Products)</h4>
              {/* <p>{category.description}</p> */}
            </div>
          </div>

          {activePopup === category.id && (
            <div className="product-popup__wrapper">
              <div className="product-popup__container">
                <div className="close__container">
                  <button
                    type="button"
                    className="close-btn"
                    onClick={closePopup}
                    aria-label="Close popup"
                  >
                    <svg
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.9951,22.417l-1.5781,1.5781-10.417-10.4169L1.583,23.9951.0049,22.417l10.4169-10.417L.0049,1.583,1.583.0049l10.417,10.4169L22.417.0049l1.5781,1.5781-10.4169,10.417,10.4169,10.417Z" />
                    </svg>
                  </button>
                </div>

                <div className="popup__container">
                  {category.products.map((product, index) => (
                    <div
                      key={product.id}
                      className={`product-slide product-slide-${category.id}`}
                      style={{
                        display: index === currentSlideIndex ? "block" : "none",
                        opacity: 1,
                        zIndex: index === 0 ? 10 : 1,
                      }}
                    >
                      <div className="product">
                        <div className="product-image">
                          <img src={product.image} alt={product.alt} />
                        </div>
                        <div className="product-content">
                          <div className="section-content">
                            <div className="heading">
                              <h2>{product.title}</h2>
                              <p>{product.description}</p>
                              <div className="cta">
                                <Link to="/contact" onClick={closePopup}>
                                  <span className="fade-out-text">
                                    Learn More
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="custom-navigation__container">
                    <button
                      className={`swiper-button-prev ${
                        currentSlideIndex > 0 ? "" : "fade"
                      }`}
                      onClick={handlePrev}
                    >
                      <svg
                        width="19"
                        height="10"
                        viewBox="0 0 19 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5L18 5"
                          stroke="#000"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M14 1L18 5L14 9"
                          stroke="#000"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <button
                      className={`swiper-button-next ${
                        currentSlideIndex < category.products.length - 1
                          ? ""
                          : "fade"
                      }`}
                      onClick={() => handleNext(category.products.length)}
                    >
                      <svg
                        width="19"
                        height="10"
                        viewBox="0 0 19 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5L18 5"
                          stroke="#000"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M14 1L18 5L14 9"
                          stroke="#000"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

export default ProductCategories;
