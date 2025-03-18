import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

interface TextCharProps {
  delay: number;
}

const AnimatedChar = styled.span<TextCharProps>`
  display: inline-block;
  opacity: 0;
  animation: ${fadeInFromLeft} 0.5s ease forwards;
  animation-delay: ${(props: TextCharProps) => props.delay}s;
`;

interface FadeInTextProps {
  text: string;
  delayBetweenChars?: number;
  className?: string;
}

export const FadeInText: React.FC<FadeInTextProps> = ({
  text,
  delayBetweenChars = 0.05,
  className,
}) => {
  return (
    <div className={className}>
      {text.split('').map((char, index) => (
        <AnimatedChar key={index} delay={index * delayBetweenChars}>
          {char === ' ' ? '\u00A0' : char}
        </AnimatedChar>
      ))}
    </div>
  );
};

export default FadeInText;
