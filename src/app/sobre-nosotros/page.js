import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SobreNosotros() {
  return (
    <>
      <Navbar />
      {/* Hero Section: Neon-Cyberpunk Glow */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="neon-gradient absolute inset-0 opacity-50"></div>
          <div className="holographic-light absolute inset-0 mix-blend-screen"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-7xl font-bold neon-text">Evorix</h1>
          <p className="mt-4 text-2xl">Innovando el futuro digital en Latinoamérica.</p>
        </div>
      </section>

      {/* Nuestra Historia: Animación al scrollear */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 neon-text fade-in-up">Nuestra Historia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="fade-in-left">
              <p className="text-lg">
                Evorix nació de una visión clara: transformar el panorama digital en Latinoamérica. Fundada por Santiago Pérez, un apasionado desarrollador con años de experiencia en tecnologías emergentes, nuestra agencia se ha convertido en un referente en el desarrollo de soluciones digitales integrales.
              </p>
            </div>
            <div className="fade-in-right">
              <p className="text-lg">
                Inspirados por la escasez de servicios completos de alta calidad en la región, decidimos crear una plataforma que no solo construya marcas desde cero, sino que también las impulse hacia el éxito mediante estrategias innovadoras de marketing digital y desarrollo tecnológico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión: Efecto Holográfico */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 neon-text fade-in-up">Misión y Visión</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="fade-in-up">
              <h3 className="text-3xl font-bold text-cyan-400">Misión</h3>
              <p className="text-lg">
                En Evorix, nuestra misión es brindar soluciones digitales innovadoras que empoderen a emprendedores y empresas a alcanzar su máximo potencial. Nos comprometemos a ofrecer servicios de alta calidad, personalizados y adaptados a las necesidades únicas de cada cliente.
              </p>
            </div>
            <div className="fade-in-up">
              <h3 className="text-3xl font-bold text-purple-500">Visión</h3>
              <p className="text-lg">
                Aspiramos a ser líderes indiscutibles en el desarrollo digital en Latinoamérica, reconocidos por nuestra excelencia, creatividad y capacidad de transformar ideas en realidades tangibles. Queremos ser la primera opción para quienes buscan innovación y resultados excepcionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Corporativos: Sci-Fi Aesthetic */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 neon-text fade-in-up">Nuestros Valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="value-card fade-in-up">
              <h3 className="text-2xl font-bold text-cyan-400">Innovación</h3>
              <p>Buscamos constantemente nuevas formas de resolver problemas y mejorar la experiencia de nuestros clientes.</p>
            </div>
            <div className="value-card fade-in-up">
              <h3 className="text-2xl font-bold text-purple-500">Excelencia</h3>
              <p>Nuestro compromiso es entregar proyectos que superen las expectativas, con atención al detalle y un enfoque perfeccionista.</p>
            </div>
            <div className="value-card fade-in-up">
              <h3 className="text-2xl font-bold text-magenta-500">Colaboración</h3>
              <p>Trabajamos mano a mano con nuestros clientes para entender sus necesidades y ofrecer soluciones que realmente funcionen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnología de Vanguardia: Animación al scrollear */}
      <section className="py-20 bg-gradient-to-t from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 neon-text fade-in-up">Tecnología de Vanguardia</h2>
          <p className="text-lg text-center fade-in-up">
            En Evorix, utilizamos las herramientas y tecnologías más avanzadas del mercado. Desde frameworks modernos como React, Next.js y Node.js hasta inteligencia artificial y machine learning, estamos siempre a la vanguardia de la innovación tecnológica.
          </p>
        </div>
      </section>

      {/* Clientes Exitosos: Efecto Cyberpunk */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 neon-text fade-in-up">Clientes Exitosos</h2>
          <p className="text-lg text-center fade-in-up">
            Hemos tenido el privilegio de trabajar con diversos clientes que han visto cómo sus negocios crecen gracias a nuestras soluciones digitales. Desde startups hasta empresas consolidadas, cada proyecto es un testimonio de nuestro compromiso con la excelencia.
          </p>
        </div>
      </section>

      {/* Futuro de Evorix: Pregunta interactiva */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 neon-text fade-in-up">El Futuro de Evorix</h2>
          <p className="text-lg text-center fade-in-up">
            En Evorix, creemos que el futuro está lleno de posibilidades. Estamos explorando nuevas áreas como realidad aumentada, blockchain y automatización inteligente para llevar la innovación digital al siguiente nivel. ¿Qué te gustaría ver en el futuro de Evorix? ¡Tu opinión nos importa!
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}