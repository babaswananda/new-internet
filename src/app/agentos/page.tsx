'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GlowingCard } from '@/components/ui/glowing-card';
import MainLayout from '@/components/layout/MainLayout';
import { HeaderText } from '@/utils/normalBold';

export default function AgentOSPage() {
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
      <div className="min-h-screen bg-black text-white">
        <section className="relative min-h-screen w-full py-24 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="max-w-6xl mx-auto"
            >
              {/* Hero Section */}
              <motion.div variants={itemVariants} className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-500">
                    <HeaderText>AGENT OS</HeaderText>
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  <HeaderText>The Operating System For AI Agents</HeaderText>
                </p>
                <p className="text-lg text-gray-400 max-w-4xl mx-auto">
                  AGENT OS is the foundational layer that powers the entire Unified AI ecosystem. 
                  It's where your agents live, learn, and execute across the Agentic Internet.
                </p>
              </motion.div>

              {/* Core Features */}
              <motion.div variants={itemVariants} className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center">
                  <HeaderText>Core Features</HeaderText>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/20">
                    <div className="text-4xl mb-4 text-center">🤖</div>
                    <h4 className="text-xl font-semibold mb-4 text-cyan-400">Agent Runtime</h4>
                    <p className="text-gray-300 text-sm">
                      Native execution environment for AI agents with built-in memory, context, and state management.
                    </p>
                  </GlowingCard>

                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-teal-500/20">
                    <div className="text-4xl mb-4 text-center">🔗</div>
                    <h4 className="text-xl font-semibold mb-4 text-teal-400">Protocol Integration</h4>
                    <p className="text-gray-300 text-sm">
                      Seamless integration with ION, AlphaRouter, and all Agentic Internet protocols.
                    </p>
                  </GlowingCard>

                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
                    <div className="text-4xl mb-4 text-center">🛡️</div>
                    <h4 className="text-xl font-semibold mb-4 text-blue-400">Security Layer</h4>
                    <p className="text-gray-300 text-sm">
                      Handle-based identity, vault integration, and secure agent-to-agent communication.
                    </p>
                  </GlowingCard>

                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                    <div className="text-4xl mb-4 text-center">⚡</div>
                    <h4 className="text-xl font-semibold mb-4 text-purple-400">Performance</h4>
                    <p className="text-gray-300 text-sm">
                      Optimized for real-time agent execution with minimal latency and maximum throughput.
                    </p>
                  </GlowingCard>

                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-pink-500/20">
                    <div className="text-4xl mb-4 text-center">🔄</div>
                    <h4 className="text-xl font-semibold mb-4 text-pink-400">Multi-Agent Orchestration</h4>
                    <p className="text-gray-300 text-sm">
                      Coordinate complex workflows across multiple agents with built-in task distribution.
                    </p>
                  </GlowingCard>

                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-green-500/20">
                    <div className="text-4xl mb-4 text-center">🌐</div>
                    <h4 className="text-xl font-semibold mb-4 text-green-400">Cross-Platform</h4>
                    <p className="text-gray-300 text-sm">
                      Runs on any device - from mobile to desktop to edge computing environments.
                    </p>
                  </GlowingCard>
                </div>
              </motion.div>

              {/* Architecture */}
              <motion.div variants={itemVariants} className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center">
                  <HeaderText>Architecture</HeaderText>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-cyan-500/20">
                    <h4 className="text-xl font-semibold mb-4 text-cyan-400">Kernel Layer</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• Agent lifecycle management</li>
                      <li>• Memory and state persistence</li>
                      <li>• Resource allocation and scheduling</li>
                      <li>• Security and sandboxing</li>
                    </ul>
                  </GlowingCard>

                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-teal-500/20">
                    <h4 className="text-xl font-semibold mb-4 text-teal-400">Protocol Layer</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• ION integration for ontology routing</li>
                      <li>• AlphaRouter for model selection</li>
                      <li>• Handle-based identity system</li>
                      <li>• Vault connectivity</li>
                    </ul>
                  </GlowingCard>

                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20">
                    <h4 className="text-xl font-semibold mb-4 text-blue-400">Application Layer</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• AgentChat interface</li>
                      <li>• Developer tools and SDKs</li>
                      <li>• Agent marketplace integration</li>
                      <li>• Hardware device support</li>
                    </ul>
                  </GlowingCard>

                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
                    <h4 className="text-xl font-semibold mb-4 text-purple-400">Network Layer</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• Peer-to-peer agent communication</li>
                      <li>• Distributed task execution</li>
                      <li>• Cross-device synchronization</li>
                      <li>• Edge computing support</li>
                    </ul>
                  </GlowingCard>
                </div>
              </motion.div>

              {/* Use Cases */}
              <motion.div variants={itemVariants} className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center">
                  <HeaderText>Use Cases</HeaderText>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6">
                    <div className="text-4xl mb-4">🏢</div>
                    <h4 className="font-bold text-lg mb-2 text-cyan-400">Enterprise</h4>
                    <p className="text-gray-300 text-sm">Deploy agent fleets for automation, customer service, and business intelligence</p>
                  </div>
                  <div className="text-center p-6">
                    <div className="text-4xl mb-4">👨‍💻</div>
                    <h4 className="font-bold text-lg mb-2 text-teal-400">Developers</h4>
                    <p className="text-gray-300 text-sm">Build and deploy AI agents with full SDK support and development tools</p>
                  </div>
                  <div className="text-center p-6">
                    <div className="text-4xl mb-4">🏠</div>
                    <h4 className="font-bold text-lg mb-2 text-blue-400">Personal</h4>
                    <p className="text-gray-300 text-sm">Run personal AI assistants across all your devices with seamless sync</p>
                  </div>
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div variants={itemVariants} className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold text-2xl rounded-lg shadow-lg shadow-cyan-500/20 mr-4"
                >
                  DEPLOY AGENT OS
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-2xl rounded-lg hover:bg-white/10 transition-colors"
                >
                  VIEW DOCUMENTATION
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};
