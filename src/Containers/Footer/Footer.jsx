import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_top'>
        <h1 className='gradient__text'>
          Do you want to step in to the future before others
        </h1>
        <button className='footer_btn'>Request Early Access</button>
      </div>
      <div className='footer_mid'>
        <div className='footer_mid_left'>
          <h1>GPT-3</h1>
          <p>Crechterwoord K12 182 DK</p>
          <p>Alknijkceb, All Rights Reserved</p>
        </div>
        <div className='footer_mid_right'>
          <ul>
            <li>Links</li>
            <li>
              <a href='#'>Overons</a>
            </li>
            <li>
              <a href='#'>Social Media</a>
            </li>
            <li>
              <a href='#'>Counters</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
          <ul>
            <li>Company</li>
            <li>
              <a href='#'>Terms & Condition</a>
            </li>
            <li>
              <a href='#'>Privacy Poliicy</a>
            </li>
            <li>
              <a href='#'>Newsletters</a>
            </li>
          </ul>
          <ul>
            <li>Get in touch</li>
            <li>
              <p>Crechterwoord K12</p>
              <p>182 DK ALknjkcb</p>
            </li>
            <li>085-938-3627</li>
            <li>info@payme.net</li>
          </ul>
        </div>
      </div>
      <div className='footer_bottom'>
        <p>@2021 GPT-3. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
