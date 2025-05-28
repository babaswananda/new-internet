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
  multiColumn?: boolean;
  columns?: number;
}

const DropdownNav: React.FC<DropdownNavProps> = React.memo(({ label, items, className = '', multiColumn = false, columns = 2 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Optimized animation variants
  const dropdownVariants = useMemo(() => ({
    hidden: {
      opacity: 0,
      y: -8,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.15,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -8,
      scale: 0.98,
      transition: {
        duration: 0.1,
        ease: "easeIn",
      },
    },
  }), []);

  // Simplified item animations
  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
  }), []);

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
            ref={dropdownRef}
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`absolute top-full left-0 mt-2 bg-black/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl z-50 overflow-hidden ${
              multiColumn
                ? 'w-[800px] max-w-[90vw] -translate-x-1/4'
                : 'w-80 max-h-96'
            }`}
          >
            <div className={`p-6 ${multiColumn ? '' : 'overflow-y-auto max-h-80'}`}>
              {multiColumn ? (
                <div className={`grid gap-6 ${
                  columns === 3 ? 'grid-cols-1 md:grid-cols-3' :
                  columns === 4 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' :
                  'grid-cols-1 md:grid-cols-2'
                }`}>
                  {items.map((item, index) => (
                    <motion.div
                      key={item.href}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={index}
                    >
                      <Link href={item.href}>
                        <div className="flex flex-col p-4 rounded-lg hover:bg-white/5 transition-colors group border border-white/5 hover:border-white/10">
                          <div className={`font-semibold text-base ${item.color || 'text-white'} group-hover:text-white transition-colors mb-2`}>
                            {item.label}
                          </div>
                          {item.description && (
                            <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                              {item.description}
                            </div>
                          )}
                          <div className="mt-3 flex items-center text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                            <span>Learn more</span>
                            <svg
                              className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                items.map((item, index) => (
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
                          <div className={`font-medium text-sm ${item.color || 'text-white'} group-hover:text-white transition-colors break-words`}>
                            {item.label}
                          </div>
                          {item.description && (
                            <div className="text-xs text-gray-400 mt-1 group-hover:text-gray-300 transition-colors break-words">
                              {item.description}
                            </div>
                          )}
                        </div>
                        <svg
                          className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default DropdownNav;
