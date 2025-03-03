import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Link to="/">
            <img src={assets.logo} alt="" />
          </Link>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
            perspiciatis, laudantium pariatur aperiam modi quos ipsa voluptatem
            voluptates alias natus officiis consequuntur quod doloribus et,
            autem sint maxime quibusdam error?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+233248926856</li>
            <li>portiaadaletey@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-copyright">Copyright &copy; Jessica.dev</div>
    </div>
  );
}

export default Footer;