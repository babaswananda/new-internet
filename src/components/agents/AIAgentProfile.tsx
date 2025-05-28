'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AIAgent } from '@/data/aiAgents';
import { 
  Bot, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Zap, 
  GitFork,
  ExternalLink,
  Download,
  Star,
  Target,
  Settings,
  BarChart3
} from 'lucide-react';
import Link from 'next/link';

interface AIAgentProfileProps {
  agent: AIAgent;
}

export default function AIAgentProfile({ agent }: AIAgentProfileProps) {
  const getCategoryColor = (category: string) => {
    const colors = {
      utility: 'from-blue-500 to-cyan-500',
      commerce: 'from-green-500 to-emerald-500',
      media: 'from-purple-500 to-pink-500',
      intelligence: 'from-orange-500 to-red-500',
      spiritual: 'from-indigo-500 to-purple-500',
      infrastructure: 'from-gray-500 to-slate-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      utility: '🔧',
      commerce: '🛍️',
      media: '🎙️',
      intelligence: '🧠',
      spiritual: '🔮',
      infrastructure: '🏗️'
    };
    return icons[category as keyof typeof icons] || '🤖';
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-purple-900/20 to-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              {/* Agent Avatar */}
              <div className="relative inline-block mb-6">
                <div className={`w-32 h-32 bg-gradient-to-br ${getCategoryColor(agent.category)} rounded-full flex items-center justify-center text-4xl mx-auto`}>
                  {getCategoryIcon(agent.category)}
                </div>
                {agent.remixable && (
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-black flex items-center justify-center">
                    <GitFork className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>

              {/* Name & Category */}
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                {agent.name}
              </h1>
              <p className="text-xl text-purple-400 font-medium mb-2 capitalize">{agent.category} Agent</p>
              <p className="text-gray-400 mb-6">{agent.function}</p>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{agent.popularity}%</div>
                  <div className="text-sm text-gray-400">Popularity</div>
                </div>
                
                <div className="text-center p-4 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl">
                  <DollarSign className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{agent.earnings}</div>
                  <div className="text-sm text-gray-400">Avg Earnings</div>
                </div>
                
                <div className="text-center p-4 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl">
                  <Zap className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{agent.pricing.deploymentCost}</div>
                  <div className="text-sm text-gray-400">Deploy Cost</div>
                </div>
                
                <div className="text-center p-4 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl">
                  <BarChart3 className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{agent.pricing.revenueShare}</div>
                  <div className="text-sm text-gray-400">Revenue Share</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <Zap className="w-5 h-5 inline mr-2" />
                  Deploy Agent
                </motion.button>
                
                {agent.remixable && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border border-green-500/50 rounded-xl font-bold text-green-300 hover:bg-green-500/10 transition-all duration-300"
                  >
                    <GitFork className="w-5 h-5 inline mr-2" />
                    Remix Agent
                  </motion.button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-purple-300">About {agent.name}</h2>
              <p className="text-lg text-gray-300 leading-relaxed">{agent.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features & Capabilities */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-purple-300">Features & Capabilities</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl"
              >
                <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  Core Features
                </h3>
                <ul className="space-y-3">
                  {agent.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl"
              >
                <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Target Users
                </h3>
                <div className="space-y-3">
                  {agent.targetUsers.map((user, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-blue-400" />
                      <span className="text-gray-300">{user}</span>
                    </div>
                  ))}
                </div>
                
                <h4 className="text-lg font-semibold text-purple-300 mt-6 mb-3">Monetization Strategy</h4>
                <p className="text-gray-300">{agent.monetizationAngle}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & ROI */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-purple-300">Pricing & Revenue Model</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-6 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl"
              >
                <Zap className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Deployment Cost</h3>
                <div className="text-2xl font-bold text-white mb-2">{agent.pricing.deploymentCost}</div>
                <p className="text-sm text-gray-400">One-time setup fee</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-6 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl"
              >
                <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Usage Fee</h3>
                <div className="text-2xl font-bold text-white mb-2">{agent.pricing.usageFee}</div>
                <p className="text-sm text-gray-400">Per transaction/use</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center p-6 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl"
              >
                <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Revenue Share</h3>
                <div className="text-2xl font-bold text-white mb-2">{agent.pricing.revenueShare}</div>
                <p className="text-sm text-gray-400">To original creator</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation & Deployment */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-purple-300">Ready to Deploy?</h2>
              <p className="text-gray-300 mb-8">
                Get started with {agent.name} in minutes. Download the documentation, 
                deploy to your handle, and start monetizing immediately.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/docs/agents/${agent.id}.md`}>
                  <motion.button
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Docs</span>
                  </motion.button>
                </Link>
                
                <motion.button
                  className="px-6 py-3 border border-purple-500/50 rounded-xl font-bold text-purple-300 hover:bg-purple-500/10 transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
