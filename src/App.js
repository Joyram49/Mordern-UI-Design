import React from "react";
import "./App.css";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  GPT_3,
  Header,
} from "./Containers";

import { CTA, Brand, Navbar } from "./Components";

function App() {
  return (
    <div>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <GPT_3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
