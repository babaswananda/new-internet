'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MCPSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Note: Replace this URL with your actual Spline scene URL
  const splineSceneUrl = undefined;

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
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      }
    },
  };

  const chains = [
    { name: "Ethereum", color: "bg-blue-500" },
    { name: "Solana", color: "bg-purple-500" },
    { name: "Arbitrum", color: "bg-blue-400" },
    { name: "Base", color: "bg-blue-600" },
    { name: "Optimism", color: "bg-red-500" },
    { name: "Polygon", color: "bg-indigo-500" },
    { name: "Avalanche", color: "bg-red-600" },
    { name: "Cosmos", color: "bg-indigo-400" },
  ];

  const features = [
    {
      title: "Cross-Chain Identity",
      description: "Unified identity system that works across all supported blockchains with a single agent key."
    },
    {
      title: "Asset Bridging",
      description: "Seamless transfer of assets between chains with minimal gas fees and maximum security."
    },
    {
      title: "Chain-Agnostic Execution",
      description: "Deploy and run agent logic on any supported chain without rewriting code."
    },
    {
      title: "Unified State Management",
      description: "Synchronize agent state across multiple chains with atomic consistency guarantees."
    }
  ];

  return (
    <section className="relative min-h-screen w-full py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black grid-bg opacity-30"></div>
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
            Multi-Chain Protocol (MCP)
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 text-center"
          >
            One protocol. Every chain. Unlimited possibilities.
          </motion.p>

          {/* Chain logos */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {chains.map((chain, index) => (
              <motion.div
                key={index}
                className={`${chain.color} px-4 py-2 rounded-full text-white font-medium`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {chain.name}
              </motion.div>
            ))}
          </motion.div>

          {/* Features */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 p-6 rounded-sm border border-white/10"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Diagram */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-8 rounded-sm border border-purple-500/20 mb-12"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">How MCP Works</h3>
            <div className="h-64 bg-black/40 rounded-sm flex items-center justify-center mb-6">
              <div className="text-center text-gray-500">
                [Multi-Chain Protocol Diagram]
              </div>
            </div>
            <p className="text-gray-300 text-center">
              MCP uses a network of validators and relayers to ensure secure cross-chain communication,
              with on-chain verification of message integrity and origin.
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-center text-xl md:text-2xl"
          >
            Build once. Deploy everywhere.<br />The blockchain-agnostic future is here.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default MCPSection;
