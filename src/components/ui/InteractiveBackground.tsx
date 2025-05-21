'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

interface InteractiveBackgroundProps {
  className?: string;
  intensity?: 'light' | 'medium' | 'strong';
  color?: 'blue' | 'purple' | 'cyan' | 'mixed';
  interactive?: boolean;
}

/**
 * InteractiveBackground
 *
 * A high-performance, interactive background with particles that respond to mouse movement.
 * This creates a premium, modern feel for hero sections.
 */
const InteractiveBackgroundComponent: React.FC<InteractiveBackgroundProps> = ({
  className = '',
  intensity = 'medium',
  color = 'mixed',
  interactive = true
}) => {
  // Only run on client side
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Set up container dimensions and mouse tracking
  useEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!interactive) return;

    const { left, top } = containerRef.current?.getBoundingClientRect() || { left: 0, top: 0 };
    const x = e.clientX - left;
    const y = e.clientY - top;

    setMousePosition({ x, y });
    setIsHovering(true);
  };

  // Get intensity values
  const getIntensityValues = () => {
    switch (intensity) {
      case 'light': return { particleCount: 30, opacity: 0.3, scale: 0.8 };
      case 'medium': return { particleCount: 50, opacity: 0.5, scale: 1 };
      case 'strong': return { particleCount: 80, opacity: 0.7, scale: 1.2 };
      default: return { particleCount: 50, opacity: 0.5, scale: 1 };
    }
  };

  // Get color values
  const getColorClass = (index: number) => {
    if (color === 'blue') return 'bg-blue-500';
    if (color === 'purple') return 'bg-purple-500';
    if (color === 'cyan') return 'bg-cyan-500';

    // Mixed colors - distribute evenly
    const colors = ['bg-blue-500', 'bg-purple-500', 'bg-cyan-500', 'bg-indigo-500'];
    return colors[index % colors.length];
  };

  const { particleCount, opacity, scale } = getIntensityValues();

  // Generate particles
  const particles = Array.from({ length: particleCount }).map((_, index) => {
    // Distribute particles evenly
    const baseX = (index % 10) * 10;
    const baseY = Math.floor(index / 10) * 10;

    // Add some randomness
    const randomX = Math.random() * 10 - 5;
    const randomY = Math.random() * 10 - 5;

    const x = baseX + randomX;
    const y = baseY + randomY;

    // Calculate distance from mouse for interactive effect
    const dx = mousePosition.x - (dimensions.width * x / 100);
    const dy = mousePosition.y - (dimensions.height * y / 100);
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = Math.sqrt(dimensions.width * dimensions.width + dimensions.height * dimensions.height) / 2;

    // Normalize distance (0-1)
    const normalizedDistance = Math.min(distance / maxDistance, 1);

    // Calculate repulsion effect (stronger when closer)
    const repulsionStrength = isHovering && interactive ? (1 - normalizedDistance) * 30 : 0;
    const angle = Math.atan2(dy, dx);

    const translateX = repulsionStrength * Math.cos(angle);
    const translateY = repulsionStrength * Math.sin(angle);

    // Size variation
    const size = Math.random() * 4 + 2;

    return {
      id: index,
      x: `${x}%`,
      y: `${y}%`,
      size: size * scale,
      translateX,
      translateY,
      colorClass: getColorClass(index),
      delay: index * 0.01,
      duration: Math.random() * 3 + 2
    };
  });

  // Return a simple div during server-side rendering
  if (!isMounted) {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black"></div>
      </div>
    );
  }

  // Client-side rendering with all interactive elements
  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black"></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>

      {/* Glow effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Interactive particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${particle.colorClass}`}
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: opacity,
          }}
          animate={{
            x: particle.translateX,
            y: particle.translateY,
            opacity: [opacity * 0.7, opacity, opacity * 0.7],
            scale: [1, 1.2, 1],
          }}
          transition={{
            x: { duration: 0.3, ease: "easeOut" },
            y: { duration: 0.3, ease: "easeOut" },
            opacity: {
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            },
            scale: {
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }
          }}
        />
      ))}
    </div>
  );
};

// Export a client-only version of the component
const InteractiveBackground = dynamic(() => Promise.resolve(InteractiveBackgroundComponent), {
  ssr: false
});

export default InteractiveBackground;
