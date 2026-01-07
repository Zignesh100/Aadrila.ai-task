// import React from "react";
// import docsimImage from "../assets/docsim-image.png";
// import docpilotImage from "../assets/docpilot-image.png";
// import doxtractImage from "../assets/doxtract-image.png";
// import combinedShape from "../assets/combined-shape-copy.svg";

// const Products = () => {
//   const products = [
//     {
//       id: "docsim",
//       name: "DocSim",
//       title: "AI-Powered Document Similarity Engine",
//       features: [
//         "Detects near-duplicates and tampered documents.",
//         "Identifies fraudulent patterns across large repositories.",
//         "Multi-language support for global adaptability.",
//       ],
//       benefits: [
//         "Save 30% time on manual checks.",
//         "Reduce document fraud by up to 40%.",
//       ],
//       image: docsimImage,
//       imagePosition: "right",
//     },
//     {
//       id: "docpilot",
//       name: "DocPilot",
//       title: "Streamline Document Workflows with Automation",
//       features: [
//         "Automates document collection, routing, and task assignments.",
//         "Real-time tracking with advanced dashboards.",
//         "Seamless integration with enterprise systems via APIs.",
//       ],
//       benefits: [
//         "Reduce turnaround times by 50%.",
//         "Improve operational efficiency with minimal manual effort.",
//       ],
//       image: docpilotImage,
//       imagePosition: "left",
//     },
//     {
//       id: "doxtract",
//       name: "Doxtract",
//       title: "Extract, Validate, and Process Documents with Ease",
//       features: [
//         "OCR and NLP-based data extraction.",
//         "Handles unstructured documents across industries.",
//         "Validates fields using external data sources.",
//       ],
//       benefits: [
//         "Process 10,000+ documents in minutes.",
//         "Achieve 99% data accuracy with AI-driven validation.",
//       ],
//       image: doxtractImage,
//       imagePosition: "right",
//     },
//   ];

//   return (
//     <section id="products" className="py-10 md:py- bg-white">
//       <div className="max-w-[1440px] mx-auto px-5 md:px-20">
//         {/* Section Header */}
//         <div className="text-center mb-16 md:mb-24">
//           <p className="font-manrope font-bold text-2xl leading-[33px] text-center bg-gradient-to-r from-[#CD6028] to-primary bg-clip-text text-transparent mb-4">
//             features and benefits.
//           </p>
//           <h2 className="font-raleway font-semibold text-[48px] leading-[56px] text-dark">
//             Our Products
//           </h2>
//         </div>

//         {/* Product Cards */}
//         <div className="space-y-32">
//           {products.map((product, index) => (
//             <div
//               key={product.id}
//               className={`flex flex-col ${
//                 product.imagePosition === "right"
//                   ? "lg:flex-row"
//                   : "lg:flex-row-reverse"
//               } gap-12 items-center`}
//             >
//               {/* Content */}
//               <div className="flex-1 space-y-6">
//                 <div className="inline-block px-6 py-4 bg-gradient-to-r from-[#CD6028] to-primary rounded-[50px]">
//                   <span className="font-manrope font-bold text-xl leading-5 text-white">
//                     {product.name}
//                   </span>
//                 </div>

//                 <h3 className="font-raleway font-bold text-[32px] leading-[48px] text-dark">
//                   {product.title}
//                 </h3>

//                 <div className="space-y-4">
//                   <div>
//                     <p className="font-raleway font-bold text-lg leading-[32px] text-gray-500 mb-2">
//                       Features:
//                     </p>
//                     <ul className="font-raleway font-light text-lg leading-[32px] text-gray-500 space-y-1">
//                       {product.features.map((feature, idx) => (
//                         <li key={idx}>• {feature}</li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div>
//                     <p className="font-raleway font-bold text-lg leading-[32px] text-gray-500 mb-2">
//                       Benefits:
//                     </p>
//                     <ul className="font-raleway font-light text-lg leading-[32px] text-gray-500 space-y-1">
//                       {product.benefits.map((benefit, idx) => (
//                         <li key={idx}>• {benefit}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="flex flex-col sm:flex-row gap-7 pt-4">
//                   <button className="px-9 py-4 bg-primary rounded-[160px] text-white font-semibold text-base leading-5">
//                     Learn More
//                   </button>
//                   <button className="px-9 py-4 bg-primary rounded-[160px] text-white font-semibold text-base leading-5">
//                     Schedule a Demo
//                   </button>
//                 </div>
//               </div>

//               {/* Image */}
//               <div className="flex-1">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full max-w-[601px] h-auto rounded-[40px]"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;

import React from "react";
import docsimImage from "../assets/docsim-image.png";
import docpilotImage from "../assets/docpilot-image.png";
import doxtractImage from "../assets/doxtract-image.png";
import combinedShape from "../assets/combined-shape-copy.svg";
import group2Copy2 from "../assets/group-2-copy-2.svg";
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
    <section id="products" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        {/* Section Header */}
        <div className="absolute left-0 top-[114px] w-[256px] h-[105px]">
          <img src={group2Copy2} alt="" className="w-full h-full" />
        </div>
        <div className="text-center mb-16 md:mb-24">
          <p className="font-manrope font-bold text-2xl leading-[33px] bg-gradient-to-r from-[#CD6028] to-primary bg-clip-text text-transparent mb-4">
            Features and benefits.
          </p>
          <h2 className="font-raleway font-semibold text-[48px] leading-[56px] text-dark">
            Our Products
          </h2>
        </div>

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
              {/* Content */}
              <div className="flex-1 space-y-4">
                {/* Product Tag */}
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#CD6028] to-primary rounded-[40px]">
                  <span className="font-manrope font-bold text-base text-white">
                    {product.name}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-raleway font-bold text-[24px] leading-[34px] text-dark max-w-[520px]">
                  {product.title}
                </h3>

                {/* Features & Benefits */}
                <div className="space-y-4">
                  <div>
                    <p className="font-raleway font-semibold text-sm text-gray-500 mb-1">
                      Features:
                    </p>
                    <ul className="font-raleway font-light text-sm text-gray-500 space-y-1 max-w-[520px]">
                      {product.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-raleway font-semibold text-sm text-gray-500 mb-1">
                      Benefits:
                    </p>
                    <ul className="font-raleway font-light text-sm text-gray-500 space-y-1 max-w-[520px]">
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx}>• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button className="px-6 py-3 bg-primary rounded-[120px] text-white font-semibold text-sm">
                    Learn More
                  </button>
                  <button className="px-6 py-3 bg-primary rounded-[120px] text-white font-semibold text-sm">
                    Schedule a Demo
                  </button>
                </div>
              </div>

              <div className="flex-1 relative flex justify-center items-center">
                {/* Background Shape */}
                <img
                  src={combinedShape}
                  alt=""
                  className={`absolute z-0 opacity-200
      ${
        product.imagePosition === "left"
          ? "-right-0 -top-20"
          : "-left-0 -top-20"
      }
    `}
                />

                {/* Main Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="
  relative z-10
  w-full

  lg:max-w-[360px]
  h-auto
  rounded-[24px]
"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
