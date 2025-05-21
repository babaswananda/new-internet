'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

interface SpaceParticlesBackgroundProps {
  particleCount?: number;
  color?: 'blue' | 'purple' | 'cyan' | 'mixed';
  speed?: 'slow' | 'medium' | 'fast';
  depth?: boolean;
  interactive?: boolean;
  className?: string;
  tinyParticles?: boolean; // Add tiny white particles in the background
}

/**
 * SpaceParticlesBackground
 *
 * A premium floating space particles background that creates a cosmic, ethereal feel.
 * Particles float and drift with subtle animations, and can respond to mouse movement.
 */
const SpaceParticlesBackgroundComponent: React.FC<SpaceParticlesBackgroundProps> = ({
  particleCount = 100,
  color = 'mixed',
  speed = 'medium',
  depth = true,
  interactive = true,
  className = '',
  tinyParticles = true
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

  // Set up container dimensions
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

  // Handle mouse movement for interactive effects
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!interactive) return;

    const { left, top } = containerRef.current?.getBoundingClientRect() || { left: 0, top: 0 };
    const x = e.clientX - left;
    const y = e.clientY - top;

    setMousePosition({ x, y });
    setIsHovering(true);
  };

  // Get speed values
  const getSpeedValues = () => {
    switch (speed) {
      case 'slow': return { min: 20, max: 40 };
      case 'medium': return { min: 15, max: 30 };
      case 'fast': return { min: 10, max: 20 };
      default: return { min: 15, max: 30 };
    }
  };

  // Get color for a particle
  const getParticleColor = (index: number) => {
    if (color === 'blue') return 'bg-blue-500';
    if (color === 'purple') return 'bg-purple-500';
    if (color === 'cyan') return 'bg-cyan-500';

    // Mixed colors
    const colors = [
      'bg-blue-500', 'bg-purple-500', 'bg-cyan-500',
      'bg-indigo-500', 'bg-blue-400', 'bg-purple-400'
    ];
    return colors[index % colors.length];
  };

  // Get opacity based on z position (for depth effect)
  const getOpacityFromZ = (z: number) => {
    // z is between 0 and 1, where 1 is closest to viewer
    return 0.1 + z * 0.6; // opacity between 0.1 and 0.7
  };

  // Get size based on z position (for depth effect)
  const getSizeFromZ = (z: number) => {
    // z is between 0 and 1, where 1 is closest to viewer
    return 1 + z * 3; // size between 1 and 4
  };

  const { min: minDuration, max: maxDuration } = getSpeedValues();

  // Generate particles
  const particles = Array.from({ length: particleCount }).map((_, index) => {
    // Random positions
    const x = Math.random() * 100; // percentage of container width
    const y = Math.random() * 100; // percentage of container height
    const z = depth ? Math.random() : 0.5; // depth position (0 to 1)

    // Random movement parameters
    const duration = minDuration + Math.random() * (maxDuration - minDuration);
    const delay = Math.random() * 5;
    const size = getSizeFromZ(z);
    const opacity = getOpacityFromZ(z);

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

    return {
      id: index,
      x,
      y,
      z,
      size,
      opacity,
      duration,
      delay,
      translateX,
      translateY,
      color: getParticleColor(index)
    };
  });

  // Add star glow effect
  const starGlows = Array.from({ length: 5 }).map((_, index) => {
    const size = 100 + Math.random() * 400;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = 10 + Math.random() * 20;
    const delay = Math.random() * 5;

    return {
      id: index,
      size,
      x,
      y,
      duration,
      delay,
      color: getParticleColor(index)
    };
  });

  // Generate tiny white particles in the background
  const tinyWhiteParticles = tinyParticles ? Array.from({ length: 200 }).map((_, index) => {
    // Random positions
    const x = Math.random() * 100; // percentage of container width
    const y = Math.random() * 100; // percentage of container height
    const z = depth ? Math.random() * 0.5 : 0.2; // depth position (0 to 0.5) - keep them in background

    // Random movement parameters
    const duration = 30 + Math.random() * 60; // slower movement
    const delay = Math.random() * 10;
    const size = 0.5 + Math.random() * 1; // tiny size (0.5 to 1.5px)
    const opacity = 0.1 + Math.random() * 0.3; // subtle opacity

    return {
      id: index,
      x,
      y,
      z,
      size,
      opacity,
      duration,
      delay
    };
  }) : [];

  // Return a simple div during server-side rendering
  if (!isMounted) {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-black"></div>
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
      {/* Base dark background */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Star glows */}
      {starGlows.map((glow) => (
        <motion.div
          key={`glow-${glow.id}`}
          className={`absolute rounded-full blur-3xl ${glow.color.replace('bg-', 'bg-')}/5`}
          style={{
            width: glow.size,
            height: glow.size,
            left: `${glow.x}%`,
            top: `${glow.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: glow.duration,
            delay: glow.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Space particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${particle.color}`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            zIndex: Math.floor(particle.z * 10),
          }}
          animate={{
            x: particle.translateX,
            y: particle.translateY,
            opacity: [particle.opacity * 0.7, particle.opacity, particle.opacity * 0.7],
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

      {/* Tiny white particles in the background */}
      {tinyWhiteParticles.map((particle) => (
        <motion.div
          key={`tiny-${particle.id}`}
          className="absolute rounded-full bg-white"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            zIndex: Math.floor(particle.z * 10),
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [particle.opacity * 0.7, particle.opacity, particle.opacity * 0.7],
          }}
          transition={{
            y: {
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            },
            opacity: {
              duration: particle.duration / 2,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
              repeatType: "reverse"
            }
          }}
        />
      ))}

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
    </div>
  );
};

// Export a client-only version of the component
const SpaceParticlesBackground = dynamic(() => Promise.resolve(SpaceParticlesBackgroundComponent), {
  ssr: false
});

export default SpaceParticlesBackground;
