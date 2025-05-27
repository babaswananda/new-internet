'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const AIMadeMeRichIcon = () => {
  return (
    <Link href="/learn-aimademerich" target="_blank">
      <motion.div
        className="fixed bottom-4 left-4 z-50 cursor-pointer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-full p-3 shadow-lg"
          animate={{
            boxShadow: [
              "0 0 20px rgba(255, 165, 0, 0.5)",
              "0 0 30px rgba(255, 165, 0, 0.8)",
              "0 0 20px rgba(255, 165, 0, 0.5)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="text-white text-lg font-bold flex items-center justify-center w-12 h-12"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            💸
          </motion.div>
        </motion.div>
        
        {/* Tooltip */}
        <motion.div
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/90 text-white text-xs rounded-lg whitespace-nowrap opacity-0 pointer-events-none"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          Learn How AI Made Me Rich
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default AIMadeMeRichIcon;
