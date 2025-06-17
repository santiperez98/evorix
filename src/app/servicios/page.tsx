"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    title: "Desarrollo Web",
    description:
      "Creamos sitios web modernos, funcionales y atractivos. Adaptados a tus objetivos, con foco en velocidad, UX y escalabilidad.",
    features: [
      "Landing pages a medida",
      "Tiendas online completas (e-commerce)",
      "Diseños mobile-first",
      "Optimización de carga y SEO técnico",
    ],
    image: "/desarrollo-web.svg",
    whatsappMsg: "Hola! Estoy interesado en el servicio de Desarrollo Web 🚀",
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "SEO",
    description:
      "Hacemos que tu negocio aparezca en Google. Con análisis técnico, estrategia de palabras clave y mejoras de rendimiento, atraé tráfico orgánico real.",
    features: [
      "Auditoría SEO técnica",
      "Optimización on-page",
      "Estrategia de contenidos",
      "Mejora de velocidad (Core Web Vitals)",
    ],
    image: "/seo-servicios.svg",
    whatsappMsg: "Hola! Quiero más info sobre el servicio de SEO 🔍",
    color: "from-green-400 to-emerald-500",
  },
  {
    title: "Marketing Digital",
    description:
      "Diseñamos campañas efectivas en redes sociales, Google Ads y más. Atraemos y convertimos usuarios en clientes.",
    features: [
      "Campañas en Meta Ads / Google Ads",
      "Email marketing y automatización",
      "Estrategias personalizadas",
      "Optimización de embudos de conversión",
    ],
    image: "/mark-servicios.svg",
    whatsappMsg: "Hola! Me interesa el servicio de Marketing Digital 📣",
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "Community Manager",
    description:
      "Gestionamos tus redes con contenido visual, lenguaje de marca y estrategia semanal para fidelizar y crecer tu comunidad.",
    features: [
      "Diseño y planificación semanal",
      "Respuestas personalizadas",
      "Análisis de métricas",
      "Tonos de comunicación por marca",
    ],
    image: "/cm-servicios.svg",
    whatsappMsg: "¡Hola! Quiero saber más sobre Community Manager 💬",
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Branding",
    description:
      "Te ayudamos a destacar con una identidad visual fuerte y coherente. Desde el logo hasta tu mensaje de marca.",
    features: [
      "Diseño de logo y paleta de colores",
      "Manual de marca",
      "Tipografía y tono de voz",
      "Rediseño o evolución de marca",
    ],
    image: "/branding-servicios.svg",
    whatsappMsg: "Hola, me interesa el servicio de Branding 🎨",
    color: "from-indigo-400 to-violet-500",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-24 px-6 font-sans">
 <div className="max-w-5xl mx-auto text-center mb-20">
    <motion.h2
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500"
    >
      Soluciones digitales para crecer
    </motion.h2>
    <motion.p
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6"
    >
      En{" "}
      <span className="font-bold text-fuchsia-400">Evorix</span>{" "}
      transformamos ideas en productos digitales. Acompañamos tu negocio desde el diseño hasta la ejecución con una visión estratégica y moderna.
    </motion.p>
    <motion.p
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-2 text-gray-400"
    >
      Descubrí cómo podemos ayudarte a destacarte online con nuestras soluciones integrales 👇
    </motion.p>
  </div>

        {/* Services Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h4 className="text-2xl font-medium text-white mb-4">
            ¿Listo para dar el siguiente paso?
          </h4>
          <a
            href="/contacto"
            className="inline-block px-8 py-3 bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:from-fuchsia-600 hover:to-cyan-600 text-white rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            Contactanos
          </a>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}

// Componente de tarjeta individual de servicio
type Service = {
  title: string;
  description: string;
  features: string[];
  image: string;
  whatsappMsg: string;
  color: string;
};

function ServiceCard({ service }: { service: Service }) {
  const { title, description, features, image, whatsappMsg, color } = service;

 return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 hover:border-opacity-30 hover:border-gray-300 transition-all"
    >
      {/* Contenedor principal para la imagen y el título */}
      <div className="relative mb-4">
        {/* Imagen grande */}
        <img
          src={image}
          alt={title}
          className="w-18 h-18 object-cover "
        />

        {/* Título centrado sobre la imagen */}
        <div
          className="absolute inset-0 flex items-center justify-center text-cyan-400 font-semibold text-2xl text-shadow-md "
        >
          <span>{title}</span>
        </div>
      </div>

      {/* Descripción del servicio */}
      <p className="text-gray-300 mb-4">{description}</p>

      {/* Lista de características */}
      <ul className="space-y-2 mb-6">
        {features.map((feat: string, i: number) => (
          <li key={i} className="flex items-center text-gray-400">
            <span className="mr-2 text-green-400">✓</span> {feat}
          </li>
        ))}
      </ul>

      {/* Botón de WhatsApp */}
      <a
        href={`https://wa.me/549xxxxxxxxxx?text=${encodeURIComponent(whatsappMsg)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block w-full text-center py-2 rounded-full bg-gradient-to-r ${color} text-white font-medium hover:opacity-90 transition`}
      >
        Quiero este servicio
      </a>
    </motion.div>
  );

}