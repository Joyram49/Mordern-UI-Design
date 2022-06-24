import React from "react";
import "./blog.css";
import Blog1 from "../../assets/blog01.png";
import Blog2 from "../../assets/blog02.png";
import Blog3 from "../../assets/blog03.png";
import Blog4 from "../../assets/blog04.png";
import Blog5 from "../../assets/blog05.png";
import Article from "../../Components/Article/Article";

const blog_data = {
  date: "sep 26, 2021",
  title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  link: "Read Full Article",
};

const Blog = () => {
  return (
    <div className='blog' id='Blog'>
      <h1 className='gradient__text'>
        A lot is happening, <br /> We are blogging about it.
      </h1>
      <div className='blog_content'>
        <div>
          <Article
            clsName='left_article'
            image={Blog1}
            date={blog_data.date}
            title={blog_data.title}
            link={blog_data.link}
          />
        </div>
        <div className='blog_content_right'>
          <Article
            clsName='article'
            image={Blog2}
            date={blog_data.date}
            title={blog_data.title}
            link={blog_data.link}
          />
          <Article
            clsName='article'
            image={Blog3}
            date={blog_data.date}
            title={blog_data.title}
            link={blog_data.link}
          />
          <Article
            clsName='article'
            image={Blog4}
            date={blog_data.date}
            title={blog_data.title}
            link={blog_data.link}
          />
          <Article
            clsName='article'
            image={Blog5}
            date={blog_data.date}
            title={blog_data.title}
            link={blog_data.link}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
