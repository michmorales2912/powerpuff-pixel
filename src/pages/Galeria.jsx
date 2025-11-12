import { useState } from "react";
import './Galeria.css';

export default function Galeria() {
  const imagenes = [
    "/fondos/callepixel.png",
    "/fondos/fondo2.png",
    "/personajes/blossom2.png",
    "/personajes/personajes.png",
    "/fondos/labpixel.png"
  ];

  const [modalImg, setModalImg] = useState(null);

  const abrirModal = (img) => {
    setModalImg(img);
  };

  const cerrarModal = () => {
    setModalImg(null);
  };

  return (
    <section className="galeria-section">
      <h2 className="galeria-titulo">Galería</h2>
      <div className="galeria-grid">
        {imagenes.map((img, i) => (
          <div key={i} className="galeria-card" onClick={() => abrirModal(img)}>
            <img src={img} alt={`Imagen ${i}`} className="galeria-img"/>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalImg && (
        <div className="modal" onClick={cerrarModal}>
          <img src={modalImg} alt="Imagen ampliada" className="modal-img"/>
        </div>
      )}
    </section>
  );
}
