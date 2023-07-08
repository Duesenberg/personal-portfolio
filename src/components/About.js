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
  //Set translation of carousel
  const [translation, setTranslation] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

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

  const scrollCarouselRight = () => {
    setMouseDown(true);

    //Get largest skill index
    let skillIndex = 0;
    skills.map(skill => {
      if (skill.index > skillIndex) skillIndex = skill.index;
    })
    
    //Execute this only if right edge of last skill element is farther right
    //than right edge of parent element
    const id = setInterval(() => {
      //Refs for carousel container & last skill
      const carouselParentRef = document.querySelector('.skills-carousel');
      const lastSkillRef = document.getElementById(skillIndex);
      //Right values for above elements
      const carouselParentRight = carouselParentRef.getBoundingClientRect().right;
      const lastSkillRight = lastSkillRef.getBoundingClientRect().right;

      if (lastSkillRight > carouselParentRight)
        setTranslation((translation) => translation - 5);
      }, 1);

      setIntervalId(id);
  }

  const scrollCarouselLeft = () => {
    setMouseDown(true);
    
    //Execute this only if right edge of carousel's x value is larger than
    //right edge of its parent's x value. 132px is the width of one skill box
    //aling with margin + gap
    const id = setInterval(() => {
      //Refs for carousel container & parent
      const carouselRef = document.querySelector('.skills-carousel .container');
      const carouselParentRef = document.querySelector('.skills-carousel');
      //Get carousel container X coord & parent right edge X coord
      const carouselParentX = carouselParentRef.getBoundingClientRect().x
      const carouselX = carouselRef.getBoundingClientRect().x;

      if (carouselX < carouselParentX) {
        setTranslation((translation) => translation + 5);
      }
    }, 1);

    setIntervalId(id);
  }

  const handleMouseUp = () => {
    setMouseDown(false);

    // Clear the interval when the mouse button is released
    clearInterval(intervalId);
    setIntervalId(null);
  }

  //Translate the carousel whenever translation changes accordingly
  useEffect(() => {
    const carouselRef = document.querySelector('.skills-carousel .container');
    carouselRef.style.transform = `translateX(${translation}px)`;
  }, [translation]);


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
          <button 
            className="navigate prev" 
            aria-label="previous"
            onMouseDown={scrollCarouselLeft}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={scrollCarouselLeft}
            onTouchEnd={handleMouseUp}>
              <img src={leftIcon} alt="left arrow" />
          </button>
          <div className="skills-carousel">
            <div className="container">
              {skills.map((skill) => {
                return (
                  <button className="skill" key={uniqid()} id={skill.index}>
                    <img src={skill.iconURL} alt={skill.name} className="icon" />
                    <p className="text">{skill.index}. {skill.name}</p>
                  </button>
                )
              })}
            </div>
          </div>
          <button 
            className="navigate next" 
            aria-label="next"
            onMouseDown={scrollCarouselRight}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={scrollCarouselRight}
            onTouchEnd={handleMouseUp}>
              <img src={rightIcon} alt="right arrow" />
          </button>
        </section>
      </div>
    </section>
  )
};
