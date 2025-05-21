'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface EnhancedSectionBackgroundProps {
  variant?: 'gradient' | 'particles' | 'grid' | 'waves' | 'glow' | 'noise' | 'circuit' | 'dots';
  color?: string;
  intensity?: 'light' | 'medium' | 'strong';
  className?: string;
  interactive?: boolean;
  animated?: boolean;
}

/**
 * EnhancedSectionBackground
 *
 * A premium background component for sections with advanced visual effects.
 * Provides multiple variants and interactive options.
 */
const EnhancedSectionBackground: React.FC<EnhancedSectionBackgroundProps> = ({
  variant = 'gradient',
  color = 'blue',
  intensity = 'medium',
  className = '',
  interactive = true,
  animated = true
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Set up container dimensions
  useEffect(() => {
    if (!ref.current) return;
    
    const updateDimensions = () => {
      if (ref.current) {
        const { width, height } = ref.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  
  // Start animations when in view
  useEffect(() => {
    if (isInView && animated) {
      controls.start('visible');
    }
  }, [isInView, controls, animated]);
  
  // Handle mouse movement for interactive effects
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!interactive) return;
    
    const { left, top } = ref.current?.getBoundingClientRect() || { left: 0, top: 0 };
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    setMousePosition({ x, y });
  };
  
  // Get intensity values
  const getIntensityValues = () => {
    switch (intensity) {
      case 'light': return { opacity: 0.1, scale: 0.8, particleCount: 20 };
      case 'medium': return { opacity: 0.2, scale: 1, particleCount: 40 };
      case 'strong': return { opacity: 0.3, scale: 1.2, particleCount: 60 };
      default: return { opacity: 0.2, scale: 1, particleCount: 40 };
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
  
  const getGlowColor = () => {
    switch (color) {
      case 'blue': return 'bg-blue-500/10';
      case 'purple': return 'bg-purple-500/10';
      case 'pink': return 'bg-pink-500/10';
      case 'red': return 'bg-red-500/10';
      case 'orange': return 'bg-orange-500/10';
      case 'green': return 'bg-green-500/10';
      case 'teal': return 'bg-teal-500/10';
      case 'cyan': return 'bg-cyan-500/10';
      default: return 'bg-blue-500/10';
    }
  };
  
  const { opacity, scale, particleCount } = getIntensityValues();
  
  // Gradient background
  if (variant === 'gradient') {
    return (
      <div 
        ref={ref}
        className={`absolute inset-0 -z-20 ${className}`}
        onMouseMove={handleMouseMove}
      >
        <motion.div 
          className={`absolute inset-0 bg-gradient-radial ${getColorClass()}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: opacity }}
          transition={{ duration: 1 }}
        />
        
        {/* Interactive gradient that follows mouse */}
        {interactive && (
          <motion.div
            className={`absolute w-[500px] h-[500px] rounded-full ${getGlowColor()} blur-[100px]`}
            style={{
              left: mousePosition.x - 250,
              top: mousePosition.y - 250,
              opacity: opacity * 1.5
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: opacity * 1.5 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </div>
    );
  }
  
  // Particles background
  if (variant === 'particles') {
    // Generate particles
    const particles = Array.from({ length: particleCount }).map((_, index) => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 3 + 1;
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;
      
      return { id: index, x, y, size, duration, delay };
    });
    
    return (
      <div 
        ref={ref}
        className={`absolute inset-0 -z-20 overflow-hidden ${className}`}
        onMouseMove={handleMouseMove}
      >
        <div className={`absolute inset-0 bg-black opacity-${Math.round(opacity * 100)}`} />
        
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={controls}
            variants={{
              visible: {
                opacity: [0, 0.7, 0],
                y: [0, -30],
                scale: [0, 1, 0],
                transition: {
                  duration: particle.duration,
                  delay: particle.delay,
                  repeat: Infinity,
                  repeatType: 'loop'
                }
              }
            }}
          />
        ))}
      </div>
    );
  }
  
  // Grid background
  if (variant === 'grid') {
    return (
      <div 
        ref={ref}
        className={`absolute inset-0 -z-20 ${className}`}
        onMouseMove={handleMouseMove}
      >
        <motion.div 
          className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center bg-repeat"
          initial={{ opacity: 0 }}
          animate={{ opacity: opacity }}
          transition={{ duration: 1 }}
        />
        
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-b from-transparent via-${color}-900/10 to-transparent`}
          initial={{ opacity: 0 }}
          animate={{ opacity: opacity }}
          transition={{ duration: 1 }}
        />
        
        {/* Interactive highlight that follows mouse */}
        {interactive && (
          <motion.div
            className={`absolute w-64 h-64 rounded-full ${getGlowColor()} blur-[50px]`}
            style={{
              left: mousePosition.x - 128,
              top: mousePosition.y - 128,
              opacity: opacity
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: opacity }}
            transition={{ duration: 0.3 }}
          />
        )}
      </div>
    );
  }
  
  // Waves background
  if (variant === 'waves') {
    return (
      <div 
        ref={ref}
        className={`absolute inset-0 -z-20 overflow-hidden ${className}`}
        onMouseMove={handleMouseMove}
      >
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-b from-transparent via-${color}-900/10 to-transparent`}
          initial={{ opacity: 0 }}
          animate={{ opacity: opacity }}
          transition={{ duration: 1 }}
        />
        
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[50%] w-[200%] bg-white/5 rounded-[100%]"
            style={{
              bottom: `${-20 - i * 5}%`,
              left: '-50%',
            }}
            initial={{ translateX: -50 }}
            animate={controls}
            variants={{
              visible: {
                translateX: [0, 50, 0],
                transition: {
                  duration: 20 + i * 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }
            }}
          />
        ))}
      </div>
    );
  }
  
  // Glow background
  if (variant === 'glow') {
    return (
      <div 
        ref={ref}
        className={`absolute inset-0 -z-20 ${className}`}
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full ${getGlowColor()} blur-[100px]`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls}
          variants={{
            visible: {
              opacity: opacity,
              scale: [1, 1.2, 1],
              transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }
          }}
        />
        
        {/* Second glow for more depth */}
        <motion.div
          className={`absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full ${getGlowColor()} blur-[80px]`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls}
          variants={{
            visible: {
              opacity: opacity * 0.7,
              scale: [1.2, 1, 1.2],
              transition: {
                duration: 10,
                delay: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }
          }}
        />
      </div>
    );
  }
  
  // Noise background (static-like effect)
  if (variant === 'noise') {
    return (
      <div 
        ref={ref}
        className={`absolute inset-0 -z-20 ${className}`}
        onMouseMove={handleMouseMove}
      >
        <div className="absolute inset-0 bg-noise opacity-10"></div>
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${getColorClass()}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: opacity / 2 }}
          transition={{ duration: 1 }}
        />
      </div>
    );
  }
  
  // Circuit background
  if (variant === 'circuit') {
    return (
      <div 
        ref={ref}
        className={`absolute inset-0 -z-20 ${className}`}
        onMouseMove={handleMouseMove}
      >
        <motion.div 
          className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-center bg-repeat"
          initial={{ opacity: 0 }}
          animate={{ opacity: opacity }}
          transition={{ duration: 1 }}
        />
        
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-b from-transparent via-${color}-900/10 to-transparent`}
          initial={{ opacity: 0 }}
          animate={{ opacity: opacity }}
          transition={{ duration: 1 }}
        />
      </div>
    );
  }
  
  // Dots background
  if (variant === 'dots') {
    return (
      <div 
        ref={ref}
        className={`absolute inset-0 -z-20 ${className}`}
        onMouseMove={handleMouseMove}
      >
        <motion.div 
          className="absolute inset-0 bg-[url('/dots-pattern.svg')] bg-center bg-repeat"
          initial={{ opacity: 0 }}
          animate={{ opacity: opacity }}
          transition={{ duration: 1 }}
        />
        
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-b from-transparent via-${color}-900/10 to-transparent`}
          initial={{ opacity: 0 }}
          animate={{ opacity: opacity }}
          transition={{ duration: 1 }}
        />
      </div>
    );
  }
  
  return null;
};

export default EnhancedSectionBackground;
