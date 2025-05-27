'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlowingCard } from '@/components/ui/glowing-card';
import { cardHover } from '@/utils/animations';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  features?: string[];
  className?: string;
  interactive?: boolean;
  onClick?: () => void;
  borderColor?: string;
  gradient?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  features = [],
  className = '',
  interactive = false,
  onClick,
  borderColor = 'border-white/10',
  gradient,
}) => {
  const Component = interactive ? motion.div : 'div';
  const motionProps = interactive ? cardHover : {};

  return (
    <Component
      className={`cursor-pointer ${className}`}
      onClick={onClick}
      {...motionProps}
    >
      <GlowingCard className={`bg-black/30 backdrop-blur-sm p-6 rounded-lg border ${borderColor} h-full`}>
        <div className="text-center mb-4">
          <div className="text-4xl mb-3">{icon}</div>
          <h3 className={`text-xl font-bold mb-2 ${gradient ? `bg-clip-text text-transparent bg-gradient-to-r ${gradient}` : 'text-white'}`}>
            {title}
          </h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
        
        {features.length > 0 && (
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <span className="mr-2 text-green-400 mt-1 text-xs">•</span>
                <span className="text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        )}
      </GlowingCard>
    </Component>
  );
};

export default FeatureCard;
