import React from 'react';
import { motion } from 'motion/react';
import { Star, Smile, Music, Heart, Sun, Coffee } from 'lucide-react';

const reasons = [
  { icon: Heart, text: "The way your eyes light up when you're happy." },
  { icon: Smile, text: "Your contagious laugh that makes everything better." },
  { icon: Sun, text: "How you make every day feel like a sunny morning." },
  { icon: Coffee, text: "Our cozy weekend mornings and shared dreams." },
  { icon: Music, text: "The way you hum when you're thinking about something." },
  { icon: Star, text: "The kindness you show to everyone around you." },
];

export const ReasonsWhy = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif text-center text-gray-800 mb-16">Small Things I Love About You</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="p-8 rounded-2xl bg-pink-50/50 border border-pink-100 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-6 text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                <item.icon size={32} />
              </div>
              <p className="text-xl text-gray-700 italic">"{item.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
