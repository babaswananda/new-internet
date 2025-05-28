'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, Globe, DollarSign, Users, TrendingUp } from 'lucide-react';

export default function AIAgentHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm font-medium border border-purple-500/30">
              <Bot className="w-4 h-4 mr-2" />
              .AIAgents Platform - Deploy. Monetize. Multiply.
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              AI Agents for Every
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Hustle, Mission & Movement
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto"
          >
            Deploy prebuilt AI agents instantly, customize them for your needs, and monetize 
            through the protocol. From utility bots to viral meme machines - every agent is 
            remixable and revenue-ready.
          </motion.p>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="text-center p-4 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl">
              <Bot className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-gray-400">Ready Agents</div>
            </div>
            
            <div className="text-center p-4 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">10K+</div>
              <div className="text-sm text-gray-400">Deployments</div>
            </div>
            
            <div className="text-center p-4 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl">
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">$2M+</div>
              <div className="text-sm text-gray-400">Revenue Generated</div>
            </div>
            
            <div className="text-center p-4 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl">
              <TrendingUp className="w-8 h-8 text-pink-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-sm text-gray-400">Success Rate</div>
            </div>
          </motion.div>

          {/* Value Propositions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="text-center p-6 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl">
              <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">One-Click Deploy</h3>
              <p className="text-sm text-gray-400">
                Deploy any agent instantly with custom handles, branding, and monetization settings
              </p>
            </div>
            
            <div className="text-center p-6 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl">
              <Globe className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Remix & Fork</h3>
              <p className="text-sm text-gray-400">
                Clone successful agents and customize them for your specific niche or use case
              </p>
            </div>
            
            <div className="text-center p-6 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl">
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Monetize Everything</h3>
              <p className="text-sm text-gray-400">
                Earn from deployments, usage fees, and performance through the protocol's revenue sharing
              </p>
            </div>
          </motion.div>

          {/* Agent Categories Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-300">Agent Categories</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: '🔧', name: 'Utility', desc: 'Productivity & automation' },
                { icon: '🛍️', name: 'Commerce', desc: 'E-commerce & business' },
                { icon: '🎙️', name: 'Media', desc: 'Content & viral tools' },
                { icon: '🧠', name: 'Intelligence', desc: 'Analysis & research' },
                { icon: '🔮', name: 'Spiritual', desc: 'Wellness & creative' },
                { icon: '🏗️', name: 'Infrastructure', desc: 'Platform management' }
              ].map((category, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 px-4 py-2 bg-black/30 border border-gray-700 rounded-full"
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                  <span className="text-xs text-gray-400">({category.desc})</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Browse Agent Catalog
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-purple-500/50 rounded-xl font-bold text-purple-300 hover:bg-purple-500/10 transition-all duration-300"
            >
              Deploy Your First Agent
            </motion.button>
          </motion.div>

          {/* Bottom Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-gray-400 mb-2">
              "This is Shopify + App Store + Stripe — all powered by AI."
            </p>
            <p className="text-xl font-bold text-purple-400">
              Ready to build your AI empire?
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
