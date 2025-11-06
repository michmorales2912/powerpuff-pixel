import { Link } from "react-router-dom";
import './Home.css';

export default function Home() {
  return (
    <section className="home-section">
      
      {/* Logo grande */}
      <img
        src="/favicon.png"
        alt="Powerpuff Pixel Icono"
        className="home-logo"
      />

      {/* Título */}
      <h1 className="home-title">
        Powerpuff Pixel
      </h1>

      {/* Slogan */}
      <p className="home-slogan">
        ¡Prepárate para salvar Townsville en estilo retro!  
        Conviértete en parte de la acción pixelada.
      </p>

      {/* Botones */}
      <div className="home-buttons">
        <Link
          to="/personajes"
          className="home-button home-button-pink"
        >
          Ver Personajes
        </Link>
        <Link
          to="/historia"
          className="home-button home-button-purple"
        >
          Historia
        </Link>
      </div>
    </section>
  );
}
