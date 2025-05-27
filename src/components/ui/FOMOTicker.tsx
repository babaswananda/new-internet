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

  // IO-focused launch messages
  const messages = [
    "🧠 IO: Your Intelligent Operator is now live",
    "⚡ Input → Orchestration: Command your agent stack",
    "🌐 First sovereign AI control layer in history",
    "🔥 IO is what ChatGPT wants to be when it grows up",
    "💻 You don't chat. You command. Deploy your IO today.",
    "🚀 The agent that runs your agents - now available",
    "🔓 .commandline/claim is where it all begins",
    "⚙️ Infrastructure Operator: Runs ecosystems, not apps",
    "🪄 Intention Output: Speak your intent, IO executes",
    "🧬 Intelligence Orchestrator: Multiple agents, one conductor"
  ];

  // Pause animation on hover
  const handleMouseEnter = () => setAnimate(false);
  const handleMouseLeave = () => setAnimate(true);

  // Calculate animation duration based on content length
  const calculateDuration = () => {
    if (!containerRef.current) return 15;
    const contentWidth = containerRef.current.scrollWidth;
    // Adjust speed based on content width (faster for longer content)
    // Make it 30% faster by multiplying by 0.7
    return Math.max(15, (contentWidth / 100) * 0.7);
  };

  return (
    <div
      className="bg-gradient-to-r from-blue-900 via-black to-purple-900 text-white py-1 overflow-hidden border-b border-blue-500/30"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative flex items-center">
        {/* "IO Live" label */}
        <div className="hidden md:flex items-center justify-center bg-blue-600 text-white px-3 py-1 font-bold text-xs uppercase tracking-wider z-10 ml-4">
          <span className="animate-pulse mr-1">●</span> IO Live Now
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
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold py-1 px-4 rounded-sm mr-4 uppercase tracking-wider"
          >
            Deploy IO
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default FOMOTicker;
