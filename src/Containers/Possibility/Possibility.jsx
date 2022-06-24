import React from "react";
import "./possibility.css";
import PossImg from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className='possibility' id='OpenAI'>
      <div className='possibility_image'>
        <img src={PossImg} alt='VRimage' />
      </div>
      <div className='possibility_content'>
        <p>Request Early Access to Get Started</p>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <a href='#'>Request Early Access to Get Started</a>
      </div>
    </div>
  );
};

export default Possibility;
