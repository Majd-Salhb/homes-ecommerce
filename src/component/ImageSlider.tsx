// ImageSlider.jsx
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";

const images = [
  "img/12.jpg",
  "img/11.jpg",
  "img/25.jpg",
  "img/1.jpg",
  "img/16.jpg",
];

const ImageSlider = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  const startAnimation = () => {
    controls.start({
      x: "-50%",
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    });
  };
  useEffect(startAnimation);

  return (
    <div ref={containerRef} className="overflow-hidden w-full bg-gray-100 py-4">
      <motion.div
        className="d-flex w-max"
        animate={controls}
        initial={{ x: 0 }}
      >
        {/* نكرر الصور مرتين لإنشاء تأثير التمرير المستمر */}
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-60 h-auto mx-2 object-cover rounded"
            loading="lazy"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ImageSlider;
