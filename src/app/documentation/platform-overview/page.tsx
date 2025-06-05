'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { ArrowLeft, Zap, Users, Code, Coins, Shield, Globe } from 'lucide-react';
import Link from 'next/link';

export default function PlatformOverviewPage() {
  const coreComponents = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'I.O. (Intelligent Operator)',
      description: 'Your central AI management system that orchestrates agents, protocols, and digital assets.',
      features: ['Agent deployment', 'Protocol management', 'Resource optimization', 'Performance monitoring']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'AI Agents Marketplace',
      description: 'Deploy specialized AI agents for healthcare, finance, real estate, and other industries.',
      features: ['Pre-built agents', 'Custom development', 'Revenue sharing', 'Industry-specific solutions']
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Protocol Stack',
      description: 'ION Network, AlphaRouter, and AgentChat form the backbone of the Agentic Internet.',
      features: ['ION semantic layer', 'AlphaRouter optimization', 'AgentChat interface', 'Handle registry']
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: 'Token Economy',
      description: 'AI Tokens and UtilityCoin power transactions, staking, and governance in the ecosystem.',
      features: ['AI Tokens ITO', 'UtilityCoin protocol', 'Vault staking', 'Governance rights']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Digital Identity',
      description: 'Handle-based identity system with vault storage and cross-protocol authentication.',
      features: ['Unique handles', 'Vault security', 'Cross-platform auth', 'Asset management']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Agentic Internet',
      description: 'The new internet where AI agents interact autonomously using semantic protocols.',
      features: ['Agent communication', 'Semantic understanding', 'Autonomous transactions', 'Protocol interop']
    }
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <section className="py-12 bg-gradient-to-b from-purple-900/20 to-black">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <Link
                href="/documentation"
                className="p-2 bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-lg hover:border-purple-500/50 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Platform Overview
                </h1>
                <p className="text-gray-400 mt-2">Understanding the Unified AI ecosystem</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-6 max-w-4xl">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-6">What is Unified AI?</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-300 mb-6">
                  Unified AI is the foundational infrastructure for the <strong>Agentic Internet</strong> — a new paradigm where
                  AI agents operate agentically, communicate semantically, and transact value across protocols.
                </p>
                <p className="text-gray-300 mb-6">
                  Unlike traditional AI platforms that focus on single-use chatbots, Unified AI provides a complete ecosystem 
                  for deploying, managing, and monetizing specialized AI agents that solve real-world problems across industries.
                </p>
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-purple-400 mb-3">🎯 Our Mission</h3>
                  <p className="text-gray-300">
                    To create the infrastructure layer that enables AI agents to become autonomous economic actors, 
                    transforming how we interact with technology and each other in the digital economy.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Core Components */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Core Components</h2>
              <div className="grid gap-8">
                {coreComponents.map((component, index) => (
                  <motion.div
                    key={component.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
                        {component.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{component.title}</h3>
                        <p className="text-gray-300 mb-4">{component.description}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {component.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                              <span className="text-sm text-gray-400">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Platform Architecture</h2>
              <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-purple-400 mb-4">Layered Architecture</h3>
                  </div>
                  
                  {/* Layer 1 */}
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-4">
                    <h4 className="text-lg font-bold text-white mb-2">Layer 1: Identity & Assets</h4>
                    <p className="text-gray-300 text-sm">Handle registry, vault system, token economy</p>
                  </div>

                  {/* Layer 2 */}
                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg p-4">
                    <h4 className="text-lg font-bold text-white mb-2">Layer 2: Protocol Stack</h4>
                    <p className="text-gray-300 text-sm">ION Network, AlphaRouter, AgentChat protocol</p>
                  </div>

                  {/* Layer 3 */}
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-4">
                    <h4 className="text-lg font-bold text-white mb-2">Layer 3: Agent Layer</h4>
                    <p className="text-gray-300 text-sm">AI agents, specialized tools, industry solutions</p>
                  </div>

                  {/* Layer 4 */}
                  <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-lg p-4">
                    <h4 className="text-lg font-bold text-white mb-2">Layer 4: User Interface</h4>
                    <p className="text-gray-300 text-sm">I.O. dashboard, AgentChat, browser extensions</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Getting Started */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Getting Started</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href="/documentation/account-setup"
                  className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-xl hover:border-purple-400/50 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    1. Account Setup
                  </h3>
                  <p className="text-gray-400">Create your account and configure your profile</p>
                </Link>

                <Link
                  href="/documentation/handle-registration"
                  className="p-6 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-500/30 rounded-xl hover:border-blue-400/50 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    2. Claim Your Handle
                  </h3>
                  <p className="text-gray-400">Register your unique digital identity</p>
                </Link>

                <Link
                  href="/documentation/first-agent"
                  className="p-6 bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm border border-green-500/30 rounded-xl hover:border-green-400/50 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    3. Deploy First Agent
                  </h3>
                  <p className="text-gray-400">Launch your first AI agent in minutes</p>
                </Link>

                <Link
                  href="/documentation/subscription-plans"
                  className="p-6 bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-sm border border-orange-500/30 rounded-xl hover:border-orange-400/50 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    4. Choose Your Plan
                  </h3>
                  <p className="text-gray-400">Select the I.O. tier that fits your needs</p>
                </Link>
              </div>
            </motion.div>

            {/* Next Steps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Build?</h3>
                <p className="text-gray-300 mb-6">
                  Start with our quick setup guide or dive into specific documentation sections.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/documentation/account-setup"
                    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
                  >
                    Quick Start Guide
                  </Link>
                  <Link
                    href="/documentation/api-reference"
                    className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-colors"
                  >
                    API Documentation
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
