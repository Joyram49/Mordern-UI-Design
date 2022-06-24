import React from "react";
import "./features.css";
import Feature from "../../Components/Feature/Feature";

const features_data = [
  {
    title: "Improving end distrusts instantly ",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Message or am nothing ",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
  },
];

const Features = () => {
  return (
    <div className='features' id='Features'>
      <div className='features_heading'>
        <h1 className='gradient__text'>
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <a href='#'>Request Early Access to Get Started</a>
      </div>
      <div className='features_container'>
        {features_data.map(({ title, text }, index) => {
          return (
            <Feature
              key={index}
              title={title}
              text={text}
              clsName='feature_top'
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
