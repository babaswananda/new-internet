'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GlowingCard } from '@/components/ui/glowing-card';
import { HeaderText } from '@/utils/normalBold';

const VibeCoderSection: React.FC = () => {
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
    <section id="vibecoder" className="relative min-h-screen w-full py-24 overflow-hidden">
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
            className="text-4xl md:text-6xl mb-8 text-center"
          >
            <HeaderText>VibeCoder Plus VibeCoding</HeaderText>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 text-center font-bold"
          >
            Build agents with energy.<br />
            Deploy with vibe.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div variants={itemVariants}>
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20 h-full">
                <h3 className="text-lg font-semibold mb-4 text-blue-400">Fork & Remix</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Fork agents or remix templates</li>
                  <li>• Community-driven development</li>
                  <li>• Version control for AI</li>
                </ul>
              </GlowingCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 h-full">
                <h3 className="text-lg font-semibold mb-4 text-purple-400">Launch Tools</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Launch tokenized tools</li>
                  <li>• Monetize your creations</li>
                  <li>• Token-gated access</li>
                </ul>
              </GlowingCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-green-500/20 h-full">
                <h3 className="text-lg font-semibold mb-4 text-green-400">Marketplace</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Push to .Marketplace</li>
                  <li>• Global distribution</li>
                  <li>• Revenue sharing</li>
                </ul>
              </GlowingCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-amber-500/20 h-full">
                <h3 className="text-lg font-semibold mb-4 text-amber-400">Deploy</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Public drops or private vaults</li>
                  <li>• Flexible deployment options</li>
                  <li>• Instant scaling</li>
                </ul>
              </GlowingCard>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mb-12">
            <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-cyan-500/20">
              <h3 className="text-2xl mb-6 text-cyan-400 text-center"><HeaderText>Built For Everyone</HeaderText></h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">👤</div>
                  <h4 className="font-semibold mb-2">Solo Builders</h4>
                  <p className="text-gray-300 text-sm">Individual creators and entrepreneurs building the next generation of AI tools</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">👥</div>
                  <h4 className="font-semibold mb-2">Dev Crews</h4>
                  <p className="text-gray-300 text-sm">Small teams collaborating on innovative AI projects and applications</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏫</div>
                  <h4 className="font-semibold mb-2">Entire Schools</h4>
                  <p className="text-gray-300 text-sm">Educational institutions teaching the next generation of AI developers</p>
                </div>
              </div>
            </GlowingCard>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mb-8">
            <p className="text-xl md:text-2xl font-bold mb-4">
              From idea to deployment in minutes, not months.
            </p>
            <p className="text-lg text-gray-300">
              The most intuitive way to build, deploy, and monetize AI agents.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-blue-500/20"
            >
              CREATE IN .VIBECODER
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VibeCoderSection;
