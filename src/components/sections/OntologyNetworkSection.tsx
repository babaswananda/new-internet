'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GlowingCard } from '@/components/ui/glowing-card';

const OntologyNetworkSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="ontology-network" className="relative min-h-screen w-full py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-8 text-center"
          >
            INTELLIGENT ONTOLOGY NETWORK (ION)
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 text-center font-bold"
          >
            You don't just train agents. You route intelligence.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 text-center"
          >
            Introducing ION — the Intelligent Ontology Network.<br />
            It's how agents think, sort, and scale across use cases, domains, and knowledge layers.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div variants={itemVariants}>
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">ION Powers:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• 🧠 <strong>Ontology Agents</strong> (define and classify your model's domain)</li>
                  <li>• 🏷️ <strong>Semantic Tagging</strong> (industry, vertical, function, and task-based logic)</li>
                  <li>• 🧩 <strong>Model Mixing + Multimodal Matching</strong></li>
                  <li>• 🧭 <strong>Agent routing</strong> by skill, memory, relevance, and accuracy</li>
                </ul>
              </GlowingCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">FSPP Integration:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>Framework Stack Prompt Protocol</strong> alignment for every AI drop</li>
                  <li>• <strong>Cognitive Web Infrastructure</strong> — Beyond just another GPT</li>
                  <li>• <strong>Agent Job Classification</strong> — Knows what it was hired for</li>
                  <li>• <strong>Intelligence Routing</strong> — Right agent, right task, right time</li>
                </ul>
              </GlowingCard>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mb-12">
            <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-green-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-green-400 text-center">The Cognitive Web</h3>
              <div className="text-center space-y-4">
                <p className="text-xl text-gray-300">
                  <strong>Think: WordNet × Wolfram Alpha × Wikipedia — rebuilt as agent infrastructure.</strong>
                </p>
                <p className="text-lg text-gray-300">
                  ION is the difference between "just another GPT" and an agent that knows what job it was hired for.
                </p>
                <p className="text-lg text-gray-300">
                  ION turns the Agentic Web into a cognitive web.<br />
                  You don't need another AI model.<br />
                  You need the intelligent infrastructure behind the ones worth keeping.
                </p>
              </div>
            </GlowingCard>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mb-8">
            <p className="text-xl md:text-2xl font-bold mb-4">
              Every agent needs to understand not just what it can do,<br />
              but where it fits in the larger ecosystem of intelligence.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="text-center">
              <p className="text-lg text-gray-400 mb-6">
                Ready to give your agents meaning? <span className="text-green-400">.commandline/claim</span> is where it all begins.<br />
                (no paste '.commandline/claim' in your browser, it leads somewhere special).
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-blue-500/20"
            >
              EXPLORE ION
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-colors"
            >
              DEPLOY AN ONTOLOGY AGENT
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OntologyNetworkSection;
