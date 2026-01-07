import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Industries from './components/Industries';
import Products from './components/Products';
import Blogs from './components/Blogs';
import AboutUs from './components/AboutUs';
import MeetOurTeam from './components/MeetOurTeam';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Industries />
        <Products />
        <Blogs />
        <AboutUs />
        <MeetOurTeam />
      </main>
      <Footer />
    </div>
  );
}

export default App;
