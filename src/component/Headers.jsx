import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../image/header/logo.png.webp";
import Headermob from "./Headermob";

const Headers = () => {
  const [mobileHeaderOn, setMobileHeaderOn] = useState(false);

  const mobileHeaderOpen = () => {
    if (mobileHeaderOn) {
      setMobileHeaderOn(false);
    }
    document.querySelector(".mobile-header").classList.remove("display-none");
  };

  return (
    <header>
      <Headermob
        mobileHeaderOn={mobileHeaderOn}
        setMobileHeaderOn={setMobileHeaderOn}
      />
      <div className="header-container">
        <nav>
          <figure>
            <img src={logo} alt="logo" />
          </figure>
          <ul className="header" id="nav-menu">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/womens">WOMEN'S</Link>
            </li>
            <li>
              <Link to="/mens">MEN'S</Link>
            </li>
            <li>
              <Link to="/shop">SHOP</Link>
            </li>
            <li>
              <Link to="/pages">PAGES</Link>
              <div className="header-pages-details">
                <ul>
                  <li>
                    <Link to="/details/:id">Product Details</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop Cart</Link>
                  </li>
                  <li>
                    <Link to="/details/:id">Checkout</Link>
                  </li>
                  <li>
                    <Link to="/details/:id">Blog Details</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
          <ul className="logres">
            <li>
              <Link to="/login">Login/Register</Link>
            </li>
            <li>
              <Link to="/register"></Link>
            </li>
            <li>
              <span>
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </li>
            <li>
              <span>
                <i className="fa-regular fa-heart"></i>
              </span>
            </li>
            <li>
              <span>
                <i className="fa-solid fa-bag-shopping"></i>
              </span>
            </li>
          </ul>

          <div class="mobile-menu" id="menu">
            <i
              class="fa-solid fa-bars"
              id="mobile-menu"
              onClick={mobileHeaderOpen}
            ></i>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Headers;
