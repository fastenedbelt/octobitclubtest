import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { StoryPage } from './pages/StoryPage';
import { ChallengesPage } from './pages/ChallengesPage';
import HackerEntry from './components/HackerEntry';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #000;
`;

const App = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <Router>
      <AppContainer>
        <HackerEntry onComplete={() => setShowContent(true)} />
        {showContent && (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/story" element={<StoryPage />} />
              <Route path="/challenges" element={<ChallengesPage />} />
            </Routes>
          </>
        )}
      </AppContainer>
    </Router>
  );
};

export default App;