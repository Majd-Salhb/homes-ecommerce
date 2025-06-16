import { motion } from "framer-motion";

const AnimatedText = ({ text }) => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 500, damping: 30 },
    },
  };

  return (
    <motion.h1
      className="text-4xl md:text-6xl title"
      variants={container}
      initial="hidden"
      whileInView="visible"
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letter}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedText;
