import { motion } from "framer-motion";

const AboutPreview = () => {
  return (
    <section id="sobre-nosotros" className="py-20 px-6 bg-black text-white flex justify-center items-center">
      <motion.div
        className="max-w-3xl text-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Innovamos, Transformamos, Conectamos 🚀
        </h2>
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          En <span className="text-cyan-400 font-semibold">Evorix</span>, fusionamos creatividad y tecnología 
          para llevar tu negocio al siguiente nivel. Nos especializamos en{" "}
          <span className="text-purple-400 font-semibold">
            desarrollo web, branding, marketing digital y optimización SEO
          </span>, creando soluciones digitales que generan impacto.
        </p>
        <p className="mt-4 text-lg text-gray-300 leading-relaxed">
          Nuestra misión es hacer que tu marca brille en el mundo digital, con{" "}
          <span className="text-pink-400 font-semibold">diseños futuristas</span> 
          y estrategias inteligentes que potencien tu presencia en línea.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutPreview;
