import React from 'react';

/**
 * Utility function for HEADERS - normalBOLD styling without italics
 * Alternates between normal and bold words for headers
 */
export const normalBoldHeader = (text: string): React.ReactNode => {
  const words = text.split(' ');

  return (
    <span>
      {words.map((word, index) => (
        <span key={index} className={index % 2 === 0 ? 'font-normal' : 'font-bold'}>
          {word}
          {index < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  );
};

/**
 * Utility function to apply italicized normalBOLD styling to product/TLD names
 * Alternates between normal and bold words in italic style
 */
export const normalBoldItalic = (text: string): React.ReactNode => {
  const words = text.split(' ');

  return (
    <span className="italic">
      {words.map((word, index) => (
        <span key={index} className={index % 2 === 0 ? 'font-normal' : 'font-bold'}>
          {word}
          {index < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  );
};

/**
 * Utility component for HEADERS with normalBOLD styling
 */
export const HeaderText: React.FC<{ children: string; className?: string }> = ({
  children,
  className = ''
}) => {
  return (
    <span className={className}>
      {normalBoldHeader(children)}
    </span>
  );
};

/**
 * Utility function for product names that should be styled with italicized normalBOLD
 */
export const ProductName: React.FC<{ children: string; className?: string }> = ({
  children,
  className = ''
}) => {
  return (
    <span className={`italic ${className}`}>
      {normalBoldItalic(children)}
    </span>
  );
};

/**
 * Utility function for TLD names that should be styled with italicized normalBOLD
 */
export const TLDName: React.FC<{ children: string; className?: string }> = ({
  children,
  className = ''
}) => {
  return (
    <span className={`italic ${className}`}>
      {normalBoldItalic(children)}
    </span>
  );
};

/**
 * List of our products and TLDs that should use normalBOLD styling
 */
export const UNIFIED_AI_PRODUCTS = [
  'Unified AI',
  'Agent Chat',
  'Alpha Router',
  'ION',
  'AI Directory',
  'AI Marketplace',
  'Vibe Coder',
  'Seed GPT',
  'Super Agents',
  'AI Data Centers',
  'Crypto Bounties',
  'AI Phone',
  'AI Pods',
  'AI Glasses',
  'AI Email'
];

export const UNIFIED_AI_TLDS = [
  '.commandline',
  '.agentchat',
  '.alpharouter',
  '.ion',
  '.aidirectory',
  '.aimarketplace',
  '.vibecoder',
  '.seedgpt',
  '.superagents',
  '.aidatacenters',
  '.cryptobounties',
  '.aiphone',
  '.aipods',
  '.aiglasses',
  '.aiemail',
  '.textme',
  '.videochat',
  '.webinar'
];
