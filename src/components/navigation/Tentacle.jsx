import React from 'react';
import styled, { keyframes } from 'styled-components';

const wave = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(2deg);
  }
  75% {
    transform: rotate(-2deg);
  }
`;

const TentacleWrapper = styled.div`
  position: absolute;
  width: 160px;
  height: 4px;
  transform-origin: center left;
  transform: rotate(${props => props.$angle}deg);
  animation: ${wave} 4s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
`;

const TentaclePath = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #663399 0%, #9966CC 100%);
  border-radius: 4px;
`;

export const Tentacle = ({ children, angle }) => {
  const delay = (angle + 45) / 45; // Creates staggered animation

  return (
    <TentacleWrapper $angle={angle} $delay={delay}>
      <TentaclePath />
      {children}
    </TentacleWrapper>
  );
};