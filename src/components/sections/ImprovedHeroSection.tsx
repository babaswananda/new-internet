'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import InteractiveBackground from '../ui/InteractiveBackground';

/**
 * ImprovedHeroSection
 *
 * A premium, interactive hero section with modern design elements,
 * responsive layout, and engaging animations.
 */
const ImprovedHeroSectionComponent: React.FC = () => {
  // Client-side only state
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animation controls
  const controls = useAnimation();
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  // Track mouse position for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Start animations on mount
  useEffect(() => {
    controls.start("visible");

    // Auto-rotate through features
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [controls]);

  // Key features to highlight
  const features = [
    {
      title: "A2A Protocol",
      description: "Agent-to-Agent communication protocol for seamless AI collaboration.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Model Context Protocol",
      description: "Seamlessly connect and operate across different AI model contexts.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Operator Economy",
      description: "Participate in the new economy of AI operators and agents.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Vibe Coding",
      description: "Create generative art and vibe coding projects with AI-powered tools.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "from-green-500 to-teal-500"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      }
    },
  };

  // Calculate parallax effect based on mouse position
  const getParallaxStyle = (depth: number = 1) => {
    const maxShift = 20 * depth;
    const x = (mousePosition.x - 0.5) * maxShift;
    const y = (mousePosition.y - 0.5) * maxShift;

    return {
      transform: `translate(${x}px, ${y}px)`,
    };
  };

  // Return a simpler version during server-side rendering
  if (!isMounted) {
    return (
      <section
        id="hero-section"
        className="relative min-h-screen w-full overflow-hidden flex items-center"
      >
        <div className="absolute inset-0 z-0 bg-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Static content will be replaced on client */}
          </div>
        </div>
      </section>
    );
  }

  // Full interactive version for client-side
  return (
    <section
      id="hero-section"
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center"
    >
      {/* Interactive background */}
      <div className="absolute inset-0 z-0">
        <InteractiveBackground intensity="medium" color="mixed" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-6xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-6"
            style={getParallaxStyle(0.5)}
          >
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 p-[1px] rounded-full">
              <div className="bg-black/80 backdrop-blur-sm px-4 py-1 rounded-full">
                <span className="text-white text-sm font-medium tracking-wider uppercase">Protocol-Grade Launchpad</span>
              </div>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            variants={itemVariants}
            className="mb-6"
            style={getParallaxStyle(0.8)}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-wider text-white">
              UNIFIED AI I/O
              <span className="block text-2xl md:text-3xl mt-4 font-light text-blue-100">
                The New Map of the New Internet
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-blue-200 mb-12 max-w-2xl"
            style={getParallaxStyle(1)}
          >
            unified ai... think of us as your dashboard to unify all things AI
          </motion.p>

          {/* Feature highlight */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
            style={getParallaxStyle(1.2)}
          >
            <div className="relative h-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className={`inline-block bg-gradient-to-r ${features[activeFeature].color} p-[1px] rounded-lg`}>
                    <div className="bg-black/60 backdrop-blur-sm px-6 py-4 rounded-lg flex items-center">
                      <div className="mr-4 text-white">
                        {features[activeFeature].icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{features[activeFeature].title}</h3>
                        <p className="text-blue-200">{features[activeFeature].description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Feature indicators */}
            <div className="flex space-x-2 mt-4 justify-center md:justify-start">
              {features.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeFeature ? 'bg-white w-6' : 'bg-white/30'
                  }`}
                  onClick={() => setActiveFeature(index)}
                />
              ))}
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
            style={getParallaxStyle(1.5)}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-blue-500/20"
            >
              Enter the Protocol
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: [0.5, 1, 0.5],
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="flex items-center space-x-2">
          <div className="w-12 h-[1px] bg-white/30"></div>
          <span className="text-white/50 text-sm">Scroll to explore</span>
          <div className="w-12 h-[1px] bg-white/30"></div>
        </div>
      </motion.div>
    </section>
  );
};

// Export a client-only version of the component
const ImprovedHeroSection = dynamic(() => Promise.resolve(ImprovedHeroSectionComponent), {
  ssr: false
});

export default ImprovedHeroSection;
