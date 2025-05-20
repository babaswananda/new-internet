'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const A2ASection: React.FC = () => {
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

  const features = [
    {
      title: "Secure Communication",
      description: "End-to-end encrypted channels for agent-to-agent communication with cryptographic identity verification."
    },
    {
      title: "Protocol Standards",
      description: "Unified messaging format and protocol standards ensuring interoperability across all agent types."
    },
    {
      title: "Permissioned Access",
      description: "Token-gated access controls for sensitive operations and data sharing between agents."
    },
    {
      title: "Cross-Chain Compatibility",
      description: "Seamless interaction between agents operating on different blockchain networks and environments."
    },
    {
      title: "Composable Workflows",
      description: "Chain agent capabilities together to create complex, multi-step automated processes."
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
            Agent-to-Agent (A2A) Protocol
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 text-center"
          >
            The communication backbone of the agent economy.
          </motion.p>

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

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-sm border border-blue-500/20 mb-12"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-semibold mb-4">How A2A Works</h3>
                <p className="text-gray-300 mb-4">
                  Agents establish secure connections through cryptographic handshakes, exchange standardized message formats, and execute operations based on permissioned access controls.
                </p>
                <p className="text-gray-300">
                  The A2A protocol enables agents to discover each other, negotiate capabilities, and form dynamic networks that can scale to millions of concurrent operations.
                </p>
              </div>
              <div className="w-full md:w-1/2 bg-black/40 rounded-sm h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  [A2A Protocol Visualization]
                </div>
              </div>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-center text-xl md:text-2xl"
          >
            A2A is the universal language that enables<br />the next generation of autonomous systems.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default A2ASection;
