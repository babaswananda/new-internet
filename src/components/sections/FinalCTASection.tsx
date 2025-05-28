'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { RetroGrid } from '@/components/ui/retro-grid';
import Link from 'next/link';
import { HeaderText } from '@/components/ui/header-text';

const FinalCTASection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <section className="relative min-h-screen w-full py-24 overflow-hidden bg-black" style={{
      transform: 'translateZ(0)',
      willChange: 'transform',
      backfaceVisibility: 'hidden'
    }}>
      {/* RetroGrid container with animation direction set to false for correct direction */}
      <div className="absolute inset-0 flex items-center justify-center">
        <RetroGrid angle={45} className="!opacity-100" />
      </div>

      <div className="container mx-auto px-4 relative z-10"> {/* Content on top with z-10 */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Main Headline */}
          <motion.div
            variants={itemVariants}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-none">
              <HeaderText>THE FUTURE IS</HeaderText>
            </h1>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-none">
              AGENTIC
            </h2>
          </motion.div>

          {/* Key Messages */}
          <motion.div
            variants={itemVariants}
            className="mb-16 text-xl md:text-2xl lg:text-3xl space-y-6 text-gray-300"
          >
            <p className="font-light">
              <span className="font-bold text-white">Deploy</span> AI agents.
              <span className="font-bold text-white"> Orchestrate</span> intelligence.
              <span className="font-bold text-white"> Own</span> your digital sovereignty.
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
              The protocol-grade launchpad for the agent economy is here.
              Join the builders creating the AI-native internet.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-6 mb-12"
          >
            <Link href="/io">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xl rounded-lg shadow-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                🚀 Start Your Free Trial
              </motion.button>
            </Link>

            <Link href="/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 bg-black/50 text-white border border-white/30 font-bold text-xl rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                📚 Research Library
              </motion.button>
            </Link>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4"
          >
            <p className="text-lg text-gray-400">
              Join <span className="font-bold text-white">10,000+</span> builders already using Unified AI
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span>✓ No credit card required</span>
              <span>✓ Deploy in minutes</span>
              <span>✓ Scale globally</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
