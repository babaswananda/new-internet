'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GlowingCard } from '@/components/ui/glowing-card';
import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';

export default function AITokensPage() {
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
    <MainLayout>
      <section className="relative min-h-screen w-full py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="max-w-6xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 relative">
                <span className="text-3xl md:text-5xl relative z-20 mr-4">🪙</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 relative z-10">
                  INITIAL TOKEN OFFERING: AI TOKENS
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                <span className="font-normal">Welcome to the</span> <span className="font-bold">first-ever</span> <span className="font-normal">token drop for the</span> <span className="font-bold">Agentic Internet.</span>
              </h2>
              <p className="text-xl text-gray-300 mb-4">
                AI Tokens power your handle, vault, and agent stack across Unified AI.
              </p>
              <p className="text-lg text-gray-400 max-w-4xl mx-auto">
                This ITO is your first and only chance to lock in your identity before the protocol goes public.
              </p>
            </motion.div>

            {/* Drop Window */}
            <motion.div variants={itemVariants} className="mb-16">
              <GlowingCard className="bg-gradient-to-r from-red-900/30 to-orange-900/30 backdrop-blur-sm p-8 rounded-lg border border-red-500/30">
                <h3 className="text-3xl font-bold mb-6 text-center text-red-400">
                  <span className="font-normal">📅</span> <span className="font-bold">DROP</span> <span className="font-normal">WINDOW</span>
                </h3>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white mb-2">May 27–30, 2025</p>
                  <p className="text-xl text-red-400 font-bold">72 Hours. Then it's closed.</p>
                </div>
              </GlowingCard>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-purple-500/20"
                >
                  🪙 CLAIM TOKENS NOW
                </motion.button>
                <Link href="/claim">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-colors"
                  >
                    📦 RESERVE HANDLE
                  </motion.button>
                </Link>
                <Link href="/preorder">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-blue-500/20"
                  >
                    📲 ACTIVATE DEVICES
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Final Message */}
            <motion.div variants={itemVariants} className="mb-16">
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-pink-500/20">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-6 text-pink-400">
                    <span className="font-normal">You don't need</span> <span className="font-bold">another meme coin.</span>
                  </h3>
                  <p className="text-xl text-white">
                    You need the coin that runs your digital empire.
                  </p>
                </div>
              </GlowingCard>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
