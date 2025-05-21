'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AgentOSSection: React.FC = () => {
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
      {/* Background removed - using global Spline background */}
      <div className="absolute inset-0 bg-black grid-bg opacity-30 z-5"></div>
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
            AgentOS
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 text-center"
          >
            If Unified AI is the grid, AgentOS is the engine.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="bg-white/5 p-8 rounded-sm mb-12"
          >
            <p className="text-xl mb-6">
              AgentOS is the AI-Crypto Native operating system that powers, connects, and governs agents.
            </p>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Agent Key system for identity + permissioning</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Token-powered execution + licensing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Endpoint logic that earns</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>On-chain registry for every agent, version, and class</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Runs across decentralized compute nodes (GPU grid)</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center text-xl md:text-2xl"
          >
            <p>You don&apos;t rent AI.</p>
            <p>You own your logic.</p>
            <p>You deploy it on AgentOS.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgentOSSection;
