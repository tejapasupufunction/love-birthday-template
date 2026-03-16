import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { X } from 'lucide-react';

const images = [
  "src/assets/WhatsApp Image 2026-03-16 at 12.54.57 AM.jpeg",
  "src/assets/WhatsApp Image 2026-03-16 at 10.31.31 PM.jpeg",
  "src/assets/WhatsApp Image 2026-03-16 at 10.31.46 PM.jpeg",
  "src/assets/WhatsApp Image 2026-03-16 at 12.46.06 AM.jpeg",
  "src/assets/WhatsApp Image 2026-03-16 at 12.47.21 AM.jpeg",
  "src/assets/WhatsApp Image 2026-03-16 at 12.47.46 AM.jpeg",
  "src/assets/WhatsApp Image 2026-03-16 at 12.56.35 AM.jpeg",
  "src/assets/WhatsApp Image 2026-03-16 at 12.55.47 AM.jpeg",
  "src/assets/WhatsApp Image 2026-03-16 at 12.57.08 AM.jpeg"
];

export const HoneycombGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-24 px-4 bg-[#FFF9F5] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4 tracking-wide">Favorite Moments</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pink-200 to-transparent mx-auto rounded-full" />
        </div>

        <div className="flex flex-col items-center">
          <div className="inline-block">
            <div className="flex gap-4 md:gap-8 justify-center mb-4">
              {images.slice(0, 3).map((img, i) => (
                <HoneycombItem key={i} src={img} onClick={() => setSelectedImage(img)} />
              ))}
            </div>

            <div className="flex gap-4 md:gap-8 justify-center mb-4 -mt-10 md:-mt-20 translate-x-8 md:translate-x-16">
              {images.slice(3, 6).map((img, i) => (
                <HoneycombItem key={i + 3} src={img} onClick={() => setSelectedImage(img)} />
              ))}
            </div>

            <div className="flex gap-4 md:gap-8 justify-center -mt-10 md:-mt-20">
              {images.slice(6, 9).map((img, i) => (
                <HoneycombItem key={i + 6} src={img} onClick={() => setSelectedImage(img)} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              className="absolute top-6 right-6 text-white p-2"
            >
              <X size={32} />
            </motion.button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full"
            >
              <ImageWithFallback src={selectedImage} className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl" alt="Enlarged moment" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const HoneycombItem = ({ src, onClick }) => (
  <motion.div
    whileHover={{
      scale: 1.1,
      zIndex: 20,
      rotate: [0, -1, 1, 0],
      transition: { duration: 0.3 }
    }}
    onClick={onClick}
    className="w-20 h-24 md:w-56 md:h-64 cursor-pointer relative group"
  >
    <div className="absolute inset-0 bg-white shadow-xl rounded-[2rem] md:rounded-[3rem] overflow-hidden border-4 border-white transition-transform duration-300">
      <ImageWithFallback src={src} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Moment" />
      <div className="absolute inset-0 bg-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  </motion.div>
);
