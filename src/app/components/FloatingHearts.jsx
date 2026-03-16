import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Heart = ({ id, x, delay }) => {
  return (
    <motion.div
      initial={{ y: '110vh', x, opacity: 0, scale: 0 }}
      animate={{
        y: '-10vh',
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1.2, 1.2, 0.5],
        x: x + (Math.sin(id) * 50)
      }}
      transition={{
        duration: 10 + Math.random() * 10,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
      className="fixed text-red-400 pointer-events-none z-0"
      style={{ left: `${x}%` }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </motion.div>
  );
};

export const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 20
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden select-none">
      {hearts.map((heart) => (
        <Heart key={heart.id} {...heart} />
      ))}
    </div>
  );
};
