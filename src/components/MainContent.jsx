import React from 'react';
import Hero from './Hero';
import Industries from './Industries';
import Products from './Products';
import Blogs from './Blogs';
import AboutUs from './AboutUs';
import MeetOurTeam from './MeetOurTeam';
import Footer from './Footer';

const MainContent = () => {
  return (
    <main>
      <Hero />
      <Industries />
      <Products />
      <Blogs />
      <AboutUs />
      <MeetOurTeam />
      <Footer />
    </main>
  );
};

export default MainContent;

