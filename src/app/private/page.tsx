'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeaderText from '@/components/ui/header-text';
import SpaceParticlesBackground from '@/components/ui/SpaceParticlesBackground';

export default function PrivateTokenPage() {
  const [accessCode, setAccessCode] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);

  const handleAccessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple access control - in production, this would be server-side
    if (accessCode === 'FOUNDING_BACKER_2024' || accessCode === 'FRIENDS_FAMILY') {
      setIsAuthorized(true);
    } else {
      alert('Invalid access code. Please contact the team for access.');
    }
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center">
        <SpaceParticlesBackground particleCount={200} color="purple" speed="slow" depth={true} interactive={true} />

        <div className="relative z-10 max-w-md mx-auto p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8 text-center"
          >
            <h1 className="text-3xl font-bold mb-4">
              <HeaderText>Private Access Required</HeaderText>
            </h1>
            <p className="text-gray-300 mb-6">
              This page contains token-related information for authorized investors only.
            </p>

            <form onSubmit={handleAccessSubmit} className="space-y-4">
              <input
                type="password"
                placeholder="Enter access code"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                Access Private Content
              </button>
            </form>

            <p className="text-sm text-gray-400 mt-4">
              Don't have access? Contact <a href="mailto:invest@io.unifiedai" className="text-purple-400 hover:text-purple-300">invest@io.unifiedai</a>
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <SpaceParticlesBackground particleCount={200} color="purple" speed="slow" depth={true} interactive={true} />

      <div className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <HeaderText>🔒 Private Token Information</HeaderText>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Exclusive access to AI Tokens ITO, UtilityCoin details, and investment opportunities.
            </p>
          </motion.div>

          {/* Token Information Sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-purple-400">AI Tokens ITO</h2>
              <ul className="space-y-2 text-gray-300">
                <li>• 72-hour public offering window</li>
                <li>• Handle reservation utility</li>
                <li>• Device access priority</li>
                <li>• Vault staking rewards</li>
                <li>• Governance participation</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-orange-400">UtilityCoin</h2>
              <ul className="space-y-2 text-gray-300">
                <li>• Protocol base currency</li>
                <li>• Governance voting rights</li>
                <li>• Staking rewards</li>
                <li>• Premium handle access</li>
                <li>• Revenue sharing</li>
              </ul>
            </motion.div>
          </div>

          {/* Investment Tiers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8 mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              <HeaderText>Investment Tiers</HeaderText>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-purple-500/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-green-400">Protocol Contributor</h3>
                <p className="text-2xl font-bold mb-4">$500 - $2,500</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• 50,000 - 250,000 AI Tokens</li>
                  <li>• Basic vault access</li>
                  <li>• Handle reservation</li>
                  <li>• Early access features</li>
                </ul>
              </div>

              <div className="border border-purple-500/20 rounded-lg p-6 bg-purple-500/10">
                <h3 className="text-xl font-bold mb-2 text-purple-400">Protocol Backer</h3>
                <p className="text-2xl font-bold mb-4">$2,500 - $10,000</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• 250,000 - 1,000,000 AI Tokens</li>
                  <li>• Premium vault access</li>
                  <li>• Governance rights</li>
                  <li>• Revenue sharing</li>
                </ul>
              </div>

              <div className="border border-purple-500/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-yellow-400">Protocol Founder</h3>
                <p className="text-2xl font-bold mb-4">$10,000+</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• 1,000,000+ AI Tokens</li>
                  <li>• High-yield vault access</li>
                  <li>• Full governance participation</li>
                  <li>• Protocol profit sharing</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Participate?</h3>
            <p className="text-gray-300 mb-6">
              Contact our investment team for detailed terms and participation instructions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:invest@io.unifiedai"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                📧 Contact Investment Team
              </a>
              <a
                href="/book-demo"
                className="px-6 py-3 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 rounded-lg transition-all"
              >
                📅 Schedule Private Demo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
