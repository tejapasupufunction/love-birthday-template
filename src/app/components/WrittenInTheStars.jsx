import React from 'react';
import { motion } from 'motion/react';
import { Star, Sparkles, Moon } from 'lucide-react';

export const WrittenInTheStars = () => {
  return (
    <section className="relative py-32 px-4 bg-[#1a1325] overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#3d2b56_0%,transparent_70%)]" />
      </div>

      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center justify-center gap-4 mb-8">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Star className="text-yellow-200 fill-yellow-200/20" size={32} />
            </motion.div>
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-200/50" />
            <Moon className="text-pink-200 fill-pink-200/20" size={28} />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-200/50" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="text-yellow-200" size={32} />
            </motion.div>
          </div>

          <h2 className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-white to-pink-200 mb-6 leading-tight">
            Our Love was Written in the Stars
          </h2>

          <p className="text-xl md:text-2xl font-light text-pink-100/80 italic max-w-2xl mx-auto leading-relaxed">
            "Of all the galaxies, in all the universes, I'm so glad my path crossed with yours."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-serif text-yellow-100 mb-1">∞</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-pink-300 font-bold">Infinite Moments</div>
          </div>
          <div className="h-12 w-px bg-pink-500/20 hidden md:block" />
          <div className="text-center">
            <div className="text-3xl font-serif text-yellow-100 mb-1">One</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-pink-300 font-bold">In a Billion</div>
          </div>
          <div className="h-12 w-px bg-pink-500/20 hidden md:block" />
          <div className="text-center">
            <div className="text-3xl font-serif text-yellow-100 mb-1">Always</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-pink-300 font-bold">By Your Side</div>
          </div>
        </motion.div>
      </div>

      <svg className="absolute inset-0 pointer-events-none opacity-20" width="100%" height="100%">
        <motion.path
          d="M 100,200 L 250,150 L 400,250 L 550,100"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 3 }}
        />
        <motion.path
          d="M 800,400 L 950,350 L 1100,450 L 1250,300"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 0.5 }}
        />
      </svg>
    </section>
  );
};
