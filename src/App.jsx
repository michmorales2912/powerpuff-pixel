import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Historia from "./pages/Historia";
import Personajes from "./pages/Personajes";
import Smartwatch from "./pages/Smartwatch";
import Galeria from "./pages/Galeria";
import Contacto from "./pages/Contacto";
import Demo from "./pages/Demo";

import Blossom from "./pages/PersonajesDetalle/Blossom";
import Buttercup from "./pages/PersonajesDetalle/Buttercup";
import Bubbles from "./pages/PersonajesDetalle/Bubbles";

export default function App() {
  return (
    <div className="bg-[#0f0f1a] text-white font-pixel min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/personajesdetalle/blossom" element={<Blossom />} />
          <Route path="/personajesdetalle/buttercup" element={<Buttercup />} />
          <Route path="/personajesdetalle/bubbles" element={<Bubbles />} />
          <Route path="/smartwatch" element={<Smartwatch />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
