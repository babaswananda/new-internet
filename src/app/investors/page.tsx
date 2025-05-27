'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { GlowingCard } from '@/components/ui/glowing-card';

const InvestorsPage = () => {
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

  const investmentFocus = [
    {
      name: "Hardware",
      type: "Strategic Investment Target",
      description: "AI device production and real-world deployment infrastructure.",
      logo: "📱"
    },
    {
      name: "Telecom",
      type: "Strategic Investment Target",
      description: "Network infrastructure for agent-to-agent communication protocols.",
      logo: "📡"
    },
    {
      name: "DePIN",
      type: "Strategic Investment Target",
      description: "Decentralized physical infrastructure for distributed agent networks.",
      logo: "🌐"
    },
    {
      name: "AI Model Expansion",
      type: "Strategic Investment Target",
      description: "Advanced model integration and ontology network expansion.",
      logo: "🧠"
    },
    {
      name: "MemeCoin + Token Economics",
      type: "Strategic Investment Target",
      description: "Token ecosystem development and viral adoption mechanisms.",
      logo: "🪙"
    }
  ];

  const metrics = [
    {
      metric: "10K+",
      label: "Vaults Claimed",
      growth: "Active",
      period: "Growing"
    },
    {
      metric: "1K+",
      label: "Developers Active",
      growth: "Early",
      period: "Ecosystem"
    },
    {
      metric: "300+",
      label: "Agent Templates Live",
      growth: "Protocol",
      period: "Ready"
    },
    {
      metric: "72hr",
      label: "Token Activation Window",
      growth: "ITO",
      period: "Open"
    }
  ];

  const milestones = [
    {
      date: "Q4 2024",
      title: "Series A Funding",
      description: "$50M led by Andreessen Horowitz",
      status: "completed"
    },
    {
      date: "Q3 2024",
      title: "ION Protocol Launch",
      description: "First ontology network for AI agents goes live",
      status: "completed"
    },
    {
      date: "Q1 2025",
      title: "Enterprise Platform",
      description: "Launch enterprise-grade agent orchestration platform",
      status: "upcoming"
    },
    {
      date: "Q2 2025",
      title: "Hardware Launch",
      description: "Begin shipping .AIPhone and .AIPods to early adopters",
      status: "upcoming"
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
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                    🏦 INVESTORS
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  <span className="font-normal">This Isn't a</span> <span className="font-bold">Pitch Deck.</span>
                </p>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  <span className="font-normal">It's an</span> <span className="font-bold">Opening.</span>
                </p>
                <div className="max-w-4xl mx-auto space-y-4">
                  <p className="text-lg text-gray-300">
                    Unified AI isn't a startup.
                  </p>
                  <p className="text-lg text-gray-300">
                    We are a protocol-layer operating system for the intelligent internet.
                  </p>
                  <p className="text-lg text-gray-300">
                    You're not buying into a brand.
                  </p>
                  <p className="text-lg text-gray-300 font-semibold">
                    You're buying into the rails of the Agentic Web.
                  </p>
                  <p className="text-lg text-gray-300 font-bold">
                    And this isn't equity.
                  </p>
                </div>
              </motion.div>

              {/* This Is Not Equity */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-yellow-500/20">
                  <h2 className="text-3xl font-bold mb-6 text-yellow-400 text-center">🪙 This Is Not Equity.</h2>
                  <h3 className="text-2xl font-bold mb-6 text-yellow-400 text-center">This Is Utility.</h3>
                  <div className="space-y-6">
                    <p className="text-lg text-gray-300 text-center">
                      Unified AI isn't offering shares.
                    </p>
                    <p className="text-lg text-gray-300 text-center font-semibold">
                      We're offering access. fuel. sovereignty.
                    </p>
                    <p className="text-lg text-gray-300 text-center">
                      This is the Agentic Economy, and it runs on:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                      <GlowingCard className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-orange-500/20">
                        <h4 className="text-xl font-semibold mb-4 text-orange-400">UtilityCoin — the Bitcoin of the Agentic Web</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>→ Base-layer asset. Store of protocol value.</li>
                          <li>→ Collateral for vaults, governance, and territory.</li>
                        </ul>
                      </GlowingCard>

                      <GlowingCard className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
                        <h4 className="text-xl font-semibold mb-4 text-blue-400">AI Tokens — the fuel for execution</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>→ Claim your handle. Launch your agent.</li>
                          <li>→ Power the workflows of the intelligent internet.</li>
                        </ul>
                      </GlowingCard>
                    </div>

                    <div className="space-y-4 mt-8">
                      <p className="text-lg text-gray-300 text-center">
                        📌 Every transaction is a protocol action — not a cap table entry.
                      </p>
                      <p className="text-lg text-gray-300 text-center">
                        📌 Every asset is programmable, stakable, and ownable by design.
                      </p>
                      <p className="text-lg text-yellow-400 text-center font-bold">
                        ⚠️ This is not equity. This is utility.
                      </p>
                      <p className="text-lg text-gray-300 text-center font-semibold">
                        Own infrastructure. Not a logo.
                      </p>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Investment Thesis */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
                  <h2 className="text-3xl font-bold mb-6 text-purple-400 text-center">🧠 Investment Thesis</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-3xl mb-4">🌐</div>
                      <h3 className="text-lg font-semibold mb-3 text-white">Massive Market</h3>
                      <p className="text-gray-300 text-sm">
                        The AI infrastructure market is projected to reach $1 trillion by 2030,
                        with agent-to-agent communication as the key enabler.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-4">🚀</div>
                      <h3 className="text-lg font-semibold mb-3 text-white">First Mover Advantage</h3>
                      <p className="text-gray-300 text-sm">
                        We're building the first comprehensive protocol for agent orchestration, identity, and memory — the foundation of the agentic internet.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-4">💡</div>
                      <h3 className="text-lg font-semibold mb-3 text-white">Network Effects</h3>
                      <p className="text-gray-300 text-sm">
                        Every handle. Every vault. Every deployed agent. Multiplies the value of the network for everyone.
                      </p>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <p className="text-gray-400">
                      <span className="text-purple-400">.commandline/claim</span> is where it all begins.<br />
                      (Paste it in your browser bar — it leads somewhere special.)
                    </p>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Key Metrics */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">📈 Metrics (Positioned Honestly + Optimistically)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {metrics.map((item, index) => (
                    <GlowingCard key={index} className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-green-500/20">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">{item.metric}</div>
                        <div className="text-gray-300 mb-3">{item.label}</div>
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-green-400 text-sm font-semibold">{item.growth}</span>
                          <span className="text-gray-400 text-xs">{item.period}</span>
                        </div>
                      </div>
                    </GlowingCard>
                  ))}
                </div>
              </motion.div>

              {/* The ITO */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-green-500/20">
                  <h2 className="text-3xl font-bold mb-6 text-green-400 text-center">🪙 The ITO: Initial Token Offering</h2>
                  <div className="space-y-6">
                    <p className="text-lg text-gray-300 text-center">
                      This isn't just a product launch.
                    </p>
                    <p className="text-lg text-gray-300 text-center font-semibold">
                      It's the financial ignition layer of the protocol.
                    </p>
                    <p className="text-lg text-gray-300 text-center">
                      By staking AI Tokens, you unlock:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-center">
                          <span className="mr-3 text-green-400">•</span>
                          <span>Vault-based identity & territory</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mr-3 text-green-400">•</span>
                          <span>Agent deployment & memory sync</span>
                        </li>
                      </ul>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-center">
                          <span className="mr-3 text-green-400">•</span>
                          <span>Pre-orders for Unified hardware (AIPods, AIPhone, AIEmail)</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mr-3 text-green-400">•</span>
                          <span>On-chain yield + protocol-level rewards</span>
                        </li>
                      </ul>
                    </div>

                    <div className="text-center mt-8">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-green-500/20"
                      >
                        📥 Learn more about the ITO → activate.unifiedai
                      </motion.button>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Who We're Looking For */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20">
                  <h2 className="text-3xl font-bold mb-6 text-blue-400 text-center">🎯 Who We're Looking For</h2>
                  <div className="space-y-6">
                    <p className="text-lg text-gray-300 text-center">
                      We're not chasing VCs or pitch competitions.
                    </p>
                    <p className="text-lg text-gray-300 text-center font-semibold">
                      We're building with:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-center">
                          <span className="mr-3 text-blue-400">•</span>
                          <span>Sovereign capital allocators</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mr-3 text-blue-400">•</span>
                          <span>Operators who understand AI as infrastructure</span>
                        </li>
                      </ul>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-center">
                          <span className="mr-3 text-blue-400">•</span>
                          <span>Long-term protocol thinkers who get network ownership</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mr-3 text-blue-400">•</span>
                          <span>Builders and believers in meme-coded capital</span>
                        </li>
                      </ul>
                    </div>

                    <div className="text-center mt-8">
                      <p className="text-lg text-gray-300 mb-4">
                        If you resonate, we want to talk.
                      </p>
                      <p className="text-lg text-blue-400 font-semibold">
                        📩 capital@io.unifiedai
                      </p>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Fundraising Status */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-orange-500/20">
                  <h2 className="text-3xl font-bold mb-6 text-orange-400 text-center">📡 Fundraising Status</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-2xl mb-2">✅</div>
                      <h3 className="text-lg font-semibold mb-2 text-green-400">ITO Public Launch</h3>
                      <p className="text-gray-300 text-sm">Live</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">🕒</div>
                      <h3 className="text-lg font-semibold mb-2 text-yellow-400">72-Hour Reservation Window</h3>
                      <p className="text-gray-300 text-sm">Active</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">🔐</div>
                      <h3 className="text-lg font-semibold mb-2 text-blue-400">Partner Allocations</h3>
                      <p className="text-gray-300 text-sm">Request-based only</p>
                    </div>
                  </div>
                  <div className="text-center mt-8 space-y-4">
                    <p className="text-lg text-gray-300 font-semibold">
                      No presale. No shortcuts.
                    </p>
                    <p className="text-lg text-gray-300">
                      Show up. Claim your protocol stake.
                    </p>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Cap Table Philosophy */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
                  <h2 className="text-3xl font-bold mb-6 text-purple-400 text-center">🔐 Our Cap Table Philosophy</h2>
                  <div className="space-y-6">
                    <p className="text-lg text-gray-300 text-center">
                      We don't sell equity.
                    </p>
                    <p className="text-lg text-gray-300 text-center font-semibold">
                      We compound protocol velocity.
                    </p>
                    <p className="text-lg text-gray-300 text-center">
                      Our "ownership" is measured in:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-center">
                          <span className="mr-3 text-purple-400">•</span>
                          <span>Vaults claimed</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mr-3 text-purple-400">•</span>
                          <span>Agents launched</span>
                        </li>
                      </ul>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-center">
                          <span className="mr-3 text-purple-400">•</span>
                          <span>Territory activated</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mr-3 text-purple-400">•</span>
                          <span>Capital mobilized</span>
                        </li>
                      </ul>
                    </div>

                    <div className="text-center mt-8 space-y-4">
                      <p className="text-lg text-gray-300">
                        If you want a board seat, this ain't for you.
                      </p>
                      <p className="text-lg text-gray-300 font-semibold">
                        If you want to own protocol rails, welcome home.
                      </p>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Contact */}
              <motion.div variants={itemVariants} className="text-center">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-pink-500/20">
                  <h2 className="text-3xl font-bold mb-6 text-pink-400">Ready to Own Protocol Rails?</h2>
                  <p className="text-lg text-gray-300 mb-6">
                    📩 <span className="text-pink-400">capital@io.unifiedai</span>
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-pink-500/20"
                  >
                    🪙 CLAIM YOUR PROTOCOL STAKE
                  </motion.button>
                </GlowingCard>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default InvestorsPage;
