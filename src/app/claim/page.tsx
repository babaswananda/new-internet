'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { GlowingCard } from '@/components/ui/glowing-card';

const ClaimPage = () => {
  const [handle, setHandle] = useState('');
  const [email, setEmail] = useState('');

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
              className="max-w-4xl mx-auto"
            >
              {/* Hero Section */}
              <motion.div variants={itemVariants} className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                    Claim Your Handle
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  Your handle is your username, email, wallet, inbox, vault, AI, and business.
                </p>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                  Once it's taken — it's taken. Forever. First time in digital history to own your entire online identity.
                </p>
              </motion.div>

              {/* Developer Mode */}
              <motion.div variants={itemVariants} className="mb-12">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-green-500/20">
                  <h3 className="text-2xl font-semibold mb-6 text-green-400 text-center">💻 Developer Mode Activated</h3>
                  <div className="bg-black/60 rounded-lg p-6 font-mono text-sm mb-6">
                    <div className="text-green-400 mb-2">$ protocol claim --handle="yourname" --network="unifiedai" --access-token="72hr-early-access"</div>
                    <div className="text-gray-400 mb-4">🧠 You're not registering. You're deploying.</div>
                    <div className="text-blue-400">.commandline/claim is where it all begins.</div>
                  </div>
                  <div className="text-center">
                    <p className="text-lg text-gray-300 mb-4">
                      Run the code. Secure your territory.<br />
                      You don't need a website. You need a command center.
                    </p>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Claim Form */}
              <motion.div variants={itemVariants} className="mb-12">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20">
                  <h3 className="text-2xl font-semibold mb-6 text-blue-400 text-center">Claim Your Handle</h3>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Choose Your Handle
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={handle}
                          onChange={(e) => setHandle(e.target.value)}
                          placeholder="yourname"
                          className="w-full px-4 py-3 bg-black/60 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                        <div className="absolute right-3 top-3 text-gray-400 text-sm">
                          .commandline
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 mt-2">
                        This will be your universal handle across all Unified AI services
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-black/60 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-blue-500/20"
                      type="submit"
                    >
                      CLAIM {handle || 'YOUR'}.COMMANDLINE
                    </motion.button>
                  </form>
                </GlowingCard>
              </motion.div>

              {/* What You Get */}
              <motion.div variants={itemVariants} className="mb-12">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
                  <h3 className="text-2xl font-semibold mb-6 text-purple-400 text-center">What You Get</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-blue-400">Your Handle Stack:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• yourname.commandline — The terminal for your internet</li>
                        <li>• yourname.agentchat — Superapp: AI Inbox, Devices, Drops</li>
                        <li>• yourname.aiagents — Your fleet of GPTs</li>
                        <li>• yourname.superagents — Token-gated power agents</li>
                        <li>• yourname.seedgpt — Precision recall, seed-based memory</li>
                        <li>• yourname.vibecoder — No-code/pro-code IDE for agents</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-green-400">Business & Communication:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• yourname.textme / videochat / callmyagent — AI-native messaging</li>
                        <li>• yourname.webinar — Token-gated events, LMS, drops</li>
                        <li>• yourname.cryptobounties — Fork-to-earn bounty board</li>
                        <li>• yourname.devagency — Dev firm in a vault</li>
                        <li>• yourname.aimarketplace — Sell agents, prompts, stacks</li>
                        <li>• yourname.aidatacenters — On-prem GPU/HaaS</li>
                      </ul>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Tech Stack Footer */}
              <motion.div variants={itemVariants} className="text-center">
                <p className="text-lg text-gray-400 mb-2">
                  Born on .Commandline/
                </p>
                <p className="text-lg text-gray-400 mb-2">
                  Routed through AlphaRouter
                </p>
                <p className="text-lg text-gray-400 mb-2">
                  Powered by FSPP
                </p>
                <p className="text-lg text-gray-400 mb-2">
                  Classified by ION
                </p>
                <p className="text-lg text-gray-400">
                  Deployed via AgentChat
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ClaimPage;
