import React, { useEffect, useState } from "react"

export default function About() {
  const skills = [
    {
      index: 0,
      name: 'HTML',
      iconURL: ''
    },
    {
      index: 1,
      name: 'CSS',
      iconURL: ''
    },
    {
      index: 2,
      name: 'JAVASCRIPT',
      iconURL: ''
    },
    {
      index: 3,
      name: 'REACT',
      iconURL: ''
    },
    {
      index: 4,
      name: 'SASS',
      iconURL: ''
    },
    {
      index: 5,
      name: 'GIT',
      iconURL: ''
    },
    {
      index: 6,
      name: 'NPM',
      iconURL: ''
    },
    {
      index: 7,
      name: 'WEBPACK',
      iconURL: ''
    },
    {
      index: 8,
      name: 'JEST',
      iconURL: ''
    },
  ]

  return(
    <section className="about">
      <div className="left">
        <h1 className="about-title">About Me</h1>

        <p className="text">
        Hello there! I'm Pande, an aspiring web developer who finds joy 
        in transforming ideas into stunning digital realities. 
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
        Let's embark on this web development journey together and empower your 
        online presence with an unforgettable digital experience!
        </p>
      </div>

      <div className="right">
        <button className="prev" aria-label="previous"></button>
        <div className="skills-carousel">
          <div className="container">

          </div>
        </div>
        <button className="next" aria-label="next"></button>
      </div>
    </section>
  )
};
