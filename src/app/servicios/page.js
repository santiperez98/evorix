'use client';


import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaShoppingCart } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiNextdotjs, SiVite, SiBootstrap, SiPostgresql } from 'react-icons/si';
import { MdWeb } from 'react-icons/md';
import { GiCompass } from 'react-icons/gi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';

const Servicios = () => {
    const [activeTab, setActiveTab] = useState(1);
  
    useEffect(() => {
      // Asegúrate de que solo se ejecute en el cliente
      if (typeof window !== 'undefined') {
        AOS.init();
      }
    }, []);
  
    const handleTabChange = (index) => {
      setActiveTab(index);
    };
  
    return (
    <>
    <Navbar/>
    <div className="py-16 bg-gradient-to-r from-gray-800 to-black text-white ">
      <div className="container mx-auto px-6 lg:px-12 mt-16">
        {/* Título */}
        <h2 className="text-center text-4xl font-extrabold text-aqua mb-8 tracking-wide">
          Nuestros Servicios
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Ofrecemos soluciones innovadoras y personalizadas para hacer crecer tu negocio.
        </p>

        {/* Iconos de Tecnologías */}
        <div className="flex justify-center gap-8 mb-12" data-aos="fade-up">
          <FaJs size={50} color="#F7DF1E" />
          <FaHtml5 size={50} color="#E44D26" />
          <FaCss3Alt size={50} color="#1572B6" />
          <SiTailwindcss size={50} color="#38B2AC" />
          <FaReact size={50} color="#61DAFB" />
          <SiRedux size={50} color="#764ABC" />
          <FaNodeJs size={50} color="#8CC84B" />
          <FaDatabase size={50} color="#006F54" />
          <SiPostgresql size={50} color="#336791" />
          <SiNextdotjs size={50} color="#000000" />
          <SiVite size={50} color="#646CFF" />
          <SiBootstrap size={50} color="#7952B3" />
        </div>

        {/* Opciones de Servicio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Landing Page */}
          <div
            className={`p-6 rounded-lg shadow-xl transition-transform transform duration-500 ${
              activeTab === 1 ? 'bg-aqua text-black scale-105' : 'bg-gray-800 hover:bg-gray-700'
            }`}
            data-aos="zoom-in-up"
            onClick={() => handleTabChange(1)}
          >
            <MdWeb size={40} className="mb-4" />
            <h3 className="text-2xl font-bold mb-4">Landing Page</h3>
            <p className="mb-4">Diseños impactantes y optimizados para captar clientes potenciales.</p>
            <ul className="list-disc list-inside text-sm">
              <li>Diseño responsivo y moderno</li>
              <li>Optimización para SEO</li>
              <li>Entrega en 5 días</li>
              <li>Formulario de contacto integrado</li>
              <li>Integración con Google Analytics</li>
            </ul>
          </div>

          {/* Ecommerce */}
          <div
            className={`p-6 rounded-lg shadow-xl transition-transform transform duration-500 ${
              activeTab === 2 ? 'bg-aqua text-black scale-105' : 'bg-gray-800 hover:bg-gray-700'
            }`}
            data-aos="zoom-in-up"
            onClick={() => handleTabChange(2)}
          >
            <FaShoppingCart size={40} className="mb-4" />
            <h3 className="text-2xl font-bold mb-4">Ecommerce</h3>
            <p className="mb-4">Tiendas en línea totalmente autoadministrables y sin comisiones.</p>
            <ul className="list-disc list-inside text-sm">
              <li>Panel para agregar y gestionar productos</li>
              <li>Integración con métodos de pago</li>
              <li>Hosting premium gratis por 1 año</li>
              <li>4 secciones personalizadas</li>
              <li>Cuentas de correo corporativas</li>
            </ul>
          </div>

          {/* Administración */}
          <div
            className={`p-6 rounded-lg shadow-xl transition-transform transform duration-500 ${
              activeTab === 3 ? 'bg-aqua text-black scale-105' : 'bg-gray-800 hover:bg-gray-700'
            }`}
            data-aos="zoom-in-up"
            onClick={() => handleTabChange(3)}
          >
            <GiCompass size={40} className="mb-4" />
            <h3 className="text-2xl font-bold mb-4">Páginas de Administración</h3>
            <p className="mb-4">Herramientas fáciles de usar para administrar contenido y usuarios.</p>
            <ul className="list-disc list-inside text-sm">
              <li>Panel de control intuitivo</li>
              <li>Gestión de usuarios y roles</li>
              <li>Integración con bases de datos</li>
              <li>Automatización de tareas</li>
            </ul>
          </div>
        </div>


        {/* Servicios Adicionales */}
        <div className="mt-12">
          <h3 className="text-3xl text-center text-aqua font-semibold mb-8">Otros Servicios</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="bg-gray-800 p-6 rounded-lg shadow-xl"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold mb-4">Community Manager</h3>
              <p>Gestión de redes sociales para mejorar tu presencia online.</p>
            </div>
            <div
              className="bg-gray-800 p-6 rounded-lg shadow-xl"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold mb-4">SEO</h3>
              <p>Optimización de tu página para mejorar el ranking en buscadores.</p>
            </div>
            <div
              className="bg-gray-800 p-6 rounded-lg shadow-xl"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold mb-4">Diseño UX/UI</h3>
              <p>Diseños intuitivos y atractivos que mejoran la experiencia del usuario.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Servicios;
