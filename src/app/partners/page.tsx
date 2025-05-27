'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { GlowingCard } from '@/components/ui/glowing-card';

const PartnersPage = () => {
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

  const strategicPartners = [
    {
      name: "OpenAI",
      type: "target",
      description: "Research alignment on multi-agent modeling and advanced reasoning.",
      logo: "🤖",
      partnership: "Target partnership for agent communication protocol development."
    },
    {
      name: "Anthropic",
      type: "target",
      description: "Co-developing alignment and safety standards across distributed agents.",
      logo: "🛡️",
      partnership: "Target collaboration on AI safety in autonomous agent networks."
    },
    {
      name: "Ethereum Ecosystem",
      type: "active alignment",
      description: "Deploying ION Protocol and Vault layers on EVM-compatible infrastructure.",
      logo: "⟠",
      partnership: "Active integration with Ethereum's decentralized infrastructure."
    },
    {
      name: "Hugging Face",
      type: "integration ready",
      description: "AgentChat supports all Hugging Face-hosted models for fast deployment.",
      logo: "🤗",
      partnership: "Ready integration with the world's largest AI model repository."
    }
  ];

  const techPartners = [
    {
      name: "NVIDIA",
      type: "preferred GPU infra",
      description: "Optimized for AI training and agent deployment workloads.",
      logo: "🔥"
    },
    {
      name: "AWS / Decentralized Cloud",
      type: "infrastructure",
      description: "Scalable agent deployment infrastructure (decentralized nodes coming).",
      logo: "☁️"
    },
    {
      name: "Vercel",
      type: "confirmed",
      description: "Front-end + edge function deployment for agent dashboards and vault UIs.",
      logo: "▲"
    },
    {
      name: "Pinecone / Vector DB Layer",
      type: "optional integration",
      description: "Optional integration for memory-intensive agents using vector recall.",
      logo: "🌲"
    }
  ];

  const ecosystemPartners = [
    {
      name: "LangChain",
      type: "Framework integration",
      description: "Framework integration for enhanced agent development capabilities.",
      logo: "🦜"
    },
    {
      name: "AutoGPT",
      type: "Migration and enhancement",
      description: "Migration and enhancement pathways for existing AutoGPT implementations.",
      logo: "🔄"
    },
    {
      name: "Zapier",
      type: "Agent → app automation bridges",
      description: "Agent → app automation bridges for seamless workflow integration.",
      logo: "⚡"
    },
    {
      name: "Discord",
      type: "Native agent overlays",
      description: "Native agent overlays for community ops and server management.",
      logo: "💬"
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
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
                    🤝 Partners & Integrators
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  <span className="font-normal">This is not a</span> <span className="font-bold">partner list.</span> <span className="font-normal">It's a</span> <span className="font-bold">compatibility matrix.</span>
                </p>
                <div className="max-w-4xl mx-auto space-y-4">
                  <p className="text-lg text-gray-400">
                    Unified AI is architected for real infrastructure — the kind that runs tomorrow's internet.
                  </p>
                  <p className="text-lg text-gray-400">
                    We've built in public with open-source standards, protocol-grade logic, and composability at the core.
                  </p>
                  <p className="text-lg text-gray-300 font-semibold">
                    We don't drop names for clout. We build protocols that real operators want to plug into.
                  </p>
                </div>
              </motion.div>

              {/* Partnership Philosophy */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20">
                  <h2 className="text-3xl font-bold mb-6 text-blue-400 text-center">Partnership Philosophy</h2>
                  <p className="text-lg text-gray-300 text-center mb-6">
                    We believe the agentic internet will be built through collaboration, not competition.
                    Our partnerships focus on creating open standards, shared infrastructure, and mutual growth.
                  </p>
                  <div className="text-center">
                    <p className="text-gray-400">
                      <span className="text-green-400">.commandline/claim</span> is where it all begins.<br />
                      (no paste '.commandline/claim' in your browser, it leads somewhere special).
                    </p>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Compatible With */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">🔗 Compatible With</h2>
                <p className="text-center text-gray-300 mb-8">
                  We're natively interoperable with:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                    <div className="text-center">
                      <div className="text-3xl mb-4">🦜</div>
                      <h3 className="text-lg font-semibold text-white mb-2">LangChain</h3>
                      <p className="text-gray-300 text-sm">For custom agent logic</p>
                    </div>
                  </GlowingCard>

                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
                    <div className="text-center">
                      <div className="text-3xl mb-4">🤗</div>
                      <h3 className="text-lg font-semibold text-white mb-2">Hugging Face</h3>
                      <p className="text-gray-300 text-sm">For model access and deployment</p>
                    </div>
                  </GlowingCard>

                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-green-500/20">
                    <div className="text-center">
                      <div className="text-3xl mb-4">🔄</div>
                      <h3 className="text-lg font-semibold text-white mb-2">AutoGPT-style agents</h3>
                      <p className="text-gray-300 text-sm">For prompt-based forks</p>
                    </div>
                  </GlowingCard>

                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-orange-500/20">
                    <div className="text-center">
                      <div className="text-3xl mb-4">⟠</div>
                      <h3 className="text-lg font-semibold text-white mb-2">Ethereum-based networks</h3>
                      <p className="text-gray-300 text-sm">For token, vault, and staking systems</p>
                    </div>
                  </GlowingCard>

                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/20">
                    <div className="text-center">
                      <div className="text-3xl mb-4">🌲</div>
                      <h3 className="text-lg font-semibold text-white mb-2">Vector DBs like Pinecone</h3>
                      <p className="text-gray-300 text-sm">For agent memory</p>
                    </div>
                  </GlowingCard>

                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-pink-500/20">
                    <div className="text-center">
                      <div className="text-3xl mb-4">🧠</div>
                      <h3 className="text-lg font-semibold text-white mb-2">Major LLMs</h3>
                      <p className="text-gray-300 text-sm">Claude, GPT, Mistral via API or BYOM</p>
                    </div>
                  </GlowingCard>

                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-yellow-500/20">
                    <div className="text-center">
                      <div className="text-3xl mb-4">⚡</div>
                      <h3 className="text-lg font-semibold text-white mb-2">Zapier + API relays</h3>
                      <p className="text-gray-300 text-sm">For 5,000+ app automations</p>
                    </div>
                  </GlowingCard>

                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-indigo-500/20">
                    <div className="text-center">
                      <div className="text-3xl mb-4">💬</div>
                      <h3 className="text-lg font-semibold text-white mb-2">Discord / Telegram</h3>
                      <p className="text-gray-300 text-sm">For agentic community deployment</p>
                    </div>
                  </GlowingCard>
                </div>
                <div className="text-center mt-8">
                  <p className="text-lg text-gray-300 font-semibold">
                    These are not partnerships. These are confirmed integration paths — because we built for composability from day one.
                  </p>
                </div>
              </motion.div>

              {/* Looking for Alignment */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-orange-500/20">
                  <h2 className="text-3xl font-bold mb-6 text-orange-400 text-center">🧠 Looking for Alignment, Not Permission</h2>
                  <div className="text-center space-y-6">
                    <p className="text-lg text-gray-300">
                      We're open to collaboration — but not dependency.
                    </p>
                    <p className="text-lg text-gray-300">
                      If you're an infrastructure builder, model creator, or protocol founder who sees the agentic internet as inevitable, we'll co-develop territory with you.
                    </p>
                    <div className="space-y-4">
                      <p className="text-lg text-gray-300 font-semibold">
                        We don't ask for funding.
                      </p>
                      <p className="text-lg text-gray-300 font-semibold">
                        We don't chase VC decks.
                      </p>
                      <p className="text-lg text-gray-300 font-semibold">
                        We deploy systems and open the door.
                      </p>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Contact */}
              <motion.div variants={itemVariants} className="text-center">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-pink-500/20">
                  <h2 className="text-3xl font-bold mb-6 text-pink-400">📩 Reach out</h2>
                  <p className="text-lg text-gray-300 mb-6">
                    <span className="text-pink-400">protocol@io.unifiedai</span>
                  </p>
                  <p className="text-gray-400 mb-8">
                    Let the real partners come to your field. You're not seeking their validation — you're building the platform they'll need to touch if they want in.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-pink-500/20"
                  >
                    📧 CONTACT PROTOCOL TEAM
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

export default PartnersPage;
