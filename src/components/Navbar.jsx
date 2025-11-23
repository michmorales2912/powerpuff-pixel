import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/historia">Historia</Link>
      <Link to="/personajes">Personajes</Link>
      <Link to="/smartwatch">Smartwatch</Link>
      <Link to="/galeria">Galería</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/demo">Trailer</Link>
    </nav>
  );
}
