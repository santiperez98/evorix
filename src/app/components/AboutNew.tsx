'use client';

import React from 'react';
import Image from 'next/image';

// Importa la imagen (reemplaza con la ruta real de tu imagen)


const AboutUsSection = () => {
  return (
    <section
      className="bg-black text-white py-16 md:py-24 relative"
      style={{
        background: 'linear-gradient(to bottom, #111, #000)',
        // backgroundColor: '#000',
        // backgroundImage: 'url("/noise.png")', // Reemplaza con tu imagen de ruido
        // backgroundBlendMode: 'overlay',
        // filter: 'blur(5px)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40 z-0" />
      <div className="container mx-auto px-6 relative z-10">

        {/* Sección Principal con Imagen y Texto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Contenedor de la Imagen con Marco */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            {/* Marco Decorativo (puedes personalizar el estilo) */}
            <div className="absolute inset-0 border-4 border-fuchsia-400 rounded-lg pointer-events-none"></div>
            <Image
              src="/NYG.jpg" 
              alt="Equipo trabajando en una laptop"
              className="w-full h-auto object-cover rounded-lg"
              style={{ aspectRatio: '16 / 9' }} // Ajusta la proporción según tu imagen
            />
          </div>

          {/* Texto de la Agencia */}
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
              Impulsando tu Éxito en el Mundo Digital
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Somos una agencia digital apasionada por transformar ideas en resultados tangibles.
              Con un enfoque en la innovación y la excelencia, brindamos soluciones integrales para
              impulsar tu presencia en línea y alcanzar tus objetivos de negocio.
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6 leading-relaxed">
              <li>Desarrollo Web a medida y optimizado</li>
              <li>Estrategias SEO para un mayor alcance orgánico</li>
              <li>Marketing Digital efectivo y basado en datos</li>
              <li>Sitios web dinámicos y gestionables con WordPress</li>
              <li>Gestión profesional de Comunidades Online</li>
              <li>Branding creativo y coherente con tu identidad</li>
            </ul>
            <button className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300">
              Conoce más sobre nuestros servicios
            </button>
          </div>
        </div>

        {/* Sección de Nuestro Equipo  */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-cyan-400 text-center mb-6 neon-text" style={{ textShadow: '0 0 8px #00FFFF, 0 0 16px #00FFFF' }}>
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Miembro del Equipo 1 */}
            <div
              className="rounded-lg shadow-md p-6 text-center"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="relative w-32 h-48 overflow-hidden mx-auto mb-4">
                <Image
                  src="" // Reemplaza con la imagen real
                  alt="Miembro del equipo 1"
                  width={200}
                  height={300}
                  className="object-cover"
                  style={{objectPosition: 'top'}}
                />
              </div>
              <h4 className="text-lg font-semibold text-white mb-1">Nombre del Miembro 1</h4>
              <p className="text-sm text-gray-300">Desarrollo Web</p>
            </div>
            {/* Miembro del Equipo 2 */}
            <div
              className="rounded-lg shadow-md p-6 text-center"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="relative w-32 h-48 overflow-hidden mx-auto mb-4">
                <Image
                  src="" // Reemplaza con la imagen real
                  alt="Miembro del equipo 2"
                  width={200}
                  height={300}
                  className="object-cover"
                  style={{objectPosition: 'top'}}
                />
              </div>
              <h4 className="text-lg font-semibold text-white mb-1">Nombre del Miembro 2</h4>
              <p className="text-sm text-gray-300">Marketing Digital</p>
            </div>
            {/* Miembro del Equipo 3 */}
            <div
              className="rounded-lg shadow-md p-6 text-center"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="relative w-32 h-48 overflow-hidden mx-auto mb-4">
                <Image
                  src="" // Reemplaza con la imagen real
                  alt="Miembro del equipo 3"
                  width={200}
                  height={300}
                  className="object-cover"
                  style={{objectPosition: 'top'}}
                />
              </div>
              <h4 className="text-lg font-semibold text-white mb-1">Nombre del Miembro 3</h4>
              <p className="text-sm text-gray-300">SEO y Contenido</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;