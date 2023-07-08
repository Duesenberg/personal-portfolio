export default function Header({ handleClick }) {
  return(
    <header className="container">
      <button className="logo-icon" aria-label="scroll to top" />

      <h1 className="header">Pande Popovski</h1>

      <div className="buttons">
        <button 
          className="about" 
          data-id="about"
          onClick={handleClick}>About Me</button>
        <button 
          className="projects" 
          data-id="projects"
          onClick={handleClick}>Projects</button>
        <button 
          className="contact" 
          data-id="contact"
          onClick={handleClick}>Contact</button>
      </div>
    </header>
  )
};
