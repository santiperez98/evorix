'use client';

import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import mobileImage from "../../../public/LOGO1.webp";
import { useRouter } from "next/navigation";
import React from "react";

const Hero: React.FC = () => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isFading, setIsFading] = useState<boolean>(false); // 🆕
  const router = useRouter();

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const handleClick = () => {
    setIsFading(true); // 🆕 activa el fadeout
    setTimeout(() => {
      router.push("/servicios"); // 🆕 redirige después del fadeout
    }, 500); // debe durar lo mismo que el tiempo del fade
  };
  const texts = [
  "IMPULSAMOS TU NEGOCIO CON TECNOLOGIA.",
  "DESARROLLO WEB Y SOFTWARE A MEDIDA.",
  "SOLUCIONES DIGITALES INNOVADORAS.",
];

const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  }, 5000); // cada 5 segundos

  return () => clearInterval(interval); // limpia el intervalo al desmontar
}, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isFading ? 0 : 1 }} // 🆕 animación de salida
      transition={{ duration: 0.5 }}
      className="relative h-screen w-full flex flex-col md:flex-row justify-center items-center bg-cover bg-center bg-fixed overflow-hidden px-6 md:px-16"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/nasa.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {isMobile ? (
        <div className="w-[90%] sm:w-[70%] md:w-full flex justify-center z-10">
          <Image
            src={mobileImage}
            alt="Mobile Hero Image"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
      ) : (
        <div className="z-10 w-[90%] sm:w-[70%] md:w-full -ml-4 sm:ml-0">
          <Spline scene="https://prod.spline.design/QJ3uElRbWA53GQY1/scene.splinecode" />
        </div>
      )}

      <div className="z-10 text-white max-w-lg md:absolute md:left-[15%] md:top-1/3 flex flex-col items-center md:items-start">
        <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text text-center md:text-left">
<span>{texts[currentIndex]}</span>
        </h1>

        <div className="mt-4 flex flex-col items-center md:items-start">
          <p className="font-bold text-lg text-gray-300 text-center md:text-left">
            Desarrollo web, branding, marketing digital y más. Diseñamos experiencias innovadoras para impulsar tu marca.
          </p>

          <button
            className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg flex items-center gap-2 transition-all duration-300 hover:opacity-80 relative overflow-hidden"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={handleClick} // 🆕 fadeout + redirección
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
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
