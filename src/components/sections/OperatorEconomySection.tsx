'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GlowingCard } from '@/components/ui/glowing-card';

const OperatorEconomySection: React.FC = () => {
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
    <section id="operator-economy" className="relative min-h-screen w-full py-24 overflow-hidden">
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
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-center"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500">
              OPERATOR ECONOMY + .DEVCOMMUNITY
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 text-center font-bold"
          >
            No job listings. No VC gatekeeping.<br />
            Just output.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div variants={itemVariants}>
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20 h-full">
                <h3 className="text-lg font-semibold mb-4 text-blue-400">Fix & Earn</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Fix UI bugs → get paid</li>
                  <li>• Immediate compensation</li>
                  <li>• Merit-based rewards</li>
                </ul>
              </GlowingCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 h-full">
                <h3 className="text-lg font-semibold mb-4 text-purple-400">Improve & Royalties</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Improve agents → earn royalties</li>
                  <li>• Ongoing revenue streams</li>
                  <li>• Intellectual property ownership</li>
                </ul>
              </GlowingCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-green-500/20 h-full">
                <h3 className="text-lg font-semibold mb-4 text-green-400">List & Deploy</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• List agency → deploy full-stack</li>
                  <li>• Complete project delivery</li>
                  <li>• End-to-end solutions</li>
                </ul>
              </GlowingCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-amber-500/20 h-full">
                <h3 className="text-lg font-semibold mb-4 text-amber-400">Drop & Own</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Drop agents → own IP</li>
                  <li>• Retain intellectual property</li>
                  <li>• Build lasting assets</li>
                </ul>
              </GlowingCard>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mb-12">
            <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-cyan-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400 text-center">Token-First. Fork-to-Earn. Operator-Powered.</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🪙</div>
                  <h4 className="font-semibold mb-2">Token-First</h4>
                  <p className="text-gray-300 text-sm">All contributions are tokenized and tracked on-chain for transparent compensation</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🍴</div>
                  <h4 className="font-semibold mb-2">Fork-to-Earn</h4>
                  <p className="text-gray-300 text-sm">Fork existing projects, improve them, and earn from your contributions</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <h4 className="font-semibold mb-2">Operator-Powered</h4>
                  <p className="text-gray-300 text-sm">Human intelligence directing AI systems for maximum efficiency and creativity</p>
                </div>
              </div>
            </GlowingCard>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mb-8">
            <p className="text-xl md:text-2xl font-bold mb-4">
              The future of work isn't human vs. AI.<br />
              It's human + AI = Operator.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-amber-500/20">
              <h3 className="text-xl font-semibold mb-4 text-amber-400 text-center">🪙 Smart Contract Flex (EVM-ready)</h3>
              <div className="bg-black/60 rounded-lg p-4 font-mono text-sm">
                <div className="text-amber-400">DomainRegistry.reserve("yourname.commandline", msg.sender, block.timestamp);</div>
              </div>
              <p className="text-center text-gray-400 mt-4 text-sm">
                Full sovereignty. On-chain. Yours.
              </p>
            </GlowingCard>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-blue-500/20"
            >
              JOIN CRYPTOBOUNTIES
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-colors"
            >
              APPLY TO .DEVCOMMUNITY
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-black border border-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-colors"
            >
              LIST YOUR DEVAGENCY
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OperatorEconomySection;
