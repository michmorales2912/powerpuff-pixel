import { useEffect, useRef } from "react";
import "./Historia.css";

export default function Historia() {
  const typeRef = useRef(null);
  const fullIntro = "La ciudad de Townsville vuelve a estar en peligro.";
  const personajesImg = `${import.meta.env.BASE_URL}personajes/personajes.png`;

  useEffect(() => {
    const el = typeRef.current;
    if (!el) return;
    el.textContent = "";
    let i = 0;
    const speed = 25;
    const timer = setInterval(() => {
      el.textContent += fullIntro[i] || "";
      i++;
      if (i > fullIntro.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="historia-root" aria-labelledby="historia-title">
      <h2 id="historia-title" className="historia-title">Historia</h2>
      <p className="historia-intro"><span ref={typeRef} aria-live="polite" /></p>

      <div className="historia-card">
        <p className="historia-texto">
          Una energía desconocida se ha extendido por sus calles, desatando el caos y dando vida a nuevas amenazas...
          <mark className="resaltar"> Bombón, Burbuja y Bellota</mark> deberán usar todo su poder para restaurar la paz.
        </p>

        <img
          src={personajesImg}
          alt="Las tres Chicas Superpoderosas"
          className="historia-imagen"
          width="420"
          height="auto"
        />
      </div>

      <svg className="wave" viewBox="0 0 1200 100" preserveAspectRatio="none" aria-hidden>
        <path d="M0,30 C300,120 900,-60 1200,30 L1200,100 L0,100 Z" />
      </svg>
    </section>
  );
}
