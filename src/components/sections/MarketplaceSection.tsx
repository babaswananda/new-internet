'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MarketplaceSection: React.FC = () => {
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

  const marketplaceItems = [
    {
      title: "Agent Templates",
      description: "Pre-built agent templates for common use cases that you can customize and deploy.",
      price: "From 0.05 ETH",
      category: "Templates",
      image: "template"
    },
    {
      title: "Logic Modules",
      description: "Specialized components that add specific capabilities to your agents.",
      price: "From 0.02 ETH",
      category: "Components",
      image: "module"
    },
    {
      title: "Custom Agents",
      description: "Fully developed agents ready for immediate deployment and use.",
      price: "From 0.5 ETH",
      category: "Agents",
      image: "agent"
    },
    {
      title: "Training Data",
      description: "Curated datasets for fine-tuning your agent's capabilities.",
      price: "From 0.1 ETH",
      category: "Data",
      image: "data"
    }
  ];

  const categories = [
    "All Categories",
    "Templates",
    "Components",
    "Agents",
    "Data",
    "Services"
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
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-8 text-center"
          >
            Marketplace
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 text-center"
          >
            Discover, buy, and sell agent components in the first AI-native marketplace.
          </motion.p>

          {/* Categories */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`px-4 py-2 rounded-full ${index === 0 ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'} transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Search Bar */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search the marketplace..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Marketplace Items */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {marketplaceItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/5 rounded-lg overflow-hidden border border-white/10"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 0 20px rgba(139, 92, 246, 0.2)"
                }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-900/30 to-purple-900/30 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    [{item.image} Image]
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <span className="bg-white/10 text-xs px-2 py-1 rounded text-gray-300">{item.category}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{item.price}</span>
                    <motion.button
                      className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded text-white text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Marketplace Features */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {[
              {
                title: "Secure Transactions",
                description: "All marketplace transactions are secured by smart contracts with escrow protection."
              },
              {
                title: "Creator Royalties",
                description: "Earn ongoing royalties from your creations, even on secondary sales."
              },
              {
                title: "Verified Quality",
                description: "All marketplace items undergo rigorous testing and verification before listing."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/5 p-6 rounded-sm border border-white/10"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-bold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Full Marketplace
            </motion.button>
            <p className="mt-4 text-gray-400">Join thousands of creators and operators in the agent economy</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketplaceSection;
