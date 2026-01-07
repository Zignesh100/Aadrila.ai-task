// Meet our team section with team member carousel
import React, { useState } from 'react';
import group2 from '../assets/group-2.svg'; 
import combinedShape from '../assets/combined-shape-copy.svg';
import teamMember1 from '../assets/team-member-1.png';
import teamMember2 from '../assets/team-member-2.png';
import teamMember3 from '../assets/team-member-3.png';
const MeetOurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const teamMembers = [
    {
      name: 'MANSI SHUKLA',
      role: 'CEO FutureSphere',
      description: 'For this time-constrained generation in a NOW economy, we would want to play our parts. We intend to make Banking not feel out of place.',
      image: teamMember1,
    },
    {
      name: 'MANSI SHUKLA',
      role: 'CEO FutureSphere',
      description: 'For this time-constrained generation in a NOW economy, we would want to play our parts. We intend to make Banking not feel out of place.',
      image: teamMember2,
    },
    {
      name: 'MANSI SHUKLA',
      role: 'CEO FutureSphere',
      description: 'For this time-constrained generation in a NOW economy, we would want to play our parts. We intend to make Banking not feel out of place.',
      image: teamMember3,
    },
  ];

  const nextMember = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute -left-[193px] top-0 w-[761px] h-[761px] opacity-30">
        <img src={combinedShape} alt="" className="w-full h-full" />
      </div>
      <div className="absolute right-[1189px] top-[226px] w-[189px] h-[121px] opacity-30">
        <img src={group2} alt="" className="w-full h-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-raleway font-semibold text-[48px] leading-[56px] text-dark mb-6">
            Meet our team
          </h2>
          <p className="font-manrope font-bold text-2xl leading-[33px] text-center bg-gradient-to-r from-[#CD6028] to-primary bg-clip-text text-transparent max-w-[841px] mx-auto">
            Meet our passionate and talented team, committed to delivering exceptional results, driving innovation, and transforming your vision into reality.
          </p>
        </div>

        {/* Team Member Carousel */}
        <div className="relative max-w-[1200px] mx-auto">
          <div className="flex items-center justify-center gap-8">
            {/* Previous Button */}
            <button
              onClick={prevMember}
              className="w-10 h-10 rounded-lg border border-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Team Member Cards */}
            <div className="flex gap-8 items-center">
              {teamMembers.map((member, index) => {
                const isActive = index === currentIndex;
                const isVisible = Math.abs(index - currentIndex) <= 1;

                if (!isVisible) return null;

                return (
                  <div
                    key={index}
                    className={`flex flex-col items-center transition-all duration-300 ${
                      isActive ? 'scale-110 z-10' : 'scale-90 opacity-50'
                    }`}
                  >
                    {/* Member Image */}
                  <div
  className={`w-[250px] h-[250px] rounded-full border-2 overflow-hidden  text-center mb-8 ${
    isActive ? 'border-[#CD6028]' : 'border-white'
  }`}
>
  <img
    src={member.image}
    alt={member.name}
    className="w-full h-full object-cover"
  />
</div>


                    {/* Member Info Card */}
                    {isActive && (
                      <div className="bg-primary rounded-2xl p-8 max-w-[884px] text-center">
                        <h3 className="font-raleway font-bold text-[36px] leading-[42px] text-white mb-4">
                          {member.name}
                        </h3>
                        <p className="font-manrope font-normal text-2xl leading-[33px] text-[#CD6028] mb-6">
                          {member.role}
                        </p>
                        <p className="font-manrope font-normal text-base leading-[22px] text-white">
                          {member.description}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={nextMember}
              className="w-10 h-10 rounded-lg border border-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
