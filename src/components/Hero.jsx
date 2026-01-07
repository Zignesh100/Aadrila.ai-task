import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Assets
import heroBg from "../assets/bgimage.jpg";
import License from "../assets/License.png";
import Doc from "../assets/Doc.png";
import Invoice from "../assets/Invocie.png";
import Scaning from "../assets/Scanning.png";

// CSS for the scanning animation
const scanAnimationStyles = `
  @keyframes scan-move {
    0%, 100% { top: 0%; }
    50% { top: 95%; }
  }
  .animate-scan {
    animation: scan-move 3s ease-in-out infinite;
  }
`;

const ScanningOverlay = () => (
  <div className="absolute inset-0 z-20 pointer-events-none rounded-xl overflow-hidden">
    <div className="relative w-full h-full">
      <img
        src={Scaning}
        alt="Scanning"
        className="absolute left-0 w-full h-20 object-cover opacity-80 animate-scan"
        style={{ top: '0%' }}
      />
    </div>
  </div>
);

const Hero = () => {
  const carouselImages = [
    { id: 1, src: License, alt: "Document Invoice" },
    { id: 2, src: Doc, alt: "ID Card Analysis" },
    { id: 3, src: Invoice, alt: "Graph Analytics" },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  // Logic to determine position: center, left, or right
  const getPosition = (index) => {
    if (index === currentIndex) return "center";
    const length = carouselImages.length;
    const prevIndex = (currentIndex - 1 + length) % length;
    const nextIndex = (currentIndex + 1) % length;
    if (index === prevIndex) return "left";
    if (index === nextIndex) return "right";
    return "hidden";
  };

  // Framer Motion Variants for the Carousel
  const imageVariants = {
    center: {
      scale: 1,
      opacity: 1,
      x: "0%",
      zIndex: 20,
      filter: "blur(0px) grayscale(0%)",
    },
    left: {
      scale: 0.65,
      // opacity: 0.6,
      x: "-70%",
      zIndex: 10,
      filter: "blur(4px) ",
    },
    right: {
      scale: 0.65,
      // opacity: 0.6,
      x: "70%",
      zIndex: 10,
      filter: "blur(4px) ",
    },
  };

  return (
    <section
      className="relative min-h-screen flex items-center pt-[85px] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <style>{scanAnimationStyles}</style>

      <div className="absolute inset-0 bg-white/60"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* --- Left Content --- */}
          <div>
            <p className="font-raleway font-bold text-[40px] md:text-[48px] leading-[1.2] bg-gradient-to-r from-[#CD6028] to-primary bg-clip-text text-transparent">
              AI-Powered
            </p>
            <p className="font-raleway font-bold text-[40px] md:text-[48px] leading-[1.2] text-dark">
              Document Automation
            </p>
            <p className="font-raleway font-bold text-[40px] md:text-[48px] leading-[1.2] text-dark">
              & Fraud Detection
            </p>
            <p className="font-manrope font-medium text-lg md:text-xl leading-[31px] text-[#1E1C26] max-w-[536px] mt-4">
              Enhance security, accuracy, and efficiency with our cutting-edge AI
              solutions for seamless document processing and fraud prevention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 pt-8">
              <button className="px-10 py-4 bg-primary rounded-[160px] text-[16px] text-white font-semibold font-raleway shadow-lg hover:bg-opacity-90 transition">
                Get a Demo
              </button>
              <button className="px-10 py-4 border border-primary text-primary rounded-[160px] text-[16px] font-semibold font-raleway hover:bg-primary hover:text-white transition">
                Explore Solutions
              </button>
            </div>
          </div>

          {/* --- Right Content: Carousel with Scanning Animation --- */}
          <div className="flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-[500px] lg:max-w-[600px]">
             

              {/* Carousel Container */}
              <div className="relative w-full m h-[400px] sm:h-[500px] flex justify-center items-center overflow-hidden">
                {carouselImages.map((img, index) => {
                  const position = getPosition(index);
                  const isCenter = position === "center";

                  return (
                    <motion.div
                      key={img.id}
                      variants={imageVariants}
                      initial="center"
                      animate={position}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute w-[280px] sm:w-[350px] rounded-xl overflow-hidden shadow-2xl"
                      style={{ transformOrigin: "center" }}
                    >
                      {isCenter && <ScanningOverlay />}
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-auto object-cover relative z-10"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;