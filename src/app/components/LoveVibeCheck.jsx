import React from 'react';
import { motion } from 'motion/react';
import { Heart, Music, Sparkles } from 'lucide-react';

export const LoveVibeCheck = () => {
  const stats = [
    { label: "Butterflies Felt", value: "∞", icon: <Sparkles className="text-pink-400" /> },
    { label: "Inside Jokes", value: "4,208+", icon: <Heart className="text-red-400" fill="currentColor" /> },
    { label: "Songs in our Playlist", value: "156", icon: <Music className="text-indigo-400" /> },
    { label: "Kisses Shared", value: "Too many to count", icon: <Heart className="text-pink-500" fill="currentColor" /> },
  ];

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute -top-10 -left-10 w-40 h-40 bg-pink-100 rounded-full blur-3xl opacity-50"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute -bottom-10 -right-10 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-50"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] text-pink-400 mb-4 block">Current Status</span>
          <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6 leading-tight">
            I'm Still Totally, Completely, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 italic underline decoration-pink-200">Obsessed With You</span>
          </h2>
          <p className="text-gray-500 font-light max-w-xl mx-auto italic">
            "Just in case you forgot since the last section... you're still the best thing that ever happened to me."
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-pink-50/50 backdrop-blur-sm p-6 rounded-[2.5rem] border border-white shadow-sm hover:shadow-xl hover:shadow-pink-100/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                {stat.icon}
              </div>
              <div className="text-2xl font-serif text-gray-800 mb-1">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-wider font-bold text-pink-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 p-8 rounded-3xl bg-gray-50 border border-gray-100 inline-flex flex-col md:flex-row items-center gap-6"
        >
          <div className="flex -space-x-4">
             <div className="w-16 h-16 rounded-full border-4 border-white bg-pink-200 flex items-center justify-center text-2xl shadow-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" alt="Her" className="w-full h-full object-cover" />
             </div>
             <div className="w-16 h-16 rounded-full border-4 border-white bg-indigo-200 flex items-center justify-center text-2xl shadow-lg overflow-hidden translate-y-2">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" alt="Him" className="w-full h-full object-cover" />
             </div>
          </div>
          <div className="text-left">
            <h4 className="text-xl font-serif text-gray-800">My Final Verdict:</h4>
            <p className="text-gray-500 font-light italic">"You're stuck with me forever. No refunds."</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
