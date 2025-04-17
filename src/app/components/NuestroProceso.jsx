import React from 'react';
import { FaLightbulb, FaPencilRuler, FaCode, FaRocket, FaHeadset } from 'react-icons/fa';

const pasos = [
  {
    id: 1,
    titulo: '1. Investigación y Análisis',
    descripcion: 'Entendemos tu negocio, objetivos y público para desarrollar una estrategia digital sólida.',
    icono: <FaLightbulb className="text-white text-4xl" />,
    imagen: '/ruta/imagen1.png',
    reverse: false
  },
  {
    id: 2,
    titulo: '2. Diseño y Branding',
    descripcion: 'Creamos una identidad visual única que represente tu marca y conecte con tu audiencia.',
    icono: <FaPencilRuler className="text-white text-4xl" />,
    imagen: '/ruta/imagen2.png',
    reverse: true
  },
  {
    id: 3,
    titulo: '3. Desarrollo Fullstack',
    descripcion: 'Diseñamos y desarrollamos sitios y apps optimizados, escalables y veloces.',
    icono: <FaCode className="text-white text-4xl" />,
    imagen: '/ruta/imagen3.png',
    reverse: false
  },
  {
    id: 4,
    titulo: '4. Lanzamiento y SEO',
    descripcion: 'Publicamos el proyecto y lo posicionamos con buenas prácticas de SEO técnico.',
    icono: <FaRocket className="text-white text-4xl" />,
    imagen: '/ruta/imagen4.png',
    reverse: true
  },
  {
    id: 5,
    titulo: '5. Seguimiento y Optimización',
    descripcion: 'Monitoreamos resultados, mejoramos constantemente y te damos soporte personalizado.',
    icono: <FaHeadset className="text-white text-4xl" />,
    imagen: '/ruta/imagen5.png',
    reverse: false
  }
];

const NuestroProceso = () => {
  return (
    <section className="bg-[#0f0f0f] py-16 px-6 md:px-20 text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Nuestro Proceso</h2>
      <div className="space-y-24">
        {pasos.map(({ id, titulo, descripcion, icono, imagen, reverse }) => (
          <div key={id} className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-10`}>
            <div className="relative w-full md:w-1/2">
              <div className="bg-gradient-to-br from-indigo-500/60 to-purple-600/60 p-4 rounded-full w-max absolute -top-6 -left-6 shadow-xl z-10">
                {icono}
              </div>
              <img
                src={imagen}
                alt={titulo}
                className="w-full rounded-3xl shadow-lg object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold">{titulo}</h3>
              <p className="text-lg text-gray-300">{descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NuestroProceso;
