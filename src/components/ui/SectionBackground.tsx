'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionBackgroundProps {
  variant?: 'gradient' | 'particles' | 'grid' | 'waves' | 'glow';
  color?: string;
  intensity?: 'light' | 'medium' | 'strong';
  className?: string;
}

/**
 * SectionBackground
 *
 * A component that adds subtle background effects to sections.
 * These are not dividers but integrated background effects.
 */
const SectionBackground: React.FC<SectionBackgroundProps> = ({
  variant = 'gradient',
  color = 'blue',
  intensity = 'medium',
  className = ''
}) => {
  // Set opacity based on intensity
  const getOpacity = () => {
    switch (intensity) {
      case 'light': return 'opacity-10';
      case 'medium': return 'opacity-20';
      case 'strong': return 'opacity-30';
      default: return 'opacity-20';
    }
  };

  // Get color classes
  const getColorClass = () => {
    switch (color) {
      case 'blue': return 'from-blue-500/20 to-blue-900/5';
      case 'purple': return 'from-purple-500/20 to-purple-900/5';
      case 'pink': return 'from-pink-500/20 to-pink-900/5';
      case 'red': return 'from-red-500/20 to-red-900/5';
      case 'orange': return 'from-orange-500/20 to-orange-900/5';
      case 'green': return 'from-green-500/20 to-green-900/5';
      case 'teal': return 'from-teal-500/20 to-teal-900/5';
      case 'cyan': return 'from-cyan-500/20 to-cyan-900/5';
      default: return 'from-blue-500/20 to-blue-900/5';
    }
  };

  // Gradient background
  if (variant === 'gradient') {
    return (
      <div className={`absolute inset-0 -z-20 ${className}`}>
        <div className={`absolute inset-0 bg-gradient-radial ${getColorClass()} ${getOpacity()}`}></div>
      </div>
    );
  }

  // Particles background
  if (variant === 'particles') {
    return (
      <div className={`absolute inset-0 -z-20 overflow-hidden ${className}`}>
        <div className={`absolute inset-0 bg-black ${getOpacity()}`}></div>
        {Array.from({ length: 20 }).map((_, i) => {
          // Pre-calculate random values to avoid re-renders
          const topPos = Math.floor(Math.random() * 100);
          const leftPos = Math.floor(Math.random() * 100);
          const yOffset = Math.floor(Math.random() * -100 - 50);
          const xOffset = Math.floor((Math.random() - 0.5) * 50);
          const scale = Math.floor(Math.random() * 2 + 1);
          const duration = Math.floor(Math.random() * 5 + 5);
          const delay = Math.floor(Math.random() * 5);

          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/50"
              style={{
                top: `${topPos}%`,
                left: `${leftPos}%`,
              }}
              animate={{
                y: [0, yOffset],
                x: [0, xOffset],
                opacity: [0, 0.8, 0],
                scale: [0, scale, 0],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
              }}
            />
          );
        })}
      </div>
    );
  }

  // Grid background
  if (variant === 'grid') {
    return (
      <div className={`absolute inset-0 -z-20 ${className}`}>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center bg-repeat opacity-10"></div>
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent ${getOpacity()}`}></div>
      </div>
    );
  }

  // Waves background
  if (variant === 'waves') {
    return (
      <div className={`absolute inset-0 -z-20 overflow-hidden ${className}`}>
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent ${getOpacity()}`}></div>
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[50%] w-[200%] bg-white/5 rounded-[100%]"
            style={{
              bottom: `${-20 - i * 5}%`,
              left: '-50%',
            }}
            animate={{
              translateX: [0, 50, 0],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  }

  // Glow background
  if (variant === 'glow') {
    return (
      <div className={`absolute inset-0 -z-20 ${className}`}>
        <motion.div
          className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px] ${getOpacity()}`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    );
  }

  return null;
};

export default SectionBackground;
