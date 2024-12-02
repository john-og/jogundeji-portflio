import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RotatingTextProps {
  words: string[];
  interval?: number;
}

const RotatingText: React.FC<RotatingTextProps> = ({ words, interval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentWord = words[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  const container = {
    enter: {
      transition: {
        staggerChildren: 0.06
      }
    },
    center: {
      transition: {
        staggerChildren: 0.06
      }
    },
    exit: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: 1
      }
    }
  };

  const child = {
    enter: (i: number) => ({
      y: -60,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        delay: i * 0.06
      }
    }),
    center: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.5,
        delay: i * 0.06
      }
    }),
    exit: (i: number) => ({
      y: 60,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeIn",
        delay: i * 0.06
      }
    })
  };

  return (
    <div className="h-[1.5em] relative flex justify-center items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentWord}
          variants={container}
          initial="enter"
          animate="center"
          exit="exit"
          className="flex absolute"
        >
          {currentWord.split("").map((letter, index) => (
            <motion.span
              key={`${currentWord}-${index}`}
              custom={index}
              variants={child}
              className="inline-block px-[0.5px]"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RotatingText;