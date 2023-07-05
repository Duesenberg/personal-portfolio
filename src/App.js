import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <div className='main'>
        <Banner />
        <About />
        <Projects />
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
