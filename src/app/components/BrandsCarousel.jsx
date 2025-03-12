import { motion } from 'framer-motion';
import Image from 'next/image';
import image1 from '../../../public/rio.png';
import image2 from '../../../public/nyg.png';
import image3 from '../../../public/reba.png';
import image4 from '../../../public/cera.png';
import image5 from '../../../public/ladia.png';

const BrandsCarousel = () => {
  const brands = [image1, image2, image3, image4, image5];

  return (
    <div className="overflow-hidden">
      <motion.div className="flex space-x-8 animate-marquee">
        {brands.map((src, index) => (
          <div key={index} className="flex-shrink-0">
            <Image 
              src={src} 
              alt={`Marca ${index + 1}`} 
              width={128} // Establece un tamaño base para las imágenes
              height={64} // Establece un tamaño base para las imágenes
              className="object-contain" // Hace que las imágenes se ajusten bien dentro de su contenedor
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BrandsCarousel;
