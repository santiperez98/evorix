import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clients = [
  {
    id: 1,
    name: "José Carrilo",
    role: "Emprendedor",
    image: "", // Reemplázalo con la imagen real
    project: "Proyecto A",
    projectImage: "/projectA.png",
    device: "mobile",
    text: "Duvitek ha aumentado nuestro tráfico, palabras clave y conversión. Hemos disfrutado trabajar con ellos y los consideramos un socio comercial estratégico."
  },
  {
    id: 2,
    name: "María Pérez",
    role: "Dueña de negocio",
    image: "",
    project: "Proyecto B",
    projectImage: "/projectB.png",
    device: "tablet",
    text: "Excelente trabajo con nuestra página web. Ahora tenemos una presencia digital profesional."
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  fade: true,
  cssEase: "ease-in-out",
};

export default function ProjectCarousel() {
  return (
    <section className="bg-gradient-to-r from-cyan-500 via-purple-600 to-magenta-500">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto py-12 px-6"
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-white drop-shadow-lg">
          Nuestros Clientes
        </h2>
        <Slider {...settings} className="client-carousel">
          {clients.map((client) => (
            <div key={client.id} className="p-6">
              <motion.div
                className="p-6 bg-gray-900 bg-opacity-80 border border-cyan-500 shadow-lg rounded-xl text-white transition-all duration-300 hover:bg-opacity-90"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-semibold mb-2 text-center text-cyan-300">
                  {client.name}
                </h3>
                <p className="text-gray-400 text-center">{client.role}</p>
                <div className="flex justify-center my-4">
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={50}
                    height={50}
                    className="rounded-full border-2 border-cyan-500"
                  />
                </div>
                <p className="text-gray-300 text-center italic mb-4">{client.text}</p>
                <h4 className="text-lg font-semibold text-center mb-2 text-purple-300">
                  {client.project}
                </h4>
                <div className="flex justify-center">
                  <Image
                    src={client.projectImage}
                    alt={client.project}
                    width={500}
                    height={300}
                    className="rounded-lg shadow-lg border border-gray-700"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
}