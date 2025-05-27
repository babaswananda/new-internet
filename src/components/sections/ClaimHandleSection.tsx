'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GlowingCard } from '@/components/ui/glowing-card';

const ClaimHandleSection: React.FC = () => {
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
    <section id="claim-handle" className="relative min-h-screen w-full py-24 overflow-hidden">
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
            className="text-4xl md:text-7xl font-bold mb-8 text-center"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              CLAIM YOUR HANDLE
            </span>
          </motion.h2>

          <motion.div variants={itemVariants} className="text-center mb-12">
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Deploy Your IO. Command Your Stack.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Your handle isn't just an identity — it's your command center for the agentic internet.
              Deploy IO, orchestrate agents, and own your digital sovereignty.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-center">Your handle is your command center:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🧠</div>
                  <p className="text-lg font-semibold">Your IO</p>
                  <p className="text-xs text-gray-400">Intelligent Operator</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <p className="text-lg font-semibold">Your Stack</p>
                  <p className="text-xs text-gray-400">Agent Orchestration</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🌐</div>
                  <p className="text-lg font-semibold">Your Internet</p>
                  <p className="text-xs text-gray-400">Sovereign Identity</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🏦</div>
                  <p className="text-lg font-semibold">Your Vault</p>
                  <p className="text-xs text-gray-400">Secure Storage</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📧</div>
                  <p className="text-lg font-semibold">Your Inbox</p>
                  <p className="text-xs text-gray-400">AI-Native Messaging</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🤖</div>
                  <p className="text-lg font-semibold">Your Agents</p>
                  <p className="text-xs text-gray-400">Fleet Management</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💼</div>
                  <p className="text-lg font-semibold">Your Business</p>
                  <p className="text-xs text-gray-400">Enterprise Control</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💰</div>
                  <p className="text-lg font-semibold">Your Wallet</p>
                  <p className="text-xs text-gray-400">Token Management</p>
                </div>
              </div>
              <p className="text-center text-xl text-gray-300">
                All orchestrated by <strong>your IO</strong> under <strong>one handle</strong>.
              </p>
            </GlowingCard>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mb-8">
            <p className="text-xl md:text-2xl font-bold mb-4 text-red-400">
              And once it's taken — it's taken.<br />
              Forever.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-center text-purple-400">Historic Opportunity</h3>
              <div className="text-center space-y-4">
                <p className="text-xl text-gray-300">
                  This is the <strong>first time in digital history</strong> you've had the chance to own your entire online identity across everything:
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-lg">
                  <span className="bg-blue-500/20 px-3 py-1 rounded-full">AI</span>
                  <span className="bg-purple-500/20 px-3 py-1 rounded-full">Crypto</span>
                  <span className="bg-green-500/20 px-3 py-1 rounded-full">Domains</span>
                  <span className="bg-amber-500/20 px-3 py-1 rounded-full">Identity</span>
                  <span className="bg-cyan-500/20 px-3 py-1 rounded-full">Apps</span>
                  <span className="bg-pink-500/20 px-3 py-1 rounded-full">Agents</span>
                </div>
                <p className="text-xl text-gray-300">
                  All under <strong>one handle</strong>.
                </p>
              </div>
            </GlowingCard>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mb-12">
            <p className="text-xl md:text-2xl font-bold mb-4 text-red-400">
              Miss this moment, and you're back to begging for yourname_3245 all over again.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-green-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-green-400 text-center">💻 IO Deployment Protocol</h3>
              <div className="bg-black/60 rounded-lg p-6 font-mono text-sm mb-6">
                <div className="text-green-400 mb-2">$ io claim --handle="yourname" --deploy="intelligent-operator" --network="unifiedai"</div>
                <div className="text-gray-400 mb-2">🧠 Initializing your Intelligent Operator...</div>
                <div className="text-blue-400 mb-2">✓ IO deployed at yourname.commandline</div>
                <div className="text-purple-400">⚡ Agent orchestration layer active</div>
              </div>
              <div className="text-center">
                <p className="text-lg text-gray-300 mb-4">
                  You're not registering. You're deploying your IO.<br />
                  <span className="text-green-400">.commandline/claim</span> is where it all begins.
                </p>
              </div>
            </GlowingCard>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-2xl rounded-lg shadow-lg shadow-blue-500/20"
            >
              CLAIM YOUR HANDLE — NOW
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <p className="text-lg text-gray-400 mb-2">
              Orchestrated by <span className="text-blue-400">IO</span>
            </p>
            <p className="text-lg text-gray-400 mb-2">
              Born on <span className="text-green-400">.Commandline/</span>
            </p>
            <p className="text-lg text-gray-400 mb-2">
              Routed through <span className="text-cyan-400">AlphaRouter</span>
            </p>
            <p className="text-lg text-gray-400 mb-2">
              Classified by <span className="text-purple-400">ION</span>
            </p>
            <p className="text-lg text-gray-400">
              Deployed via <span className="text-pink-400">AgentChat</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClaimHandleSection;
