import React from "react";
import "./brand.css";
import Atlassian from "../../assets/atlassian.png";
import Dropbox from "../../assets/dropbox.png";
import Google from "../../assets/google.png";
import Shopify from "../../assets/shopify.png";
import Slack from "../../assets/slack.png";

const Brand = () => {
  return (
    <div className='brand'>
      <a href='https://www.atlassian.com/' target='_blank'>
        <img src={Atlassian} alt='logo Atlassian' />
      </a>
      <a href='https://www.dropbox.com/' target='_blank'>
        <img src={Dropbox} alt='logo Dropbox' />
      </a>
      <a href='https://www.google.com/' target='_blank'>
        <img src={Google} alt='logo Google' />
      </a>
      <a href='https://www.slack.com/' target='_blank'>
        <img src={Slack} alt='logo Slack' />
      </a>
      <a href='https://www.shopify.com/' target='_blank'>
        <img src={Shopify} alt='logo Shopify' />
      </a>
    </div>
  );
};

export default Brand;
