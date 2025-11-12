import { Link } from "react-router-dom";
import "./BotonRegresar.css";

export default function BotonRegresar() {
  return (
    <div className="regresar-contenedor">
      <Link to="/personajes" className="regresar-boton">
        ← Conoce a las demás
      </Link>
    </div>
  );
}
