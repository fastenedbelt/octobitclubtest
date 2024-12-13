import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 0 20px;
  position: relative;
`;

const TitleContainer = styled.div`
  position: relative;
  display: inline-block;
  animation: ${fadeIn} 1s ease-out;
`;

const Title = styled.h1`
  font-size: clamp(6rem, 12vw, 12rem);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -2px;
  margin: 0;
  padding: 0;
  text-align: left;

  span.octobit {
    display: block;
    background: linear-gradient(180deg, #fff 30%, rgba(255, 255, 255, 0.7) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  span.event {
    display: block;
    font-size: 0.9em;
    color: rgba(255, 255, 255, 0.3);
    position: relative;
  }
`;

const Subtitle = styled.h2`
  color: #00ffff;
  font-size: clamp(1rem, 2vw, 1.5rem);
  margin: 2rem 0 1rem 0;
  font-weight: 400;
  letter-spacing: 1px;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.5s;
`;

const StoryButton = styled(Link)`
  background: linear-gradient(135deg, rgba(255, 0, 51, 0.15), rgba(255, 0, 51, 0.05));
  color: #FF0033;
  padding: 1.4rem 4rem;
  border: none;
  border-radius: 12px;
  font-size: 1.3rem;
  cursor: pointer;
  text-decoration: none;
  margin-top: 2rem;
  display: inline-block;
  transition: all 0.4s ease;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  animation: ${pulse} 2s infinite ease-in-out;

  &:hover {
    background: linear-gradient(135deg, rgba(255, 0, 51, 0.25), rgba(255, 0, 51, 0.15));
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(255, 0, 51, 0.2);
    letter-spacing: 4px;
  }

  &:active {
    transform: translateY(-1px);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    padding: 2px;
    background: linear-gradient(45deg, rgba(255, 0, 51, 0.5), transparent);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <TitleContainer>
        <Title>
          <span className="octobit">OCTOBIT</span>
          <span className="event">EVENT</span>
        </Title>
      </TitleContainer>
      <Subtitle>The Opening Event of the Octobit Club.</Subtitle>
      <StoryButton to="/story">READ THE STORY</StoryButton>
    </HeroContainer>
  );
};

export default Hero;