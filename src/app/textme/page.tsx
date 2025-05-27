'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { GlowingCard } from '@/components/ui/glowing-card';
import { HeaderText, TLDName } from '@/utils/normalBold';

const TextMePage = () => {
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
      icon: "💬",
      title: "Agentic SMS-style Threads",
      description: "Smart messaging threads powered by your agents"
    },
    {
      icon: "🧠", 
      title: "AI Autoresponders",
      description: "Custom AI responses per thread and contact"
    },
    {
      icon: "🛠️",
      title: "Smart Routing", 
      description: "Route messages to specific agents (e.g., textme/sales)"
    },
    {
      icon: "💼",
      title: "Message-to-Contract",
      description: "Turn chats into actions, forms, and payments"
    },
    {
      icon: "🪪",
      title: "Verified Handles",
      description: "No phone numbers required - your handle is your identity"
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
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
                    <HeaderText>TextMe Protocol</HeaderText>
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  <HeaderText>The Messaging Protocol Of The Agentic Internet</HeaderText>
                </p>
                <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-8">
                  Texting isn't an app. It's a sovereign service. Smart, agent-powered messaging routed through your handle.
                  No phone number required. Your <TLDName>.textme</TLDName> domain is your inbox, your identity, and your intent router.
                </p>
                <div className="bg-black/60 rounded-lg p-4 font-mono text-sm text-center max-w-2xl mx-auto">
                  <div className="text-green-400">yourname<TLDName>.textme</TLDName> = Your public inbox</div>
                  <div className="text-blue-400 mt-2">just<TLDName>.textme</TLDName>/yourname = Quickstart flow</div>
                </div>
              </motion.div>

              {/* Features Grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {features.map((feature, index) => (
                  <GlowingCard key={index} className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-green-500/20">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl mb-4 text-green-400"><HeaderText>{feature.title}</HeaderText></h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </GlowingCard>
                ))}
              </motion.div>

              {/* How It Works */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20">
                  <h2 className="text-3xl mb-6 text-blue-400 text-center"><HeaderText>How It Works</HeaderText></h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-3xl mb-4">1️⃣</div>
                      <h3 className="text-lg mb-3 text-white"><HeaderText>Claim Your Handle</HeaderText></h3>
                      <p className="text-gray-300">Get yourname<TLDName>.textme</TLDName> as your sovereign messaging address</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-4">2️⃣</div>
                      <h3 className="text-lg mb-3 text-white"><HeaderText>Deploy Your Agents</HeaderText></h3>
                      <p className="text-gray-300">Set up AI agents to handle different types of messages and routing</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-4">3️⃣</div>
                      <h3 className="text-lg mb-3 text-white"><HeaderText>Start Messaging</HeaderText></h3>
                      <p className="text-gray-300">Receive messages, automate responses, and convert chats to actions</p>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Use Cases */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl mb-8 text-center"><HeaderText>Use Cases</HeaderText></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                    <h3 className="text-xl mb-4 text-purple-400"><HeaderText>Business Communication</HeaderText></h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Customer support with AI agents</li>
                      <li>• Sales lead qualification</li>
                      <li>• Appointment scheduling</li>
                      <li>• Order processing and updates</li>
                    </ul>
                  </GlowingCard>
                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-orange-500/20">
                    <h3 className="text-xl mb-4 text-orange-400"><HeaderText>Personal Use</HeaderText></h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Private messaging with friends</li>
                      <li>• Professional networking</li>
                      <li>• Content creator fan engagement</li>
                      <li>• Community management</li>
                    </ul>
                  </GlowingCard>
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div variants={itemVariants} className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold text-2xl rounded-lg shadow-lg shadow-green-500/20 mr-4"
                >
                  CLAIM YOUR .TEXTME
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-2xl rounded-lg hover:bg-white/10 transition-colors"
                >
                  LEARN MORE
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default TextMePage;
