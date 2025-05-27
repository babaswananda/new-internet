'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GlowingCard } from '@/components/ui/glowing-card';

const AIDirectoryMarketplaceSection: React.FC = () => {
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
    <section id="ai-directory-marketplace" className="relative min-h-screen w-full py-24 overflow-hidden">
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
            .AIDIRECTORY + .AIMARKETPLACE
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 text-center font-bold"
          >
            The public brain of Unified AI.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div variants={itemVariants}>
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">.AIDirectory</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Discover any agent, any function, any creator</li>
                  <li>• Search by stack, usage, model, license, vault</li>
                  <li>• Browse curated collections and categories</li>
                  <li>• Real-time agent performance metrics</li>
                  <li>• Community ratings and reviews</li>
                </ul>
              </GlowingCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">.AIMarketplace</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Sell agents, tools, templates, prompt packs</li>
                  <li>• Token-gate drops and exclusive releases</li>
                  <li>• Add support modules + middleware</li>
                  <li>• Revenue sharing and royalty systems</li>
                  <li>• Automated licensing and distribution</li>
                </ul>
              </GlowingCard>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mb-12">
            <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-green-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-green-400 text-center">The AI Economy Hub</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🛍️</div>
                  <h4 className="font-semibold mb-2">Shopify</h4>
                  <p className="text-gray-300 text-sm">E-commerce infrastructure for AI products</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🔧</div>
                  <h4 className="font-semibold mb-2">GitHub</h4>
                  <p className="text-gray-300 text-sm">Version control and collaboration for agents</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎨</div>
                  <h4 className="font-semibold mb-2">OpenSea</h4>
                  <p className="text-gray-300 text-sm">NFT marketplace for unique AI assets</p>
                </div>
              </div>
              <div className="text-center mt-6">
                <p className="text-xl font-bold">Think Shopify + GitHub + OpenSea — for AI.</p>
              </div>
            </GlowingCard>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mb-8">
            <p className="text-xl md:text-2xl mb-4">
              <strong>Discover.</strong> Build. <strong>Deploy.</strong> Monetize.
            </p>
            <p className="text-lg text-gray-300">
              The complete ecosystem for AI creators, developers, and entrepreneurs.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-blue-500/20"
            >
              VIEW THE MARKET
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIDirectoryMarketplaceSection;
