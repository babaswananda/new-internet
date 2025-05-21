'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionDividerProps {
  variant?: 'wave' | 'angle' | 'curve' | 'dots' | 'gradient';
  color?: string;
  height?: number;
  flip?: boolean;
}

/**
 * SectionDivider
 * 
 * A component that creates visual separation between sections.
 * Comes in multiple variants for different visual styles.
 */
const SectionDivider: React.FC<SectionDividerProps> = ({
  variant = 'wave',
  color = 'from-blue-500 to-purple-500',
  height = 100,
  flip = false
}) => {
  // Wave divider
  if (variant === 'wave') {
    return (
      <div className="relative w-full overflow-hidden" style={{ height: `${height}px` }}>
        <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-20`}></div>
        <svg
          className={`absolute w-full h-full ${flip ? 'rotate-180' : ''}`}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="fill-black"
          ></path>
        </svg>
      </div>
    );
  }

  // Angle divider
  if (variant === 'angle') {
    return (
      <div className="relative w-full overflow-hidden" style={{ height: `${height}px` }}>
        <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-20`}></div>
        <svg
          className={`absolute w-full h-full ${flip ? 'rotate-180' : ''}`}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="fill-black"
          ></path>
        </svg>
      </div>
    );
  }

  // Curve divider
  if (variant === 'curve') {
    return (
      <div className="relative w-full overflow-hidden" style={{ height: `${height}px` }}>
        <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-20`}></div>
        <svg
          className={`absolute w-full h-full ${flip ? 'rotate-180' : ''}`}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V0H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            className="fill-black"
          ></path>
        </svg>
      </div>
    );
  }

  // Dots divider
  if (variant === 'dots') {
    return (
      <div className="relative w-full overflow-hidden py-8" style={{ height: `${height}px` }}>
        <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-10`}></div>
        <div className="flex justify-center items-center h-full">
          <motion.div 
            className="flex space-x-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`w-3 h-3 rounded-full bg-gradient-to-r ${color}`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    );
  }

  // Gradient divider
  if (variant === 'gradient') {
    return (
      <div 
        className="w-full relative overflow-hidden" 
        style={{ height: `${height}px` }}
      >
        <div className={`absolute inset-0 bg-gradient-to-${flip ? 't' : 'b'} from-black via-blue-900/20 to-black`}></div>
        <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-20">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="h-full bg-white/5"
              initial={{ height: "0%" }}
              whileInView={{ height: `${Math.random() * 100}%` }}
              transition={{ 
                duration: 1.5, 
                delay: i * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default SectionDivider;
