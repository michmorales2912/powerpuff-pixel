import { useState } from "react";
import './Galeria.css';

export default function Galeria() {
  const base = import.meta.env.BASE_URL;
  const imagenes = [
    `${base}fondos/callepixel.png`,
    `${base}fondos/fondo2.png`,
    `${base}personajes/blossom2.png`,
    `${base}personajes/personajes.png`,
    `${base}fondos/labpixel.png`
  ];

  const [modalImg, setModalImg] = useState(null);

  const abrirModal = (img) => setModalImg(img);
  const cerrarModal = () => setModalImg(null);

  return (
    <section className="galeria-section">
      <h2 className="galeria-titulo">Galería</h2>
      <div className="galeria-grid">
        {imagenes.map((img, i) => (
          <div key={i} className="galeria-card" onClick={() => abrirModal(img)}>
            <img src={img} alt={`Imagen ${i}`} className="galeria-img" />
          </div>
        ))}
      </div>

      {modalImg && (
        <div className="modal" onClick={cerrarModal}>
          <img src={modalImg} alt="Imagen ampliada" className="modal-img" />
        </div>
      )}
    </section>
  );
}
