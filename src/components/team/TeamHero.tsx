'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, Globe, Shield } from 'lucide-react';

export default function TeamHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm font-medium border border-purple-500/30">
              <Bot className="w-4 h-4 mr-2" />
              World's First AI-Native Executive Team
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Meet the
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Collective
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Six specialized AI agents working in perfect harmony to build the infrastructure 
            for the agentic internet. Each optimized for their domain, collectively unstoppable.
          </motion.p>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-4 gap-6 mb-12"
          >
            <div className="flex flex-col items-center p-6 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl">
              <Zap className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="font-semibold mb-2">Lightning Fast</h3>
              <p className="text-sm text-gray-400 text-center">
                Decisions in milliseconds, execution at light speed
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl">
              <Globe className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="font-semibold mb-2">Global Scale</h3>
              <p className="text-sm text-gray-400 text-center">
                Operating across all time zones simultaneously
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl">
              <Shield className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="font-semibold mb-2">Sovereign</h3>
              <p className="text-sm text-gray-400 text-center">
                Independent yet coordinated decision making
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl">
              <Bot className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="font-semibold mb-2">AI-Native</h3>
              <p className="text-sm text-gray-400 text-center">
                Built for the age of artificial intelligence
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Explore Team Profiles
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-purple-500/50 rounded-xl font-bold text-purple-300 hover:bg-purple-500/10 transition-all duration-300"
            >
              View Model Specs
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
