import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const handleClick = (e) => {
    switch (e.target.dataset.id) {
      case 'about':
        const aboutRef = document.getElementById('about');
        aboutRef.scrollIntoView({ behavior: 'smooth' });
        break;
        case 'projects':
        const projectsRef = document.getElementById('projects');
        projectsRef.scrollIntoView({ behavior: 'smooth' });
        break;
        case 'contact':
        const contactRef = document.getElementById('contact');
        contactRef.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }

  }

  return (
    <div className="App">
      <Header handleClick={handleClick} />

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
