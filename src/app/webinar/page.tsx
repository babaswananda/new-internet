'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { GlowingCard } from '@/components/ui/glowing-card';
import { HeaderText, TLDName } from '@/utils/normalBold';

const WebinarPage = () => {
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
      icon: "🎤",
      title: "Token-Gated Entry",
      description: "Control access with AI Tokens or custom requirements"
    },
    {
      icon: "🧠", 
      title: "AI Co-hosts",
      description: "Live agents assist with Q&A and audience engagement"
    },
    {
      icon: "📝",
      title: "Live Interaction", 
      description: "Real-time notes, polls, and action triggers"
    },
    {
      icon: "🧑‍🏫",
      title: "Creator Vaults",
      description: "Built-in monetization for teachers and trainers"
    },
    {
      icon: "💰",
      title: "On-Chain Ticketing",
      description: "Blockchain-based tickets and post-event monetization"
    }
  ];

  const useCases = [
    {
      title: "Investor Briefings",
      description: "Secure, token-gated presentations for stakeholders",
      icon: "📊"
    },
    {
      title: "Protocol Onboarding", 
      description: "Educational sessions for new users and developers",
      icon: "🚀"
    },
    {
      title: "MemeCoin Launches",
      description: "Hype-driven launch events with community engagement",
      icon: "🚀"
    },
    {
      title: "Education Drops",
      description: "Knowledge sharing with built-in monetization",
      icon: "🎓"
    },
    {
      title: "Creator AMAs",
      description: "Ask-me-anything sessions with fan interaction",
      icon: "💬"
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
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
                    <HeaderText>Webinar Protocol</HeaderText>
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  <HeaderText>Broadcast Protocol For Token-Gated Events</HeaderText>
                </p>
                <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-8">
                  A full-stack webinar + LMS layer natively built into the Unified AI OS. 
                  Stream events, drops, training, and campaigns — powered by tokens and agents.
                </p>
                <div className="bg-black/60 rounded-lg p-4 font-mono text-sm text-center max-w-2xl mx-auto">
                  <div className="text-orange-400">social<TLDName>.webinar</TLDName>/yourvault</div>
                  <div className="text-red-400 mt-2">webinar.unifiedai/ai-made-me-rich</div>
                </div>
              </motion.div>

              {/* Features Grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {features.map((feature, index) => (
                  <GlowingCard key={index} className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-orange-500/20">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl mb-4 text-orange-400"><HeaderText>{feature.title}</HeaderText></h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </GlowingCard>
                ))}
              </motion.div>

              {/* Use Cases */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl mb-8 text-center"><HeaderText>Use Cases</HeaderText></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {useCases.map((useCase, index) => (
                    <GlowingCard key={index} className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-red-500/20">
                      <div className="text-3xl mb-4">{useCase.icon}</div>
                      <h3 className="text-lg mb-3 text-red-400"><HeaderText>{useCase.title}</HeaderText></h3>
                      <p className="text-gray-300">{useCase.description}</p>
                    </GlowingCard>
                  ))}
                </div>
              </motion.div>

              {/* How It Works */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
                  <h2 className="text-3xl mb-6 text-purple-400 text-center"><HeaderText>How It Works</HeaderText></h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl mb-4">1️⃣</div>
                      <h3 className="text-lg mb-3 text-white"><HeaderText>Create Event</HeaderText></h3>
                      <p className="text-gray-300">Set up your webinar with custom branding and access controls</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-4">2️⃣</div>
                      <h3 className="text-lg mb-3 text-white"><HeaderText>Set Token Gates</HeaderText></h3>
                      <p className="text-gray-300">Configure entry requirements and pricing models</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-4">3️⃣</div>
                      <h3 className="text-lg mb-3 text-white"><HeaderText>Deploy AI Agents</HeaderText></h3>
                      <p className="text-gray-300">Add co-host agents for Q&A and audience management</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-4">4️⃣</div>
                      <h3 className="text-lg mb-3 text-white"><HeaderText>Go Live</HeaderText></h3>
                      <p className="text-gray-300">Broadcast with real-time interaction and monetization</p>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Monetization */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-green-500/20">
                  <h2 className="text-3xl mb-6 text-green-400 text-center"><HeaderText>Built-in Monetization</HeaderText></h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl mb-4 text-white"><HeaderText>Revenue Streams</HeaderText></h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Ticket sales with AI Token payments</li>
                        <li>• Premium content tiers</li>
                        <li>• Post-event course sales</li>
                        <li>• Sponsor integrations</li>
                        <li>• NFT drops during events</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl mb-4 text-white"><HeaderText>Creator Tools</HeaderText></h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Vault-based subscriber management</li>
                        <li>• Automated follow-up sequences</li>
                        <li>• Analytics and engagement tracking</li>
                        <li>• Multi-event series management</li>
                        <li>• Community building features</li>
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
                  className="px-12 py-6 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-2xl rounded-lg shadow-lg shadow-orange-500/20 mr-4"
                >
                  CREATE WEBINAR
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-2xl rounded-lg hover:bg-white/10 transition-colors"
                >
                  BROWSE EVENTS
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default WebinarPage;
