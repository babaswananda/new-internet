'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { GlowingCard } from '@/components/ui/glowing-card';
import { HeaderText } from '@/utils/normalBold';
import { TLDName, ProductName } from '@/utils/normalBold';

const VibeCoder = () => {
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
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                    <HeaderText>Vibe Coder</HeaderText>
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  <HeaderText>Plus VibeCoding Build Agents With Energy Deploy With Vibes</HeaderText>
                </p>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                  VibeCoder is the no-code/pro-code IDE for agents. Create generative art,
                  build AI systems, and deploy with the energy that only comes from pure creative flow.
                </p>
              </motion.div>

              {/* Hidden Route URL Hack */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
                  <h3 className="text-xl mb-4 text-purple-400 text-center"><HeaderText>🔗 Hidden Route URL Hack Just For Vibes</HeaderText></h3>
                  <div className="bg-black/60 rounded-lg p-4 font-mono text-sm text-center">
                    <div className="text-purple-400">https://commandline/claim?handle=yourname&access=early&source=terminal</div>
                  </div>
                  <p className="text-center text-gray-400 mt-4 text-sm">
                    For those who know how to type fast and move first.
                  </p>
                </GlowingCard>
              </motion.div>

              {/* Features Grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">Generative Art</h3>
                  <p className="text-gray-300">
                    Create stunning generative art with AI-powered tools and creative algorithms.
                  </p>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">Vibe-Driven Development</h3>
                  <p className="text-gray-300">
                    Code by vibing. Let your creative energy guide the development process.
                  </p>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-green-500/20">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-semibold mb-4 text-green-400">Agent Builder</h3>
                  <p className="text-gray-300">
                    Visual agent builder with drag-and-drop components and custom logic.
                  </p>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-yellow-500/20">
                  <div className="text-4xl mb-4">🔧</div>
                  <h3 className="text-xl font-semibold mb-4 text-yellow-400">No-Code/Pro-Code</h3>
                  <p className="text-gray-300">
                    Switch seamlessly between visual building and code editing.
                  </p>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-red-500/20">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold mb-4 text-red-400">Instant Deploy</h3>
                  <p className="text-gray-300">
                    Deploy your creations instantly to the Unified AI network.
                  </p>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-cyan-500/20">
                  <div className="text-4xl mb-4">🌈</div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Creative Flow</h3>
                  <p className="text-gray-300">
                    Tools designed to enhance and amplify your creative energy.
                  </p>
                </GlowingCard>
              </motion.div>

              {/* VibeCoding Philosophy */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-pink-500/20">
                  <h3 className="text-2xl mb-6 text-pink-400 text-center"><HeaderText>The VibeCoding Philosophy</HeaderText></h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-purple-400">Energy-First Development</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Follow your creative intuition</li>
                        <li>• Build when the energy is right</li>
                        <li>• Let vibes guide architecture</li>
                        <li>• Deploy with confidence</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-blue-400">Tools That Amplify</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• AI-assisted coding</li>
                        <li>• Generative design systems</li>
                        <li>• Real-time collaboration</li>
                        <li>• Instant feedback loops</li>
                      </ul>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Project Types */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-orange-500/20">
                  <h3 className="text-2xl mb-6 text-orange-400 text-center"><HeaderText>What You Can Build</HeaderText></h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-black/40 rounded-lg">
                      <div className="text-2xl mb-2">🎵</div>
                      <p className="text-sm">Music Agents</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg">
                      <div className="text-2xl mb-2">🖼️</div>
                      <p className="text-sm">Art Generators</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg">
                      <div className="text-2xl mb-2">🎮</div>
                      <p className="text-sm">Game AI</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg">
                      <div className="text-2xl mb-2">📱</div>
                      <p className="text-sm">Apps</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg">
                      <div className="text-2xl mb-2">🌐</div>
                      <p className="text-sm">Web Experiences</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg">
                      <div className="text-2xl mb-2">🤖</div>
                      <p className="text-sm">Chat Bots</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg">
                      <div className="text-2xl mb-2">📊</div>
                      <p className="text-sm">Data Viz</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg">
                      <div className="text-2xl mb-2">✨</div>
                      <p className="text-sm">Magic</p>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Community */}
              <motion.div variants={itemVariants} className="mb-16">
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <div className="text-purple-400 text-xl">🌟</div>
                    <div>
                      <p className="text-purple-200 font-semibold mb-2">Join the VibeCoding Community:</p>
                      <p className="text-gray-300">
                        Connect with creators who build with energy and deploy with vibes.<br />
                        Share your projects, get feedback, and collaborate on the future of creative AI.<br />
                        Code by vibing. Deploy by existing. The new paradigm for agent creation.
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
                  className="px-12 py-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-2xl rounded-lg shadow-lg shadow-purple-500/20 mr-4"
                >
                  START VIBE CODING
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-2xl rounded-lg hover:bg-white/10 transition-colors"
                >
                  EXPLORE VIBECODER
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default VibeCoder;
