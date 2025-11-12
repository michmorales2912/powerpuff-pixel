import './Bubbles.css';
import BotonRegresar from '../../components/BotonRegresar';

export default function Bubbles() {
  return (
    <section className="bubbles-section">
      <h2 className="bubbles-titulo">Bubbles</h2>

      <div className="bubbles-contenedor">

        <div className="bubbles-imagen-contenedor">
          <img
            src="/personajes/bubbles_icono.png"
            alt="Bubbles"
            className="bubbles-imagen"
          />
        </div>

        <div className="bubbles-info">
          <h3>Historia</h3>
          <p>
            Bubbles es la más dulce y sensible del grupo. Ama los animales, el arte y hablar con ardillas. 
            No te confundas: aunque parece tierna, cuando se enoja es una de las más poderosas.
          </p>

          <h3>Habilidades</h3>
          <ul>
            <li>Voz ultrasónica</li>
            <li>Comunicación con animales</li>
            <li>Vuelo y velocidad</li>
          </ul>

          <h3>Debilidades</h3>
          <ul>
            <li>Muy emocional</li>
            <li>Poca confianza en sí misma a veces</li>
          </ul>

          <h3>Poderes Especiales</h3>
          <ul>
            <li>Grito sónico</li>
            <li>Aura celestial azul</li>
          </ul>
        </div>
      </div>
      <BotonRegresar />
    </section>
  );
}
