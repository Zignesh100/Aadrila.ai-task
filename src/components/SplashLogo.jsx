import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.svg';

const SplashLogo = ({ onAnimationStart }) => {
  useEffect(() => {
    // 1. Wait for 2 seconds
    const timer = setTimeout(() => {
      onAnimationStart();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onAnimationStart]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
      // 2. When this component unmounts (exits), fade out the background
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute inset-0 bg-white"
        // Ensure background is solid white initially
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }} 
      />
      
      <motion.img
        layoutId="logo"
        src={logo}
        alt="Aadrila.ai Logo"
        className="h-[50px] w-auto relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut"
        }}
      />
    </motion.div>
  );
};

export default SplashLogo;