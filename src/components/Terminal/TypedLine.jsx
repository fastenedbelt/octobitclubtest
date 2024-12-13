import React, { useState, useEffect, useCallback } from 'react';
import { Line, Cursor } from './styles';

const TypedLine = ({ text, delay, color, onComplete }) => {
  const [content, setContent] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const typeNextChar = useCallback(() => {
    if (content.length < text.length) {
      setContent(text.slice(0, content.length + 1));
    } else {
      setIsTyping(false);
      if (onComplete) {
        setTimeout(onComplete, 100); // Reduced delay after line completes from 300ms to 100ms
      }
    }
  }, [content, text, onComplete]);

  useEffect(() => {
    if (!isTyping) return;

    const timer = setTimeout(typeNextChar, 5); // Reduced typing delay from 15ms to 5ms
    return () => clearTimeout(timer);
  }, [content, isTyping, typeNextChar]);

  return (
    <Line $color={color} $delay={delay}>
      {content}
      {isTyping && <Cursor />}
    </Line>
  );
};

export default TypedLine;