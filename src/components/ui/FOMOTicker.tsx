'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * FOMOTicker Component
 *
 * A scrolling ticker that displays FOMO-inducing investment messages
 * across the top of the page.
 */
const FOMOTicker: React.FC = () => {
  const [animate, setAnimate] = useState(true);
  const [duration, setDuration] = useState(30); // Sped up from 60 to 30 seconds
  const containerRef = useRef<HTMLDivElement>(null);

  // AI Tokens ITO launch messages
  const messages = [
    "🚨 AI Tokens ITO LIVE → Claim Handle • Stake Vault • Pre-Order Devices at activate.unifiedai",
    "📦 Deploy Your Stack at io.unifiedai → Your Agent. Your Interface. Your Internet.",
    "🧠 Discover & Stake Upcoming Agents → explore.aiagents",
    "💸 AI Made Me Rich Is LIVE → Real Wins • Token Flex • Meme Capital → join.aimademerich",
    "🎓 Learn How It All Works → Step-by-Step Operator Playbook → learn.aimademerich"
  ];

  // Pause animation on hover
  const handleMouseEnter = () => setAnimate(false);
  const handleMouseLeave = () => setAnimate(true);

  // Calculate animation duration based on content length
  const calculateDuration = () => {
    if (!containerRef.current) return 60; // Much slower base duration
    const contentWidth = containerRef.current.scrollWidth;
    // Slower speed: more time for longer content
    // Use a much slower multiplier for better readability
    return Math.max(60, (contentWidth / 50)); // Slower calculation
  };

  // Update duration when component mounts and content is ready
  useEffect(() => {
    const updateDuration = () => {
      if (containerRef.current) {
        const newDuration = calculateDuration();
        setDuration(newDuration);
      }
    };

    // Small delay to ensure content is rendered
    const timer = setTimeout(updateDuration, 100);

    // Also update on window resize
    window.addEventListener('resize', updateDuration);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateDuration);
    };
  }, []);

  return (
    <div
      className="bg-gradient-to-r from-blue-900 via-black to-purple-900 text-white py-1 overflow-hidden border-b border-blue-500/30"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative flex items-center">
        {/* "ITO Live" label */}
        <div className="hidden md:flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 font-bold text-xs uppercase tracking-wider z-10 ml-4">
          <span className="animate-pulse mr-1">🪙</span> ITO Live Now
        </div>

        {/* Ticker content */}
        <div className="flex-1 overflow-hidden">
          <motion.div
            ref={containerRef}
            className="flex whitespace-nowrap items-center gap-8 px-4"
            animate={animate ? {
              x: [0, '-50%'] // Only move half way since we duplicate content
            } : {}}
            transition={animate ? {
              repeat: Infinity,
              repeatType: "loop",
              duration: duration,
              ease: "linear"
            } : {}}
            style={{ willChange: 'transform' }} // Optimize for animations
          >
            {/* Triple the messages to ensure seamless loop */}
            {[...messages, ...messages, ...messages].map((message, index) => (
              <div
                key={`${message}-${index}`}
                className="inline-flex items-center text-sm font-medium flex-shrink-0"
              >
                <span className="mx-6">{message}</span>
                <span className="text-blue-400 mx-3">•</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA button */}
        <div className="hidden lg:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs font-bold py-1 px-4 rounded-sm mr-4 uppercase tracking-wider"
          >
            🪙 Join ITO
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default FOMOTicker;
