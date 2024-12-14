'use client';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const StartexsLogo = () => {
  const images = [
    '/images.jpg', // Path to your first image
    '/images1.jpg', // Path to your second image
    '/images 3.jpg', // Path to your third image
    '/img1.webp', // Path to your third image
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds (3000ms)

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className='flex justify-center items-center '>
      <motion.div
        key={currentImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={images[currentImage]}
          alt="Logo"
          className="w-full h-full object-cover rounded-md"
        />
      </motion.div>
    </div>
  );
};

export default StartexsLogo;
