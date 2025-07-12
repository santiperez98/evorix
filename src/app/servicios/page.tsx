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
    image: "/desarrollo-web.webp",
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
    image: "/seo22.webp",
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
    image: "/md22.webp",
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
    image: "/cm22.webp",
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
    image: "/branding-servicios.webp",
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

      {/* Hero optimizado */}
      <section className="bg-black text-white pt-24 md:pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:gap-16 gap-12">
          {/* Texto */}
          <div className="flex-1 text-center md:text-left">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500"
            >
              Soluciones digitales para crecer
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-300 mb-4"
            >
              En <span className="font-bold text-fuchsia-400">Evorix</span> transformamos ideas en productos digitales. Acompañamos tu negocio desde el diseño hasta la ejecución con una visión estratégica y moderna.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-400"
            >
              Descubrí cómo podemos ayudarte a destacarte online con nuestras soluciones integrales 👇
            </motion.p>
          </div>

          {/* Imagen decorativa */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
          >
            <img
              src="/service.webp"
              alt="Servicios digitales Evorix: Desarrollo web, SEO, Marketing"
              className="w-full max-w-sm md:max-w-md object-contain"
            />
          </motion.div>
        </div>

        {/* Grid de servicios */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20"
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
      className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 hover:border-opacity-30 transition-all"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain mb-4 mx-auto"
        loading="lazy"
      />

      <h3 className="text-xl font-bold text-white mb-2 text-center">{title}</h3>
      <p className="text-gray-300 mb-4 text-center">{description}</p>

      <ul className="space-y-2 mb-6">
        {features.map((feat, i) => (
          <li key={i} className="flex items-center text-gray-400">
            <span className="mr-2 text-green-400">✓</span> {feat}
          </li>
        ))}
      </ul>

      <a
        href={`https://wa.me/549XXXXXXXXXX?text=${encodeURIComponent(whatsappMsg)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block w-full text-center py-2 rounded-full bg-gradient-to-r ${color} text-white font-medium hover:opacity-90 transition`}
      >
        Quiero este servicio
      </a>
    </motion.div>
  );
}
