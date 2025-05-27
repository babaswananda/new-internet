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
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      bio: "Former OpenAI researcher, led the development of multi-agent systems. PhD in Computer Science from Stanford.",
      image: "👨‍💻"
    },
    {
      name: "Sarah Kim",
      role: "CTO & Co-Founder", 
      bio: "Ex-Google Brain, architect of distributed AI systems. Built the first production-scale agent orchestration platform.",
      image: "👩‍💻"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Protocol",
      bio: "Ethereum core contributor, designed ION protocol. Expert in decentralized systems and blockchain infrastructure.",
      image: "🧑‍💻"
    },
    {
      name: "Dr. Priya Patel",
      role: "Head of AI Research",
      bio: "Former DeepMind researcher, specialist in ontology networks and semantic AI. 50+ publications in top-tier journals.",
      image: "👩‍🔬"
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
                    About Unified AI
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  Building the New Map of the New Internet
                </p>
                <p className="text-lg text-gray-400 max-w-4xl mx-auto">
                  We're creating the infrastructure for the agentic internet — where every handle is a function, 
                  every agent has meaning, and intelligence flows seamlessly across the digital landscape.
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
                <h2 className="text-3xl font-bold mb-8 text-center">Leadership Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {team.map((member, index) => (
                    <GlowingCard key={index} className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10">
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

              {/* Funding & Investors */}
              <motion.div variants={itemVariants} className="mb-16">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-6">Backed by Leading Investors</h2>
                  <p className="text-gray-400 mb-8">
                    Series A: $50M led by Andreessen Horowitz, with participation from Sequoia Capital, 
                    Coinbase Ventures, and prominent AI researchers from OpenAI, DeepMind, and Anthropic.
                  </p>
                  <div className="flex justify-center space-x-8 text-gray-500">
                    <div className="text-lg font-semibold">a16z</div>
                    <div className="text-lg font-semibold">Sequoia</div>
                    <div className="text-lg font-semibold">Coinbase Ventures</div>
                    <div className="text-lg font-semibold">OpenAI Fund</div>
                  </div>
                </div>
              </motion.div>

              {/* Join Us */}
              <motion.div variants={itemVariants} className="text-center">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-orange-500/20">
                  <h2 className="text-3xl font-bold mb-6 text-orange-400">Join the Future</h2>
                  <p className="text-lg text-gray-300 mb-6">
                    We're hiring world-class engineers, researchers, and builders who want to create 
                    the infrastructure for the next generation of the internet.
                  </p>
                  <div className="flex flex-col md:flex-row justify-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-blue-500/20"
                    >
                      View Open Positions
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Contact Us
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
