import './Smartwatch.css';

export default function Smartwatch() {
  const smartwatchImg = `${import.meta.env.BASE_URL}smartwatch.png`;
  return (
    <section className="smartwatch-section">
      <h2 className="smartwatch-title">Smartwatch App</h2>
      <p className="smartwatch-text">
        Con tu smartwatch puedes conectar tu actividad diaria con el mundo de las Chicas Superpoderosas y desbloquear recompensas únicas.
      </p>
      <img
        src={smartwatchImg}
        alt="Smartwatch"
        className="smartwatch-img"
      />


      {/* SECCIÓN DINÁMICA GAMIFICADA */}
      <div className="features-grid">

        <div className="feature-card">
          <span className="feature-icon">💖</span>
          <h4 className="feature-title">Monedas por Pasos</h4>
          <p>Por cada <strong>1,000 pasos</strong> ganas monedas para comprar poderes, skins y mejoras.</p>
        </div>

        <div className="feature-card">
          <span className="feature-icon">⚡</span>
          <h4 className="feature-title">Poderes Especiales</h4>
          <p>Activa <strong>boosts de velocidad y fuerza</strong> según tu nivel de actividad física semanal.</p>
        </div>

        <div className="feature-card">
          <span className="feature-icon">🌈</span>
          <h4 className="feature-title">Skins Exclusivas</h4>
          <p>Desbloquea skins temáticas al completar <strong>misiones diarias y retos de movimiento</strong>.</p>
        </div>

        <div className="feature-card">
          <span className="feature-icon">🔥</span>
          <h4 className="feature-title">Misiones Diarias</h4>
          <p>Recibe misiones como “camina 500 pasos” o “mantén ritmo cardiaco activo” para obtener recompensas.</p>
        </div>

        <div className="feature-card">
          <span className="feature-icon">🏆</span>
          <h4 className="feature-title">Logros y Trofeos</h4>
          <p>Consigue trofeos por rachas de movimiento y coleccionalos en tu perfil.</p>
        </div>

        <div className="feature-card">
          <span className="feature-icon">💫</span>
          <h4 className="feature-title">Eventos Especiales</h4>
          <p>Participa en retos semanales para ganar <strong>recompensas limitadas</strong>.</p>
        </div>

      </div>
    </section>
  );
}