'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ParticleBackground from '@/components/ui/particle-background';

const DashboardPage = () => {
  return (
    <div className="relative min-h-screen w-full">
      <ParticleBackground />
      <Header />
      
      <div className="relative pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Dashboard
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Manage your webinars, analytics, and AI-powered features from your unified control center.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <div className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
                <div className="text-3xl mb-4">🎥</div>
                <h3 className="text-lg font-bold text-white mb-2">Live Webinars</h3>
                <p className="text-gray-400 text-sm">Host token-gated events with AI co-hosts</p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm border border-pink-500/20 rounded-lg p-6">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-lg font-bold text-white mb-2">Analytics</h3>
                <p className="text-gray-400 text-sm">Track engagement and revenue metrics</p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
                <div className="text-3xl mb-4">🪙</div>
                <h3 className="text-lg font-bold text-white mb-2">Token Gating</h3>
                <p className="text-gray-400 text-sm">Control access with AI Tokens</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DashboardPage;
