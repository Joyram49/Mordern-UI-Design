import React from "react";
import "./gpt-3.css";

import Feature from "../../Components/Feature/Feature";

const GPT_3 = () => {
  return (
    <div className='gpt-3' id='WhatGPT-3'>
      <div className='gpt-3_top'>
        <Feature
          clsName='feature_top'
          title='What is GPT-3'
          text='We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own. Connection
          has put impossible own apartments boisterous. At jointure ladyship an
          insisted so humanity he. Friendly bachelor entrance to on by.'
        />
      </div>
      <div className='gpt-3_heading'>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt-3_bottom'>
        <Feature
          clsName='feature'
          title='Chatbots'
          text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. '
        />
        <Feature
          clsName='feature'
          title='Knowledge'
          text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
        />
        <Feature
          clsName='feature'
          title='Education'
          text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
        />
      </div>
    </div>
  );
};

export default GPT_3;
