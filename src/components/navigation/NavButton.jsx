import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';

const wiggle = keyframes`
  0%, 100% { transform: rotate(0deg) scale(1); }
  25% { transform: rotate(3deg) scale(1.1); }
  75% { transform: rotate(-3deg) scale(1.1); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 10px rgba(177, 156, 217, 0); }
  50% { box-shadow: 0 0 20px rgba(177, 156, 217, 0.2); }
`;

export const NavButton = styled(Link)`
  position: absolute;
  right: -20px;
  top: -20px;
  width: 40px;
  height: 40px;
  background: ${props => props.$isActive ? '#B19CD9' : '#9966CC'};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  font-size: 12px;
  font-weight: bold;
  transition: all 300ms ease-in-out;
  transform-origin: center;
  
  &:hover {
    animation: ${wiggle} 0.5s ease-in-out, ${glow} 1s ease-in-out infinite;
    background: #B19CD9;
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;