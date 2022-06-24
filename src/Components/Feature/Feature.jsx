import React from "react";
import "./feature.css";

const Feature = ({ title, text, clsName }) => {
  return (
    <div className={clsName}>
      <div className='feature_heading'>
        <div className='feature_line'></div>
        <h2>{title}</h2>
      </div>
      <div className='feature_desc'>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
