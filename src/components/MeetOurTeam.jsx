import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Ensure you have these assets or replace with placeholders
import teamMember1 from "../assets/team-member-1.png";
import teamMember2 from "../assets/team-member-2.png";
import teamMember3 from "../assets/team-member-3.png";
// You can use standard SVGs for the background shapes if you don't have the files
import combinedShape from "../assets/combined-shape-copy.svg"; // The big circle
import group2 from "../assets/group-2.svg"; // The dots grid

const teamMembersData = [
  {
    id: 1,
    name: "MANSI SHUKLA",
    role: "CEO FutureSphere",
    description:
      "For this time-constrained generation in a NOW economy, we would want to play our parts. We intend to make Banking not feel out of place.",
    image: teamMember1,
  },
  {
    id: 2,
    name: "ALEX JOHNSON",
    role: "CTO Innovate",
    description:
      "Driving technical strategy and ensuring our architecture can scale to meet the demands of a rapidly evolving digital landscape.",
    image: teamMember2,
  },
  {
    id: 3,
    name: "PRIYA SHARMA",
    role: "Head of Product",
    description:
      "Focusing on user-centric design principles to build products that not only solve problems but delight our customers every day.",
    image: teamMember3,
  },
];

const MeetOurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextMember = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembersData.length);
  };

  const prevMember = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + teamMembersData.length) % teamMembersData.length
    );
  };

  // Logic to determine position: center, left, or right
  const getPosition = (index) => {
    if (index === currentIndex) return "center";
    const length = teamMembersData.length;
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
      filter: "grayscale(0%)",
    },
    left: {
      scale: 0.65,
      // opacity: 0.6,
      x: "-120%",
      zIndex: 10,
      filter: "grayscale(100%)", // Optional: make side images B&W like some modern designs
    },
    right: {
      scale: 0.65,
      // opacity: 0.6,
      x: "120%",
      zIndex: 10,
      filter: "grayscale(100%)",
    },
  };

  const activeMember = teamMembersData[currentIndex];

  return (
    <section className="py-20 bg-white relative overflow-hidden min-h-[900px] flex flex-col justify-center">
      {/* --- Background Decorations --- */}
      {/* Large Circle Arc (Left) */}
      <div className="absolute -left-[10%] top-[10%] w-[600px] h-[600px] rounded-full border-[60px] border-[#E8F1FA] opacity-60 pointer-events-none" />

      {/* Dots Grid (Right) */}
      <div className="absolute right-[5%] top-[30%] pointer-events-none opacity-40">
        <div className="grid grid-cols-5 gap-3">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-300 rounded-full" />
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 relative z-10 w-full">
        {/* --- Header Section --- */}
        <div className="text-center mb-10">
          <h2 className="font-raleway font-bold text-[48px] text-[#1E1C26] mb-4">
            Meet our team
          </h2>
          <p className="font-manrope text-xl text-[#CD6028] max-w-[800px] mx-auto leading-relaxed">
            Meet our passionate and talented team, committed to delivering
            exceptional results, driving innovation, and transforming your
            vision into reality.
          </p>
        </div>

        {/* --- Carousel Navigation Buttons (Centered Above Images) --- */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={prevMember}
            className="w-10 h-10 bg-[#3B6BB0] rounded-md flex items-center justify-center text-white hover:bg-[#2c528a] transition-colors shadow-md"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextMember}
            className="w-10 h-10 bg-[#3B6BB0] rounded-md flex items-center justify-center text-white hover:bg-[#2c528a] transition-colors shadow-md"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* --- Main Carousel Area --- */}
        <div className="flex flex-col items-center">
          {/* Images Container */}
          <div className="relative w-full h-[280px] flex gap-[20px] justify-center items-center mb-2">
            {teamMembersData.map((member, index) => {
              const position = getPosition(index);
              const isCenter = position === "center";

              return (
                <motion.div
                  key={member.id}
                  variants={imageVariants}
                  initial="center"
                  animate={position}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`absolute w-[220px] h-[220px] rounded-full overflow-hidden 
                    ${isCenter ? "border-[3px] border-[#CD6028] shadow-xl" : ""}
                  `}
                  style={{ transformOrigin: "center" }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Info Card with Triangle Pointer */}
          <div className="relative w-full max-w-[900px]">
            {/* The Triangle Tip */}

            {/* The Blue Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute left-1/2 -translate-x-1/2 -top-[14px] z-20 
                          w-0 h-0 
                          border-l-[15px] border-l-transparent
                          border-r-[15px] border-r-transparent
                          border-b-[15px] border-b-[#3B6BB0]"
              ></motion.div>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-[#3B6BB0] rounded-xl py-10 px-8 text-center text-white shadow-lg relative z-10"
              >
                <h3 className="font-raleway font-bold text-3xl uppercase tracking-wide mb-1">
                  {activeMember.name}
                </h3>
                <p className="text-[#E67E22] text-lg font-medium mb-4">
                  {activeMember.role}
                </p>
                <p className="font-manrope text-sm md:text-base leading-relaxed max-w-[700px] mx-auto opacity-90">
                  {activeMember.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
