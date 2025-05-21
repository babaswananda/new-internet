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
  const containerRef = useRef<HTMLDivElement>(null);

  // Investment FOMO messages
  const messages = [
    "🔥 First private seed round now open for early investors",
    "⏰ Only 14 days until official launch",
    "💰 Limited allocation available for early supporters",
    "🚀 Join our waiting list for exclusive early access",
    "🌐 Building our first community of early adopters",
    "📈 AI market projected to reach $1.8T by 2030",
    "🔐 Secure your position in our first private round",
    "⚡ Early supporters receive lifetime benefits",
    "🌟 Be among the first to experience the new protocol",
    "💎 Early adopter benefits closing in 14 days"
  ];

  // Pause animation on hover
  const handleMouseEnter = () => setAnimate(false);
  const handleMouseLeave = () => setAnimate(true);

  // Calculate animation duration based on content length
  const calculateDuration = () => {
    if (!containerRef.current) return 20;
    const contentWidth = containerRef.current.scrollWidth;
    // Adjust speed based on content width (faster for longer content)
    return Math.max(20, contentWidth / 100);
  };

  return (
    <div
      className="bg-gradient-to-r from-blue-900 via-black to-purple-900 text-white py-1 overflow-hidden border-b border-blue-500/30"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative flex items-center">
        {/* "Private Round" label */}
        <div className="hidden md:flex items-center justify-center bg-red-600 text-white px-3 py-1 font-bold text-xs uppercase tracking-wider z-10 ml-4">
          <span className="animate-pulse mr-1">●</span> Private Round Open
        </div>

        {/* Ticker content */}
        <div className="flex-1 overflow-hidden">
          <motion.div
            ref={containerRef}
            className="flex whitespace-nowrap items-center gap-8 px-4"
            animate={animate ? {
              x: [0, '-100%']
            } : { x: 0 }}
            transition={animate ? {
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: calculateDuration(),
                ease: "linear"
              }
            } : {}}
          >
            {/* Double the messages to create a seamless loop */}
            {[...messages, ...messages].map((message, index) => (
              <div
                key={index}
                className="inline-flex items-center text-sm font-medium"
              >
                <span className="mx-4">{message}</span>
                <span className="text-blue-400 mx-2">|</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA button */}
        <div className="hidden lg:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold py-1 px-4 rounded-sm mr-4 uppercase tracking-wider"
          >
            Join Waitlist
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default FOMOTicker;
