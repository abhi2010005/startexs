'use client'
import { motion } from "framer-motion";

const HeroText = () => {
  const text = "Empowering your vision with Startexs";

  // Animation variants for each letter
  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Parent animation with stagger effect and looping
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Delay between words
        repeat: Infinity, // Infinite loop
        repeatType: "reverse", // Reverse animation (fade out after complete)
        delayChildren: 1.5, // Delay before restarting the animation
      },
    },
  };

  return (
    <motion.h1
      className="bg-gradient-to-br from-red-500 to-purple-500 text-transparent bg-clip-text text-5xl uppercase font-semibold mt-2 flex flex-wrap"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block mx-1"
        >
          {word}
          {(index + 1) % 2 === 0 && <br />} {/* Add line break after every 2 words */}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default HeroText;
