import React from 'react';

/**
 * Utility function for HEADERS - normalBOLD styling without italics
 * Alternates between normal and bold words for headers
 * Preserves emojis with proper z-index and prevents splitting
 */
export const normalBoldHeader = (text: string): React.ReactNode => {
  // Enhanced emoji regex to catch all emoji variants
  const emojiRegex = /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA70}-\u{1FAFF}]/gu;

  // Split text while preserving emojis
  const parts = text.split(/(\s+)/).filter(part => part.length > 0);
  let wordIndex = 0;

  return (
    <span className="relative z-20">
      {parts.map((part, index) => {
        // If it's whitespace, just return it
        if (/^\s+$/.test(part)) {
          return <span key={index}>{part}</span>;
        }

        // Check if part contains emoji
        const hasEmoji = emojiRegex.test(part);

        // If it has emoji, don't apply font styling to preserve emoji rendering
        if (hasEmoji) {
          return (
            <span key={index} className="relative z-30 inline-block">
              {part}
            </span>
          );
        }

        // Apply alternating font weight to non-emoji words
        const fontClass = wordIndex % 2 === 0 ? 'font-normal' : 'font-bold';
        wordIndex++;

        return (
          <span key={index} className={fontClass}>
            {part}
          </span>
        );
      })}
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
