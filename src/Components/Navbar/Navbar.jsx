import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";

import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='navbar' id='navbar'>
      <div className='navbar_logo'>
        <img src={Logo} alt='logo' />
      </div>
      <ul className='nav_links' onClick={() => setToggle(!toggle)}>
        <li className='nav_item'>
          <a href='#'>Home</a>
        </li>
        <li className='nav_item'>
          <a href='#WhatGPT-3'>WhatGPT-3</a>
        </li>
        <li className='nav_item'>
          <a href='#Features'>Features</a>
        </li>
        <li className='nav_item'>
          <a href='#OpenAI'>Open AI</a>
        </li>
        <li className='nav_item'>
          <a href='#Blog'>Blog</a>
        </li>
      </ul>
      <ul className={toggle ? "logIn mobile_logIn" : "logIn"}>
        <li className='logIn_item'>
          <a href='#'>Sign In</a>
        </li>
        <li className='logIn_item_button'>
          <a href='#'>Sign Up</a>
        </li>
      </ul>
      <div className='hamburger_menu'>
        <a href='#' onClick={() => setToggle(!toggle)}>
          {toggle ? <RiCloseLine /> : <RiMenu3Line />}
        </a>
        {toggle && (
          <div className='mobile_nav scale-up-center'>
            <div className='mobile_nav_links'>
              <li className='nav_item'>
                <a href='#' onClick={() => setToggle(!toggle)}>
                  Home
                </a>
              </li>
              <li className='nav_item'>
                <a href='#WhatGPT-3' onClick={() => setToggle(!toggle)}>
                  WhatGPT-3
                </a>
              </li>
              <li className='nav_item'>
                <a href='#Features' onClick={() => setToggle(!toggle)}>
                  Features
                </a>
              </li>
              <li className='nav_item'>
                <a href='#OpenAI' onClick={() => setToggle(!toggle)}>
                  Open AI
                </a>
              </li>
              <li className='nav_item'>
                <a href='#Blog' onClick={() => setToggle(!toggle)}>
                  Blog
                </a>
              </li>
            </div>
            <ul className='mobile_logIn_sm'>
              <li className='logIn_item'>
                <a href='#'>Sign In</a>
              </li>
              <li className='logIn_item_button'>
                <a href='#'>Sign Up</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
