'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlowingCard } from '@/components/ui/glowing-card';
import { HeaderText } from '@/utils/normalBold';
import Link from 'next/link';

const PreOrderHardwareSection = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  const devices = [
    {
      name: '.AIPhone',
      description: 'Your sovereign device.',
      features: ['eSIM enabled', 'Runs your agents locally', 'Vault + inbox built-in', 'Powered by CyberMobile (AI-native crypto telecom)'],
      icon: '📱',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: '.AIPods',
      description: 'Voice prompt execution on the go.',
      features: ['Agentic voice relays', 'Context memory sync', 'Spoken command-to-action'],
      icon: '🎧',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: '.AIGlasses',
      description: 'Real-world agent overlay.',
      features: ['Augmented HUD', 'Task execution and reminders', 'Visual command response'],
      icon: '👓',
      color: 'from-green-500 to-teal-500'
    },
    {
      name: '.AIEmail',
      description: 'The first email that speaks AI.',
      features: ['Inbox = Agent', 'Smart replies = Intent aware', 'Built on your handle, routed by AlphaRouter'],
      icon: '📩',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="preorder" className="relative min-h-screen w-full py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
                <HeaderText>🔮 Pre-Order</HeaderText>
              </span>
            </h2>
            <h3 className="text-2xl md:text-3xl mb-6 text-white">
              <HeaderText>The Hardware Layer Of The Agentic Internet</HeaderText>
            </h3>
            <p className="text-xl text-gray-300 mb-4">
              Your software now comes with a body.
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto">
              Each device is more than hardware — it's an extension of your handle, your vault, and your agent stack.
            </p>
          </motion.div>

          {/* Special Reference */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center">
              <p className="text-lg text-gray-400 mb-6">
                Ready to give your agents a physical form? <span className="text-orange-400">.commandline/claim</span> is where it all begins.<br />
                (no paste '.commandline/claim' in your browser, it leads somewhere special).
              </p>
            </div>
          </motion.div>

          {/* Devices Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {devices.map((device, index) => (
              <GlowingCard key={device.name} className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{device.icon}</div>
                  <div>
                    <h3 className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${device.color}`}>
                      {device.name}
                    </h3>
                    <p className="text-gray-300 text-lg">{device.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {device.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 flex items-center">
                      <span className="mr-2 text-green-400">‣</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </GlowingCard>
            ))}
          </motion.div>

          {/* All Devices Include */}
          <motion.div variants={itemVariants} className="mb-16">
            <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-yellow-500/20">
              <h3 className="text-2xl mb-6 text-yellow-400 text-center"><HeaderText>⚙️ All Devices Include</HeaderText></h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center text-gray-300">
                  <span className="mr-3 text-blue-400">🔐</span>
                  <span>Vault connection</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="mr-3 text-purple-400">🧠</span>
                  <span>Memory sync via SeedGPT</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="mr-3 text-green-400">🌐</span>
                  <span>Token access layer</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="mr-3 text-orange-400">🧱</span>
                  <span>Modular upgrades</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="mr-3 text-cyan-400">📡</span>
                  <span>Configurable via AgentChat</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="mr-3 text-pink-400">⚡</span>
                  <span>ION Protocol Integration</span>
                </div>
              </div>
            </GlowingCard>
          </motion.div>

          {/* Live Pre-Order Drops */}
          <motion.div variants={itemVariants} className="mb-16">
            <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
              <h3 className="text-2xl mb-6 text-purple-400 text-center"><HeaderText>🧾 Live Pre-Order Drops</HeaderText></h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="mr-3 text-red-400">•</span>
                    <span>Inventory countdown visible</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3 text-yellow-400">•</span>
                    <span>Dynamic pricing by demand</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="mr-3 text-blue-400">•</span>
                    <span>Stake AI Tokens for early access + shipping priority</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3 text-green-400">•</span>
                    <span>Drops occur in rolling releases — resale possible on vault marketplace</span>
                  </li>
                </ul>
              </div>
            </GlowingCard>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link href="/preorder">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-orange-500/20"
                >
                  🔓 RESERVE YOUR DEVICE
                </motion.button>
              </Link>
              <Link href="/preorder/schedule">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-colors"
                >
                  📦 VIEW PRE-ORDER SCHEDULE
                </motion.button>
              </Link>
              <Link href="/preorder/stake">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-purple-500/20"
                >
                  🪙 STAKE AI TOKENS FOR EARLY ACCESS
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PreOrderHardwareSection;
