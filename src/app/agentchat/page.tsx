'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { GlowingCard } from '@/components/ui/glowing-card';

const AgentChatPage = () => {
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
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                    AgentChat
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  <span className="font-normal">Chat.</span> <span className="font-bold">Orchestrate.</span> <span className="font-normal">Deploy.</span> <span className="font-bold">Scale.</span>
                </p>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                  AgentChat isn't just another chatbot. It's your entire digital operating system,
                  accessible through a conversational interface. Manage your agents, deploy your stack,
                  and run your digital life from one unified chat experience.
                </p>
              </motion.div>

              {/* Features Grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20">
                  <div className="text-4xl mb-4">💬</div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">AI Inbox</h3>
                  <p className="text-gray-300">
                    All your AI conversations, agent reports, and system notifications in one unified inbox.
                  </p>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">Agent Fleet</h3>
                  <p className="text-gray-300">
                    Deploy, manage, and coordinate your entire fleet of AI agents from a single interface.
                  </p>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-green-500/20">
                  <div className="text-4xl mb-4">📱</div>
                  <h3 className="text-xl font-semibold mb-4 text-green-400">Device Control</h3>
                  <p className="text-gray-300">
                    Control your devices, IoT systems, and smart home through natural conversation.
                  </p>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-yellow-500/20">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold mb-4 text-yellow-400">Dashboard</h3>
                  <p className="text-gray-300">
                    Real-time analytics, system status, and performance metrics for your entire stack.
                  </p>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-red-500/20">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold mb-4 text-red-400">Drops & Events</h3>
                  <p className="text-gray-300">
                    Manage token drops, NFT releases, and community events directly from chat.
                  </p>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-cyan-500/20">
                  <div className="text-4xl mb-4">🔧</div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Stack Management</h3>
                  <p className="text-gray-300">
                    Deploy, update, and monitor your entire technology stack through conversation.
                  </p>
                </GlowingCard>
              </motion.div>

              {/* Command Examples */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-green-500/20">
                  <h3 className="text-2xl font-semibold mb-6 text-green-400 text-center">💻 Chat Commands That Work</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-sm">
                    <div className="bg-black/60 rounded-lg p-4">
                      <div className="text-green-400 mb-2">"Deploy my trading bot to mainnet"</div>
                      <div className="text-blue-400 mb-2">"Show me my agent performance metrics"</div>
                      <div className="text-purple-400">"Schedule a token drop for Friday"</div>
                    </div>
                    <div className="bg-black/60 rounded-lg p-4">
                      <div className="text-yellow-400 mb-2">"Update my portfolio dashboard"</div>
                      <div className="text-red-400 mb-2">"Connect my new IoT devices"</div>
                      <div className="text-cyan-400">"Generate my weekly AI report"</div>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* CTA Section */}
              <motion.div variants={itemVariants} className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-2xl rounded-lg shadow-lg shadow-blue-500/20 mr-4"
                >
                  START YOUR AGENTCHAT
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-2xl rounded-lg hover:bg-white/10 transition-colors"
                >
                  VIEW DEMO
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default AgentChatPage;
