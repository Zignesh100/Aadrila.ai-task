// import React from "react";

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[85px]">
//       {/* Background Elements */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-white via-[#DFEEFC] to-white opacity-50"></div>
//         <div className="absolute bottom-0 left-0 right-0 h-[110px] bg-gradient-to-t from-white via-white/82 to-white/55"></div>
//       </div>

//       <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-20 w-full">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="space-">
//             <p className="font-raleway font-bold text-[48px] leading-[68px] text-dark">
//               {" "}
//               AI-Powered{" "}
//             </p>
//             <p className="font-raleway font-bold text-[48px] leading-[68px] text-dark">
//               {" "}
//               Document Automation
//             </p>
//             <p className="font-raleway font-bold text-[48px] leading-[68px] text-dark">
//               {" "}
//               & Fraud Detection
//             </p>

//             <p className="font-manrope font-medium text-xl leading-[31px] text-[#1E1C26] max-w-[536px]">
//               Enhance security, accuracy, and efficiency with our cutting-edge
//               AI solutions for seamless document processing and fraud
//               prevention.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-10 pt-4">
//               <button className="px-20 py-4 bg-primary rounded-[160px] text-white font-semibold text-base leading-5">
//                 Get a Demo
//               </button>
//               <button className="px-20 py-4 bg-primary rounded-[160px] text-white font-semibold text-base leading-5">
//                 Explore Solutions
//               </button>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="flex justify-center lg:justify-end">
//             <img
//               src="/assets/hero-image.svg"
//               alt="AI Document Automation"
//               className="w-full max-w-[635px] h-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React from "react";
import heroBg from "../assets/bgimage.jpg";
import heroImage from "../assets/hero-image.svg";
const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center pt-[85px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Overlay (optional) */}
      <div className="absolute inset-0 bg-white/60"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="font-raleway font-bold text-[48px] leading-[68px] bg-gradient-to-r from-[#CD6028] to-primary bg-clip-text text-transparent">
  AI-Powered
</p>

            <p className="font-raleway font-bold text-[48px] leading-[68px] text-dark">
               {" "}
              Document Automation
             </p>
         <p className="font-raleway font-bold text-[48px] leading-[68px] text-dark">
               {" "}
               & Fraud Detection
             </p>

            <p className="font-manrope font-medium text-xl leading-[31px] text-[#1E1C26] max-w-[536px] mt-4">
              Enhance security, accuracy, and efficiency with our cutting-edge AI
              solutions for seamless document processing and fraud prevention.
            </p>
            <div className="flex flex-col sm:flex-row gap-10 pt-4">
              <button className="px-16
               py-4 bg-primary rounded-[160px] text-[16px] text-white font-semibold font-Raleway

  text-base leading-5">
                 Get a Demo
               </button>
               <button className="px-10 py-4 bg-primary rounded-[160px]  text-[16px] text-white font-semibold text-base leading-5 font-raleway">
                Explore Solutions
               </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={heroImage}
              alt="AI Document Automation"
              className="w-full max-w-[635px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
