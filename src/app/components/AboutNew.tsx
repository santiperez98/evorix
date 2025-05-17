// En tu archivo: ../components/AboutNew.tsx

import React from 'react';
// Puede que necesites importar Image de 'next/image' u otros componentes aquí también

// Define la estructura de un miembro del equipo si es diferente a la global
interface TeamMember {
  name: string;
  role: string;
  imageSrc: string;
}

// Esta interfaz DEBE COINCIDIR con la que definimos en SobreNosotrosPage.tsx
interface AboutUsDataProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  agencyTitle: string;
  agencyDescription: string;
  services: string[];
  callToAction: string;
  teamTitle: string;
  teamMembers: TeamMember[];
}

// Define las props que espera el componente AboutNew
interface AboutNewComponentProps {
  data: AboutUsDataProps; // Aquí se especifica que espera 'data' de tipo AboutUsDataProps
}

const AboutNew: React.FC<AboutNewComponentProps> = ({ data }) => {
  // Ahora puedes usar data.title, data.agencyDescription, etc.
  return (
    <section className="container mx-auto px-6"> {/* Ejemplo de estructura */}
      <h2 className="text-3xl text-cyan-400 font-bold mb-3">{data.title}</h2>
      <p className="text-xl text-fuchsia-400 mb-6">{data.subtitle}</p>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          {/* Puedes usar next/image aquí si data.imageSrc es relevante */}
          {/* <Image src={data.imageSrc} alt={data.imageAlt} width={500} height={300} className="rounded-lg shadow-lg"/> */}
          <h3 className="text-2xl text-gray-100 font-semibold mt-6 mb-2">{data.agencyTitle}</h3>
          <p className="text-gray-400 leading-relaxed">{data.agencyDescription}</p>
        </div>
        <div>
          <h4 className="text-xl text-cyan-300 font-semibold mb-3">Nuestros Servicios Destacados:</h4>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            {data.services.slice(0, 4).map(service => <li key={service}>{service}</li>)} {/* Muestra algunos servicios */}
          </ul>
          {/* ... Más contenido de AboutNew ... */}
        </div>
      </div>

      {/* Sección del equipo si es parte de AboutNew */}
      {data.teamMembers && data.teamMembers.length > 0 && (
        <div className="mt-12">
          <h3 className="text-2xl text-fuchsia-400 font-bold mb-6 text-center">{data.teamTitle}</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {data.teamMembers.map(member => (
              <div key={member.name} className="text-center">
                {/* <Image src={member.imageSrc} alt={member.name} width={100} height={100} className="rounded-full mx-auto mb-2"/> */}
                <p className="font-semibold text-cyan-400">{member.name}</p>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutNew;