'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VoiceIOAgent from './VoiceIOAgent';

const FloatingIOAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasNewMessage, setHasNewMessage] = useState(false);

  // Show notification after a delay to encourage interaction
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setHasNewMessage(true);
        // Auto-hide notification after 5 seconds
        setTimeout(() => setHasNewMessage(false), 5000);
      }
    }, 10000); // Show after 10 seconds

    return () => clearTimeout(timer);
  }, [isOpen]);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAgent = () => {
    setIsOpen(!isOpen);
    setHasNewMessage(false);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 z-40"
          >
            <div className="relative">
              {/* Notification Badge */}
              <AnimatePresence>
                {hasNewMessage && !isOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 10 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: 10 }}
                    className="absolute -top-2 -left-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold z-10"
                  >
                    !
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Notification Tooltip */}
              <AnimatePresence>
                {hasNewMessage && !isOpen && (
                  <motion.div
                    initial={{ opacity: 0, x: 20, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 20, scale: 0.8 }}
                    className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-black/90 backdrop-blur-sm border border-purple-500/30 rounded-lg p-3 whitespace-nowrap"
                  >
                    <div className="text-white text-sm font-medium">👋 Hi! I'm IO</div>
                    <div className="text-gray-300 text-xs">Ask me anything about Unified AI!</div>
                    {/* Arrow */}
                    <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-purple-500/30 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Main Button */}
              <motion.button
                onClick={toggleAgent}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
                  isOpen
                    ? 'bg-gradient-to-r from-red-500 to-pink-500'
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                }`}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      className="text-white text-xl font-bold"
                    >
                      ✕
                    </motion.div>
                  ) : (
                    <motion.div
                      key="ai"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-white font-bold text-lg"
                    >
                      🤖
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Pulse Animation */}
              {!isOpen && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-ping opacity-20"></div>
              )}

              {/* Voice Indicator */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                  >
                    <div className="text-white text-xs">🎤</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Actions */}
            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-20 right-0 flex flex-col gap-2"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, x: -5 }}
                    onClick={() => window.location.href = '/book-demo'}
                    className="bg-black/80 backdrop-blur-sm border border-green-500/30 text-green-400 px-3 py-2 rounded-lg text-xs font-medium hover:bg-green-500/10 transition-all"
                  >
                    📅 Book Demo
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, x: -5 }}
                    onClick={() => window.location.href = '/claim'}
                    className="bg-black/80 backdrop-blur-sm border border-purple-500/30 text-purple-400 px-3 py-2 rounded-lg text-xs font-medium hover:bg-purple-500/10 transition-all"
                  >
                    🆔 Claim Handle
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, x: -5 }}
                    onClick={() => window.location.href = '/faq'}
                    className="bg-black/80 backdrop-blur-sm border border-blue-500/30 text-blue-400 px-3 py-2 rounded-lg text-xs font-medium hover:bg-blue-500/10 transition-all"
                  >
                    ❓ FAQ
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Voice IO Agent Chat */}
      <VoiceIOAgent isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default FloatingIOAgent;
