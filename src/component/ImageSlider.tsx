// ImageSlider.jsx
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";

const images = [
  "src/imgs/GridArt_٢٠٢٤٠٨٢١_١٢٣٣٣١١٣٥.png",
  "src/imgs/360_F_448677702_KLkVl1wllKXe98PtmdHjqMDyFxARV1Yk.jpg",
  "src/imgs/GridArt_٢٠٢٤٠٨٢١_١٢٣٣٣١١٣٥.png",
  "src/imgs/360_F_448677702_KLkVl1wllKXe98PtmdHjqMDyFxARV1Yk.jpg",
  "src/imgs/360_F_448677702_KLkVl1wllKXe98PtmdHjqMDyFxARV1Yk.jpg",
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

  const stopAnimation = () => {
    controls.stop();
  };

  return (
    <div
      ref={containerRef}
      className="overflow-hidden w-full bg-gray-100 py-4"
      onMouseEnter={stopAnimation}
      onMouseLeave={startAnimation}
    >
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
            className="w-40 h-auto mx-2 object-cover rounded"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ImageSlider;
