
import React from "react";
import insuranceIcon from "../assets/insurance-icon.svg";
import lendingIcon from "../assets/lending-icon.svg";
import healthcareIcon from "../assets/healthcare-icon.svg";
import combinedShape from "../assets/combined-shape-copy.svg";
import group2 from "../assets/group-2.svg";
import group2Copy2 from "../assets/group-2-copy-2.svg";

const Industries = () => {
  const industries = [
    {
      title: "Insurance",
      description:
        "Automate claims processing with accurate document validation.",
      icon: insuranceIcon,
    },
    {
      title: "Lending",
      description:
        "Ensure faster loan approvals with fraud detection and instant verification.",
      icon: lendingIcon,
    },
    {
      title: "Healthcare",
      description:
        "Streamline patient record management and ensure compliance with HIPAA standards.",
      icon: healthcareIcon,
    },
  ];

  return (
    <section
      id="industries"
      className="pt-20 md:pt-32 pb-20 md:pb bg-white relative overflow-hidden"
    >
    
      <div className="absolute -left-[62px] top-0 w-[761px] h-[761px] opacity-50">
        <img src={combinedShape} alt="" className="w-full h-full" />
      </div>
      <div className="absolute right-0 bottom-[114px] w-[260px] h-[105px]">
        <img src={group2Copy2} alt="" className="w-full h-full" />
      </div>
      <div className="absolute right-[275px] bottom-[623px] w-[311px] h-[74px]">
        <img src={group2} alt="" className="w-full h-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-20 relative z-10">
      
        <div className=" mb-16 md:mb-24">
          <p className="font-manrope font-bold text-2xl leading-[33px] bg-gradient-to-r from-[#CD6028] to-primary bg-clip-text text-transparent mb-4">
            AI-driven innovation for growth.
          </p>
          <h2 className="font-raleway font-semibold text-[48px] leading-[56px] text-dark">
            Industries We Empower
          </h2>
        </div>

     
        <div className="grid md:grid-cols-3 gap-20 max-w-[1200px] mx-auto mb-40">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`
        bg-white rounded-[20px] 
        shadow-[0px_0px_20px_0px_rgba(0,0,0,0.12)]
        flex flex-col items-center justify-center gap-4 min-h-[300px]
        transition-all duration-300
        ${index === 0 ? "md:translate-y-52" : ""}
        ${index === 1 ? "md:-translate-y-4" : ""}
        ${index === 2 ? "md:-translate-y-48" : ""}
      `}
            >
              <img
                src={industry.icon}
                alt={industry.title}
                className=" h-[57px]"
              />

              <div className="text-center space-y-4">
                <h3 className="font-raleway font-semibold text-2xl text-dark">
                  {industry.title}
                </h3>
                <p className="font-manrope font-medium text-base text-gray-500 max-w-[272px]">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
