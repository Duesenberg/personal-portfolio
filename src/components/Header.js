export default function Header({ handleClick }) {
  return(
    <header className="container">
      <div className="left-side">
        <button 
          className="logo-icon" 
          aria-label="scroll to top"
          data-id="header"
          onClick={handleClick} />

        <h1 className="header">Mariposa</h1>
      </div>

      <div className="buttons">
        <button 
          className="about" 
          data-id="about"
          onClick={handleClick}>about</button>
        <button 
          className="projects" 
          data-id="projects"
          onClick={handleClick}>projects</button>
        <button 
          className="contact" 
          data-id="contact"
          onClick={handleClick}>contact</button>
      </div>
    </header>
  )
};
