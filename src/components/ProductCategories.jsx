import React, { useState, useEffect, useRef } from "react";
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

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, EffectFade } from "swiper/modules";

const productsData = [
  {
    id: "category-1",
    title: "Edible Oils",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis.",
    image: Img1,
    alt: "An image of Edible Oils",
    products: [
      {
        id: "product-11",
        title: "Olive Oil",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img2,
        alt: "An image of Olive Oil",
      },
      {
        id: "product-22",
        title: "Coconut Oil",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img3,
        alt: "An image of Coconut Oil",
      },
      {
        id: "product-33",
        title: "Groundnut Oil",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img4,
        alt: "An image of Groundnut Oil",
      },
    ],
  },
  {
    id: "category-2",
    title: "Sugar & Spices",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus.",
    image: Img11,
    alt: "An image of Sugar & Spices",
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
    id: "category-3",
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
        title: "Brown Rice",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img333,
        alt: "An image of Brown Rice",
      },
      {
        id: "product-333",
        title: "Parboiled Rice",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img444,
        alt: "An image of Parboiled Rice",
      },
    ],
  },
  {
    id: "category-4",
    title: "Agriculture Fertilizers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis.",
    image: Img1111,
    alt: "An image of Agriculture Fertilizers",
    products: [
      {
        id: "product-1111",
        title: "Cocopeat",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img2222,
        alt: "An image of Cocopeat",
      },
      {
        id: "product-2222",
        title: "Sulphur",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img3333,
        alt: "An image of Sulphur",
      },
    ],
  },
  {
    id: "category-5",
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
    id: "category-6",
    title: "Minerals",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis.",
    image: Img555555,
    alt: "An image of Minerals",
    products: [
      {
        id: "product-111111",
        title: "Chrome",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img111111,
        alt: "An image of Chrome",
      },
      {
        id: "product-222222",
        title: "Nickel",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img222222,
        alt: "An image of Nickel",
      },
      {
        id: "product-333333",
        title: "Silica Sand",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img333333,
        alt: "An image of Silica Sand",
      },
      {
        id: "product-444444",
        title: "Iron Ore",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img444444,
        alt: "An image of Iron Ore",
      },
      {
        id: "product-555555",
        title: "Lime Stone",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img666666,
        alt: "An image of Lime Stone",
      },
    ],
  },
];

function ProductCategories({ isHome }) {
  const [activePopup, setActivePopup] = useState(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  const openPopup = (id) => {
    setActivePopup(id);
    document.body.style.overflow = "hidden";
  };

  const handlePopupClose = () => {
    gsap.to(".product-popup__wrapper", {
      opacity: 0,
      duration: 0.3,
      ease: "none",
      onComplete: () => {
        setActivePopup(null);
        document.body.style.overflow = "auto";
      },
    });
  };

  useEffect(() => {
    if (activePopup) {
      gsap.fromTo(
        ".product-popup__wrapper",
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "none" }
      );
      gsap.fromTo(
        ".product-popup__container",
        { opacity: 0, scale: 0.99 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "power2.in" }
      );
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
              <p>{category.description}</p>
            </div>
          </div>
          {activePopup === category.id && (
            <div
              className="product-popup__wrapper"
              role="dialog"
              aria-labelledby="popup-title"
              aria-hidden="false"
            >
              <div className="product-popup__container">
                <div className="close__container">
                  <button
                    type="button"
                    className="close-btn"
                    aria-label="Close popup"
                    onClick={handlePopupClose}
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
                  <Swiper
                    className="popup-products-slider"
                    slidesPerView={1}
                    effect="fade"
                    modules={[EffectFade, Navigation]}
                    navigation={{
                      prevEl: prevBtnRef.current,
                      nextEl: nextBtnRef.current,
                    }}
                    onInit={(swiper) => {
                      swiper.params.navigation.prevEl = prevBtnRef.current;
                      swiper.params.navigation.nextEl = nextBtnRef.current;
                      swiper.navigation.init();
                      swiper.navigation.update();
                    }}
                  >
                    {category.products.map((product) => (
                      <SwiperSlide key={product.id}>
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
                                  <Link
                                    to="/contact"
                                    onClick={handlePopupClose}
                                  >
                                    <span className="fade-out-text">
                                      Learn More
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="custom-navigation__container">
                    <div className="swiper-button-prev" ref={prevBtnRef}>
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
                    </div>
                    <div className="swiper-button-next" ref={nextBtnRef}>
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
                    </div>
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
