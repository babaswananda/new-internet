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
  const [duration, setDuration] = useState(12); // Much faster - 12 seconds
  const containerRef = useRef<HTMLDivElement>(null);

  // Unified AI Launch messages
  const messages = [
    "📰 LIVE TICKER — UNIFIED AI LAUNCH NOW LIVE",
    "🌐 UnifiedAI.io officially launches global platform access",
    "⚡ Every handle comes with FREE Unified AI subscription",
    "🎨 Generate images, videos, and deploy agents in one click",
    "🚀 New AI-powered tools released: Chat Designer, Art Creator, Video Generator",
    "🧠 Businesses now offering Unified AI as a customer service upgrade",
    "🎟️ Unified AI subscription gift cards now available at select retailers",
    "🔒 Early users locked into Founders Pricing for life",
    "🛠️ Real-time agent deployment dashboard now live",
    "🎤 Ambassadors program begins onboarding 100+ creators & operators",
    "📦 Merch drop & limited vaults now shipping to premium members",
    "📈 AI adoption just got decentralized — and culture-coded",
    "🔥 Ambassador Kit now available → Earn revenue share + custom AI agents",
    "🛍️ Retail partners can now offer AI subscriptions to customers",
    "👑 Elite Ambassador program for $10K+/mo creators launching soon"
  ];

  // Pause animation on hover
  const handleMouseEnter = () => setAnimate(false);
  const handleMouseLeave = () => setAnimate(true);

  // Calculate animation duration based on content length
  const calculateDuration = () => {
    if (!containerRef.current) return 12; // Fast base duration
    const contentWidth = containerRef.current.scrollWidth;
    // Fast speed: less time for content to scroll
    // Use a faster multiplier for quicker movement
    return Math.max(8, (contentWidth / 200)); // Much faster calculation
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
        {/* "Launch Live" label */}
        <div className="hidden md:flex items-center justify-center bg-gradient-to-r from-red-600 to-green-600 text-white px-3 py-1 font-bold text-xs uppercase tracking-wider z-10 ml-4">
          <span className="animate-pulse mr-1">🚀</span> Launch Live
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
            🚀 Join Launch
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default FOMOTicker;
