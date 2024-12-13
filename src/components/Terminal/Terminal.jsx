import React, { useState, useEffect } from 'react';
import TypedLine from './TypedLine';
import { Container, PromptHeader, WindowControls, Terminal as TerminalWindow, AccessText } from './styles';
import { TERMINAL_LINES } from './constants';

const Terminal = ({ onComplete, showAccess, fadeOut, hide }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [showAccessText, setShowAccessText] = useState(false);

  const handleLineComplete = () => {
    if (currentLine < TERMINAL_LINES.length - 1) {
      setCurrentLine(prev => prev + 1);
    } else {
      setTimeout(() => {
        setShowAccessText(true);
        onComplete();
      }, 500); // Reduced delay showing ACCESS GRANTED from 1000ms to 500ms
    }
  };

  return (
    <Container $fadeOut={fadeOut} $hide={hide}>
      <PromptHeader>
        <span>Administrator: Windows PowerShell</span>
        <WindowControls>
          <span></span>
          <span></span>
          <span></span>
        </WindowControls>
      </PromptHeader>
      <TerminalWindow>
        {TERMINAL_LINES.slice(0, currentLine + 1).map((line, index) => (
          <TypedLine
            key={index}
            text={line.text}
            color={line.color}
            delay={index * 0.05} // Reduced delay between lines from 0.1s to 0.05s
            onComplete={index === currentLine ? handleLineComplete : undefined}
          />
        ))}
        {showAccess && showAccessText && (
          <AccessText $granted={true}>
            ACCESS GRANTED
          </AccessText>
        )}
      </TerminalWindow>
    </Container>
  );
};

export default Terminal;