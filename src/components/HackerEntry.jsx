import React, { useState, useEffect } from 'react';
import Terminal from './Terminal/Terminal';

const HackerEntry = ({ onComplete }) => {
  const [showAccess, setShowAccess] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [hide, setHide] = useState(false);

  const handleComplete = () => {
    setShowAccess(true);
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setHide(true);
        onComplete();
      }, 1000);
    }, 1000); // Reduced delay before fade out from 2500ms to 1000ms
  };

  return (
    <Terminal 
      onComplete={handleComplete}
      showAccess={showAccess}
      fadeOut={fadeOut}
      hide={hide}
    />
  );
};

export default HackerEntry;