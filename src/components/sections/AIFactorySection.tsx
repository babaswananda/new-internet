'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HeaderText } from '@/components/ui/header-text';
import Link from 'next/link';

const AIFactorySection: React.FC = () => {
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

  const aiTools = [
    { name: "AI Agents", icon: "🤖", description: "Deploy intelligent agents" },
    { name: "AI Avatars", icon: "👤", description: "Virtual customer interactions" },
    { name: "AI Call Center", icon: "📞", description: "Automate voice operations" },
    { name: "Vibe Coder", icon: "💻", description: "AI-assisted development" },
    { name: "AI Workflows", icon: "⚙️", description: "Process automation" },
    { name: "AI Strategists", icon: "📊", description: "Business intelligence" }
  ];

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <HeaderText>🏭 AI Factory™</HeaderText>
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
              <span className="font-bold">Build,</span> <span className="font-normal">Automate,</span> <span className="font-bold">and</span> <span className="font-normal">Scale</span> <span className="font-bold">with</span> <span className="font-normal">AI</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Transform your business with AI Factory™, the comprehensive suite of AI tools designed to streamline operations, enhance creativity, and drive growth.
            </p>
          </motion.div>
        </motion.div>

        {/* Value Propositions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: "🚀",
              title: "Deploy Intelligent Agents",
              description: "AI agents across various business functions"
            },
            {
              icon: "⚡",
              title: "Automate Workflows",
              description: "Streamline processes with ease"
            },
            {
              icon: "💡",
              title: "Enhance Engagement",
              description: "AI-powered customer interactions"
            },
            {
              icon: "🛠️",
              title: "Industry Tools",
              description: "AI tools tailored for diverse industries"
            },
            {
              icon: "🎯",
              title: "Expert Consulting",
              description: "Implement AI strategies effectively"
            },
            {
              icon: "📈",
              title: "Scale Operations",
              description: "Grow your business with AI automation"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-black/30 backdrop-blur-sm border border-orange-500/20 rounded-lg p-6 hover:border-orange-500/50 transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured AI Tools */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold text-center text-white mb-12"
          >
            Featured AI Tools
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {aiTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                variants={itemVariants}
                className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/20 rounded-lg p-4 text-center hover:border-orange-500/50 transition-all group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{tool.icon}</div>
                <h4 className="text-white font-semibold text-sm mb-2">{tool.name}</h4>
                <p className="text-gray-400 text-xs">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-orange-900/50 to-red-900/50 border border-orange-500/30 rounded-lg p-8 max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of businesses already using AI Factory™ to automate operations, enhance creativity, and drive unprecedented growth.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/ai-factory">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-lg hover:from-orange-600 hover:to-red-600 transition-all"
                >
                  🔗 Explore AI Factory™ Suite
                </motion.button>
              </Link>
              <Link href="/ai-factory#pricing">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-orange-500/50 text-orange-300 font-bold text-lg rounded-lg hover:bg-orange-500/10 transition-all"
                >
                  💰 View Pricing Plans
                </motion.button>
              </Link>
            </div>

            <div className="mt-6 text-sm text-gray-400">
              <p>Starting at <span className="text-orange-300 font-semibold">$49/month</span> • No setup fees • Cancel anytime</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIFactorySection;
