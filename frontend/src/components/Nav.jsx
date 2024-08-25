import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav-container">
      <nav className="nav">
        <ul className="nav-st"></ul>
        <ul className="nav-main">
          
          <li className="nav-item">home</li>
          <li className="nav-item">about</li>
          <li className="nav-item">tech</li>
          <li className="nav-item">projects</li>
          <li className="nav-item">contact</li>
          <li className="nav-item">blogs</li>
    
        </ul>
        <ul className="nav-st"></ul>
      </nav>
    </div>
  );
}