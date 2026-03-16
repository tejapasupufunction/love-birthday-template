import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export const LoveLetter = ({ content }) => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-100/50 via-transparent to-transparent -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-white p-8 md:p-16 rounded-sm shadow-2xl border-l-8 border-pink-400 relative"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        <div className="absolute top-8 right-8 text-pink-200">
          <Heart size={64} fill="currentColor" stroke="none" className="opacity-30" />
        </div>

        <h2 className="text-3xl font-serif text-pink-800 mb-8 italic">To My Dearest...</h2>

        <div className="space-y-6">
          {content.map((para, i) => (
            <p key={i} className="text-xl text-gray-700 leading-loose">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-pink-100 flex flex-col items-end">
          <p className="text-2xl font-serif text-pink-600 italic">Always and Forever,</p>
          <p className="text-3xl font-serif text-pink-800 mt-2 font-bold">Mahanth Raghav.K(ur Dudu)</p>
        </div>
      </motion.div>
    </section>
  );
};
