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
  },
];

const fadeVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ServicesPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="bg-black text-white py-20 px-6 font-sans">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4 text-cyan-400"
          >
            Soluciones digitales para crecer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            En <span className="text-fuchsia-400 font-semibold">Evorix</span>{" "}
            transformamos ideas en productos digitales. Acompañamos tu negocio
            desde el diseño hasta la ejecución con una visión estratégica y
            moderna.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base text-gray-400 mt-4"
          >
            Descubrí cómo podemos ayudarte a destacarte online con nuestras soluciones integrales 👇
          </motion.p>
        </div>

        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 mb-24 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeVariant}
          >
            <div className="md:w-1/2">
              <img
                src={service.image}
                alt={service.title}
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
            <div className="md:w-1/2 text-left">
              <h3 className="text-3xl font-display font-semibold mb-4 text-fuchsia-400">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              {service.features && (
                <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                  {service.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              )}
              <a
                href={`https://wa.me/549xxxxxxxxxx?text=${encodeURIComponent(service.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full text-sm font-medium transition"
              >
                Quiero este servicio
              </a>
            </div>
          </motion.div>
        ))}

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl font-medium text-white mb-4">
            ¿Listo para dar el siguiente paso?
          </h4>
          <a
            href="/contacto"
            className="inline-block px-8 py-3 bg-fuchsia-500 hover:bg-fuchsia-600 text-white rounded-full text-lg transition"
          >
            Contactanos
          </a>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default ServicesPage;
