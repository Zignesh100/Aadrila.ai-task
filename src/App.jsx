import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import SplashLogo from './components/SplashLogo';
import MainContent from './components/MainContent';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showNavbarLogo, setShowNavbarLogo] = useState(false);

  useEffect(() => {
    // --- DEVELOPMENT MODE: COMMENT THIS OUT TO SEE ANIMATION ---
    // const hasAnimated = sessionStorage.getItem('logoAnimated');
    // if (hasAnimated) {
    //   setShowSplash(false);
    //   setShowNavbarLogo(true);
    // }
    // -----------------------------------------------------------
  }, []);

  const handleAnimationStart = () => {
    // 1. Unmount Splash (triggers exit animation)
    setShowSplash(false);
    // 2. Mount Navbar Logo (triggers layoutId magic)
    setShowNavbarLogo(true);
    
    // Save state for future visits (enable this when you go live)
    // sessionStorage.setItem('logoAnimated', 'true');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar showLogo={showNavbarLogo} />
      
      <AnimatePresence>
        {showSplash && (
          <SplashLogo key="splash" onAnimationStart={handleAnimationStart} />
        )}
      </AnimatePresence>
      
      <MainContent />
    </div>
  );
}

export default App;