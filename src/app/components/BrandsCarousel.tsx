import { motion } from 'framer-motion';
import Image from 'next/image';
import image1 from '../../../public/rio.png';
import image2 from '../../../public/nyg.png';
import image3 from '../../../public/reba.png';
import image4 from '../../../public/cera.png';
import image5 from '../../../public/ladia.png';
import { StaticImageData } from 'next/image';

const BrandsCarousel: React.FC = () => {
  const brands: StaticImageData[] = [image1, image2, image3, image4, image5];

  return (
    <div className="overflow-x-auto overflow-y-hidden w-full bg-black border-y-2 border-cyan-400 py-10 px-6">
      <div className="flex space-x-8 w-max">
        {brands.map((src, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.3,
              ease: 'easeOut',
            }}
          >
            <Image 
              src={src} 
              alt={`Marca ${index + 1}`} 
              width={128}
              height={64}
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BrandsCarousel;
