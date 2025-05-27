'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { GlowingCard } from '@/components/ui/glowing-card';
import { HeaderText, TLDName } from '@/utils/normalBold';

const VideoChatPage = () => {
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
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      }
    },
  };

  const features = [
    {
      icon: "🎥",
      title: "Secure Video Calls",
      description: "1:1 or group video calls with end-to-end encryption"
    },
    {
      icon: "🤖", 
      title: "AI Agent Presence",
      description: "Agents join calls, answer questions, provide context"
    },
    {
      icon: "📝",
      title: "Live Summarization", 
      description: "Real-time notes and task logging during calls"
    },
    {
      icon: "🧾",
      title: "Agent Follow-ups",
      description: "AI-crafted meeting notes and automated follow-ups"
    },
    {
      icon: "🪙",
      title: "Token-Gated Access",
      description: "Pay-per-minute sessions or token-based entry"
    }
  ];

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
                <h1 className="text-5xl md:text-7xl mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                    <HeaderText>VideoChat Protocol</HeaderText>
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  <HeaderText>Face-to-Face Agent Intelligence In Real Time</HeaderText>
                </p>
                <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-8">
                  A sovereign, token-gated, AI-enhanced video interface. Video calls where your agent screens, 
                  assists, takes notes, and handles follow-ups. The future of intelligent communication.
                </p>
                <div className="bg-black/60 rounded-lg p-4 font-mono text-sm text-center max-w-2xl mx-auto">
                  <div className="text-blue-400">lets<TLDName>.videochat</TLDName>/yourhandle</div>
                  <div className="text-purple-400 mt-2">→ Public-facing video call page</div>
                </div>
              </motion.div>

              {/* Features Grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {features.map((feature, index) => (
                  <GlowingCard key={index} className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl mb-4 text-blue-400"><HeaderText>{feature.title}</HeaderText></h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </GlowingCard>
                ))}
              </motion.div>

              {/* How It Works */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
                  <h2 className="text-3xl mb-6 text-purple-400 text-center"><HeaderText>How It Works</HeaderText></h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-3xl mb-4">1️⃣</div>
                      <h3 className="text-lg mb-3 text-white"><HeaderText>Set Up Your Room</HeaderText></h3>
                      <p className="text-gray-300">Create your lets<TLDName>.videochat</TLDName>/handle with custom settings and AI agents</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-4">2️⃣</div>
                      <h3 className="text-lg mb-3 text-white"><HeaderText>Configure Access</HeaderText></h3>
                      <p className="text-gray-300">Set token requirements, pricing, or open access for your video calls</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-4">3️⃣</div>
                      <h3 className="text-lg mb-3 text-white"><HeaderText>Start Calling</HeaderText></h3>
                      <p className="text-gray-300">Host calls with AI assistance, live notes, and automated follow-ups</p>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Use Cases */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl mb-8 text-center"><HeaderText>Use Cases</HeaderText></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-green-500/20">
                    <h3 className="text-xl mb-4 text-green-400"><HeaderText>Business Meetings</HeaderText></h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Client consultations with AI note-taking</li>
                      <li>• Sales calls with real-time assistance</li>
                      <li>• Team meetings with action item tracking</li>
                      <li>• Investor pitches with follow-up automation</li>
                    </ul>
                  </GlowingCard>
                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-orange-500/20">
                    <h3 className="text-xl mb-4 text-orange-400"><HeaderText>Creator Economy</HeaderText></h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Paid 1:1 coaching sessions</li>
                      <li>• Token-gated fan meet & greets</li>
                      <li>• Expert consultations</li>
                      <li>• Premium content creation</li>
                    </ul>
                  </GlowingCard>
                </div>
              </motion.div>

              {/* Integration */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-pink-500/20">
                  <h2 className="text-3xl mb-6 text-pink-400 text-center"><HeaderText>Seamless Integration</HeaderText></h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl mb-4 text-white"><HeaderText>Works With</HeaderText></h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• <TLDName>.agentchat</TLDName> for pre/post call messaging</li>
                        <li>• <TLDName>.webinar</TLDName> for larger broadcasts</li>
                        <li>• <TLDName>.textme</TLDName> for follow-up communications</li>
                        <li>• AI Tokens for payment and access control</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl mb-4 text-white"><HeaderText>AI Features</HeaderText></h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Real-time transcription and translation</li>
                        <li>• Sentiment analysis and mood tracking</li>
                        <li>• Automated scheduling and reminders</li>
                        <li>• Smart call routing and screening</li>
                      </ul>
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
                  START VIDEO CALLING
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-2xl rounded-lg hover:bg-white/10 transition-colors"
                >
                  EXPLORE FEATURES
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default VideoChatPage;
