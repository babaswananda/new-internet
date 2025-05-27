'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { IOChatInterface } from './IOChatInterface';

interface ActionItem {
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
  color?: string;
}

interface FloatingActionButtonProps {
  items: ActionItem[];
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  mainIcon?: React.ReactNode;
  mainColor?: string;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  items,
  position = 'bottom-right',
  mainIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  mainColor = 'from-purple-500 to-pink-500',
}) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Position styles
  const positionStyles = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-24 right-6', // Adjusted for header
    'top-left': 'top-24 left-6', // Adjusted for header
  };

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
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      }
    },
  };

  // Toggle the chat
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <div className={`fixed ${positionStyles[position]} z-50`}>
        {/* Main IO button */}
        <motion.button
          className={`w-16 h-16 rounded-full bg-gradient-to-r ${mainColor} flex items-center justify-center shadow-lg shadow-purple-500/20 focus:outline-none border-2 border-purple-400/30`}
          whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)' }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleChat}
          animate={{
            rotate: isChatOpen ? 180 : 0,
            boxShadow: isChatOpen ? '0 0 30px rgba(168, 85, 247, 0.8)' : '0 0 20px rgba(168, 85, 247, 0.3)'
          }}
          transition={{ duration: 0.3 }}
        >
          {mainIcon}
        </motion.button>

        {/* Pulsing ring effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-purple-400/50"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* IO Chat Interface */}
      <AnimatePresence>
        {isChatOpen && (
          <IOChatInterface
            isOpen={isChatOpen}
            onClose={() => setIsChatOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingActionButton;
