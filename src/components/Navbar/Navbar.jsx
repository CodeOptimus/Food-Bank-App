import { useEffect, useRef, useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";
import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState("home");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // creating a ref for the hamburger menu
  const menuRef = useRef(null);

  // Click-outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <div className="navbar">
      <div className="navmain">
        <Link to="/">
          <img src={assets.logo} alt="" className="logo" />
        </Link>
        <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="navbar-menu">
            <Link
              to="/"
              onClick={() => setMenu("home")}
              className={menu === "home" ? "active" : ""}
            >
              Home
            </Link>
            <a
              href="#explore-menu"
              onClick={() => setMenu("menu")}
              className={menu === "menu" ? "active" : ""}
            >
              Menu
            </a>
            <a
              href="#app-download"
              onClick={() => setMenu("mobile-app")}
              className={menu === "mobile-app" ? "active" : ""}
            >
              Mobile App
            </a>
            <a
              href="#footer"
              onClick={() => {
                setMenu("contact-us");
              }}
              className={menu === "contact-us" ? "active" : ""}
            >
              Contact Us
            </a>
          </ul>
        </div>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
            <Link>
              <img src={assets.basket_icon} alt="" />
            </Link>
            <div className="dot">10</div>
          </div>
          <button className="signin-btn">Sign In</button>

          {/* Hamburger Icon */}
          <HiBars3BottomRight
            size={30}
            className="menu-bar"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
