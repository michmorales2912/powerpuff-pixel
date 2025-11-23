import "./Demo.css";

export default function Demo() {
  return (
    <section className="demo-section">
      <h2 className="demo-titulo">🎮 Trailer Powerpuff Pixel</h2>

      <div className="demo-video-contenedor">
        <iframe
          className="demo-video"
          src="https://www.youtube.com/embed/dwGn3DT4BZ4"
          title="Demo Gameplay"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p className="demo-descripcion">
        Esta es una pequeña muestra del videojuego en desarrollo. Pronto podrás jugarlo,
        explorar Townsville y derrotar a los villanos. 💥
      </p>
      <button className="demo-button-pixel">Jugar — Próximamente</button>
    </section>
  );
}
