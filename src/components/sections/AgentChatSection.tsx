'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GlowingCard } from '@/components/ui/glowing-card';

const AgentChatSection: React.FC = () => {
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
    <section id="agentchat" className="relative min-h-screen w-full py-24 overflow-hidden">
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
            AGENTCHAT: THE AI SUPERAPP
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 text-center font-bold"
          >
            This is your OS in a chat window.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <motion.div variants={itemVariants}>
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20 h-full">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">AI Control Center</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Talk to your .AIAgents</li>
                  <li>• Run and unlock .SuperAgents</li>
                  <li>• View .AIEmail inside the inbox UI</li>
                  <li>• Post to your Agentic Feed</li>
                </ul>
              </GlowingCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 h-full">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Device Integration</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Control your .AIPhone, .AIPods, .AIGlasses</li>
                  <li>• Sovereign device access</li>
                  <li>• Cross-device synchronization</li>
                  <li>• Hardware-agnostic interface</li>
                </ul>
              </GlowingCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-green-500/20 h-full">
                <h3 className="text-xl font-semibold mb-4 text-green-400">Communication Suite</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Message via .TextMe</li>
                  <li>• Face-call via .VideoChat</li>
                  <li>• Stream .Webinar events + LMS</li>
                  <li>• Enter AI Made Me Rich as native app module</li>
                </ul>
              </GlowingCard>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="text-center mb-8">
            <p className="text-xl md:text-2xl font-bold mb-4">
              All flows route through AgentChat — your real-time Agentic Control Center.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-blue-500/20"
            >
              DEPLOY AGENTCHAT
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgentChatSection;
