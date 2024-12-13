import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  color: #cccccc;
  font-family: 'Consolas', 'Courier New', monospace;
  padding: 0;
  z-index: 9999;
  display: ${props => props.$hide ? 'none' : 'block'};
  animation: ${props => props.$fadeOut ? fadeOut : 'none'} 1s forwards;
`;

export const PromptHeader = styled.div`
  background: linear-gradient(to bottom, #1a1a1a 0%, #0d0d0d 100%);
  color: #cccccc;
  padding: 6px 12px;
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #333333;
`;

export const WindowControls = styled.div`
  display: flex;
  gap: 8px;

  span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    
    &:nth-child(1) {
      background-color: #ff5f57;
    }
    &:nth-child(2) {
      background-color: #febc2e;
    }
    &:nth-child(3) {
      background-color: #28c840;
    }
  }
`;

export const Terminal = styled.div`
  padding: 1rem;
  height: calc(100vh - 33px);
  overflow-y: auto;
  font-size: 14px;
  line-height: 1.4;
  
  &::-webkit-scrollbar {
    width: 12px;
  }
  
  &::-webkit-scrollbar-track {
    background: #1a1a1a;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #333333;
    border-radius: 6px;
    border: 3px solid #1a1a1a;
  }
`;

export const Line = styled.div`
  margin: 0.25rem 0;
  color: ${props => props.$color || '#cccccc'};
  opacity: 0;
  animation: ${fadeIn} 0.1s forwards;
  animation-delay: ${props => props.$delay}s;
  white-space: pre-wrap;
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 14px;
  background-color: #cccccc;
  margin-left: 2px;
  animation: ${blink} 1s infinite;
  vertical-align: middle;
`;

export const AccessText = styled.div`
  color: ${props => props.$granted ? '#00ff00' : '#ff0000'};
  font-size: 2rem;
  text-align: center;
  margin-top: 4rem;
  font-weight: bold;
  opacity: 0;
  animation: ${fadeIn} 0.5s forwards;
  animation-delay: 0.2s;
`;