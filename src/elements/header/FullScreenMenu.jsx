import { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import gsap from "gsap";
import Logo from "@/assets/img-logo.png";
import "@/styles/modules/header/_header_fullscreen_menu.scss";

function FullScreenMenu({ show, onSetToggle }) {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const section = wrapperRef.current;
    const container = containerRef.current;

    if (show) {
      gsap.set(container, {
        xPercent: 105,
      });
      section.style.pointerEvents = "auto";

      gsap.to(section, {
        autoAlpha: 1,
        ease: "none",
        duration: 0.4,
      });
      gsap.to(container, {
        xPercent: 0,
        ease: "power3.out",
        delay: 0.25,
        duration: 0.4,
      });

      document.body.style.overflow = "hidden";

      const handleEscape = (e) => {
        if (e.key === "Escape") {
          onSetToggle(false);
        }
      };

      window.addEventListener("keydown", handleEscape);

      return () => {
        window.removeEventListener("keydown", handleEscape);
      };
    } else {
      gsap.to(section, {
        autoAlpha: 0,
        ease: "none",
        delay: 0.25,
        duration: 0.4,
      });
      gsap.to(container, {
        xPercent: 105,
        ease: "power3",
        duration: 0.4,
        onComplete: () => {
          section.style.pointerEvents = "none";
        },
      });

      document.body.style.overflow = "auto";
    }
  }, [show, onSetToggle]);

  return (
    <section
      className="fullscreen-menu__wrapper"
      aria-live="assertive"
      ref={wrapperRef}
    >
      <div className="fullscreen-menu-inner__container">
        <div className="fullscreen-menu__container" ref={containerRef}>
          <div className="section-top__container">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="logo of Etech Globe Trading" />
              </Link>
            </div>
            <button
              className="close-btn"
              type="button"
              aria-label="Close fullscreen menu"
              onClick={() => onSetToggle(false)}
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
          <div className="section-main__container">
            <ul className="main-menu__container">
              <li>
                <NavLink to="/" onClick={() => onSetToggle(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" onClick={() => onSetToggle(false)}>
                  Our Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" onClick={() => onSetToggle(false)}>
                  Our Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={() => onSetToggle(false)}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={() => onSetToggle(false)}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="section-bottom__container">
            <div className="content">
              <p className="address">
                <a href="mailto:info@etechglobe.com" target="_blank">
                  ETECH Trading Globe FZCO <br />
                  IFZA Business Park, DDP, Building A1, Dubai Digital Park,
                  Dubai Silicon Oasis, Dubai
                </a>
              </p>
              <p className="email">
                <a href="mailto:info@etechglobe.com">info@etechglobe.com</a>
              </p>
              <p className="phone">
                <a href="tel:1234567890"> 1234567890 </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FullScreenMenu;
