'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { GlowingCard } from '@/components/ui/glowing-card';

const AlphaRouterPage = () => {
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
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-red-500 to-orange-500">
                    AlphaRouter
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  The Carrier of Intelligence. If OpenRouter routes models, AlphaRouter routes the internet itself.
                </p>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                  AlphaRouter is the sovereign compute layer that routes intelligence across the entire Unified AI ecosystem. 
                  Clean, agent-native, and protocol-grade infrastructure for the new internet.
                </p>
              </motion.div>

              {/* Protocol Support */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-green-500/20">
                  <h3 className="text-2xl font-semibold mb-6 text-green-400 text-center">Protocol Support</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-green-400 text-2xl mb-2">✅</div>
                      <h4 className="font-semibold mb-2">A2A Protocol</h4>
                      <p className="text-gray-300 text-sm">(Google)</p>
                    </div>
                    <div className="text-center">
                      <div className="text-green-400 text-2xl mb-2">✅</div>
                      <h4 className="font-semibold mb-2">MCP</h4>
                      <p className="text-gray-300 text-sm">Model Context Protocol from Anthropic</p>
                    </div>
                    <div className="text-center">
                      <div className="text-green-400 text-2xl mb-2">✅</div>
                      <h4 className="font-semibold mb-2">ION</h4>
                      <p className="text-gray-300 text-sm">Intelligent Ontology Network</p>
                    </div>
                    <div className="text-center">
                      <div className="text-green-400 text-2xl mb-2">✅</div>
                      <h4 className="font-semibold mb-2">AgentDevKit</h4>
                      <p className="text-gray-300 text-sm">Your own drop-to-deploy SDK</p>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Features Grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20">
                  <div className="text-4xl mb-4">🌐</div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">Internet Routing</h3>
                  <p className="text-gray-300">
                    Routes intelligence across the entire internet, not just between models.
                  </p>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
                  <div className="text-4xl mb-4">🔒</div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">Sovereign Compute</h3>
                  <p className="text-gray-300">
                    Clean, sovereign, agent-native compute layer with no institutional dependencies.
                  </p>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-green-500/20">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-semibold mb-4 text-green-400">Protocol Grade</h3>
                  <p className="text-gray-300">
                    Built for protocol-level operations with enterprise-grade reliability.
                  </p>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-yellow-500/20">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-semibold mb-4 text-yellow-400">Agent Native</h3>
                  <p className="text-gray-300">
                    Designed from the ground up for agent-to-agent communication and coordination.
                  </p>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-red-500/20">
                  <div className="text-4xl mb-4">🔄</div>
                  <h3 className="text-xl font-semibold mb-4 text-red-400">Multi-Protocol</h3>
                  <p className="text-gray-300">
                    Seamlessly integrates A2A, MCP, ION, and custom protocols in one layer.
                  </p>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-cyan-500/20">
                  <div className="text-4xl mb-4">📡</div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Global Network</h3>
                  <p className="text-gray-300">
                    Distributed routing infrastructure spanning multiple continents and providers.
                  </p>
                </GlowingCard>
              </motion.div>

              {/* Licensing Policy */}
              <motion.div variants={itemVariants} className="mb-16">
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <div className="text-amber-400 text-xl">⚠️</div>
                    <div>
                      <p className="text-amber-200 font-semibold mb-2">Licensing Policy:</p>
                      <p className="text-gray-300">
                        Institutional APIs are not routed unless licensed.<br />
                        Open-source models are default-enabled.<br />
                        AlphaRouter + ION = Clean, sovereign, agent-native compute layer.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Browser Console Swagger */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400 text-center">🌐 Browser Console Swagger</h3>
                  <div className="bg-black/60 rounded-lg p-4 font-mono text-xs overflow-x-auto">
                    <div className="text-blue-400 mb-2">fetch("https://api.commandline/claim", {</div>
                    <div className="text-gray-300 ml-4 mb-1">method: "POST",</div>
                    <div className="text-gray-300 ml-4 mb-1">headers: {</div>
                    <div className="text-green-400 ml-8 mb-1">"Authorization": "Bearer earlyaccess-token",</div>
                    <div className="text-green-400 ml-8 mb-1">"Content-Type": "application/json"</div>
                    <div className="text-gray-300 ml-4 mb-1">},</div>
                    <div className="text-gray-300 ml-4 mb-1">body: JSON.stringify({ handle: "yourname", stack: "Unified AI v1" })</div>
                    <div className="text-blue-400">}).then(res => res.json()).then(console.log)</div>
                  </div>
                  <p className="text-center text-gray-400 mt-4 text-sm">
                    For devs who know the only UI that matters is the one they build.
                  </p>
                </GlowingCard>
              </motion.div>

              {/* CTA Section */}
              <motion.div variants={itemVariants} className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold text-2xl rounded-lg shadow-lg shadow-pink-500/20 mr-4"
                >
                  ACCESS ALPHAROUTER
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-2xl rounded-lg hover:bg-white/10 transition-colors"
                >
                  VIEW ARCHITECTURE
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default AlphaRouterPage;
