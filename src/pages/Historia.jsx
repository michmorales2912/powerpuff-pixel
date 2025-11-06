import React, { useEffect, useRef } from 'react';
import './Historia.css';


export default function Historia() {
const typeRef = useRef(null);
const fullIntro = 'La ciudad de Townsville vuelve a estar en peligro.';


// efecto typewriter para la primera frase
useEffect(() => {
const el = typeRef.current;
if (!el) return;
el.textContent = '';
let i = 0;
const speed = 25;
const timer = setInterval(() => {
el.textContent += fullIntro[i] || '';
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
Una energía desconocida se ha extendido por sus calles, desatando el caos y dando vida a nuevas amenazas que desafían incluso a las Chicas Superpoderosas.
<mark className="resaltar"> Bombón, Burbuja y Bellota</mark> deberán usar todo su poder para restaurar la paz, enfrentando enemigos clásicos y descubriendo pistas sobre una mente en las sombras…
alguien que, junto a Mojo Jojo, ha desatado un plan mucho más grande de lo que cualquiera podría imaginar.
<br /><br />A medida que avanzan en su misión, comprenderán que el verdadero enemigo podría estar más cerca de lo que creen. El destino de Townsville está en sus manos… y esta vez, la verdad cambiará todo.
</p>


<img
src="/personajes/personajes.png"
alt="Las tres Chicas Superpoderosas"
className="historia-imagen"
width="420"
height="auto"
/>
</div>


{/* Separador decorativo */}
<svg className="wave" viewBox="0 0 1200 100" preserveAspectRatio="none" aria-hidden>
<path d="M0,30 C300,120 900,-60 1200,30 L1200,100 L0,100 Z" />
</svg>
</section>
);
}