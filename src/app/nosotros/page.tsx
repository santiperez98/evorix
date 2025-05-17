"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Navbar from "../components/Navbar"; // Asumo que tienes este componente
import Footer from "../components/Footer";   // Asumo que tienes este componente
import Image from "next/image";
import AboutNew from "../components/AboutNew"; // Componente existente
import { FaCheckCircle, FaShieldAlt, FaUsers, FaRocket, FaLightbulb, FaHandshake } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

// Datos (sin cambios, solo para referencia)
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
  title: "Sobre Evorix", // Ajustado para que AboutNew lo use mejor
  subtitle: "Tu socio estratégico para el crecimiento digital.",
  imageSrc: "/about-us-image.jpg",
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
    { name: "Miembro 1", role: "Desarrollo Web", imageSrc: "/team/member1.jpg" },
    { name: "Miembro 2", role: "Marketing Digital", imageSrc: "/team/member2.jpg" },
    { name: "Miembro 3", role: "SEO y Contenido", imageSrc: "/team/member3.jpg" },
  ],
};

// Variantes de animación para Framer Motion
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function SobreNosotrosPage() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="bg-black text-gray-200 font-sans"> {/* Fuente base y color de fondo */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed z-0 opacity-40"
          style={{ backgroundImage: "url('/nosobg.jpg')" }} // Imagen de fondo futurista
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-fuchsia-900/30 to-cyan-900/30 z-0 opacity-70" /> {/* Gradiente sutil */}
        
        <motion.section 
          className="relative z-10 text-center px-4 py-20 md:py-32"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "anticipate" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]">Conectamos</span>
            <span className="block md:inline text-gray-100 drop-shadow-[0_0_10px_rgba(200,200,200,0.3)]"> tu Visión </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400 drop-shadow-[0_0_15px_rgba(255,0,255,0.6)]">al Futuro.</span>
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            En <span className="text-cyan-400 font-semibold text-xl">Evorix</span>, fusionamos{" "}
            <span className="text-fuchsia-400 font-semibold text-xl">innovación</span> tecnológica con diseño{" "}
            <span className="text-gray-100 font-semibold text-xl">vanguardista</span> y seguridad de punta.
            Somos <span className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-cyan-300 animate-pulse">más que una agencia</span>, somos tus arquitectos digitales.
          </p>
           <motion.button
            className="mt-10 px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white font-bold rounded-lg text-lg shadow-lg hover:shadow-xl hover:from-cyan-600 hover:to-fuchsia-700 transform hover:scale-105 transition-all duration-300"
            whileHover={{ boxShadow: "0 0 25px rgba(0, 255, 255, 0.7), 0 0 25px rgba(255, 0, 255, 0.7)" }}
          >
            Descubre Nuestro Universo
          </motion.button>
        </motion.section>
      </div>

      {/* Sección "Nuestra Esencia Digital" (Valores/Filosofía) */}
      <motion.section 
        className="py-16 md:py-24 bg-gray-900" // Un tono de negro diferente para variar
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            Nuestra <span className="text-cyan-400">Esencia</span> Digital
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Creemos en el poder de la <span className="text-fuchsia-500 text-xl">tecnología</span> para <span className="text-cyan-400 text-xl">transformar</span> y <span className="text-gray-100 text-xl">elevar</span>.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: FaRocket, title: "Innovación Constante", description: "Exploramos sin cesar nuevas fronteras tecnológicas para ofrecerte soluciones que marcan la diferencia y te posicionan un paso adelante." },
              { icon: FaLightbulb, title: "Creatividad Estratégica", description: "Cada línea de código y cada diseño es una obra de arte funcional, pensada para impactar, convertir y resonar con tu audiencia." },
              { icon: FaHandshake, title: "Colaboración Transparente", description: "Eres parte de nuestro equipo. Trabajamos contigo, codo a codo, con comunicación clara y honesta en cada etapa del proyecto." },
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-black p-8 rounded-xl shadow-2xl hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-shadow duration-400 border border-gray-800 hover:border-cyan-500/50 group"
              >
                <item.icon className="text-5xl mb-6 mx-auto text-cyan-500 group-hover:text-fuchsia-500 transition-colors duration-300 transform group-hover:scale-110" />
                <h3 className="text-2xl font-semibold text-fuchsia-400 mb-3 group-hover:text-cyan-400 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Sección "Sobre Nosotros" con el componente AboutNew */}
      {/* Asumimos que AboutNew se estilizará internamente o heredará algunos estilos. */}
      {/* Para coherencia, el fondo de la sección que contiene AboutNew debería ser oscuro. */}
      <div className="py-16 md:py-24 bg-black">
        <AboutNew data={AboutUsData} />
      </div>
      
      {/* Tecnologías que usamos */}
      <section className="py-16 md:py-24 bg-gray-900 text-white overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-fuchsia-500">Tecnologías</span> que <span className="text-gray-200">Impulsan</span> el Mañana
        </h2>
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex gap-8 md:gap-12 px-4" // Ajusta el gap según sea necesario
            animate={{ x: ["0%", "-100%"] }} // La animación ahora mueve los logos una vez su ancho total
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...techLogos, ...techLogos, ...techLogos].map((logo, index) => ( // Duplicar para un bucle más suave
              <motion.div
                key={`tech-${index}`}
                className="flex-shrink-0 w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-black/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-700 hover:border-fuchsia-500 hover:shadow-[0_0_20px_rgba(255,0,255,0.5)] transition-all duration-300 flex items-center justify-center p-4"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <Image
                  src={logo}
                  alt={`Tech logo ${index + 1}`}
                  width={100} // Ajustar según el tamaño del contenedor
                  height={100} // Ajustar según el tamaño del contenedor
                  className="object-contain max-h-full max-w-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ¿Por qué confiar en nosotros? */}
      <motion.section 
        className="py-16 md:py-24 bg-black text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            ¿Por qué <span className="text-cyan-400">Confiar</span> en <span className="text-fuchsia-500">Nosotros</span>?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: FaCheckCircle, title: "Calidad Excepcional", description: "Desarrollos <span class='text-fuchsia-400 font-semibold'>modernos</span>, rápidos y <span class='text-cyan-400 font-semibold'>100% adaptables</span>. Priorizamos eficiencia y performance superior.", image: "/confianza.png" },
              { icon: FaShieldAlt, title: "Seguridad Blindada", description: "Protocolos <span class='text-cyan-400 font-semibold'>actualizados</span> y cifrados <span class='text-fuchsia-400 font-semibold'>robustos</span> para que tu web y tus datos estén protegidos 24/7.", image: "/seguridad.png" },
              { icon: FaUsers, title: "Soporte Personalizado", description: "Trabajamos <span class='text-fuchsia-400 font-semibold'>junto a ti</span>. Cada proyecto es <span class='text-cyan-400 font-semibold'>único</span> y nos adaptamos a tus necesidades reales y visión.", image: "/equipo.png" },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative h-96 rounded-xl bg-gray-900 overflow-hidden shadow-xl group border border-transparent hover:border-cyan-600/70 transition-all duration-300"
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 255, 255, 0.2), 0 0 30px rgba(255, 0, 255, 0.15)"}}
              >
                <Image 
                  src={card.image} 
                  alt={card.title} 
                  layout="fill" 
                  objectFit="cover" 
                  className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500 transform group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                  <card.icon className="text-4xl text-cyan-400 mb-4 group-hover:text-fuchsia-500 transition-colors duration-300" />
                  <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: card.description }}></p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonios */}
      <motion.section 
        className="py-16 md:py-24 bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-16">
            Lo que <span className="text-fuchsia-500">Dicen</span> de <span className="text-cyan-400">Nosotros</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-black p-8 rounded-lg shadow-lg border border-gray-800 hover:border-fuchsia-500/50 transition-all duration-300 group"
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(255, 0, 255, 0.2)"}}
              >
                <p className="text-gray-300 italic mb-6 text-lg leading-relaxed before:content-['“'] before:mr-1 before:text-3xl before:text-fuchsia-500 after:content-['”'] after:ml-1 after:text-3xl after:text-fuchsia-500">
                  {testimonial.feedback}
                </p>
                <h4 className="text-xl font-semibold text-cyan-400 text-right">- {testimonial.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/5491150468888" // Reemplaza con tu número
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>

      <Footer />
    </div>
  );
}