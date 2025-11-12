import './Smartwatch.css';

export default function Smartwatch() {
  return (
    <section className="smartwatch-section">
      <h2 className="smartwatch-title">Smartwatch App</h2>
      <p className="smartwatch-text">
        Con la app del teléfono y smartwatch puedes ver estadísticas, vidas y misiones de tus personajes en tiempo real.
      </p>

      {/* Imagen del smartwatch */}
      <img
        src="/smartwatch.png"
        alt="Smartwatch"
        className="smartwatch-img"
      />

      <div className="smartwatch-buttons">
        <button className="btn btn-pink">Ver estadísticas</button>
        <button className="btn btn-purple">Misiones</button>
      </div>
    </section>
  );
}
