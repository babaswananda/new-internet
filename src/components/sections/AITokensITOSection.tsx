'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GlowingCard } from '@/components/ui/glowing-card';
import { TLDName, ProductName, HeaderText } from '@/utils/normalBold';
import Link from 'next/link';

const AITokensITOSection: React.FC = () => {
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
    <section id="ai-tokens-ito" className="relative min-h-screen w-full py-24 overflow-hidden">
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
            <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 p-[1px] rounded-full mb-6">
              <div className="bg-black/80 backdrop-blur-sm px-6 py-2 rounded-full">
                <span className="text-white text-sm font-bold tracking-wider uppercase">🪙 THE OFFICIAL ITO</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl mb-6 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                <HeaderText>Initial Token Offering</HeaderText>
              </span>
            </h2>

            <h3 className="text-2xl md:text-3xl mb-6 text-white">
              <HeaderText>For AI Tokens</HeaderText>
            </h3>

            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              This is not an altcoin. This is your access pass to the Agentic Internet.
            </p>

            <p className="text-lg text-gray-400 max-w-4xl mx-auto">
              I am launching your token directly to your community, with protocol utility baked in from Day 0.
            </p>
          </motion.div>

          {/* Drop Window Alert */}
          <motion.div variants={itemVariants} className="mb-16">
            <GlowingCard className="bg-gradient-to-r from-red-900/30 to-orange-900/30 backdrop-blur-sm p-8 rounded-lg border border-red-500/30">
              <div className="text-center">
                <h3 className="text-2xl mb-4 text-red-400">
                  <HeaderText>72-Hour Drop Window</HeaderText>
                </h3>
                <p className="text-xl text-white mb-4">The AI Tokens ITO is live now</p>
                <div className="text-lg text-gray-300">
                  <p>May 27–30, 2025</p>
                  <p className="font-bold text-red-400">72 Hours. Then it's closed.</p>
                </div>
              </div>
            </GlowingCard>
          </motion.div>

          {/* What You're Getting */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl mb-8 text-center">
              <HeaderText>What You're Getting</HeaderText>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                <div className="text-4xl mb-4 text-center">🚀</div>
                <h4 className="text-lg font-semibold mb-3 text-purple-400">Claim Your Protocol Handle</h4>
                <p className="text-gray-300 text-sm">
                  Guaranteed handle reservation (<TLDName>.commandline</TLDName>, <TLDName>.agentchat</TLDName>, <TLDName>.vibecoder</TLDName>, etc.)
                </p>
              </GlowingCard>

              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
                <div className="text-4xl mb-4 text-center">🔐</div>
                <h4 className="text-lg font-semibold mb-3 text-blue-400">Stake Into Vault Layer</h4>
                <p className="text-gray-300 text-sm">
                  Lock your vault forever and secure your digital identity
                </p>
              </GlowingCard>

              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-green-500/20">
                <div className="text-4xl mb-4 text-center">📱</div>
                <h4 className="text-lg font-semibold mb-3 text-green-400">Unlock Device Access</h4>
                <p className="text-gray-300 text-sm">
                  Early access to .AIPhone, .AIPods, .AIGlasses with shipment priority
                </p>
              </GlowingCard>

              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-yellow-500/20">
                <div className="text-4xl mb-4 text-center">🧠</div>
                <h4 className="text-lg font-semibold mb-3 text-yellow-400">Deploy Agent Stack</h4>
                <p className="text-gray-300 text-sm">
                  Protocol stack onboarding and agent gateway access
                </p>
              </GlowingCard>

              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-red-500/20">
                <div className="text-4xl mb-4 text-center">🎯</div>
                <h4 className="text-lg font-semibold mb-3 text-red-400">Activate Infrastructure</h4>
                <p className="text-gray-300 text-sm">
                  Full Unified AI infrastructure activation and access
                </p>
              </GlowingCard>

              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/20">
                <div className="text-4xl mb-4 text-center">💰</div>
                <h4 className="text-lg font-semibold mb-3 text-cyan-400">Tradable Tokens</h4>
                <p className="text-gray-300 text-sm">
                  AI Tokens post-drop with future liquidity support
                </p>
              </GlowingCard>
            </div>
          </motion.div>

          {/* Key Message */}
          <motion.div variants={itemVariants} className="mb-16">
            <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-pink-500/20">
              <div className="text-center">
                <h3 className="text-2xl mb-6 text-pink-400">
                  <HeaderText>This Isn't Just A Token Sale</HeaderText>
                </h3>
                <p className="text-xl text-white mb-4">
                  It's the activation of your digital operating system.
                </p>
              </div>
            </GlowingCard>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link href="/ai-tokens">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-purple-500/20"
                >
                  🪙 JOIN THE ITO
                </motion.button>
              </Link>
              <Link href="/claim">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-colors"
                >
                  📦 RESERVE YOUR HANDLE
                </motion.button>
              </Link>
              <Link href="/preorder">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-blue-500/20"
                >
                  🧠 STAKE FOR DEVICE ACCESS
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AITokensITOSection;
