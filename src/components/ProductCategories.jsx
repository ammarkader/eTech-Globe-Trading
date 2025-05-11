import { useState, useEffect } from "react";
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
import ImgGYP from "@/assets/img-mineral-gyp.jpg";
import IMGSCRAP from "@/assets/img-scrap.jpg";
import IMGPHARMA1 from "@/assets/img-pharma-1.jpeg";
import IMGPHARMA2 from "@/assets/img-pharma-2.png";
import IMGPHARMA3 from "@/assets/img-pharma-3.png";
import IMGSEA1 from "@/assets/img-sea-1.jpeg";
import IMGSEA3 from "@/assets/img-sea-3.jpeg";
import IMGSEA4 from "@/assets/img-sea-4.jpg";
import IMGCATTLE from "@/assets/img-cattle-feed-1.jpg";
// import IMGLIVESTOCK1 from "@/assets/img-liveStock-1.jpeg";
import IMGLIVESTOCK2 from "@/assets/img-liveStock-2.jpeg";
import IMGPALM2 from "@/assets/img-palm-oil-2.jpg";
import IMGPALM3 from "@/assets/img-palm-3.png";
import IMGCONSTRUCTION1 from "@/assets/img-construction-1.jpg";
import IMGCONSTRUCTION2 from "@/assets/img-construction-2.jpg";
import IMGCONSTRUCTION3 from "@/assets/img-construction-3.png";
import IMGCONSTRUCTION4 from "@/assets/img-construction-4.jpg";
import IMGSOYOIL from "@/assets/img-soy-oil.jpeg";
import IMGGROUNDOIL from "@/assets/img-grountnut-oil.jpg";
import IMGSUGARMAIN from "@/assets/img-sugar-main.png";
import IMGSUGARS30 from "@/assets/img-sugar-s30.jpg";
import IMGSUGARINDIAN from "@/assets/img-sugar-indian.jpg";
import IMGCOCONUT from "@/assets/img-coconut.jpg";
import IMGCARS from "@/assets/img-auto-cars.jpg";
import IMGSPARES from "@/assets/img-auto-spare.jpg";

