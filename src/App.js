import React from 'react';
import {Article,Brand, CTA, Feature, Navbar} from "./components";
import {Footer, Header, Possibility, Features, WhatGPT3} from "./containers";

const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
            <Navbar/>
            <Header/>

        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
    </div>
  );
};

export default App;