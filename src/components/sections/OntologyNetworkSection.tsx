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
            ONTOLOGY NETWORK PROTOCOL
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 text-center font-bold"
          >
            "AI doesn't just need intelligence. It needs meaning."
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 text-center"
          >
            Ontology is the backbone of the Agentic Web.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div variants={itemVariants}>
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Core Components:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>.OntologyNetwork</strong> = every concept, domain, and category</li>
                  <li>• Tags, taxonomies, semantics, and vector meaning at protocol level</li>
                  <li>• AI licensing & labeling enforcement</li>
                  <li>• Discovery, classification, filtering systems</li>
                </ul>
              </GlowingCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Used By:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>Curator Agents</strong> — Content organization and curation</li>
                  <li>• <strong>Benchmark Agents</strong> — Performance evaluation and testing</li>
                  <li>• <strong>Ontology Agents</strong> — Semantic understanding and mapping</li>
                  <li>• <strong>Discovery Systems</strong> — Search and recommendation engines</li>
                </ul>
              </GlowingCard>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mb-12">
            <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-green-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-green-400 text-center">The Meaning Layer</h3>
              <div className="text-center space-y-4">
                <p className="text-xl text-gray-300">
                  <strong>Ontologies = Genres. Labels. Languages.</strong>
                </p>
                <p className="text-lg text-gray-300">
                  Without them, your agents don't know where they belong.
                </p>
                <p className="text-lg text-gray-300">
                  The Ontology Network provides the semantic foundation that gives AI systems context, meaning, and purpose.
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

          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-blue-500/20"
            >
              EXPLORE ONTOLOGY LAYERS
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OntologyNetworkSection;
