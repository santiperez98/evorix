import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import mobileImage from "../../../public/TEXT LOGO.png"; // Importa la imagen para móviles

const Hero = () => {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es un dispositivo móvil
  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIfMobile(); // Verificar al cargar el componente
    window.addEventListener("resize", checkIfMobile); // Verificar al cambiar el tamaño de la pantalla

    return () => {
      window.removeEventListener("resize", checkIfMobile); // Limpiar el evento al desmontar el componente
    };
  }, []);

  return (
    <div className="h-screen w-full relative flex flex-col md:flex-row justify-center items-center bg-black overflow-hidden px-6 md:px-16">
      {/* Mostrar Spline en desktop y una imagen en móviles */}
      {isMobile ? (
        <div className="w-[90%] sm:w-[70%] md:w-full flex justify-center">
          <Image
            src={mobileImage}
            alt="Mobile Hero Image"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
      ) : (
        <Spline
          className="w-[90%] sm:w-[70%] md:w-full -ml-4 sm:ml-0"
          scene="https://prod.spline.design/QJ3uElRbWA53GQY1/scene.splinecode"
        />
      )}

      {/* Texto animado */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-white max-w-lg text-center md:text-left md:absolute md:left-[15%] md:top-1/3 flex flex-col items-center md:items-start"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Transformamos Ideas en Realidad Digital
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-300">
          Desarrollo web, branding, marketing digital y más. Diseñamos experiencias innovadoras para impulsar tu marca.
        </p>
        <button
          className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg flex items-center gap-2 transition-all duration-300 hover:opacity-80 relative overflow-hidden"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Descubre Más
          <motion.span
            className="flex items-center"
            initial={{ x: -10, opacity: 0 }}
            animate={hovered ? { x: 10, opacity: 1 } : { x: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            ➝➝
          </motion.span>
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;