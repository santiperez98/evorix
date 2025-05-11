"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import AboutNew from "../components/AboutNew";
import { FaCheckCircle, FaShieldAlt, FaUsers } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa"; // Importa el icono de WhatsApp

const techLogos: string[] = [
  "/react.png",
  "/nextjs.png",
  "/nodejs.png",
  "/tail.png",
  "/postgre.png",
];

interface Testimonial {
  name: string;
  feedback: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: "Lucía Fernández",
    feedback:
      "Gracias al equipo, mi marca creció un 300% en redes y ahora tengo ventas automatizadas con IA.",
  },
  {
    name: "Esteban Rojas",
    feedback:
      "Me ayudaron a digitalizar todo mi negocio. ¡Rápidos, claros y muy profesionales!",
  },
  {
    name: "Valeria Tech",
    feedback:
      "Super creativos y con ideas innovadoras. Les confié mi branding y no me arrepiento.",
  },
];

const AboutUsData = {
  title: "Sobre Nosotros", // Este título se usa dentro del componente AboutNew
  subtitle: "Tu socio estratégico para el crecimiento digital.",
  imageSrc: "/about-us-image.jpg", // Reemplaza con la ruta real de tu imagen
  imageAlt: "Equipo trabajando en una laptop",
  agencyTitle: "Impulsando tu Éxito en el Mundo Digital",
  agencyDescription:
    "Somos una agencia digital apasionada por transformar ideas en resultados tangibles. Con un enfoque en la innovación y la excelencia, brindamos soluciones integrales para impulsar tu presencia en línea y alcanzar tus objetivos de negocio.",
  services: [
    "Desarrollo Web a medida y optimizado",
    "Estrategias SEO para un mayor alcance orgánico",
    "Marketing Digital efectivo y basado en datos",
    "Sitios web dinámicos y gestionables con WordPress",
    "Gestión profesional de Comunidades Online",
    "Branding creativo y coherente con tu identidad",
  ],
  callToAction: "Conoce más sobre nuestros servicios",
  teamTitle: "Nuestro Equipo",
  teamMembers: [
    {
      name: "Nombre del Miembro 1",
      role: "Desarrollo Web",
      imageSrc: "", // Reemplaza con la ruta real
    },
    {
      name: "Nombre del Miembro 2",
      role: "Marketing Digital",
      imageSrc: "", // Reemplaza con la ruta real
    },
    {
      name: "Nombre del Miembro 3",
      role: "SEO y Contenido",
      imageSrc: "", // Reemplaza con la ruta real
    },
  ],
};

