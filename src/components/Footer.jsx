// Footer component with contact form and company information
import React, { useState } from 'react';
import group2 from '../assets/group-2.svg';
import group2Copy2 from '../assets/group-2-copy-2.svg';
const Footer = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    inquiryType: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production you would send this to your backend / form service
    console.log('Form submitted:', formData);
  };

  return (
    <footer id="contact" className="bg-white">
      {/* Top section: white background with contact details + form card */}
      <section className="relative max-w-[1440px] mx-auto px-5 md:px-20 py-16 lg:py-20">
        {/* Optional decorative images from the Figma file */}
        <img
          src={group2}
          alt=""
          className="pointer-events-none select-none hidden lg:block absolute -left-10 top-28 opacity-40"
        />
        <img
          src={group2Copy2}
          alt=""
          className="pointer-events-none select-none hidden lg:block absolute right-10 bottom-10 opacity-40"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
          {/* Left: text + office addresses */}
          <div className="space-y-8">
            <div>
              <h2 className="font-raleway font-semibold text-[32px] sm:text-[40px] leading-[46px] text-black mb-3">
                Contact Us
              </h2>
              <p className="font-manrope text-[14px] sm:text-[15px] leading-[22px] text-[#555555] max-w-[480px]">
                <span className="text-secondary font-semibold">
                  Lorem Ipsum
                </span>{' '}
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s.
              </p>
            </div>

            <div className="space-y-6 text-[12px] leading-[18px] text-black">
              {/* US Office */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-2 w-2 rounded-full bg-[#FF4B2B]" />
                  <h3 className="font-raleway font-semibold text-[13px]">
                    U.S. Office
                  </h3>
                </div>
                <p className="font-manrope">
                  Aadrila Technologies INC,
                  <br />
                  8 The Green, Ste R, in the City of Dover County of Kent Zip
                  Code 19901.
                </p>
              </div>

              {/* India Office */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-2 w-2 rounded-full bg-[#FF4B2B]" />
                  <h3 className="font-raleway font-semibold text-[13px]">
                    India Office
                  </h3>
                </div>
                <p className="font-manrope">
                  Aadrila Technologies Private Limited,
                  <br />
                  Unit 707, Lotus Trade Centre, Sahakar Nagar, New Link Road,
                  Near D.N.Nagar, Andheri West, Mumbai, Maharashtra 400053.
                </p>
              </div>
            </div>
          </div>

          {/* Right: form card (matches screenshot layout) */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[680px] rounded-[20px] bg-white shadow-[0_4px_30px_rgba(0,0,0,0.12)] px-6 py-8 sm:px-10 sm:py-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="px-4 py-3 border border-[#E0E0E0] rounded-[4px] font-manrope text-sm text-[#555555] placeholder:text-[#A0A0A0]"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="px-4 py-3 border border-[#E0E0E0] rounded-[4px] font-manrope text-sm text-[#555555] placeholder:text-[#A0A0A0]"
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="px-4 py-3 border border-[#E0E0E0] rounded-[4px] font-manrope text-sm text-[#555555] placeholder:text-[#A0A0A0]"
                  />
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="px-4 py-3 border border-[#E0E0E0] rounded-[4px] font-manrope text-sm text-[#555555] placeholder:text-[#A0A0A0]"
                  />
                </div>

                <div className="relative">
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E0E0E0] rounded-[4px] font-manrope text-sm text-[#555555] appearance-none bg-white"
                  >
                    <option value="">Inquiry Type</option>
                    <option value="demo">Request Demo</option>
                    <option value="support">Support</option>
                    <option value="sales">Sales</option>
                  </select>
                  <svg
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-[#999999] pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#E0E0E0] rounded-[4px] font-manrope text-sm text-[#555555] placeholder:text-[#A0A0A0] resize-none"
                />

                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-primary px-6 py-3 font-manrope text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom blue bar (full-width) */}
      <div className="bg-primary text-white text-center py-6 text-[11px] leading-[16px]">
        <p className="font-manrope mb-2">
          © 2025 by Aadrila Technologies Private Limited CIN U74999UP2017PTC094688
        </p>
        <p className="font-manrope">
          Registered Address: B-1, 127/K, Sector-K Aliganj, Lucknow, Lucknow,
          Uttar Pradesh, India, 226024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
