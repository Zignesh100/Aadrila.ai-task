import React from "react";
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import aboutbg from "../assets/aboutbg.png";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${aboutbg})` }}
    >
      {/* Overlay (for readability) */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      <div className="max-w-[1440px] mx-auto   relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-white/60 backdrop-blur-md rounded-[15px] px-12 py-12 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.12)]">
            <h2 className="font-raleway font-semibold text-[48px] leading-[56px] text-dark mb-4">
              About Us
            </h2>
            <p className="font-manrope font-bold text-xl leading-[27px] text-center bg-gradient-to-r from-[#CD6028] to-primary bg-clip-text text-transparent">
              Meet the Minds Shaping Document Automation.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-10  mx-auto">
          {/* Vision */}
          <div
            className="
    bg-white/40 backdrop-blur-md
    rounded-tr-[500px] rounded-br-[500px]
    p-[14px] pl-20
    shadow-[0px_0px_20px_0px_rgba(0,0,0,0.12)]
    flex items-center gap-[10px]
  "
          >
            <div className="flex items-center gap-3 ">
              <p className="font-manrope font-medium   text-[13px] leading-[22px]  text-gray-600 text-right ">
                To redefine document management with cutting-edge technology
                that ensures accuracy, efficiency, and trust.
              </p>
              <div className="w-[79px] border-t-4 border-[#CD6028] rotate-[-90deg]"></div>

              <p className="font-raleway font-bold text-[13px]  text-dark">
                Our <br /> Vision
              </p>
            </div>
            <img
              src={img2}
              alt="Vision"
              className="w-[56px] h-[56px] object-contain"
            />
          </div>

          {/* Mission */}
        </div>

        <div className="grid lg:grid-cols-2 gap-10  mx-auto">
          <div></div>
          <div
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
              <p className="font-raleway font-bold text-[13px] text-dark text-right">
                Our <br /> Mission
              </p>

              <div className="w-[79px] border-t-4 border-[#CD6028] rotate-[-90deg]"></div>

              <p className="font-manrope font-medium text-[13px] leading-[22px] text-gray-600 text-left">
                To redefine document management with cutting-edge technology
                that ensures accuracy, efficiency, and trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
