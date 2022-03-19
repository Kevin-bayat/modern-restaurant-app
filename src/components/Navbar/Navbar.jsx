import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__openSans">
          <a href="#home">HOME</a>
        </li>
        <li className="p__openSans">
          <a href="#about">ABOUT</a>
        </li>
        <li className="p__openSans">
          <a href="#menu">MENU</a>
        </li>
        <li className="p__openSans">
          <a href="#awards">AWARDS</a>
        </li>
        <li className="p__openSans">
          <a href="#contacts">CONTACTS</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__openSans">
          Log In / Register
        </a>
        <div />
        <a href="/" className="p__openSans">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallScreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallScreen_overlay flex__center slide__bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallScreen_links">
              <li className="p__openSans">
                <a href="#home">HOME</a>
              </li>
              <li className="p__openSans">
                <a href="#about">ABOUT</a>
              </li>
              <li className="p__openSans">
                <a href="#menu">MENU</a>
              </li>
              <li className="p__openSans">
                <a href="#awards">AWARDS</a>
              </li>
              <li className="p__openSans">
                <a href="#contacts">CONTACTS</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
