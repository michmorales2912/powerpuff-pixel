import "./Buttercup.css";
import BotonRegresar from "../../components/BotonRegresar";

export default function Buttercup() {
  const buttercupIcon = `${import.meta.env.BASE_URL}personajes/buttercup_icono.png`;

  return (
    <section className="buttercup-section">
      <h2 className="buttercup-titulo">Buttercup</h2>

      <div className="buttercup-contenedor">
        <div className="buttercup-imagen-contenedor">
          <img src={buttercupIcon} alt="Buttercup" className="buttercup-imagen" />
        </div>

        <div className="buttercup-info">
          <h3>Historia</h3>
          <p>Buttercup es la más fuerte y decidida del trío...</p>
          <h3>Habilidades</h3>
          <ul><li>Súper fuerza</li><li>Vuelo</li><li>Reflejos rápidos</li></ul>
          <h3>Debilidades</h3>
          <ul><li>Temperamento impulsivo</li><li>Falta de paciencia</li></ul>
          <h3>Poderes Especiales</h3>
          <ul><li>Golpe de energía verde</li><li>Escudo de fuerza</li></ul>
        </div>
      </div>
      <BotonRegresar />
    </section>
  );
}
