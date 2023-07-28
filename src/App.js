import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import userEvent from '@testing-library/user-event';

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
      case 'header':
        const headerRef = document.getElementById('root');
        headerRef.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }

  }

  window.addEventListener('scroll', () => {
    // Get section refs
    const aboutRef = document.getElementById('about');
    const projectsRef = document.getElementById('projects');
    const contactRef = document.getElementById('contact');
    const headerRef = document.getElementById('root');

    // Get header buttons refs
    const aboutButton = document.querySelector('button.about');
    const projectsButton = document.querySelector('button.projects');
    const contactButton = document.querySelector('button.contact');
    
    if(aboutRef.getBoundingClientRect().top < window.innerHeight) {
      aboutButton.classList.add('in-view');
      projectsButton.classList.remove('in-view');
      contactButton.classList.remove('in-view');
    }
    if(projectsRef.getBoundingClientRect().top +300 < window.innerHeight) {
      aboutButton.classList.remove('in-view');
      projectsButton.classList.add('in-view');
      contactButton.classList.remove('in-view');
    }
    if(contactRef.getBoundingClientRect().top < window.innerHeight) {
      aboutButton.classList.remove('in-view');
      projectsButton.classList.remove('in-view');
      contactButton.classList.add('in-view');
    }
  })

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
