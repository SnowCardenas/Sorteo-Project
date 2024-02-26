import "./Navbar.css";

export const Navbar = () => {
  return (
    <header>
      <a href="#" className="logo">
        Rifas <span className="tree">Oscar</span>
      </a>
      <div className="menuToggle"></div>
      <ul className="nav">
        <li className="active">
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Sorteo</a>
        </li>
        <li>
          <a href="#tickets">Tickets</a>
        </li>
        <li>
          <a href="#contact-us">Contacto</a>
        </li>
      </ul>
    </header>
  );
};
