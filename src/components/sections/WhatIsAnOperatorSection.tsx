'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GlowingCard } from '@/components/ui/glowing-card';

const WhatIsAnOperatorSection: React.FC = () => {
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
    <section className="relative min-h-screen w-full py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-8 text-center"
          >
            What is an Operator?
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <motion.p
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              You're not a user.<br />
              You're not labor.<br />
              You're infrastructure.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl mb-12"
            >
              Operators are the builders, contributors, and economic engines of Unified AI.
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-4">Operator Tiers</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Signal</li>
                <li>• Operator</li>
                <li>• Architect</li>
                <li>• Sovereign</li>
              </ul>
            </GlowingCard>

            <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-4">Operator Benefits</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Access to protocol</li>
                <li>• On-chain credentials</li>
                <li>• Compensation rights</li>
                <li>• Agent deployment</li>
              </ul>
            </GlowingCard>

            <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/20">
              <h3 className="text-xl font-semibold mb-4">Operator Control</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Protocol governance</li>
                <li>• Future direction</li>
                <li>• Economic participation</li>
                <li>• Infrastructure ownership</li>
              </ul>
            </GlowingCard>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.a
              href="#operator-economy"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-bold text-lg shadow-lg shadow-blue-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read Economic Framework
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsAnOperatorSection;
