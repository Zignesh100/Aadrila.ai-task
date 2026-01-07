import React from "react";
import { motion } from "framer-motion";

import docsimImage from "../assets/docsim-image.png";
import docpilotImage from "../assets/docpilot-image.png";
import doxtractImage from "../assets/doxtract-image.png";
import combinedShape from "../assets/combined-shape-copy.svg";
import group2Copy2 from "../assets/group-2-copy-2.svg";

/* =========================
   Animation Variants
========================= */

const shapeVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const contentVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "right" ? -50 : 50,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.6 },
  },
};

const imageVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "right" ? 50 : -50,
    scale: 0.95,
  }),
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.8 },
  },
};

/* =========================
   Component
========================= */

const Products = () => {
  const products = [
    {
      id: "docsim",
      name: "DocSim",
      title: "AI-Powered Document Similarity Engine",
      features: [
        "Detects near-duplicates and tampered documents.",
        "Identifies fraudulent patterns across large repositories.",
        "Multi-language support for global adaptability.",
      ],
      benefits: [
        "Save 30% time on manual checks.",
        "Reduce document fraud by up to 40%.",
      ],
      image: docsimImage,
      imagePosition: "right",
    },
    {
      id: "docpilot",
      name: "DocPilot",
      title: "Streamline Document Workflows with Automation",
      features: [
        "Automates document collection, routing, and task assignments.",
        "Real-time tracking with advanced dashboards.",
        "Seamless integration with enterprise systems via APIs.",
      ],
      benefits: [
        "Reduce turnaround times by 50%.",
        "Improve operational efficiency with minimal manual effort.",
      ],
      image: docpilotImage,
      imagePosition: "left",
    },
    {
      id: "doxtract",
      name: "Doxtract",
      title: "Extract, Validate, and Process Documents with Ease",
      features: [
        "OCR and NLP-based data extraction.",
        "Handles unstructured documents across industries.",
        "Validates fields using external data sources.",
      ],
      benefits: [
        "Process 10,000+ documents in minutes.",
        "Achieve 99% data accuracy with AI-driven validation.",
      ],
      image: doxtractImage,
      imagePosition: "right",
    },
  ];

  return (
    <section
      id="products"
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        {/* Decorative Top Shape */}
        <div className="absolute left-0 top-[114px] w-[256px] h-[105px] pointer-events-none">
          <img src={group2Copy2} alt="" className="w-full h-full" />
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          // UPDATED: once: false ensures it replays every time it enters view
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="font-manrope font-bold text-2xl bg-gradient-to-r from-[#CD6028] to-primary bg-clip-text text-transparent mb-4">
            Features and benefits.
          </p>
          <h2 className="font-raleway font-semibold text-[48px] text-dark">
            Our Products
          </h2>
        </motion.div>

        {/* Products */}
        <div className="space-y-32">
          {products.map((product) => (
            <div
              key={product.id}
              className={`flex flex-col ${
                product.imagePosition === "right"
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Content Column */}
              <motion.div
                custom={product.imagePosition}
                variants={contentVariants}
                initial="hidden"
                whileInView="visible"
                // UPDATED: Replays animation on scroll up/down
                viewport={{ once: false, amount: 0.25 }}
                className="flex-1 space-y-4"
              >
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#CD6028] to-primary rounded-[40px]">
                  <span className="font-manrope font-bold text-white">
                    {product.name}
                  </span>
                </div>

                <h3 className="font-raleway font-bold text-[24px] text-dark max-w-[520px]">
                  {product.title}
                </h3>

                <div className="space-y-4">
                  <div>
                    <p className="font-raleway font-semibold text-sm text-gray-500">
                      Features:
                    </p>
                    <ul className="font-raleway text-sm text-gray-500 space-y-1">
                      {product.features.map((f, i) => (
                        <li key={i}>• {f}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-raleway font-semibold text-sm text-gray-500">
                      Benefits:
                    </p>
                    <ul className="font-raleway text-sm text-gray-500 space-y-1">
                      {product.benefits.map((b, i) => (
                        <li key={i}>• {b}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4 pt-2">
                  <button className="px-6 py-3 bg-primary rounded-full text-white font-semibold text-sm">
                    Learn More
                  </button>
                  <button className="px-6 py-3 bg-primary rounded-full text-white font-semibold text-sm">
                    Schedule a Demo
                  </button>
                </div>
              </motion.div>

              {/* Image Column Wrapper */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                // UPDATED: Replays animation on scroll up/down
                viewport={{ once: false, amount: 0.25 }}
                className="flex-1 relative flex justify-center items-center"
              >
                {/* 1. Background Shape */}
                <motion.img
                  src={combinedShape}
                  alt=""
                  variants={shapeVariants}
                  className={`absolute z-0 pointer-events-none
                    ${
                      product.imagePosition === "left"
                        ? "right-0"
                        : "left-0 rotate-180 !transform"
                    }
                  `}
                />

                {/* 2. Product Image */}
                <motion.img
                  custom={product.imagePosition}
                  variants={imageVariants}
                  src={product.image}
                  alt={product.name}
                  className="relative z-10 w-full lg:max-w-[360px] rounded-[24px] shadow-lg"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;