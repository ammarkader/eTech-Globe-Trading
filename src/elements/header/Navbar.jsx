import { Link } from "react-router-dom";
import Logo from "@/assets/img-logo.webp";
import "@/styles/modules/header/_header_navbar.scss";

function Navbar({ show, onSetToggle }) {
  return (
    <nav className="header-navbar__wrapper">
      <div className="header-navbar__container">
        <div className="navbar-logo__container">
          <Link to="/">
            <img src={Logo} alt="Logo of Etech Globe Trading" />
          </Link>
        </div>
        <div className="navbar-links__container" aria-label="Main navigation">
          <ul>
            <li>
              <Link to="/products">Our Products</Link>
            </li>
            <li>
              <Link to="/services">Our Services</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-toggle-menu__container">
          <button
            className="toggle-btn btn"
            type="button"
            aria-expanded={show ? "true" : "false"}
            aria-label="Toggle menu"
            onClick={() => onSetToggle(true)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
