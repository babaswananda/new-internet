'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GlowingCard } from '@/components/ui/glowing-card';
import MainLayout from '@/components/layout/MainLayout';

export default function ADKPage() {
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-500 to-cyan-500">
                  Agent Dev Kit
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                <span className="font-normal">Build.</span> <span className="font-bold">Deploy.</span> <span className="font-normal">Scale.</span> <span className="font-bold">Dominate.</span>
              </h2>
              <p className="text-xl text-gray-300 mb-4">
                The complete toolkit for building, testing, and deploying AI agents.
              </p>
              <p className="text-lg text-gray-400 max-w-4xl mx-auto">
                Build logic like an Operator. Deploy it like a god. The ADK gives you everything you need to create 
                production-ready agents that integrate seamlessly with the Unified AI ecosystem.
              </p>
            </motion.div>

            {/* Core Features */}
            <motion.div variants={itemVariants} className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">
                <span className="font-normal">Everything</span> <span className="font-bold">You</span> <span className="font-normal">Need</span> <span className="font-bold">to Build</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-green-500/20">
                  <div className="text-4xl mb-4 text-center">🛠️</div>
                  <h4 className="text-xl font-semibold mb-4 text-green-400">Agent Builder</h4>
                  <p className="text-gray-300">
                    Visual agent builder with drag-and-drop components, pre-built templates, and custom logic blocks.
                  </p>
                </GlowingCard>
                
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-teal-500/20">
                  <div className="text-4xl mb-4 text-center">🧪</div>
                  <h4 className="text-xl font-semibold mb-4 text-teal-400">Testing Suite</h4>
                  <p className="text-gray-300">
                    Comprehensive testing environment with simulation, load testing, and behavior validation.
                  </p>
                </GlowingCard>
                
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/20">
                  <div className="text-4xl mb-4 text-center">🚀</div>
                  <h4 className="text-xl font-semibold mb-4 text-cyan-400">One-Click Deploy</h4>
                  <p className="text-gray-300">
                    Deploy to AlphaRouter, ION, or your own infrastructure with a single command.
                  </p>
                </GlowingCard>
                
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
                  <div className="text-4xl mb-4 text-center">📊</div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-400">Analytics Dashboard</h4>
                  <p className="text-gray-300">
                    Real-time monitoring, performance metrics, and usage analytics for your agents.
                  </p>
                </GlowingCard>
                
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                  <div className="text-4xl mb-4 text-center">🔗</div>
                  <h4 className="text-xl font-semibold mb-4 text-purple-400">Integration Hub</h4>
                  <p className="text-gray-300">
                    Connect to APIs, databases, blockchains, and external services with pre-built connectors.
                  </p>
                </GlowingCard>
                
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-pink-500/20">
                  <div className="text-4xl mb-4 text-center">💰</div>
                  <h4 className="text-xl font-semibold mb-4 text-pink-400">Monetization Tools</h4>
                  <p className="text-gray-300">
                    Built-in payment processing, subscription management, and revenue sharing.
                  </p>
                </GlowingCard>
              </div>
            </motion.div>

            {/* Development Workflow */}
            <motion.div variants={itemVariants} className="mb-16">
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-green-500/20">
                <h3 className="text-2xl font-semibold mb-6 text-green-400 text-center">
                  <span className="font-normal">Development</span> <span className="font-bold">Workflow</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <h4 className="font-semibold mb-2">Design</h4>
                    <p className="text-gray-300 text-sm">Use visual builder or code editor</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <h4 className="font-semibold mb-2">Test</h4>
                    <p className="text-gray-300 text-sm">Validate in simulation environment</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">3</span>
                    </div>
                    <h4 className="font-semibold mb-2">Deploy</h4>
                    <p className="text-gray-300 text-sm">One-click deployment to network</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">4</span>
                    </div>
                    <h4 className="font-semibold mb-2">Monitor</h4>
                    <p className="text-gray-300 text-sm">Track performance and optimize</p>
                  </div>
                </div>
              </GlowingCard>
            </motion.div>

            {/* Code Example */}
            <motion.div variants={itemVariants} className="mb-16">
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-cyan-500/20">
                <h3 className="text-2xl font-semibold mb-6 text-cyan-400 text-center">
                  <span className="font-normal">Simple</span> <span className="font-bold">Agent</span> <span className="font-normal">Creation</span>
                </h3>
                <div className="bg-black/60 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                  <div className="text-green-400 mb-2">// Create a trading agent with ADK</div>
                  <div className="text-blue-400 mb-2">import &#123; Agent, TradingModule, AlertModule &#125; from '@unified-ai/adk';</div>
                  <div className="text-gray-300 mb-4"></div>
                  <div className="text-purple-400 mb-2">const tradingAgent = new Agent(&#123;</div>
                  <div className="text-gray-300 ml-4 mb-1">name: 'MyTradingBot',</div>
                  <div className="text-gray-300 ml-4 mb-1">modules: [TradingModule, AlertModule],</div>
                  <div className="text-gray-300 ml-4 mb-1">config: &#123; risk: 'low', strategy: 'dca' &#125;</div>
                  <div className="text-purple-400 mb-4">&#125;);</div>
                  <div className="text-yellow-400 mb-2">// Deploy to AlphaRouter</div>
                  <div className="text-cyan-400">await tradingAgent.deploy('alpharouter');</div>
                </div>
              </GlowingCard>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-bold text-2xl rounded-lg shadow-lg shadow-green-500/20 mr-4"
              >
                GET ADK
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-2xl rounded-lg hover:bg-white/10 transition-colors"
              >
                VIEW DOCS
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
