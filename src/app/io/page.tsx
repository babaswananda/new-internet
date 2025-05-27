'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GlowingCard } from '@/components/ui/glowing-card';
import { IOChatInterface } from '@/components/ui/IOChatInterface';
import MainLayout from '@/components/layout/MainLayout';

export default function IOPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isChatOpen, setIsChatOpen] = useState(false);

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
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                  IO
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                <span className="font-normal">Your</span> <span className="font-bold">Intelligent</span> <span className="font-normal">Operator</span>
              </h2>
              <p className="text-xl text-gray-300 mb-4">
                The AI that runs your AI. Command your entire digital ecosystem.
              </p>
              <p className="text-lg text-gray-400 max-w-4xl mx-auto">
                IO is the next evolution of AI interaction. Not just a chatbot, but your personal
                Intelligent Operator that manages agents, orchestrates workflows, and commands your digital life.
              </p>
            </motion.div>

            {/* IO Expansions */}
            <motion.div variants={itemVariants} className="mb-16">
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
                <h3 className="text-2xl font-semibold mb-6 text-purple-400 text-center">
                  <span className="font-normal">IO</span> <span className="font-bold">Means</span> <span className="font-normal">Everything</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center p-4">
                    <h4 className="font-bold text-lg mb-2 text-blue-400">Intelligent Operator</h4>
                    <p className="text-gray-300 text-sm">Your primary AI that manages all other AI</p>
                  </div>
                  <div className="text-center p-4">
                    <h4 className="font-bold text-lg mb-2 text-green-400">Input → Orchestration</h4>
                    <p className="text-gray-300 text-sm">Transforms your intent into coordinated action</p>
                  </div>
                  <div className="text-center p-4">
                    <h4 className="font-bold text-lg mb-2 text-cyan-400">Infrastructure Operator</h4>
                    <p className="text-gray-300 text-sm">Manages your entire tech stack and resources</p>
                  </div>
                  <div className="text-center p-4">
                    <h4 className="font-bold text-lg mb-2 text-pink-400">Internet Operator</h4>
                    <p className="text-gray-300 text-sm">Your interface to the new agentic internet</p>
                  </div>
                  <div className="text-center p-4">
                    <h4 className="font-bold text-lg mb-2 text-yellow-400">Intention Output</h4>
                    <p className="text-gray-300 text-sm">Speaks your intent, executes your vision</p>
                  </div>
                  <div className="text-center p-4">
                    <h4 className="font-bold text-lg mb-2 text-red-400">Intelligence Orchestrator</h4>
                    <p className="text-gray-300 text-sm">Conducts your symphony of AI agents</p>
                  </div>
                </div>
              </GlowingCard>
            </motion.div>

            {/* What IO Does */}
            <motion.div variants={itemVariants} className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">
                <span className="font-normal">What</span> <span className="font-bold">IO</span> <span className="font-normal">Actually</span> <span className="font-bold">Does</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
                  <div className="text-4xl mb-4 text-center">🧠</div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-400">Agent Management</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Deploy and manage your AI agent fleet</li>
                    <li>• Coordinate multi-agent workflows</li>
                    <li>• Monitor agent performance and health</li>
                    <li>• Scale agents based on demand</li>
                  </ul>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                  <div className="text-4xl mb-4 text-center">⚡</div>
                  <h4 className="text-xl font-semibold mb-4 text-purple-400">Infrastructure Control</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Manage your entire tech stack</li>
                    <li>• Auto-scale compute resources</li>
                    <li>• Handle deployments and updates</li>
                    <li>• Monitor system health and costs</li>
                  </ul>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-green-500/20">
                  <div className="text-4xl mb-4 text-center">🎯</div>
                  <h4 className="text-xl font-semibold mb-4 text-green-400">Workflow Orchestration</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Design complex multi-step workflows</li>
                    <li>• Coordinate between different services</li>
                    <li>• Handle errors and retries automatically</li>
                    <li>• Optimize workflow performance</li>
                  </ul>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-red-500/20">
                  <div className="text-4xl mb-4 text-center">🌐</div>
                  <h4 className="text-xl font-semibold mb-4 text-red-400">Digital Ecosystem</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Connect to APIs and external services</li>
                    <li>• Manage your digital identity and assets</li>
                    <li>• Handle payments and transactions</li>
                    <li>• Integrate with blockchain and DeFi</li>
                  </ul>
                </GlowingCard>
              </div>
            </motion.div>

            {/* IO vs Others */}
            <motion.div variants={itemVariants} className="mb-16">
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-yellow-500/20">
                <h3 className="text-2xl font-semibold mb-6 text-yellow-400 text-center">
                  <span className="font-normal">IO vs</span> <span className="font-bold">Traditional</span> <span className="font-normal">AI</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h4 className="font-bold text-lg mb-4 text-red-400">❌ Basic Chat</h4>
                    <p className="text-gray-300 text-sm">Just a chatbot. Can't deploy, manage, or orchestrate anything real.</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-lg mb-4 text-red-400">❌ Legacy Models</h4>
                    <p className="text-gray-300 text-sm">Smart but isolated. No infrastructure control or agent management.</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-lg mb-4 text-green-400">✅ IO</h4>
                    <p className="text-gray-300 text-sm">Actually runs your digital life. Deploys, manages, orchestrates everything.</p>
                  </div>
                </div>
              </GlowingCard>
            </motion.div>

            {/* Try IO */}
            <motion.div variants={itemVariants} className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsChatOpen(true)}
                className="px-12 py-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-2xl rounded-lg shadow-lg shadow-purple-500/20 mr-4"
              >
                TALK TO IO
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-2xl rounded-lg hover:bg-white/10 transition-colors"
              >
                DEPLOY YOUR IO
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* IO Chat Interface */}
      <AnimatePresence>
        {isChatOpen && (
          <IOChatInterface
            isOpen={isChatOpen}
            onClose={() => setIsChatOpen(false)}
          />
        )}
      </AnimatePresence>
    </MainLayout>
  );
}
