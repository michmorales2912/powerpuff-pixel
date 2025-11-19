import "./Blossom.css";
import BotonRegresar from "../../components/BotonRegresar";

export default function Blossom() {
  const blossomIcon = `${import.meta.env.BASE_URL}personajes/blossom_icono.png`;

  return (
    <section className="blossom-section">
      <h2 className="blossom-titulo">Blossom</h2>

      <div className="blossom-contenedor">
        <div className="blossom-imagen-contenedor">
          <img src={blossomIcon} alt="Blossom" className="blossom-imagen" />
        </div>

        <div className="blossom-info">
          <h3>Historia</h3>
          <p>Blossom es la líder de las Chicas Superpoderosas...</p>
          <h3>Habilidades</h3>
          <ul><li>Vuelo</li><li>Rayos de hielo</li><li>Visión táctica</li></ul>
          <h3>Debilidades</h3>
          <ul><li>Perfeccionismo</li><li>Duda bajo presión</li></ul>
          <h3>Poderes Especiales</h3>
          <ul><li>Congelación instantánea</li><li>Explosión rosa</li></ul>
        </div>
      </div>
      <BotonRegresar />
    </section>
  );
}
