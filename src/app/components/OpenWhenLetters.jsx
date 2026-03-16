import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Heart, X, Smile, Star, Moon, Sun, Coffee } from 'lucide-react';

const letters = [
  {
    id: 1,
    trigger: "Open when you miss me",
    content: "Close your eyes and take a deep breath bubuu. I'm right there in your heart, counting down the seconds until I can hold you again.",
    icon: <Heart className="text-red-400" />,
    color: "bg-red-50"
  },
  {
    id: 2,
    trigger: "Open when you're stressed",
    content: "You are doing amazing buddi, and I am so proud of you. Take a break, and remember that you don't have to do everything alone. I'm always there for you.",
    icon: <Sun className="text-amber-400" />,
    color: "bg-amber-50"
  },
  {
    id: 3,
    trigger: "Open when you need a laugh",
    content: "Remember the first time i met ur dadon ur last year bday, and i gave him a side hug, and then you told everyone about it and laught about it, and i was showing off that i was proud of it! ",
    icon: <Smile className="text-yellow-400" />,
    color: "bg-yellow-50"
  },
  {
    id: 4,
    trigger: "Open when you can't sleep",
    content: "The moon is watching over you just like I am bujji baby. Think ofthat i am next you joo kotting you. Let that be your blanket tonight. My dreams, mummyluu.",
    icon: <Moon className="text-indigo-400" />,
    color: "bg-indigo-50"
  },
  {
    id: 5,
    trigger: "Open when you feel uninspired",
    content: "You are best person i know mumuu, i know you can do it no matter how hard it is, i'm always there right next to you, to support you and to loveee you, and be ur biggest fan, and to be your home.",
    icon: <Star className="text-purple-400" />,
    color: "bg-purple-50"
  },
  {
    id: 6,
    trigger: "Open when you want to know how much I love you",
    content: "More than there are stars in the sky, more than there are drops in the ocean, and more than I could ever put into words. You are my home, my adventure, and my everything. Always.",
    icon: <Coffee className="text-orange-400" />,
    color: "bg-orange-50"
  }
];

export const OpenWhenLetters = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);

  return (
    <section className="py-24 px-4 bg-cream/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-gray-800 mb-4">Open When...</h2>
            <p className="text-pink-400 italic">For the moments when I'm not right by your side.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {letters.map((letter, index) => (
            <motion.div
              key={letter.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setSelectedLetter(letter)}
              className="cursor-pointer group relative"
            >
              <div className="bg-white border-2 border-dashed border-pink-100 rounded-2xl p-8 flex flex-col items-center text-center h-full transition-all group-hover:border-pink-300 group-hover:shadow-lg group-hover:shadow-pink-100/50">
                <div className={`w-16 h-16 ${letter.color} rounded-full flex items-center justify-center mb-6 transform transition-transform group-hover:rotate-12`}>
                  <Mail className="text-gray-600" size={24} />
                </div>
                <h3 className="text-lg font-serif text-gray-700 leading-tight">
                  {letter.trigger}
                </h3>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-bold text-pink-400 uppercase tracking-widest">Read Now</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedLetter && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pink-900/40 backdrop-blur-md"
              onClick={() => setSelectedLetter(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl p-8 md:p-12 max-w-xl w-full shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-pink-200" />
                <div className="absolute top-6 right-6">
                  <button
                    onClick={() => setSelectedLetter(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={20} className="text-gray-400" />
                  </button>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className={`w-20 h-20 ${selectedLetter.color} rounded-full flex items-center justify-center mb-8`}>
                    {selectedLetter.icon}
                  </div>

                  <h4 className="text-sm font-bold text-pink-400 uppercase tracking-[0.2em] mb-4">
                    My Dear {selectedLetter.trigger.split('Open when you ')[1] || 'Love'}
                  </h4>

                  <div className="space-y-4">
                    <p className="text-xl md:text-2xl font-serif text-gray-800 leading-relaxed italic">
                      "{selectedLetter.content}"
                    </p>
                  </div>

                  <div className="mt-12 flex items-center gap-4">
                    <div className="h-px w-8 bg-pink-100" />
                    <Heart size={16} fill="#F472B6" className="text-pink-400" />
                    <div className="h-px w-8 bg-pink-100" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
