import "./Bubbles.css";
import BotonRegresar from "../../components/BotonRegresar";

export default function Bubbles() {
  const bubblesIcon = `${import.meta.env.BASE_URL}personajes/bubbles_icono.png`;

  return (
    <section className="bubbles-section">
      <h2 className="bubbles-titulo">Bubbles</h2>

      <div className="bubbles-contenedor">
        <div className="bubbles-imagen-contenedor">
          <img src={bubblesIcon} alt="Bubbles" className="bubbles-imagen" />
        </div>

        <div className="bubbles-info">
          <h3>Historia</h3>
          <p>Bubbles es la más dulce y sensible del grupo...</p>
          <h3>Habilidades</h3>
          <ul><li>Voz ultrasónica</li><li>Comunicación con animales</li><li>Vuelo</li></ul>
          <h3>Debilidades</h3>
          <ul><li>Muy emocional</li><li>Falta de confianza</li></ul>
          <h3>Poderes Especiales</h3>
          <ul><li>Grito sónico</li><li>Aura azul</li></ul>
        </div>
      </div>
      <BotonRegresar />
    </section>
  );
}
