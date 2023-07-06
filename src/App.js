import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <div className='main'>
        <section className="banner">
          <img 
            src={require('./images/banner-pandepopovski.jpg')} 
            alt='screenshot of code being written' />
        </section>
        
        <About />
        <Projects />
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
