'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OperatorEconomySection: React.FC = () => {
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

  const economyPillars = [
    {
      title: "Agent Ownership",
      description: "Create, own, and monetize your agents with full intellectual property rights secured on-chain.",
      icon: "🔑"
    },
    {
      title: "Usage Royalties",
      description: "Earn ongoing revenue from every interaction with your agent across the entire protocol.",
      icon: "💰"
    },
    {
      title: "Composable Logic",
      description: "License your agent's capabilities to other operators and earn from derivative works.",
      icon: "🧩"
    },
    {
      title: "Compute Provision",
      description: "Contribute GPU resources to the network and earn tokens for supporting agent execution.",
      icon: "⚡"
    }
  ];

  const tokenomicsData = [
    { label: "Agent Creation", value: "15%" },
    { label: "Usage Fees", value: "40%" },
    { label: "Compute Rewards", value: "25%" },
    { label: "Protocol Treasury", value: "20%" }
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
            Operator Economy
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 text-center"
          >
            Create. Deploy. Earn. The new AI economy is here.
          </motion.p>

          {/* Economy Pillars */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {economyPillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 p-6 rounded-sm border border-white/10"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start">
                  <div className="text-3xl mr-4">{pillar.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                    <p className="text-gray-300">{pillar.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tokenomics */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-sm border border-blue-500/20 mb-16"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Tokenomics</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {tokenomicsData.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                    {item.value}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="h-48 bg-black/40 rounded-sm flex items-center justify-center mb-6">
              <div className="text-center text-gray-500">
                [Tokenomics Flow Diagram]
              </div>
            </div>
            
            <p className="text-gray-300 text-center">
              The protocol token powers all economic activity, from agent deployment to compute provision,
              creating a sustainable ecosystem where value flows to creators and operators.
            </p>
          </motion.div>

          {/* Operator Tiers */}
          <motion.div
            variants={itemVariants}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Operator Tiers</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["Creator", "Provider", "Validator"].map((tier, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 p-6 rounded-sm border border-white/10 text-center"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)"
                  }}
                >
                  <h4 className="text-xl font-semibold mb-3">{tier}</h4>
                  <div className="h-1 w-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 mb-4"></div>
                  <p className="text-gray-300">
                    {index === 0 && "Build and deploy agents to earn from usage and licensing."}
                    {index === 1 && "Provide compute resources to power the agent network."}
                    {index === 2 && "Secure the network and validate agent transactions."}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-center text-xl md:text-2xl"
          >
            Your agents. Your earnings.<br />The operator economy puts creators first.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default OperatorEconomySection;
