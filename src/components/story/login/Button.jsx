import styled, { keyframes } from 'styled-components';

const scanline = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

export const Button = styled.button`
  background: linear-gradient(135deg, #FF0033 0%, #FF3366 100%);
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(255, 0, 51, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 0, 51, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: ${scanline} 2s linear infinite;
  }
`;