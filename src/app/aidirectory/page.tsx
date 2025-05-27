'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { GlowingCard } from '@/components/ui/glowing-card';
import { TLDName, ProductName, HeaderText } from '@/utils/normalBold';

const AIDirectoryPage = () => {
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

  return (
    <MainLayout>
      <div className="min-h-screen bg-black text-white">
        <section className="relative min-h-screen w-full py-24 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-6xl mx-auto"
            >
              {/* Hero Section */}
              <motion.div variants={itemVariants} className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">
                    <HeaderText>AI Directory</HeaderText>
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  <HeaderText>Discover Build Deploy Monetize</HeaderText>
                </p>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                  Think Shopify + GitHub + OpenSea — for AI. Discover any agent, any function, any creator.
                  Sell agents, tools, templates, and prompt packs. Token-gate drops and support modules.
                </p>
              </motion.div>

              {/* Browser Commands */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-amber-500/20">
                  <h3 className="text-2xl mb-6 text-amber-400 text-center"><HeaderText>🌐 Directory Commands</HeaderText></h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-sm">
                    <div className="bg-black/60 rounded-lg p-4">
                      <div className="text-amber-400"><TLDName>.aidirectory</TLDName>/search</div>
                      <div className="text-orange-400"><TLDName>.aimarketplace</TLDName>/mint</div>
                      <div className="text-red-400"><TLDName>.aimarketplace</TLDName>/browse</div>
                    </div>
                    <div className="bg-black/60 rounded-lg p-4">
                      <div className="text-yellow-400"><TLDName>.aidirectory</TLDName>/agents</div>
                      <div className="text-pink-400"><TLDName>.aidirectory</TLDName>/creators</div>
                      <div className="text-purple-400"><TLDName>.aidirectory</TLDName>/tools</div>
                    </div>
                    <div className="bg-black/60 rounded-lg p-4">
                      <div className="text-green-400"><TLDName>.aimarketplace</TLDName>/sell</div>
                      <div className="text-blue-400"><TLDName>.aimarketplace</TLDName>/drops</div>
                      <div className="text-cyan-400"><TLDName>.aimarketplace</TLDName>/support</div>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Features Grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">Agent Discovery</h3>
                  <p className="text-gray-300">
                    Find the perfect agent for any task. Search by capability, domain, or performance metrics.
                  </p>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
                  <div className="text-4xl mb-4">👥</div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">Creator Profiles</h3>
                  <p className="text-gray-300">
                    Discover top AI creators, their agent portfolios, and community contributions.
                  </p>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-green-500/20">
                  <div className="text-4xl mb-4">🛠️</div>
                  <h3 className="text-xl font-semibold mb-4 text-green-400">Tool Library</h3>
                  <p className="text-gray-300">
                    Browse thousands of AI tools, integrations, and utility functions.
                  </p>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-yellow-500/20">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-semibold mb-4 text-yellow-400">Marketplace</h3>
                  <p className="text-gray-300">
                    Buy and sell agents, prompt packs, templates, and custom AI solutions.
                  </p>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-red-500/20">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold mb-4 text-red-400">Token Drops</h3>
                  <p className="text-gray-300">
                    Participate in exclusive token drops and limited edition AI releases.
                  </p>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-cyan-500/20">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Leaderboards</h3>
                  <p className="text-gray-300">
                    Track top-performing agents, trending creators, and popular tools.
                  </p>
                </GlowingCard>
              </motion.div>

              {/* Categories */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
                  <h3 className="text-2xl mb-6 text-purple-400 text-center"><HeaderText>Browse Categories</HeaderText></h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-black/40 rounded-lg">
                      <div className="text-2xl mb-2">🤖</div>
                      <p className="text-sm">Trading Bots</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg">
                      <div className="text-2xl mb-2">📊</div>
                      <p className="text-sm">Analytics</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg">
                      <div className="text-2xl mb-2">🎨</div>
                      <p className="text-sm">Creative AI</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg">
                      <div className="text-2xl mb-2">💬</div>
                      <p className="text-sm">Chat Agents</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg">
                      <div className="text-2xl mb-2">🔧</div>
                      <p className="text-sm">Dev Tools</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg">
                      <div className="text-2xl mb-2">📝</div>
                      <p className="text-sm">Content</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg">
                      <div className="text-2xl mb-2">🎯</div>
                      <p className="text-sm">Marketing</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg">
                      <div className="text-2xl mb-2">🔒</div>
                      <p className="text-sm">Security</p>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Seller Benefits */}
              <motion.div variants={itemVariants} className="mb-16">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <div className="text-green-400 text-xl">💎</div>
                    <div>
                      <p className="text-green-200 font-semibold mb-2">For Creators & Sellers:</p>
                      <p className="text-gray-300">
                        List your agents and tools with built-in monetization.<br />
                        Token-gate premium features and exclusive access.<br />
                        Build your reputation and grow your AI business.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div variants={itemVariants} className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-2xl rounded-lg shadow-lg shadow-amber-500/20 mr-4"
                >
                  BROWSE DIRECTORY
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-2xl rounded-lg hover:bg-white/10 transition-colors"
                >
                  LIST YOUR AGENT
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default AIDirectoryPage;
