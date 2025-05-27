'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { GlowingCard } from '@/components/ui/glowing-card';

const AboutPage = () => {
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

  const team = [
    {
      name: "Industry Tycoon (I.T.)",
      role: "Founder, Architect, Operator",
      bio: "Founder of Unified AI, builder of digital sovereignty infrastructure, and orchestrator of the Agentic Internet. Operating under 100+ sovereign TLDs, deploying protocol-native identity systems, token economics, and agent OS infrastructure from the ground up.",
      image: "👤"
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
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                    🔥 Unified AI
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  <span className="font-normal">Foundational</span> <span className="font-bold">Infrastructure</span> <span className="font-normal">for the</span> <span className="font-bold">Agentic Internet</span>
                </p>
                <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-6">
                  Unified AI is creating the core protocol stack for the next era of intelligence — one where agents, not users, power digital systems.
                </p>
                <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                  We're not building an app. We're architecting a sovereign protocol layer for AI-native identity, ownership, and interaction.
                </p>
              </motion.div>

              {/* Mission Statement */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20">
                  <h2 className="text-3xl font-bold mb-6 text-blue-400 text-center">Our Mission</h2>
                  <p className="text-lg text-gray-300 text-center mb-6">
                    To democratize AI by creating a unified protocol where agents, humans, and systems
                    can collaborate seamlessly in a decentralized, intelligent internet.
                  </p>
                  <div className="text-center">
                    <p className="text-gray-400">
                      <span className="text-green-400">.commandline/claim</span> is where it all begins.<br />
                      (no paste '.commandline/claim' in your browser, it leads somewhere special).
                    </p>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Our Story */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                    <h3 className="text-xl font-semibold mb-4 text-purple-400">The Problem</h3>
                    <p className="text-gray-300">
                      AI agents exist in silos. They can't communicate, share context, or build on each other's work.
                      The internet wasn't designed for intelligence — it was designed for documents.
                    </p>
                  </GlowingCard>
                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-green-500/20">
                    <h3 className="text-xl font-semibold mb-4 text-green-400">Our Solution</h3>
                    <p className="text-gray-300">
                      Unified AI creates the missing infrastructure: handle-based identity, semantic routing,
                      and ontology networks that let agents understand not just what they do, but how they fit together.
                    </p>
                  </GlowingCard>
                </div>
              </motion.div>

              {/* Core Values */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
                    <div className="text-3xl mb-4 text-center">🌐</div>
                    <h3 className="text-lg font-semibold mb-3 text-blue-400 text-center">Open Protocol</h3>
                    <p className="text-gray-300 text-sm text-center">
                      We believe AI infrastructure should be open, decentralized, and owned by the community that builds on it.
                    </p>
                  </GlowingCard>
                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                    <div className="text-3xl mb-4 text-center">🧠</div>
                    <h3 className="text-lg font-semibold mb-3 text-purple-400 text-center">Intelligence First</h3>
                    <p className="text-gray-300 text-sm text-center">
                      Every decision is made through the lens of enabling more intelligent, meaningful interactions between agents.
                    </p>
                  </GlowingCard>
                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-green-500/20">
                    <div className="text-3xl mb-4 text-center">⚡</div>
                    <h3 className="text-lg font-semibold mb-3 text-green-400 text-center">Developer Experience</h3>
                    <p className="text-gray-300 text-sm text-center">
                      We build for developers who think in code, deploy in production, and create the future with their keyboards.
                    </p>
                  </GlowingCard>
                </div>
              </motion.div>

              {/* Team */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold mb-4 text-center">🧠 Leadership Team</h2>
                <p className="text-center text-gray-400 mb-8">
                  <span className="font-normal">Backed by</span> <span className="font-bold">purpose.</span> <span className="font-normal">Not</span> <span className="font-bold">payroll.</span>
                </p>
                <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
                  {team.map((member, index) => (
                    <GlowingCard key={index} className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                      <div className="flex items-start space-x-4">
                        <div className="text-4xl">{member.image}</div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                          <p className="text-blue-400 mb-3">{member.role}</p>
                          <p className="text-gray-300 text-sm">{member.bio}</p>
                        </div>
                      </div>
                    </GlowingCard>
                  ))}
                </div>
              </motion.div>

              {/* Technology Stack */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-cyan-500/20">
                  <h2 className="text-3xl font-bold mb-6 text-cyan-400 text-center">Technology Stack</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-black/40 rounded-lg">
                      <div className="text-2xl mb-2">🔗</div>
                      <p className="text-sm text-gray-300">ION Protocol</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg">
                      <div className="text-2xl mb-2">🌐</div>
                      <p className="text-sm text-gray-300">AlphaRouter</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg">
                      <div className="text-2xl mb-2">💬</div>
                      <p className="text-sm text-gray-300">AgentChat</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg">
                      <div className="text-2xl mb-2">🔐</div>
                      <p className="text-sm text-gray-300">Vault System</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg">
                      <div className="text-2xl mb-2">🧠</div>
                      <p className="text-sm text-gray-300">SeedGPT</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg">
                      <div className="text-2xl mb-2">⚡</div>
                      <p className="text-sm text-gray-300">VibeCoder</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg">
                      <div className="text-2xl mb-2">📊</div>
                      <p className="text-sm text-gray-300">AI Directory</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg">
                      <div className="text-2xl mb-2">🏗️</div>
                      <p className="text-sm text-gray-300">FSPP</p>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Partnership Focus */}
              <motion.div variants={itemVariants} className="mb-16">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-6">🤝 We're Seeking Builders, Partners, and Signal Holders</h2>
                  <p className="text-gray-400 mb-8">
                    We're not hiring. We're partnering with operators.
                  </p>
                  <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                    Whether you're a dev, founder, protocol architect, or sovereign capital allocator — if you're building the future of intelligence infrastructure, we want to talk.
                  </p>
                </div>
              </motion.div>

              {/* Join Us */}
              <motion.div variants={itemVariants} className="text-center">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-orange-500/20">
                  <h2 className="text-3xl font-bold mb-6 text-orange-400">Ready to Build the Agentic Internet?</h2>
                  <p className="text-lg text-gray-300 mb-6">
                    Contact us at <span className="text-blue-400">protocol@io.unifiedai</span>
                  </p>
                  <div className="flex flex-col md:flex-row justify-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-blue-500/20"
                    >
                      🪙 JOIN THE ITO
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-colors"
                    >
                      📦 CLAIM YOUR HANDLE
                    </motion.button>
                  </div>
                </GlowingCard>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
