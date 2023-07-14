import React, { useEffect, useState } from "react"
import htmlIcon from '../icons/language-html5.svg';
import cssIcon from '../icons/language-css3.svg';
import jsIcon from '../icons/language-javascript.svg';
import jestIcon from '../icons/jest.svg';
import npmIcon from '../icons/npm.svg';
import sassIcon from '../icons/sass.svg';
import reactIcon from '../icons/react.svg';
import webpackIcon from '../icons/webpack.svg';
import gitIcon from '../icons/git.svg';
import rightIcon from '../icons/chevron_right_FILL0_wght400_GRAD0_opsz48.svg';
import leftIcon from '../icons/chevron_left_FILL0_wght400_GRAD0_opsz48.svg';
import uniqid from 'uniqid';


export default function About() {
  const [mouseIsDown, setMouseIsDown] = useState(false);
  const [initialMousePos, setInitialMousePos] = useState(null);
  const [currentMousePos, setCurrentMousePos] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);

  const skills = [
    {
      index: 1,
      name: 'HTML',
      iconURL: htmlIcon
    },
    {
      index: 2,
      name: 'CSS',
      iconURL: cssIcon
    },
    {
      index: 3,
      name: 'JAVASCRIPT',
      iconURL: jsIcon
    },
    {
      index: 4,
      name: 'REACT',
      iconURL: reactIcon
    },
    {
      index: 5,
      name: 'SASS',
      iconURL: sassIcon
    },
    {
      index: 6,
      name: 'GIT',
      iconURL: gitIcon
    },
    {
      index: 7,
      name: 'NPM',
      iconURL: npmIcon
    },
    {
      index: 8,
      name: 'WEBPACK',
      iconURL: webpackIcon
    },
    {
      index: 9,
      name: 'JEST',
      iconURL: jestIcon
    },
  ];

  //When mouse is clicked down on the carousel
  const handleMouseDown = (e) => {
    const carouselParentRef = document.querySelector('.skills-carousel');
    setMouseIsDown(true);
    setInitialMousePos(e.clientX);
    setCurrentMousePos(e.clientX);
    setScrollLeft(carouselParentRef.scrollLeft);
  }

  const handleMouseMove = (e) => {
    if (mouseIsDown) {
      setCurrentMousePos(e.clientX);
      const carouselParentRef = document.querySelector('.skills-carousel');
      carouselParentRef.scrollLeft = scrollLeft - (currentMousePos - initialMousePos);
    }
  }
  
  window.addEventListener('mouseup', () => {
    setMouseIsDown(false);
    setInitialMousePos(null);
    setCurrentMousePos(null);
  });

  return(
    <section className="about" id="about">
      <div className="about-wrapper">

        <section className="top">
          <h1 className="about-title">About Me</h1>

          <p className="text">
          Hello there! I'm Pande, an aspiring web developer who finds joy 
          in transforming ideas into digital realities. 
          With a broad understanding of HTML, CSS, JavaScript, and more, 
          I strive to create intuitive websites that captivate audiences 
          and drive results.
          </p>

          <p className="text">
          My approach combines creativity, technical expertise, and a 
          user-centric mindset. By utilizing the latest frameworks and employing 
          best practices in web development, I ensure that every project I 
          undertake is visually appealing, fully functional, and optimized for 
          speed and performance.
          </p>

          <p className="text">
          Let's embark on this journey together and empower your 
          online presence with an unforgettable digital experience!
          </p>
        </section>

        <section className="bottom" aria-label="list of skills">
          <div className="skills-carousel">
            <div 
              className="container" 
              onMouseDown={handleMouseDown} 
              onMouseMove={handleMouseMove}>
                {skills.map((skill) => {
                  return (
                    <button className="skill" key={uniqid()} id={skill.index}>
                      <img 
                        src={skill.iconURL} 
                          alt={skill.name} 
                          className="icon"
                          draggable='false'/>
                      <p className="text">{skill.index}. {skill.name}</p>
                    </button>
                  )
                })}
            </div>
          </div>
          <div className="shadow-overlay-left" />
          <div className="shadow-overlay-right" />
        </section>
      </div>
    </section>
  )
};
