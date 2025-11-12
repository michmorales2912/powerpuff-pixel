export default function CardPersonaje({ nombre, descripcion, imagen }) {
  return (
    <div className="bg-[#222232] p-4 rounded-lg w-48 text-center hover:scale-105 transition-transform">
      <img src={imagen} alt={nombre} className="w-24 h-24 mx-auto mb-2" />
      <h3 className="text-pink-400 font-bold">{nombre}</h3>
      <p className="text-sm text-pink-200">{descripcion}</p>
    </div>
  );
}
