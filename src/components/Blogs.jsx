// Blogs section displaying recent blog posts
import React from "react";
import { useState } from "react";

import group2 from "../assets/group-2.svg";
import group2Copy2 from "../assets/group-2-copy-2.svg";

const Blogs = () => {
 

  const blogs = [
    {
      title: "How AI is Revolutionizing Document Management for Enterprises",
      date: "24 July, 2023",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
    },
    {
      title: "Top 5 Fraud Prevention Strategies for Financial Institutions",
      date: "24 July, 2023",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
    },
    {
      title:
        "The Future of OCR: From Basic Extraction to AI-Driven Intelligence",
      date: "24 July, 2023",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
    },
  ];



  const [currentIndex, setCurrentIndex] = useState(0);
const visibleCards = 3;

const nextSlide = () => {
  if (currentIndex < blogs.length - visibleCards) {
    setCurrentIndex(currentIndex + 1);
  }
};

const prevSlide = () => {
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1);
  }
};

  return (
    <section id="blog" className="md:p bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute left-[50px] top-0 w-[189px] h-[121px]">
        <img src={group2} alt="" className="w-full h-full opacity-30" />
      </div>
      <div className="absolute left-[1169px] top-[170px] w-[264px] h-[63px]">
        <img src={group2Copy2} alt="" className="w-full h-full opacity-30" />
      </div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-raleway font-semibold text-[48px] leading-[56px] text-dark mb-4">
            Blogs
          </h2>
          <p
            className="
  font-manrope 
  font-normal 
  text-[24px] 
  leading-[24px] 
  text-center 
  bg-gradient-to-r from-[#CD6028] to-primary 
  bg-clip-text text-transparent 
  max-w-[821px] 
  mx-auto
"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
        </div>

        <div className="overflow-hidden max-w-[1200px] mx-auto">
          <div
            className="flex gap-8 transition-transform duration-500"
            style={{
              transform: `translateX(-(currentIndex * (100 / visibleCards))%)`,
            }}
          >
            {blogs.map((blog, index) => (
              <article
                key={index}
                className="min-w-[calc(100%/3-22px)] bg-white border border-gray-100 rounded-[10px] p-6"
              >
                <h3 className="font-raleway font-bold text-base text-dark">
                  {blog.title}
                </h3>
                <p className="text-xs text-[#719AD0]">{blog.date}</p>
                <p className="text-sm text-gray-500 mt-3">{blog.excerpt}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Slider Navigation */}
        <div className="flex justify-center gap-4 mt-12">
          <button
            onClick={prevSlide}
            className="w-6 h-6 rounded-full border border-primary flex items-center justify-center"
          >
            <svg
              className="w-3 h-3 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-6 h-6 rounded-full border border-primary flex items-center justify-center"
          >
            <svg
              className="w-3 h-3 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
