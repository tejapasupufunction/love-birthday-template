import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const OurStory = ({ stories }) => {
  return (
    <section className="py-24 px-4 bg-pink-50/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-pink-800 mb-20">Our Beautiful Journey</h2>

        <div className="space-y-24">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
            >
              <div className="flex-1 w-full">
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl aspect-4/3">
                  <ImageWithFallback
                    src={story.imageUrl}
                    alt={story.title}
                    className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <span className="text-pink-400 font-bold tracking-widest uppercase">{story.year}</span>
                <h3 className="text-3xl font-serif text-gray-800">{story.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed italic">
                  "{story.description}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
