import React from 'react';
import { motion } from 'motion/react';
import { Plane, MapPin, Camera, Utensils, Music, Heart, Sparkles, Coffee } from 'lucide-react';

const items = [
  {
    id: 1,
    title: "Paris Getaway",
    description: "Seeing the Eiffel Tower sparkle at night while holding your hand.",
    icon: <Plane className="text-pink-400" />,
    status: 'soon'
  },
  {
    id: 2,
    title: "Pottery Class",
    description: "Making a mess together and creating something beautiful (or hilariously bad).",
    icon: <Sparkles className="text-pink-400" />,
    status: 'planned'
  },
  {
    id: 3,
    title: "Northern Lights",
    description: "Cuddling under a blanket in a glass igloo watching the sky dance.",
    icon: <MapPin className="text-pink-400" />,
    status: 'dreaming'
  },
  {
    id: 4,
    title: "Our Photo Gallery",
    description: "Filling an entire wall with printed memories of our adventures.",
    icon: <Camera className="text-pink-400" />,
    status: 'planned'
  },
  {
    id: 5,
    title: "Cooking Marathon",
    description: "Trying to cook a 5-course meal without burning the kitchen down.",
    icon: <Utensils className="text-pink-400" />,
    status: 'soon'
  },
  {
    id: 6,
    title: "Road Trip Playlist",
    description: "Driving with no destination, just singing our hearts out to our favorite songs.",
    icon: <Music className="text-pink-400" />,
    status: 'dreaming'
  }
];

export const BucketList = () => {
  return (
    <section className="py-24 px-4 bg-pink-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-gray-800 mb-4">Our Future Adventures</h2>
            <div className="flex justify-center items-center gap-2 text-pink-400">
              <Heart size={16} fill="currentColor" />
              <span className="uppercase tracking-widest text-xs font-bold">The Bucket List</span>
              <Heart size={16} fill="currentColor" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-pink-100 hover:shadow-xl hover:shadow-pink-200/50 transition-all group"
            >
              <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-100 transition-colors">
                {item.icon}
              </div>

              <div className="mb-4">
                <span className={`text-[10px] font-bold uppercase tracking-tighter px-2 py-1 rounded-full ${
                  item.status === 'soon' ? 'bg-green-50 text-green-600' :
                  item.status === 'planned' ? 'bg-blue-50 text-blue-600' : 'bg-pink-50 text-pink-600'
                }`}>
                  {item.status}
                </span>
              </div>

              <h3 className="text-xl font-serif text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed font-light italic">
                "{item.description}"
              </p>

              <div className="mt-6 flex items-center gap-1 text-pink-200 group-hover:text-pink-400 transition-colors">
                <div className="h-px w-8 bg-current" />
                <Coffee size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
