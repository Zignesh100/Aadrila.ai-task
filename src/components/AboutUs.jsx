import React from "react";
import { motion } from "framer-motion"; // Import motion
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import aboutbg from "../assets/aboutbg.png";

/* =========================
   Animation Variants
========================= */

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.4 }, // Slight delay after left card
  },
};

/* =========================
   Component
========================= */

const AboutUs = () => {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${aboutbg})` }}
    >
      {/* Overlay (for readability) */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      <div className="max-w-[1440px] mx-auto relative z-10 px-5">
        {/* Header Animation */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-white/60 backdrop-blur-md rounded-[15px] px-12 py-12 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.12)]">
            <h2 className="font-raleway font-semibold text-[48px] leading-[56px] text-dark mb-4">
              About Us
            </h2>
            <p className="font-manrope font-bold text-xl leading-[27px] text-center bg-gradient-to-r from-[#CD6028] to-primary bg-clip-text text-transparent">
              Meet the Minds Shaping Document Automation.
            </p>
          </div>
        </motion.div>

        {/* Vision & Mission */}
        {/* Row 1: Vision (Left) */}
        <div className="grid lg:grid-cols-2 gap-10 mx-auto mb-10 lg:mb-0">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="
              bg-white/40 backdrop-blur-md
              rounded-tr-[500px] rounded-br-[500px]
              p-[14px] pl-20
              shadow-[0px_0px_20px_0px_rgba(0,0,0,0.12)]
              flex items-center gap-[10px]
            "
          >
            <div className="flex items-center gap-3 ">
              <p className="font-manrope font-medium text-[13px] leading-[22px] text-gray-600 text-right ">
                To redefine document management with cutting-edge technology
                that ensures accuracy, efficiency, and trust.
              </p>
              {/* Vertical Divider (Rotated) */}
              <div className="w-[79px] border-t-4 border-[#CD6028] rotate-[-90deg] shrink-0"></div>

              <p className="font-raleway font-bold text-[13px] text-dark shrink-0 text-center">
                Our <br /> Vision
              </p>
            </div>
            <img
              src={img2}
              alt="Vision"
              className="w-[56px] h-[56px] object-contain"
            />
          </motion.div>
          {/* Empty div for grid spacing on large screens */}
          <div className="hidden lg:block"></div>
        </div>

        {/* Row 2: Mission (Right) */}
        <div className="grid lg:grid-cols-2 gap-10 mx-auto">
          {/* Empty div for grid spacing on large screens */}
          <div className="hidden lg:block"></div>
          
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="
              bg-white/40 backdrop-blur-md
              rounded-tl-[500px] rounded-bl-[500px]
              p-[14px] pr-20
              shadow-[0px_0px_20px_0px_rgba(0,0,0,0.12)]
              flex items-center gap-[10px] justify-end
            "
          >
            <img
              src={img1}
              alt="Mission"
              className="w-[56px] h-[56px] object-contain"
            />

            <div className="flex items-center gap-3">
              <p className="font-raleway font-bold text-[13px] text-dark text-right shrink-0 text-center">
                Our <br /> Mission
              </p>

              {/* Vertical Divider (Rotated) */}
              <div className="w-[79px] border-t-4 border-[#CD6028] rotate-[-90deg] shrink-0"></div>

              <p className="font-manrope font-medium text-[13px] leading-[22px] text-gray-600 text-left">
                To redefine document management with cutting-edge technology
                that ensures accuracy, efficiency, and trust.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;