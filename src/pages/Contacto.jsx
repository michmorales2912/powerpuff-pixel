import { Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react";

export default function Contacto() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#151527] text-pink-200 p-8">
      <div className="bg-[#1f1f36] rounded-2xl shadow-2xl p-8 w-full max-w-md text-center border border-pink-400/30">
        <h1 className="text-3xl font-bold mb-4 text-pink-400 uppercase tracking-widest">
          Contáctanos 💌
        </h1>
        <p className="text-pink-100 mb-6">
          ¿Tienes dudas, ideas o simplemente quieres hablar sobre Powerpuff Pixel?
          Escríbenos o síguenos en redes. ¡Nos encanta leer a otros fans del
          pixel power!
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-center gap-3">
            <Mail className="text-pink-400" />
            <a href="mailto:powerpuffpixel@gmail.com" className="hover:text-pink-300 transition">
              powerpuffpixel@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Phone className="text-pink-400" />
            <a href="tel:+529990001111" className="hover:text-pink-300 transition">
              +52 999 000 1111
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-6 text-pink-400">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Instagram size={28} />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Facebook size={28} />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Twitter size={28} />
          </a>
        </div>

        <p className="text-sm text-pink-300/60 mt-6">
          © 2025 Powerpuff Pixel. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
