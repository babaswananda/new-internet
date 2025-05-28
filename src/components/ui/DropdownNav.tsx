'use client';

import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface DropdownItem {
  href: string;
  label: string;
  description?: string;
  color?: string;
}

interface DropdownNavProps {
  label: string;
  items: DropdownItem[];
  className?: string;
}

const DropdownNav: React.FC<DropdownNavProps> = React.memo(({ label, items, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState<'bottom' | 'top'>('bottom');
  const [maxHeight, setMaxHeight] = useState<number>(400);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  // Calculate optimal dropdown position and height based on viewport
  const calculateDropdownPosition = useCallback(() => {
    if (!triggerRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const spaceBelow = viewportHeight - triggerRect.bottom;
    const spaceAbove = triggerRect.top;

    // Determine position based on available space
    const shouldShowAbove = spaceBelow < 300 && spaceAbove > spaceBelow;
    setDropdownPosition(shouldShowAbove ? 'top' : 'bottom');

    // Calculate max height to prevent overflow
    const availableSpace = shouldShowAbove ? spaceAbove - 20 : spaceBelow - 20;
    const calculatedMaxHeight = Math.min(Math.max(availableSpace, 200), 500);
    setMaxHeight(calculatedMaxHeight);
  }, []);

  // Update position on scroll and resize
  useEffect(() => {
    if (isOpen) {
      calculateDropdownPosition();

      const handleResize = () => calculateDropdownPosition();
      const handleScroll = () => calculateDropdownPosition();

      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isOpen, calculateDropdownPosition]);

  // Lightweight animation variants optimized for performance
  const dropdownVariants = useMemo(() => ({
    hidden: {
      opacity: 0,
      y: dropdownPosition === 'bottom' ? -4 : 4,
      scale: 0.99,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.12,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: dropdownPosition === 'bottom' ? -4 : 4,
      scale: 0.99,
      transition: {
        duration: 0.08,
        ease: "easeIn",
      },
    },
  }), [dropdownPosition]);

  // Minimal item animations for optimal performance
  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }), []);

  // Handle dropdown open/close with position calculation
  const handleDropdownToggle = useCallback((open: boolean) => {
    if (open) {
      calculateDropdownPosition();
    }
    setIsOpen(open);
  }, [calculateDropdownPosition]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger */}
      <motion.div
        className="text-gray-300 hover:text-white transition-colors tracking-wide uppercase text-sm relative group cursor-pointer flex items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {label}
        <svg
          className={`ml-1 w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        <motion.div
          className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"
          whileHover={{ width: '100%' }}
        />
      </motion.div>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl z-50"
          >
            <div className="p-4">
              {items.map((item, index) => (
                <motion.div
                  key={item.href}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  <Link href={item.href}>
                    <div className="flex items-start p-3 rounded-lg hover:bg-white/5 transition-colors group">
                      <div className="flex-1">
                        <div className={`font-medium text-sm ${item.color || 'text-white'} group-hover:text-white transition-colors`}>
                          {item.label}
                        </div>
                        {item.description && (
                          <div className="text-xs text-gray-400 mt-1 group-hover:text-gray-300 transition-colors">
                            {item.description}
                          </div>
                        )}
                      </div>
                      <svg
                        className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownNav;
