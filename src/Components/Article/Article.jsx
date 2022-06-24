import React from "react";
import "./article.css";

const Article = ({ image, date, title, link, clsName }) => {
  return (
    <div className={clsName}>
      <img src={image} alt='blog_image' />
      <div className='article_content'>
        <p>{date}</p>
        <h2>{title}</h2>
        <a href='#'>{link}</a>
      </div>
    </div>
  );
};

export default Article;
