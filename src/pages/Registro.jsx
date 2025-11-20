import { useState } from "react";
import "./Registro.css";

export default function Registro() {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegistro = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMensaje("");

    try {
      // 👉 Aquí llamamos a tu función de Firebase que manda el correo
      const res = await fetch(
        "https://us-central1-powerpuff-pixel.cloudfunctions.net/sendWelcomeEmail",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      if (!res.ok) throw new Error("No se pudo enviar el correo");

      setMensaje("🎉 Registro completado. ¡Revisa tu correo para más info!");
    } catch (error) {
      setMensaje("⚠️ Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="registro-section">
      <div className="registro-card">
        <h1 className="registro-title">Registro</h1>
        <p className="registro-text">
          Registra tu correo para ser de los primeros en obtener el demo.
        </p>

        <form className="registro-form" onSubmit={handleRegistro}>
          <input
            className="registro-input"
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button className="registro-button" type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Registrarme"}
          </button>
        </form>

        {mensaje && <p className="registro-mensaje">{mensaje}</p>}
      </div>
    </section>
  );
}
