'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HeaderText } from '@/utils/normalBold';
import Link from 'next/link';

/**
 * NewHeroSection
 *
 * A completely new hero section with modern design elements.
 */
const NewHeroSection: React.FC = () => {
  return (
    <section id="hero-section" className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>

        {/* Grid background */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-20"></div>

        {/* Animated glow */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Content - FULL WIDTH */}
      <div className="w-full px-4 relative z-10">
        <div className="w-full">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 p-[1px] rounded-full">
              <div className="bg-black/80 backdrop-blur-sm px-4 py-1 rounded-full">
                <span className="text-white text-sm font-medium">Protocol-Grade Launchpad</span>
              </div>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-8xl tracking-wider mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white"
          >
            <HeaderText>Unified AI I/O</HeaderText>
            <span className="block text-2xl md:text-3xl mt-4 text-white">
              <HeaderText>The New Map Of The New Internet</HeaderText>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 mb-12 max-w-2xl"
          >
            unified ai... think of us as your dashboard to unify all things AI
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-blue-500/20"
            >
              Enter the Protocol
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Hero Slides - FULL WIDTH */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-24 w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
              {/* First Slide */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3">A2A Protocol</h3>
                <p className="text-gray-400">Agent-to-Agent communication protocol for seamless AI collaboration.</p>
              </motion.div>

              {/* Second Slide */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3">Multi-Chain Protocol</h3>
                <p className="text-gray-400">Connect and operate across multiple blockchain networks.</p>
              </motion.div>

              {/* Third Slide */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3">Operator Economy</h3>
                <p className="text-gray-400">Participate in the new economy of AI operators and agents.</p>
              </motion.div>

              {/* Fourth Slide */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3">Vibe Coding</h3>
                <p className="text-gray-400">Create generative art and vibe coding projects with AI-powered tools.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex items-center space-x-2"
        >
          <div className="w-12 h-[1px] bg-white/30"></div>
          <span className="text-white/50 text-sm">Scroll to explore</span>
          <div className="w-12 h-[1px] bg-white/30"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewHeroSection;
