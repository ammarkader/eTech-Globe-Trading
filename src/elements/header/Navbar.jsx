import { Link, NavLink } from "react-router-dom";
import Logo from "@/assets/img-logo.png";
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
              <NavLink to="/products">Our Products</NavLink>
            </li>
            <li>
              <NavLink to="/services">Our Services</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
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
