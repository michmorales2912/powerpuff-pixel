import './Personajes.css';
import { Link } from 'react-router-dom';

function CardPersonaje({ to, nombre, descripcion, imagen, color }) {
  return (
    <Link to={to} className="card-link" aria-label={`Ver ${nombre}`}>
      <article
        className="card-personaje"
        style={{ borderColor: color, boxShadow: `0 0 15px ${color}` }}
      >
        <img src={imagen} alt={nombre} className="card-imagen" />
        <h3 className="card-nombre">{nombre}</h3>
        <p className="card-descripcion">{descripcion}</p>
      </article>
    </Link>
  );
}

export default function Personajes() {
  return (
    <section className="personajes-section">
      <h2 className="personajes-titulo">Personajes</h2>
      <div className="personajes-grid">
        <CardPersonaje
          to="../PersonajesDetalle/Blossom"
          nombre="Blossom"
          descripcion="Líder estratégica, siempre piensa en la misión perfecta."
          imagen="/personajes/blossom_icono.png"
          color="#FF6EC7"
        />

        <CardPersonaje
          to="../PersonajesDetalle/Bubbles"
          nombre="Bubbles"
          descripcion="Dulce y divertida, su alegría es contagiosa."
          imagen="/personajes/bubbles_icono.png"
          color="#4FC3F7"
        />

        <CardPersonaje
          to="../PersonajesDetalle/Buttercup"
          nombre="Buttercup"
          descripcion="Fuerza bruta y valiente, nunca se rinde."
          imagen="/personajes/buttercup_icono.png"
          color="#7CFC00"
        />
      </div>
    </section>
  );
}