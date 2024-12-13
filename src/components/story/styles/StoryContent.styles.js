import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  animation: ${fadeIn} 1s ease-out;
  padding: 0 1.5rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%);
  padding: 2rem;
  border-radius: 20px;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
    padding: 1.5rem;
  }
`;

export const MainTitle = styled.h1`
  font-size: clamp(2rem, 6vw, 5rem);
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
    text-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
  }
`;

export const Subtitle = styled.p`
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  color: #808080;
  font-family: monospace;
  letter-spacing: 2px;
  margin-top: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Section = styled.div`
  margin-bottom: 3rem;
  background: rgba(255, 255, 255, 0.03);
  padding: 3rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 0, 51, 0.1);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transform: translateZ(0);
  will-change: transform;

  @media (max-width: 768px) {
    padding: 2rem;
    margin-bottom: 2rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(255, 0, 51, 0.15);
    border-color: rgba(255, 0, 51, 0.2);
    background: rgba(255, 255, 255, 0.04);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%,
      rgba(255, 0, 51, 0.3) 25%,
      rgba(255, 0, 51, 0.3) 75%,
      transparent 100%
    );
    opacity: 0.4;
  }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2rem);
  margin-bottom: 2rem;
  color: #FF0033;
  text-shadow: 0 0 15px rgba(255, 0, 51, 0.3);
  position: relative;
  display: inline-block;
  letter-spacing: 1px;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #FF0033, transparent);
    transition: width 0.3s ease;
  }

  ${Section}:hover & {
    transform: translateX(10px);
    color: #FF3366;
  }
`;

export const Text = styled.p`
  font-size: clamp(1rem, 2vw, 1.1rem);
  line-height: 1.9;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.3px;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    line-height: 1.7;
  }

  &:last-child {
    margin-bottom: 0;
  }

  ${Section}:hover & {
    color: rgba(255, 255, 255, 1);
  }

  a {
    color: #FF0033;
    text-decoration: none;
    border-bottom: 1px solid #FF0033;
    transition: all 0.3s ease;
    position: relative;
    padding: 0 4px;
    cursor: pointer;

    &:hover {
      color: #FF3366;
      border-bottom-color: #FF3366;
      background: rgba(255, 51, 102, 0.1);
      border-radius: 4px;
    }

    &::before {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 1px;
      background: #FF3366;
      transform: scaleX(0);
      transition: transform 0.3s ease;
      transform-origin: right;
    }

    &:hover::before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

export const SaveButton = styled.button`
  background: linear-gradient(135deg, rgba(255, 0, 51, 0.15), rgba(255, 0, 51, 0.05));
  color: #FF0033;
  padding: 1.4rem 4rem;
  border: none;
  border-radius: 12px;
  font-size: 1.3rem;
  cursor: pointer;
  text-decoration: none;
  margin: 5rem auto;
  display: block;
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
`;