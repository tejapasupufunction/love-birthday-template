import React, { useState } from 'react';
import { FloatingHearts } from './components/FloatingHearts';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { LoveLetter } from './components/LoveLetter';
import { OpenWhenLetters } from './components/OpenWhenLetters';
import { HoneycombGallery } from './components/HoneycombGallery';
import { motion } from 'motion/react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Login } from './components/Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  const name = "Moniluuu"; // Placeholder - user can change this
  const birthdayMessage = "To the woman who makes every second of my life worth living. Happy Birthday, my love!";

  const storyData = [
    {
      year: "July 2022",
      title: "Where It All Began",
      description: "Remember that chilly evening text we had? During ur semester exams, you were soo stressed and i just helped you study and we ended up talking for hours, and you fell for me.",
      imageUrl: "src/assets/Gemini_Generated_Image_6f56tw6f56tw6f56.png"    },
    {
      year: "DEC 2022",
      title: "Our First Meet",
      description: "The day we met in person for the first time, and i was soo nervous but you were soo cute and it was just perfect when you sat on my bike for the first time and my heart beat raised and i knew i wanted to be with you forever. Later, i asked ur permission and kissed ur cheeks!!!",
      imageUrl: "src/assets/WhatsApp Image 2026-03-16 at 12.37.13 AM.jpeg"    }
  ];

  const honeycombImages = [
    { id: 1, url: "src/assets/WhatsApp Image 2026-03-16 at 12.54.57 AM.jpeg", caption: "Adventure is better with you." },
    { id: 2, url: "src/assets/WhatsApp Image 2026-03-16 at 12.54.57 AM.jpeg", caption: "Chef Sarah in action!" },
    { id: 3, url: "src/assets/WhatsApp Image 2026-03-16 at 12.54.57 AM.jpeg", caption: "Dancing the night away." },
    { id: 4, url: "src/assets/WhatsApp Image 2026-03-16 at 12.54.57 AM.jpeg", caption: "Movie nights are our favorites." },
    { id: 5, url: "src/assets/WhatsApp Image 2026-03-16 at 12.54.57 AM.jpeg", caption: "Forever yours." },
    { id: 6, url: "src/assets/WhatsApp Image 2026-03-16 at 12.54.57 AM.jpeg", caption: "Infinite laughs together." },
    { id: 7, url: "src/assets/WhatsApp Image 2026-03-16 at 12.54.57 AM.jpeg", caption: "Walking into our future." },
  ];



  const letterParagraphs = [
    "As you celebrate another year of life, I want you to know just how much you mean to me. You aren't just my partner; you're my best friend, my confidante, and my greatest inspiration, my mom.",
    "I hope today is as bright and beautiful as your soul. May this year bring you as much joy as you've brought into my life since the day we met.",
    "Your just my cutie patootie, my bujji baby, my mummyluu, my bujjiluu, my cutie pie, my bajji, my dumboo, my potti, mine and my eveyything.",
    "I love you more than words can ever truly capture. Happy Birthday, beautiful."
  ];

  return (
    <div className="min-h-screen bg-pink-50/20 selection:bg-pink-200 selection:text-pink-900 overflow-x-hidden">
      <FloatingHearts />

      <Hero
        name={name}
        birthdayMessage={birthdayMessage}
        imageUrl="src/assets/WhatsApp Image 2026-03-16 at 11.28.15 PM.jpeg"
      />

      <OurStory stories={storyData} />

      <HoneycombGallery images={honeycombImages} />

      <OpenWhenLetters />

      <LoveLetter content={letterParagraphs} />


      <section className="py-24 px-4 bg-pink-900 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-4 rounded-full bg-pink-500/20"
          >
            <div className="w-24 h-24 rounded-full bg-pink-500 flex items-center justify-center mx-auto">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-serif">Celebrating You Today, Loving You Forever</h2>
          <p className="text-xl text-pink-200 font-light italic">"Thank you for being the most beautiful part of my world."</p>

          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-70">
            <ImageWithFallback src="src/assets/WhatsApp Image 2026-03-16 at 12.41.54 AM.jpeg" className="aspect-square object-cover rounded-lg" alt="Gallery" />
            <ImageWithFallback src="src/assets/WhatsApp Image 2026-03-16 at 12.42.30 AM.jpeg" className="aspect-square object-cover rounded-lg" alt="Gallery" />
            <ImageWithFallback src="src/assets/WhatsApp Image 2026-03-16 at 12.40.44 AM.jpeg" className="aspect-square object-cover rounded-lg" alt="Gallery" />
            <ImageWithFallback src="src/assets/WhatsApp Image 2026-03-16 at 12.41.43 AM.jpeg" className="aspect-square object-cover rounded-lg" alt="Gallery" />
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-400 text-sm">
        Made with ❤️ for {name} • {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default App;