import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <About />
        <Contact />
        <Footer />
        <Header />
        <Portfolio />
        <Resume />
      </div>
    );
  }
}

export default App;