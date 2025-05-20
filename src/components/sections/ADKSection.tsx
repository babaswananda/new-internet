'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ADKSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
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
            Agent Dev Kit (ADK)
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 text-center font-light"
          >
            Build logic like an Operator. Deploy it like a god.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="bg-white/5 p-8 rounded-sm mb-12"
          >
            <p className="text-xl mb-6">
              The Agent Dev Kit (ADK) includes:
            </p>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Starter frameworks for agent logic</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Tokenization tools (NFT/endpoint minting)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Deployment hooks to AgentOS</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Forking + licensing structure</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>MCP + A2A modules pre-baked</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Supports IDEs like VibeCoding and standard Web3 tooling</span>
              </li>
            </ul>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-center text-xl md:text-2xl"
          >
            If you build it, you should own it.
            <br />
            ADK makes sure you do.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ADKSection;
