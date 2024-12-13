import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Tentacle } from './Tentacle';
import { NavButton } from './NavButton';

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(180deg, #2A1B3D 0%, #1A0F26 100%);

  @media (max-width: 768px) {
    height: 160px;
  }
`;

const OctopusBody = styled.div`
  width: 120px;
  height: 120px;
  background: #663399;
  border-radius: 50%;
  position: relative;
  animation: ${float} 4s ease-in-out infinite;
  box-shadow: 0 0 30px rgba(102, 51, 153, 0.3);

  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
  }
`;

const Eyes = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
  top: 30%;
`;

const Eye = styled.div`
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: #000;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const TentaclesContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OctopusNav = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', angle: -45 },
    { path: '/story', label: 'The Story', angle: 0 },
    { path: '/challenges', label: 'Challenges', angle: 45 }
  ];

  return (
    <HeaderContainer>
      <TentaclesContainer>
        {navItems.map((item, index) => (
          <Tentacle key={item.path} angle={item.angle}>
            <NavButton
              to={item.path}
              $isActive={location.pathname === item.path}
              aria-label={item.label}
            >
              {item.label}
            </NavButton>
          </Tentacle>
        ))}
      </TentaclesContainer>
      <OctopusBody>
        <Eyes>
          <Eye />
          <Eye />
        </Eyes>
      </OctopusBody>
    </HeaderContainer>
  );
};

export default OctopusNav;