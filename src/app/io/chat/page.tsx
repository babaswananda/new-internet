'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { GlowingCard } from '@/components/ui/glowing-card';
import LibreChatEmbed from '@/components/ui/LibreChatEmbed';
import { HeaderText } from '@/utils/normalBold';
import { containerVariants, itemVariants } from '@/utils/animations';

const IOChatPortal = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [chatReady, setChatReady] = useState(false);

  useEffect(() => {
    // Simulate loading time for LibreChat initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
      setChatReady(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <MainLayout>
      <div className="min-h-screen relative">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>

        <section className="relative z-10 py-24">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-7xl mx-auto"
            >
              {/* Header */}
              <motion.div variants={itemVariants} className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                    <HeaderText>IO Chat Portal</HeaderText>
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-4">
                  Your Intelligent Operator Command Center
                </p>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                  Direct access to IO's full capabilities. Deploy agents, manage infrastructure, orchestrate workflows, and command your digital ecosystem.
                </p>
              </motion.div>

              {/* Status Bar */}
              <motion.div variants={itemVariants} className="mb-8">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-purple-500/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${chatReady ? 'bg-green-400' : 'bg-yellow-400'} animate-pulse`}></div>
                      <span className="text-white font-medium">
                        {chatReady ? 'IO System Online' : 'Initializing IO...'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>🧠 Neural Networks: Active</span>
                      <span>⚡ Compute: Ready</span>
                      <span>🔗 Agents: Connected</span>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Chat Interface Container */}
              <motion.div variants={itemVariants} className="mb-8">
                <LibreChatEmbed
                  height="70vh"
                  showHeader={true}
                  theme="unified-ai"
                />
              </motion.div>

              {/* Quick Actions */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: '🚀', title: 'Deploy Agents', desc: 'Launch your AI fleet' },
                  { icon: '🏗️', title: 'Manage Stack', desc: 'Control infrastructure' },
                  { icon: '🎯', title: 'Orchestrate', desc: 'Design workflows' },
                  { icon: '📊', title: 'Monitor', desc: 'System analytics' }
                ].map((action, index) => (
                  <GlowingCard key={index} className="bg-black/20 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:border-purple-500/30 transition-colors cursor-pointer">
                    <div className="text-center">
                      <div className="text-2xl mb-2">{action.icon}</div>
                      <h3 className="font-semibold text-white mb-1">{action.title}</h3>
                      <p className="text-xs text-gray-400">{action.desc}</p>
                    </div>
                  </GlowingCard>
                ))}
              </motion.div>

              {/* System Info */}
              <motion.div variants={itemVariants}>
                <GlowingCard className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/20">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-4">IO Capabilities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-white mb-2">Agent Management</h4>
                      <ul className="text-gray-400 space-y-1">
                        <li>• Deploy & scale agents</li>
                        <li>• Monitor performance</li>
                        <li>• Coordinate workflows</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Infrastructure</h4>
                      <ul className="text-gray-400 space-y-1">
                        <li>• Auto-scale resources</li>
                        <li>• Manage deployments</li>
                        <li>• Cost optimization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Ecosystem</h4>
                      <ul className="text-gray-400 space-y-1">
                        <li>• API integrations</li>
                        <li>• Digital asset management</li>
                        <li>• Blockchain connectivity</li>
                      </ul>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default IOChatPortal;
