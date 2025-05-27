'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { GlowingCard } from '@/components/ui/glowing-card';

const IONPage = () => {
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
              className="max-w-6xl mx-auto"
            >
              {/* Hero Section */}
              <motion.div variants={itemVariants} className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-500 to-cyan-500">
                    ION
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  Intelligent Ontology Network. You don't just train agents. You route intelligence.
                </p>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                  ION turns the Agentic Web into a cognitive web. The protocol that gives agents meaning, 
                  context, and the ability to understand where they belong in the digital ecosystem.
                </p>
              </motion.div>

              {/* Core Powers */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-green-500/20">
                  <h3 className="text-2xl font-semibold mb-6 text-green-400 text-center">🧠 ION Powers</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-4xl mb-4">🧠</div>
                      <h4 className="font-semibold mb-2">Ontology Agents</h4>
                      <p className="text-gray-300 text-sm">Define and classify domains</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-4">🏷️</div>
                      <h4 className="font-semibold mb-2">Semantic Tagging</h4>
                      <p className="text-gray-300 text-sm">Protocol-level meaning</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-4">🧩</div>
                      <h4 className="font-semibold mb-2">Model Mixing</h4>
                      <p className="text-gray-300 text-sm">Multimodal matching</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-4">🧭</div>
                      <h4 className="font-semibold mb-2">Agent Routing</h4>
                      <p className="text-gray-300 text-sm">By skill, memory, relevance</p>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Cognitive Web Comparison */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-teal-500/20">
                  <h3 className="text-2xl font-semibold mb-6 text-teal-400 text-center">The Cognitive Web</h3>
                  <div className="text-center mb-6">
                    <p className="text-xl text-gray-300">
                      WordNet × Wolfram Alpha × Wikipedia — rebuilt as agent infrastructure
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <h4 className="font-semibold mb-2 text-blue-400">WordNet</h4>
                      <p className="text-gray-300 text-sm">Semantic relationships</p>
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold mb-2 text-purple-400">Wolfram Alpha</h4>
                      <p className="text-gray-300 text-sm">Computational knowledge</p>
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold mb-2 text-green-400">Wikipedia</h4>
                      <p className="text-gray-300 text-sm">Structured information</p>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Features Grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">Job Classification</h3>
                  <p className="text-gray-300">
                    Agents know what job they were hired for and stay aligned with FSPP protocols.
                  </p>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
                  <div className="text-4xl mb-4">🌐</div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">Domain Expertise</h3>
                  <p className="text-gray-300">
                    Ontology agents define and classify domains with precision and context.
                  </p>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-green-500/20">
                  <div className="text-4xl mb-4">🔗</div>
                  <h3 className="text-xl font-semibold mb-4 text-green-400">Semantic Layer</h3>
                  <p className="text-gray-300">
                    Protocol-level semantics that give meaning to every interaction.
                  </p>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-yellow-500/20">
                  <div className="text-4xl mb-4">🧠</div>
                  <h3 className="text-xl font-semibold mb-4 text-yellow-400">Intelligence Routing</h3>
                  <p className="text-gray-300">
                    Route intelligence based on skill, memory, and contextual relevance.
                  </p>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-red-500/20">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="text-xl font-semibold mb-4 text-red-400">Multimodal Matching</h3>
                  <p className="text-gray-300">
                    Seamlessly mix and match models across different modalities and capabilities.
                  </p>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-cyan-500/20">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Knowledge Graph</h3>
                  <p className="text-gray-300">
                    Dynamic knowledge graphs that evolve with agent interactions and learning.
                  </p>
                </GlowingCard>
              </motion.div>

              {/* FSPP Alignment */}
              <motion.div variants={itemVariants} className="mb-16">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <div className="text-green-400 text-xl">✅</div>
                    <div>
                      <p className="text-green-200 font-semibold mb-2">FSPP Alignment:</p>
                      <p className="text-gray-300">
                        ION ensures agents stay aligned with Framework Stack Prompt Protocol.<br />
                        Every agent knows its job, its domain, and its purpose.<br />
                        No more hallucinations. No more scope creep. Just intelligent, purposeful action.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div variants={itemVariants} className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold text-2xl rounded-lg shadow-lg shadow-green-500/20 mr-4"
                >
                  EXPLORE ION
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-2xl rounded-lg hover:bg-white/10 transition-colors"
                >
                  DEPLOY AN ONTOLOGY AGENT
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default IONPage;