const productsData = [
  {
    id: "category-1",
    title: "Palm Oil & Bi Products",
    image: IMGPALM2,
    alt: "An image of Palm Oil & Bi Products",
    products: [
      {
        id: "product-cat-1",
        title: "Crude Palm Oil (CPO)",
        description:
          "Premium-grade crude palm oil sourced from sustainable plantations, offering superior quality with carefully monitored Free Fatty Acid (FFA) levels. Our CPO meets international quality standards with optimal moisture content and impurity levels, making it ideal for refineries and industrial processing.",
        image: Img1,
        alt: "An image of Crude Palm Oil (CPO)",
      },
      {
        id: "product-cat-2",
        title: "RBD Palm Oil CP10 & CP8",
        description:
          "Refined, Bleached, and Deodorized (RBD) palm oil with Certified Cloud Point 10°C, featuring exceptional clarity and stability. Meticulously processed to ensure consistent quality, ideal for food manufacturing and industrial applications requiring specific cold temperature performance. Meets international food safety standards.",
        image: IMGPALM2,
        alt: "An image of RBD Palm Oil CP10 & CP8",
      },
      {
        id: "product-cat-3",
        title: "Additional Products",
        description:
          "In addition to our main offerings, we supply a range of value-added products such as Palm Stearin, PAO (Palm Acid Oil), PFAD (Palm Fatty Acid Distillate), and Palm Kernel Expellers. These versatile products cater to various industries, supporting applications in animal feed, oleochemicals, and food processing sectors.",
        image: IMGPALM3,
        alt: "An image of Additional Products",
      },
    ],
  },
  {
    id: "category-2",
    title: "Energy",
    image: Img11111,
    alt: "An image of Energy",
    products: [
      {
        id: "product-cat-2-1",
        title: "Oil and Gas",
        description:
          "We offer specialized crude oil trading services with premium market access and execution excellence. Our solutions include seamless procurement, strategic price risk management, and optimized logistics. We supply LNG, EN590 10PPM, LPG, Jet Fuel A1, SAF, and D6 with flexible delivery terms including FOB and CIF across global markets.",
        image: Img33333,
        alt: "An image of Oil and Gas",
      },
    ],
  },
  {
    id: "category-3",
    title: "Biofuel",
    image: Img22222,
    alt: "An image of Biofuel",
    products: [
      {
        id: "product-cat-3-1",
        title: "Premium Wood Pellets - Indonesia",
        description:
          "Premium wooden pellets deliver high calorific value, consistent density, and minimal ash content—perfect for clean, efficient heating and industrial applications with renewable energy certification.",
        image: Img22222,
        alt: "An image of Premium Wood Pellets - Indonesia",
      },
    ],
  },
  {
    id: "category-4",
    title: "Minerals",
    image: Img555555,
    alt: "An image of Minerals",
    products: [
      {
        id: "product-cat-4-1",
        title: "Fe 62+ Iron Ore",
        description:
          "Our premium Fe 62+ iron ore offers superior iron content, minimal impurities, and consistent sizing, maximising yield while reducing costs for efficient blast furnace operations.",
        image: Img444444,
        alt: "An image of Fe 62+ Iron Ore",
      },
      {
        id: "product-cat-4-2",
        title: "Silica Sand",
        description:
          "Premium silica sand from our mines offers exceptional purity, consistent grain size, and low iron content—ideal for glass manufacturing, foundry work, and industrial applications worldwide.",
        image: Img333333,
        alt: "An image of Silica Sand",
      },
      {
        id: "product-cat-4-3",
        title: "Gypsum",
        description:
          "Export-grade gypsum from our mines provides high purity, consistent texture, and optimal setting properties—perfect for construction, agriculture, and industrial applications worldwide.",
        image: ImgGYP,
        alt: "An image of Gypsum",
      },
      {
        id: "product-cat-4-4",
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
    title: "Construction Materials",
    image: IMGCONSTRUCTION1,
    alt: "An image of Construction Materials",
    products: [
      {
        id: "product-cat-5-1",
        title: "10mm & 20mm Aggregates",
        description:
          "Our premium crushed stone aggregates deliver exceptional performance for construction projects. 10mm aggregate offers superior compaction for driveways and concrete mixes, while 20mm provides robust foundation support and excellent drainage. Both sizes feature consistent grading, high durability, and meet stringent quality standards—ideal for commercial and residential applications.",
        image: IMGCONSTRUCTION1,
        alt: "An image of 10mm & 20mm Aggregates",
      },
      {
        id: "product-cat-5-2",
        title: "Steel Bars - Reinforcement",
        description:
          "We export high-quality construction steel bars for reinforcement, manufactured to international standards such as ASTM A615. Our steel bars are ideal for infrastructure projects, ensuring strength, durability, and global compliance.",
        image: IMGCONSTRUCTION3,
        alt: "An image of Steel Bars - Reinforcement",
      },
      {
        id: "product-cat-5-3",
        title: "Film-faced Laminated Plywood",
        description:
          "Film-faced laminated plywood, durable and water-resistant, ideal for concrete shuttering and construction. Smooth surface, high strength, export-quality finish, suitable for repeated use in harsh environments.",
        image: IMGCONSTRUCTION4,
        alt: "An image of Film-faced Laminated Plywood",
      },
    ],
  },
  {
    id: "category-6",
    title: "Scarp",
    image: IMGSCRAP,
    alt: "An image of Scarp",
    products: [
      {
        id: "product-cat-6-1",
        title: "Scarp Materials",
        description:
          "We import and supply high-quality scrap materials, including HMS1, copper, aluminum, and more. Our dependable sourcing, competitive pricing, and global logistics ensure efficient supply to the recycling and manufacturing industries.",
        image: IMGSCRAP,
        alt: "An image of Scarp Materials",
      },
    ],
  },
  {
    id: "category-7",
    title: "Agriculture Fertilizers",
    image: Img1111,
    alt: "An image of Agriculture Fertilizers",
    products: [
      {
        id: "product-cat-7-1",
        title: "Premium Cocopeat",
        description:
          "Our superior cocopeat offers exceptional water retention and aeration for optimal plant growth. Made from processed coconut husks, this sustainable growing medium features balanced pH, low EC levels, and superior root development properties.",
        image: Img2222,
        alt: "An image of Premium Cocopeat",
      },
      {
        id: "product-cat-7-2",
        title: "Sulphur",
        description:
          "Sulfur in different forms, shapes, sizes and quality parameters is generally used for manufacturing fertilisers, as bleaching agents, as Bi-sulfates, Carbon disulfides and Sulfites, as Granular Sulphur 99.95%.",
        image: Img3333,
        alt: "An image of Sulphur",
      },
    ],
  },
  {
    id: "category-8",
    title: "Edible Oils",
    image: Img1,
    alt: "An image of Edible Oils",
    products: [
      {
        id: "product-cat-8-1",
        title: "Soybean Oil",
        description:
          "Refined soybean oil, light and healthy, rich in essential fatty acids. Ideal for cooking and food processing. Export-grade, hygienically processed and securely packaged for shipment.",
        image: IMGSOYOIL,
        alt: "An image of Soybean Oil",
      },
      {
        id: "product-cat-8-2",
        title: "Coconut Oil",
        description:
          "Pure coconut oil, cold-pressed for maximum nutrients and rich aroma. Ideal for cooking, cosmetics, and wellness. Export-quality, securely packed to preserve freshness and quality",
        image: Img3,
        alt: "An image of Coconut Oil",
      },
      {
        id: "product-cat-8-3",
        title: "Avocado Oil",
        description:
          "High-quality avocado oil, cold-pressed for maximum nutrients and rich flavor. Ideal for cooking, skincare, and wellness. Export-grade, securely packed to maintain purity and freshness.",
        image: Img3,
        alt: "An image of Avocado Oil",
      },
      {
        id: "product-cat-8-4",
        title: "Groundnut Oil",
        description:
          "Premium groundnut oil, cold-pressed and rich in natural antioxidants. Ideal for cooking and frying. Export-quality, hygienically processed, securely packaged to ensure freshness and purity.",
        image: IMGGROUNDOIL,
        alt: "An image of Groundnut Oil",
      },
    ],
  },
  {
    id: "category-9",
    title: "Rice",
    image: Img111,
    alt: "An image of Rice",
    products: [
      {
        id: "product-cat-9-1",
        title: "Broken Rice",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img222,
        alt: "An image of Broken Rice",
      },
      {
        id: "product-cat-9-2",
        title: "Basmati Rice",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img111,
        alt: "An image of Basmati Rice",
      },
      {
        id: "product-cat-9-3",
        title: "Parboiled Rice",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img444,
        alt: "An image of Parboiled Rice",
      },
      {
        id: "product-cat-9-4",
        title: "Boiled Rice",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img444,
        alt: "An image of Boiled Rice",
      },
    ],
  },
  {
    id: "category-10",
    title: "Sugar",
    image: IMGSUGARMAIN,
    alt: "An image of Sugar",
    products: [
      {
        id: "product-cat-10-1",
        title: "ICUMSA 45",
        description:
          "Premium ICUMSA 45 sugar delivers exceptional purity, brilliant white crystals, and consistent grain size—meeting international quality standards for beverage production, confectionery, and pharmaceutical applications worldwide.",
        image: IMGSUGARMAIN,
        alt: "An image of ICUMSA 45",
      },
      {
        id: "product-cat-10-2",
        title: "Indian Jaggery",
        description:
          "Our export-quality Indian jaggery features rich caramel flavor, natural golden hue, and traditional processing—delivering pure, unrefined sweetness with essential minerals for global health-conscious consumers.",
        image: IMGSUGARINDIAN,
        alt: "An image of Indian Jaggery",
      },
      {
        id: "product-cat-10-3",
        title: "S30",
        description:
          "S30 Sugar is premium-grade refined sugar, crystal white, ideal for food processing and beverages. Consistently high quality, hygienically packed, perfect for international export standards.",
        image: IMGSUGARS30,
        alt: "An image of S30",
      },
    ],
  },
  {
    id: "category-11",
    title: "Spices",
    image: Img11,
    alt: "An image of Spices",
    products: [
      {
        id: "product-cat-11-1",
        title: "Clove",
        description:
          "Premium quality cloves, sun-dried and hand-picked for purity. Rich aroma, high oil content, ideal for culinary and medicinal use. Export-ready with strict quality assurance.",
        image: Img22,
        alt: "An image of Clove",
      },
      {
        id: "product-cat-11-2",
        title: "Cardamon",
        description:
          "Green cardamom pods, aromatic and flavorful, hand-harvested for superior quality. Ideal for culinary, tea, and medicinal use. Carefully packed, export-grade with rich essential oils.",
        image: Img44,
        alt: "An image of Cardamon",
      },
      {
        id: "product-cat-11-3",
        title: "Cinamom",
        description:
          "High-quality cinnamon sticks, naturally dried for rich aroma and sweet-spicy flavor. Ideal for culinary, medicinal, and cosmetic use. Carefully packed, export-ready with strict quality control.",
        image: Img33,
        alt: "An image of Cinamom",
      },
      {
        id: "product-cat-11-4",
        title: "Red Chilli",
        description:
          "Premium red chillies, sun-dried for vibrant color and intense heat. Rich in flavor and aroma, hygienically packed, export-grade quality for culinary and industrial applications.",
        image: Img11,
        alt: "An image of Red Chilli",
      },
    ],
  },
  {
    id: "category-12",
    title: "Lentils & Cereals",
    image: Img22,
    alt: "An image of Lentils & Cereals",
    products: [
      {
        id: "product-cat-12-1",
        title: "Lentils",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img22,
        alt: "An image of Lentils",
      },
      {
        id: "product-cat-12-2",
        title: "Cereals",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: Img33,
        alt: "An image of Cereals",
      },
    ],
  },
  {
    id: "category-13",
    title: "Livestocks",
    image: IMGLIVESTOCK2,
    alt: "An image of Livestocks",
    products: [
      {
        id: "product-cat-13-1",
        title: "Chicken – Brazilian",
        description:
          "We export high-quality Brazilian whole chickens, midjoints, and paws, sourced from trusted farms. These protein-rich products are carefully processed to meet international standards, ensuring freshness and superior flavor. Perfect for culinary use and food industries, our products are securely packaged, maintaining optimal quality for global markets and customer satisfaction.",
        image: IMGLIVESTOCK2,
        alt: "An image of whole Chicken – Brazilian",
      },
      {
        id: "product-cat-13-2",
        title: "Beef",
        description:
          "We export high-quality Brazilian whole chickens, midjoints, and paws, sourced from trusted farms. These protein-rich products are carefully processed to meet international standards, ensuring freshness and superior flavor. Perfect for culinary use and food industries, our products are securely packaged, maintaining optimal quality for global markets and customer satisfaction.",
        image: IMGLIVESTOCK2,
        alt: "An image of Beef",
      },
      {
        id: "product-cat-13-3",
        title: "Lamb",
        description:
          "We export high-quality Brazilian whole chickens, midjoints, and paws, sourced from trusted farms. These protein-rich products are carefully processed to meet international standards, ensuring freshness and superior flavor. Perfect for culinary use and food industries, our products are securely packaged, maintaining optimal quality for global markets and customer satisfaction.",
        image: Img2,
        alt: "An image of Lamb",
      },
    ],
  },
  {
    id: "category-14",
    title: "Sea Foods",
    image: IMGSEA1,
    alt: "An image of Sea Foods",
    products: [
      {
        id: "product-cat-14-1",
        title: "TIN Fishes – Sardine",
        description:
          "High-quality tin fish (sardines), packed for freshness and flavor. Rich in nutrients and ideal for various cuisines. Export-ready, hygienically packed to meet international standards.",
        image: IMGSEA1,
        alt: "An image of TIN Fishes – Sardine",
      },
      {
        id: "product-cat-14-2",
        title: "Tuna",
        description:
          "Premium tuna, carefully sourced and packed to preserve freshness and flavor. Rich in protein and omega-3, ideal for culinary uses. Export-ready, high-quality packaging.",
        image: IMGSEA1,
        alt: "An image of Tuna",
      },
      {
        id: "product-cat-14-3",
        title: "Crabs",
        description:
          "Fresh, premium-quality crabs, harvested and packed to maintain natural flavor and texture. Ideal for culinary uses, rich in protein. Export-ready, hygienically packed for global markets.",
        image: IMGSEA4,
        alt: "An image of Crabs",
      },
      {
        id: "product-cat-14-4",
        title: "Shrimps",
        description:
          "Premium shrimps, fresh and sustainably sourced, packed to preserve flavor and texture. Ideal for cooking and seafood dishes. Export-quality, hygienically processed and securely packaged.",
        image: IMGSEA3,
        alt: "An image of Shrimps",
      },
    ],
  },
  {
    id: "category-15",
    title: "Cattle Feed",
    image: IMGCATTLE,
    alt: "An image of Cattle Feed",
    products: [
      {
        id: "product-cat-15-1",
        title: "Maize",
        description:
          "Premium export maize offers exceptional kernel quality, consistent moisture content, and high nutritional value—certified pest-free and sustainably grown for food production and animal feed worldwide.",
        image: IMGCATTLE,
        alt: "An image of Maize",
      },
    ],
  },
  {
    id: "category-16",
    title: "Cocunut",
    image: IMGCOCONUT,
    alt: "An image of Cocunut",
    products: [
      {
        id: "product-cat-16-1",
        title: "Matured Coconut",
        description:
          "The matured coconuts while de-husking, the husk is left intact over the “eyes” of the coconut.",
        image: IMGCOCONUT,
        alt: "An image of Matured Coconut",
      },
      {
        id: "product-cat-16-2",
        title: "Tender Coconut",
        description:
          "Our export-grade tender coconuts deliver perfectly sweet water, pristine white flesh, and extended freshness—harvested at optimal maturity for superior taste and nutritional value worldwide.",
        image: IMGCOCONUT,
        alt: "An image of Tender Coconut",
      },
    ],
  },
  {
    id: "category-17",
    title: "Automobile",
    image: IMGCARS,
    alt: "An image of Automobile",
    products: [
      {
        id: "product-cat-17-1",
        title: "Vehicles",
        description:
          "Our export-ready automobiles combine innovative engineering, fuel efficiency, and premium safety features—delivering reliable performance, modern styling, and competitive pricing for diverse global markets.",
        image: IMGCARS,
        alt: "An image of Vehicles",
      },
      {
        id: "product-cat-17-2",
        title: "Spare Parts",
        description:
          "Premium automotive spare parts offer original equipment quality, precise engineering, and comprehensive compatibility—ensuring optimal performance, extended durability, and reliable replacement solutions for international vehicle fleets.",
        image: IMGSPARES,
        alt: "An image of Spare Parts",
      },
      {
        id: "product-cat-17-3",
        title: "Lubricant oil",
        description:
          "High-quality lubricant oil for automobiles, enhancing engine performance and longevity. Ideal for all vehicle types. Export-ready, refined for superior viscosity and protection, securely packaged.",
        image: IMGSPARES,
        alt: "An image of Lubricant oil",
      },
    ],
  },
  {
    id: "category-18",
    title: "Pharma",
    image: IMGPHARMA1,
    alt: "An image of Pharma",
    products: [
      {
        id: "product-cat-18-1",
        title: "Diaper",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: IMGPHARMA2,
        alt: "An image of Diaper",
      },
      {
        id: "product-cat-18-2",
        title: "Nitrile Gloves",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla blanditiis nobis perspiciatis nihil voluptates consectetur deleniti iusto modi corporis?",
        image: IMGPHARMA3,
        alt: "An image of Nitrile Gloves",
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
    ? [productsData[0], productsData[1], productsData[3]]
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
