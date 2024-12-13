import styled from 'styled-components';

export const InputGroup = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
`;

export const Label = styled.label`
  position: absolute;
  left: 1rem;
  top: -0.5rem;
  background: #ffffff;
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
  background: #ffffff;
  border: 2px solid rgba(255, 51, 102, 0.3);
  border-radius: 8px;
  color: #333;
  font-family: 'Courier New', monospace;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #FF3366;
    box-shadow: 0 0 15px rgba(255, 51, 102, 0.2);
  }

  &::placeholder {
    color: #999;
    font-size: 0.9rem;
  }
`;