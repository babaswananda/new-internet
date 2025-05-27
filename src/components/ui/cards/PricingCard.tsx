'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlowingCard } from '@/components/ui/glowing-card';
import { SubmitButton } from '@/components/ui/forms';
import { cardHover } from '@/utils/animations';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  onButtonClick?: () => void;
  highlighted?: boolean;
  className?: string;
  badge?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  buttonText,
  onButtonClick,
  highlighted = false,
  className = '',
  badge,
}) => {
  return (
    <motion.div
      className={`relative ${className}`}
      {...cardHover}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            {badge}
          </span>
        </div>
      )}
      
      <GlowingCard 
        className={`
          bg-black/30 backdrop-blur-sm p-8 rounded-lg border h-full flex flex-col
          ${highlighted 
            ? 'border-purple-500/50 bg-purple-500/5' 
            : 'border-white/10'
          }
        `}
      >
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <div className="text-4xl font-bold mb-2">
            <span className={highlighted ? 'text-purple-400' : 'text-blue-400'}>
              {price}
            </span>
          </div>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
        
        <div className="flex-1 mb-6">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 text-green-400 mt-1">✓</span>
                <span className="text-gray-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <SubmitButton
          type="button"
          onClick={onButtonClick}
          variant={highlighted ? 'primary' : 'outline'}
          className="w-full"
        >
          {buttonText}
        </SubmitButton>
      </GlowingCard>
    </motion.div>
  );
};

export default PricingCard;
