import './Buttercup.css';
import BotonRegresar from '../../components/BotonRegresar';
export default function Buttercup() {
  return (
    <section className="buttercup-section">
      <h2 className="buttercup-titulo">Buttercup</h2>

      <div className="buttercup-contenedor">
        <div className="buttercup-imagen-contenedor">
          <img
            src="/personajes/buttercup_icono.png"
            alt="Buttercup"
            className="buttercup-imagen"
          />
        </div>

        <div className="buttercup-info">
          <h3>Historia</h3>
          <p>
            Buttercup es la más fuerte y rebelde del equipo. Directa, ruda y siempre lista para pelear.
          </p>

          <h3>Habilidades</h3>
          <ul>
            <li>Fuerza sobrehumana</li>
            <li>Combate cuerpo a cuerpo</li>
            <li>Resistencia extrema</li>
          </ul>

          <h3>Debilidades</h3>
          <ul>
            <li>Impulsividad</li>
            <li>Dificultad para cooperar</li>
          </ul>

          <h3>Poderes Especiales</h3>
          <ul>
            <li>Explosión de energía verde</li>
            <li>Puño sísmico</li>
          </ul>
        </div>
      </div>
      <BotonRegresar />
    </section>
  );
}
