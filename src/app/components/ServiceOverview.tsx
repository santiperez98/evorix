import React from 'react';
import {
  FaBullseye,
  FaSearchDollar,
  FaLightbulb,
  FaLaptopCode,
  FaBullhorn,
  FaChartLine,
  FaMobileAlt,
  FaStore
} from 'react-icons/fa';

const services = [
  { icon: <FaBullseye size={30} />, label: 'Estrategia Digital' },
  { icon: <FaSearchDollar size={30} />, label: 'Análisis de Producto' },
  { icon: <FaLightbulb size={30} />, label: 'Identidad de Marca' },
  { icon: <FaLaptopCode size={30} />, label: 'Marketing Digital' },
  { icon: <FaBullhorn size={30} />, label: 'Publicidad Online' },
  { icon: <FaChartLine size={30} />, label: 'Optimización SEO' },
  { icon: <FaMobileAlt size={30} />, label: 'Gestión de Redes' },
  { icon: <FaStore size={30} />, label: 'Marketplaces' }
];

const ServiceOverview: React.FC = () => {
  return (
    <section
      className="relative text-white py-20 px-6"
      style={{ backgroundImage: 'url("/blanconegro.webp")', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Más que servicios, soluciones para crecer
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold mb-4">
          Tu negocio necesita resultados, nosotros los hacemos posibles.
        </h3>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          Unimos estrategia, diseño y tecnología para crear experiencias que fidelizan y convierten.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center transition-transform hover:scale-105 hover:text-indigo-400"
            >
              {service.icon}
              <span className="mt-2 text-sm font-semibold">{service.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
