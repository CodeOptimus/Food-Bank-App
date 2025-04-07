import { useEffect, useRef, useState, useContext } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { StoreContext } from "../../context/StoreContext";
import { ThemeContext } from "../../context/ThemeContext";
import "./Navbar.css";

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const { CartItems } = useContext(StoreContext);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const searchInputRef = useRef(null);

  // creating a ref for the hamburger menu
  const menuRef = useRef(null);

  // Calculate total items in cart
  const getTotalItems = () => {
    return Object.values(CartItems).reduce((total, quantity) => total + quantity, 0);
  };

  // Click-outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    // Prevent scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    setMenu(menuItem);
    setIsMenuOpen(false);
  };

  const handleSearchClick = () => {
    setIsSearchExpanded(true);
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 100);
  };

  const handleSearchBlur = () => {
    if (searchQuery === "") {
      setIsSearchExpanded(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // console.log("Searching for:", searchQuery);
    // For now, we'll just navigate to the home page with a search parameter
    window.location.href = `/?search=${encodeURIComponent(searchQuery)}`;
  };

  return (
    <div className="navbar">
      <div className="navmain">
        <Link to="/">
          <img src={assets.logo} alt="" className="logo" />
        </Link>
        <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`} ref={menuRef}>
          <ul className="navbar-menu">
            <Link
              to="/"
              onClick={() => handleMenuItemClick("home")}
              className={menu === "home" ? "active" : ""}
            >
              Home
            </Link>
            <a
              href="#explore-menu"
              onClick={() => handleMenuItemClick("menu")}
              className={menu === "menu" ? "active" : ""}
            >
              Menu
            </a>
            <a
              href="#app-download"
              onClick={() => handleMenuItemClick("mobile-app")}
              className={menu === "mobile-app" ? "active" : ""}
            >
              Mobile App
            </a>
            <a
              href="#footer"
              onClick={() => handleMenuItemClick("contact-us")}
              className={menu === "contact-us" ? "active" : ""}
            >
              Contact Us
            </a>
          </ul>
        </div>
        <div className="navbar-right">
          <div className={`search-container ${isSearchExpanded ? "expanded" : ""}`}>
            <form onSubmit={handleSearchSubmit}>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                onBlur={handleSearchBlur}
                className="search-input"
              />
            </form>
            <img 
              src={assets.search_icon} 
              alt="Search" 
              onClick={handleSearchClick}
              className="search-icon"
            />
          </div>
          <div className="navbar-search-icon">
            <Link to="/cart">
              <img src={assets.basket_icon} alt="Cart" />
            </Link>
            {getTotalItems() > 0 && <div className="dot">{getTotalItems()}</div>}
          </div>
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
          </button>
          <button className="signin-btn" onClick={() => setShowLogin(true)}>Sign In</button>

          {/* Hamburger Icon */}
          <HiBars3BottomRight
            size={80}
            className="menu-bar"
            onClick={handleMenuClick}
          />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
