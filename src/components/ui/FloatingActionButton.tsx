'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

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
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  ),
  mainColor = 'from-blue-500 to-purple-500',
}) => {
  const [isOpen, setIsOpen] = useState(false);

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

  // Toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Render action item
  const renderActionItem = (item: ActionItem, index: number) => {
    const itemContent = (
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center mb-4 cursor-pointer`}
      >
        <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${item.color || 'bg-gradient-to-r from-blue-500 to-purple-500'}`}>
          {item.icon}
        </div>
        <div className="ml-3 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-md shadow-lg">
          <span className="text-white whitespace-nowrap">{item.label}</span>
        </div>
      </motion.div>
    );

    if (item.href) {
      return (
        <Link href={item.href} key={index}>
          {itemContent}
        </Link>
      );
    }

    return (
      <div key={index} onClick={item.onClick}>
        {itemContent}
      </div>
    );
  };

  return (
    <div className={`fixed ${positionStyles[position]} z-50`}>
      {/* Action items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 mb-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {items.map((item, index) => renderActionItem(item, index))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.button
        className={`w-14 h-14 rounded-full bg-gradient-to-r ${mainColor} flex items-center justify-center shadow-lg shadow-purple-500/20 focus:outline-none`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMenu}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {mainIcon}
      </motion.button>
    </div>
  );
};

export default FloatingActionButton;
