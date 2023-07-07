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
                  <p>Built using React, React-Router and Firebase.</p>
                </div>

                <div className="actions">
                  <button className="live">Live</button>
                  <button className="github">Github</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="project" aria-label="battleship game">
        </section>

        <section className="project" aria-label="photo tagging game">
        </section>
        
        <section className="project" aria-label="online shop mock-up">
        </section>
    
        <section className="project" aria-label="memory card game">
        </section>

        <section className="project" aria-label="cv application generator">
        </section>

        <section className="project" aria-label="cv application generator">
        </section>

        <section className="project" aria-label="to-do list generator">
        </section>
      </div>
    </section>
  )
};