export default function SobreNosotros() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <>
      <Navbar />

      {/* Fondo común para Hero + Carrusel */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
          style={{ backgroundImage: "url('/nosobg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40 z-0" />

        {/* Hero Section - Altura ajustada */}
        <section className="relative z-10 flex items-center justify-center text-white text-center px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold neon-evorix mt-28 mb-2 md:mb-4" style={{ textShadow: '0 0 5px #00FFFF, 0 0 15px #00FFFF' }}>
              Llevamos tus ideas al futuro
            </h1>
            {/* Margen inferior reducido */}
            <p className="mt-2 md:mt-4 text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
              Innovación tecnológica combinada con diseño futurista y seguridad
              de vanguardia.
            </p>
          </motion.div>
        </section>

        {/* Carrusel de Tecnologías Continuo */}
        <section className="relative z-10 py-16 md:py-20 overflow-hidden">
          <div className="w-full overflow-hidden">
            <motion.div
              className="flex space-x-4 md:space-x-16 animate-loop-scroll"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...techLogos, ...techLogos].map((logo, index) => (
                <motion.div
                  key={index}
                  className="inline-block p-2 md:p-6 rounded-lg bg-white/10 hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    src={logo}
                    alt={`Tech logo ${index}`}
                    width={60}
                    height={60}
                    className="mx-auto w-16 h-16 md:w-32 md:h-32"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      {/* Sección "Somos Evorix" */}
      <section className="py-16 md:py-20 bg-black text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Somos Evorix</h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Impulsamos la transformación digital con soluciones innovadoras y a medida.
          Conectamos tu visión con el futuro a través de tecnología de vanguardia y diseño estratégico.
        </p>
      </section>

      {/* Sección "Sobre Nosotros" con el nuevo componente */}
      <AboutNew  />

      {/* ¿Por qué elegirnos? */}
      <section className="py-16 md:py-20 bg-black text-white">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 neon-basic" style={{ textShadow: '0 0 3px #00FFFF' }}>
          ¿Por qué confiar en nosotros?
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4 md:px-20">
          {/* Card 1 */}
          <motion.div
            className="relative w-64 h-80 rounded-t-[50px] bg-gray-800 overflow-hidden shadow-lg group hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 bg-cyan-600 w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full flex items-center justify-center z-10 shadow-md">
              <FaCheckCircle className="text-2xl md:text-3xl text-white" />
            </div>
            <div
              className="absolute inset-0 bg-[url('/confianza.png')] bg-cover bg-center transition-opacity duration-500 opacity-70 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-80 transition duration-500" />
            <div className="absolute bottom-6 left-0 right-0 text-center px-4 opacity-0 group-hover:opacity-100 transition duration-500 z-10">
              <h3 className="text-lg font-bold mb-2">Calidad Garantizada</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Desarrollos modernos, rápidos y 100% adaptables. Priorizamos eficiencia y performance.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="relative w-64 h-80 rounded-t-[50px] bg-gray-800 overflow-hidden shadow-lg group hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 bg-purple-600 w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full flex items-center justify-center z-10 shadow-md">
              <FaUsers className="text-2xl md:text-3xl text-white" />
            </div>
            <div
              className="absolute inset-0 bg-[url('/atencion.png')] bg-cover bg-center transition-opacity duration-500 opacity-70 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-80 transition duration-500" />
            <div className="absolute bottom-6 left-0 right-0 text-center px-4 opacity-0 group-hover:opacity-100 transition duration-500 z-10">
              <h3 className="text-lg font-bold mb-2">Atención Personalizada</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Te escuchamos, te entendemos, y adaptamos cada solución a tu visión. Siempre a tu lado.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="relative w-64 h-80 rounded-t-[50px] bg-gray-800 overflow-hidden shadow-lg group hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <div className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 bg-green-600 w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full flex items-center justify-center z-10 shadow-md">
              <FaShieldAlt className="text-2xl md:text-3xl text-white" />
            </div>
            <div
              className="absolute inset-0 bg-[url('/seguridad.png')] bg-cover bg-center transition-opacity duration-500 opacity-70 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-80 transition duration-500" />
            <div className="absolute bottom-6 left-0 right-0 text-center px-4 opacity-0 group-hover:opacity-100 transition duration-500 z-10">
              <h3 className="text-lg font-bold mb-2">Seguridad y Confianza</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Tus datos y los de tus clientes están protegidos. Trabajamos con ética y responsabilidad.
              </p>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Testimonios */}
      <section className="py-16 md:py-20 bg-black text-white">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 neon-basic" style={{ textShadow: '0 0 3px #FF00FF' }}>
          Historias de Éxito
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {testimonialsData.map((testi, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 p-6 rounded-xl border border-pink-500 shadow-lg hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2, ease: "easeOut" }}
            >
              <p className="italic text-gray-300 mb-4 leading-relaxed">“{testi.feedback}”</p>
              <h5 className="text-lg font-semibold text-pink-300">
                {testi.name}
              </h5>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Final Modificado */}
      <section className="py-16 md:py-20 text-white px-6"
      style={{ backgroundImage: "url('/conectamos.png')", backgroundSize: 'cover' }}>
        <div className="md:flex md:justify-end"> {/* Contenedor para alinear a la derecha en pantallas medianas y mayores */}
          <div className="text-center md:text-left md:mr-22"> {/* Reducido el margen izquierdo a 8 */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#ffffff' }}>
              Conectamos marcas con personas
            </h2>
            <p className="text-lg md:text-xl mb-6 leading-relaxed" style={{ color: '#ff00ff' }}> {/* Color fucsia */}
              Estamos listos para llevar tu negocio al siguiente nivel. ¡Hablemos!
            </p>
            <motion.a
              href="https://wa.me/5491234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-green-500 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <FaWhatsapp className="mr-2 text-xl" /> {/* Icono de WhatsApp a la izquierda */}
              Contáctanos por WhatsApp {/* Texto verde */}
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}