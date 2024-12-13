import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const glitch = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`;

const matrix = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
`;

export const Container = styled.div`
  max-width: 450px;
  margin: 120px auto 0;
  padding: 3rem;
  background: rgba(20, 20, 20, 0.95);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 -5px 20px rgba(255, 0, 51, 0.3),
              0 15px 50px rgba(255, 0, 51, 0.2);
  animation: ${fadeIn} 0.5s ease-out;
  border: 1px solid rgba(255, 0, 51, 0.3);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent 48%, rgba(255, 0, 51, 0.2) 50%, transparent 52%);
    background-size: 200% 200%;
    animation: ${matrix} 15s linear infinite;
    opacity: 0.3;
    pointer-events: none;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  background: linear-gradient(135deg, #FF0033, #FF3366);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin-bottom: 0.5rem;
  font-family: 'Courier New', monospace;
  font-weight: 900;
  letter-spacing: 1px;
  position: relative;
  
  &:hover {
    animation: ${glitch} 0.2s ease-in-out infinite;
  }
`;

export const Subtitle = styled.p`
  color: #666;
  text-align: center;
  margin-bottom: 2.5rem;
  font-family: 'Courier New', monospace;
  font-size: 1rem;
  letter-spacing: 1px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background: linear-gradient(90deg, #FF0033, #FF3366);
    opacity: 0.5;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputGroup = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
`;

export const Label = styled.label`
  position: absolute;
  left: 1rem;
  top: -0.5rem;
  background: #141414;
  padding: 0 0.5rem;
  color: #FF3366;
  font-size: 0.8rem;
  font-family: 'Courier New', monospace;
  z-index: 1;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: #1a1a1a;
  border: 2px solid rgba(255, 51, 102, 0.3);
  border-radius: 8px;
  color: #fff;
  font-family: 'Courier New', monospace;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #FF3366;
    box-shadow: 0 0 15px rgba(255, 51, 102, 0.2);
  }

  &::placeholder {
    color: #666;
    font-size: 0.9rem;
  }
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
`;

export const SecurityNote = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  border: 1px solid rgba(255, 51, 102, 0.3);
  border-radius: 8px;
  background: rgba(255, 0, 51, 0.1);
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  color: #FF3366;
  line-height: 1.5;
  position: relative;
  overflow: hidden;

  &::before {
    content: '🔒';
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.2;
    font-size: 1.5rem;
  }
`;