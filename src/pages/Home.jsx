import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const logo = `${import.meta.env.BASE_URL}favicon.png`;

  return (
    <section className="home-section">
      <img src={logo} alt="Powerpuff Pixel Icono" className="home-logo" />

      <h1 className="home-title">Powerpuff Pixel</h1>

      <p className="home-slogan">
        ¡Prepárate para salvar Townsville en estilo retro!
        Conviértete en parte de la acción pixelada.
      </p>

      <div className="home-buttons">
        <Link to="/registro" className="home-button home-button-pink">
          Registrarse para obtener el juego
        </Link>
      </div>
    </section>
  );
}
