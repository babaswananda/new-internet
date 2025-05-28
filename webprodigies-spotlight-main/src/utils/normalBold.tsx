import React from 'react';

interface HeaderTextProps {
  children: string;
  className?: string;
}

export const HeaderText: React.FC<HeaderTextProps> = ({ children, className = '' }) => {
  const words = children.split(' ');
  
  return (
    <span className={className}>
      {words.map((word, index) => (
        <span key={index}>
          <span className={index % 2 === 0 ? 'font-normal' : 'font-bold'}>
            {word}
          </span>
          {index < words.length - 1 && ' '}
        </span>
      ))}
    </span>
  );
};

export const TLDName: React.FC<HeaderTextProps> = ({ children, className = '' }) => {
  return (
    <span className={`font-mono ${className}`}>
      {children}
    </span>
  );
};
