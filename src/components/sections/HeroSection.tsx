'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { HeaderText } from '@/utils/normalBold';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  // State for interactive elements
  const [activeIndex, setActiveIndex] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // Animation controls
  const controls = useAnimation();
  const textControls = useAnimation();

  // Spline scene URL
  const splineSceneUrl = "https://prod.spline.design/EegKcAAn0DX9KgHh/scene.splinecode";

  // Handle mouse movement for cursor effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Auto-rotate through key points
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % 4);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isHovering]);

  // Hide scroll indicator after 5 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowScrollIndicator(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  // Start animations on mount
  useEffect(() => {
    controls.start("visible");

    // Sequence the text animations
    const sequence = async () => {
      await textControls.start("visible");
      await textControls.start("pulse");
    };

    sequence();
  }, [controls, textControls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8
      }
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 }
    },
    pulse: {
      opacity: [0.8, 1, 0.8],
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut"
      }
    }
  };

  const scrollVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: [0.5, 1, 0.5],
      y: [0, 10, 0],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  const keyPoints = [
    { text: "IO Your Intelligent Operator", color: "from-blue-500 to-purple-500" },
    { text: "Discover Build Deploy Monetize", color: "from-purple-500 to-pink-500" },
    { text: "You Don't Chat You Command", color: "from-pink-500 to-red-500" },
    { text: "AI Tokens ITO 72-Hour Drop Window", color: "from-red-500 to-orange-500" },
    { text: "Pre-Orders AIPhone AIPods AIGlasses", color: "from-orange-500 to-blue-500" },
  ];

  return (
    <section id="hero-section" className="relative h-screen w-full overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0" style={{ zIndex: -1 }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black hero-gradient">
          {/* Gradient background for the hero section */}
        </div>

        {/* Animated grid background */}
        <div className="absolute inset-0 grid-bg opacity-30"></div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * -100 - 50],
                x: [0, (Math.random() - 0.5) * 50],
                opacity: [0, 0.8, 0],
                scale: [0, Math.random() * 2 + 1, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* Animated glow effects */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-blue-500 opacity-10 blur-3xl"
          animate={{
            opacity: [0.05, 0.1, 0.05],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }}
        ></motion.div>

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-500 opacity-10 blur-3xl"
          animate={{
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
      </div>

      {/* Custom cursor effect */}
      {isHovering && (
        <motion.div
          className="fixed w-20 h-20 rounded-full pointer-events-none z-50 mix-blend-difference"
          style={{
            left: cursorPosition.x - 40,
            top: cursorPosition.y - 40,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(8px)"
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 0.5,
          }}
        ></motion.div>
      )}

      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-5xl"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <motion.div variants={itemVariants} className="mb-4">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 p-[1px] rounded-full">
              <div className="bg-black/80 backdrop-blur-sm px-4 py-1 rounded-full">
                <span className="text-white text-sm font-medium tracking-wider uppercase">Protocol-Grade Launchpad</span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl tracking-wider mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white"
          >
            <HeaderText>Unified AI I/O</HeaderText>
            <motion.span
              variants={itemVariants}
              className="block text-2xl md:text-3xl mt-4 text-white"
            >
              <HeaderText>The New Map Of The New Internet</HeaderText>
            </motion.span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mt-12 mb-16"
          >
            <div className="relative h-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className={`inline-block bg-gradient-to-r ${keyPoints[activeIndex].color} p-[1px] rounded-lg`}>
                    <div className="bg-black/60 backdrop-blur-sm px-6 py-3 rounded-lg">
                      <p className="text-2xl md:text-3xl"><HeaderText>{keyPoints[activeIndex].text}</HeaderText></p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex mt-4 space-x-2">
              {keyPoints.map((_, index) => (
                <button
                  key={index}
                  className={`w-12 h-1 rounded-full transition-colors duration-300 ${index === activeIndex ? 'bg-white' : 'bg-white/20'}`}
                  onClick={() => setActiveIndex(index)}
                ></button>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
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
      <AnimatePresence>
        {showScrollIndicator && (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
            variants={scrollVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2">Scroll to explore</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
