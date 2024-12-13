import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%);
  padding: 2rem;
`;

const MainTitle = styled.h1`
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 900;
  margin-bottom: 1rem;
  line-height: 1.2;
  
  .cyber-crime {
    color: #FF0033;
    display: block;
    margin-bottom: 0.5rem;
    text-shadow: 0 0 20px rgba(255, 0, 51, 0.3);
  }
  
  .untold-breach {
    color: #FFFFFF;
    display: block;
    font-size: 0.9em;
  }
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #808080;
  font-family: monospace;
  letter-spacing: 2px;
  margin-top: 1rem;
`;

export const StoryTitle = () => {
  return (
    <TitleWrapper>
      <MainTitle>
        <span className="cyber-crime">The Cyber Crime Mystery:</span>
        <span className="untold-breach">"The Untold Breach"</span>
      </MainTitle>
      <Subtitle>The mystery awaits to be solved.</Subtitle>
    </TitleWrapper>
  );
};