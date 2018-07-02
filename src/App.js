import React, { Component } from 'react';
import './index.css';

import Banner from './components/Banner';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return ( 
      <div>
        <Banner />
        <div className="container">
          <About />
          <Portfolio />
          <Skills />
        </div>
        <Footer/>
      </div>
    );
  }
}


export default App;
