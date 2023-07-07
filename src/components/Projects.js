export default function Projects() {
  return(
    <section className="projects" aria-label="projects">
      <div className="projects-wrapper">
        <h1 className="projects-title">Projects</h1>

        <section className="project" aria-label="social media clone">
          <div className="project-wrapper">
            <img 
              src={require('../images/social-media-clone.png')}
              alt="preview of the project"
              className="project-photo" />

            <div className="project-info">
              <h2 className="title">
                Social Media Clone
              </h2>

              <div className="info-wrapper">
                <div className="text">
                  <p>An imitation of a social media platform. 
                    Built as a web app, works both on desktop and mobile. </p>
                  <p>You can create an account and use your credentials to log
                    in, start chats with all registered users and send them texts
                    and photos, make text or photo posts which everyone can see,
                    and also check your profile to see what you have posted or 
                    to log out from your profile.
                  </p>
                </div>

                <div className="tools-used">
                  <p>Built using HTML, CSS, React, React-Router and Firebase.</p>
                </div>

                <div className="actions">
                  <h2 className='links'>Links:</h2>
                  <a 
                    className="live"
                    href='https://social-media-clone-a65ab.web.app/'
                    target='_blank'
                    rel='noreferrer'>Live</a>
                  <a 
                    className="github"
                    href='https://github.com/Duesenberg/social-media-clone'
                    target='_blank'
                    rel='noreferrer'>Github</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="project" aria-label="battleship game">
          <div className="project-wrapper">
            <img 
              src={require('../images/battleship-game.png')}
              alt="preview of the project"
              className="project-photo" />

            <div className="project-info">
              <h2 className="title">
                Battleship Game
              </h2>

              <div className="info-wrapper">
                <div className="text">
                  <p>
                    My own version of the well-known Battleship board game.
                    You play against a computer on a 10x10 board, each player
                    with five different ships on their board.
                  </p>
                  <p>
                    I wanted the game to look a bit more appealing, so for this
                    project I took the time to create the graphic assets too.
                    The application is mobile responsive as well. The computer has
                    ten different ship layouts, one of which is chosen randomly
                    for each game. The computer chooses a random square when 
                    attacking, which I'm planning to change and implement an algorithm
                    in order to make the opponent smarter.
                  </p>
                </div>

                <div className="tools-used">
                  <p>Built using HTML, CSS, Javascript, Jest.</p>
                </div>

                <div className="actions">
                  <h2 className='links'>Links:</h2>
                  <a 
                    className="live"
                    href='https://duesenberg.github.io/battleship-game/'
                    target='_blank'
                    rel='noreferrer'>Live</a>
                  <a 
                    className="github"
                    href='https://github.com/Duesenberg/battleship-game'
                    target='_blank'
                    rel='noreferrer'>Github</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="project" aria-label="photo tagging game">
          <div className="project-wrapper">
            <img 
              src={require('../images/tagging-game.png')}
              alt="preview of the project"
              className="project-photo" />

            <div className="project-info">
              <h2 className="title">
                Photo Tagging Game
              </h2>

              <div className="info-wrapper">
                <div className="text">
                  <p>
                    A browser game where you need to find five different characters
                    on the photo, similar to the popular "Where's Waldo" game.
                    At the end, you can submit the time it took you to find all
                    the characters and it will show on the leaderboard.
                  </p>
                  <p>
                    Because of the large size of the photo, I thought the application 
                    wouldn't really work for mobile so I didn't make it mobile responsive.
                    The triggers for the characters on the photo were made using
                    'map' and 'area' elements in HTML.
                  </p>
                </div>

                <div className="tools-used">
                  <p>Built using HTML, CSS, React, Firebase.</p>
                </div>

                <div className="actions">
                  <h2 className='links'>Links:</h2>
                  <a 
                    className="live"
                    href='https://photo-tagging-app-b3302.web.app/'
                    target='_blank'
                    rel='noreferrer'>Live</a>
                  <a 
                    className="github"
                    href='https://github.com/Duesenberg/photo-tagging-app'
                    target='_blank'
                    rel='noreferrer'>Github</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="project" aria-label="online shop mock-up">
          <div className="project-wrapper">
            <img 
              src={require('../images/online-shop.png')}
              alt="preview of the project"
              className="project-photo" />

            <div className="project-info">
              <h2 className="title">
                Online Shop Mock-up
              </h2>

              <div className="info-wrapper">
                <div className="text">
                  <p>
                    A mock-up website for an online store. The website consists
                    of four sections: a home, about us, store page and a shopping
                    cart page to which you can add or remove items from. The total
                    price of all items is calculated in the checkout section of
                    the cart page.
                  </p>
                  <p>
                    I've made the application responsive for multiple screen sizes
                    including mobile devices. Used the Material UI library for
                    several components in this project.
                  </p>
                </div>

                <div className="tools-used">
                  <p>Built using HTML, CSS, React, Jest.</p>
                </div>

                <div className="actions">
                  <h2 className='links'>Links:</h2>
                  <a 
                    className="live"
                    href='https://duesenberg.github.io/shopping-cart/'
                    target='_blank'
                    rel='noreferrer'>Live</a>
                  <a 
                    className="github"
                    href='https://github.com/Duesenberg/shopping-cart'
                    target='_blank'
                    rel='noreferrer'>Github</a>
                </div>
              </div>
            </div>
          </div>
        </section>
    
        <section className="project" aria-label="memory card game">
          <div className="project-wrapper">
            <img 
              src={require('../images/memory-card-game.png')}
              alt="preview of the project"
              className="project-photo" />

            <div className="project-info">
              <h2 className="title">
                Memory Card Game
              </h2>

              <div className="info-wrapper">
                <div className="text">
                  <p>
                    A game where the goal is to click on each card once. After
                    each click, the cards are shuffled. If you click on the same
                    card twice, the game is over. There are three difficulties,
                    where you need to memorize larger numbers as the difficulty
                    increases.
                  </p>
                  <p>
                    I've used the Material UI library for all the components in this
                    project. The application is desktop, tablet and mobile responsive.
                  </p>
                </div>

                <div className="tools-used">
                  <p>Built using HTML, CSS, React.</p>
                </div>

                <div className="actions">
                  <h2 className='links'>Links:</h2>
                  <a 
                    className="live"
                    href='https://duesenberg.github.io/memory-card-game/'
                    target='_blank'
                    rel='noreferrer'>Live</a>
                  <a 
                    className="github"
                    href='https://github.com/Duesenberg/memory-card-game'
                    target='_blank'
                    rel='noreferrer'>Github</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="project" aria-label="cv application generator">
          <div className="project-wrapper">
            <img 
              src={require('../images/cv-generator.png')}
              alt="preview of the project"
              className="project-photo" />

            <div className="project-info">
              <h2 className="title">
                CV Application Generator
              </h2>

              <div className="info-wrapper">
                <div className="text">
                  <p>
                    An application for generating resumes. Allows the user to enter
                    their personal information, education, work experience, skills
                    and projects they have worked on. 
                  </p>
                  <p>
                  Any created applications can be saved to the browser's local 
                  storage and loaded after the page reloads. 
                  The application can be printed as a PDF document.
                  </p>
                </div>

                <div className="tools-used">
                  <p>Built using HTML, CSS, React.</p>
                </div>

                <div className="actions">
                  <h2 className='links'>Links:</h2>
                  <a 
                    className="live"
                    href='https://duesenberg.github.io/cv-application/'
                    target='_blank'
                    rel='noreferrer'>Live</a>
                  <a 
                    className="github"
                    href='https://github.com/Duesenberg/cv-application'
                    target='_blank'
                    rel='noreferrer'>Github</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="project" aria-label="to-do list generator">
          <div className="project-wrapper">
            <img 
              src={require('../images/todo-list.png')}
              alt="preview of the project"
              className="project-photo" />

            <div className="project-info">
              <h2 className="title">
                To-Do List Generator
              </h2>

              <div className="info-wrapper">
                <div className="text">
                  <p>
                    An application in which you can create your own To-Do lists.
                    You can add or remove tasks, mark them as completed, add a 
                    description for your project, change the project priority and 
                    due date.
                  </p>
                  <p>
                    All of your projects can be saved and loaded from your 
                    browser's local storage.
                  </p>
                </div>

                <div className="tools-used">
                  <p>Built using HTML, CSS, Javascript.</p>
                </div>

                <div className="actions">
                  <h2 className='links'>Links:</h2>
                  <a 
                    className="live"
                    href='https://duesenberg.github.io/todo-list/'
                    target='_blank'
                    rel='noreferrer'>Live</a>
                  <a 
                    className="github"
                    href='https://github.com/Duesenberg/todo-list'
                    target='_blank'
                    rel='noreferrer'>Github</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
};
