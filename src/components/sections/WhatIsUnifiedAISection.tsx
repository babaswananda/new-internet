'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GlowingCard } from '@/components/ui/glowing-card';

const WhatIsUnifiedAISection: React.FC = () => {
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
    <section className="relative min-h-screen w-full py-24 overflow-hidden">
      {/* Background removed - using global Spline background */}

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
              className="text-4xl md:text-5xl font-bold mb-12 text-center"
            >
              EVERY HANDLE IS A FUNCTION
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl mb-8 text-center font-bold"
            >
              FSPP = Framework / Stack / Prompt / Protocol
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl mb-12 text-center"
            >
              You don&apos;t load a profile. You deploy a protocol.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div variants={itemVariants}>
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
                  <h3 className="text-xl font-semibold mb-4">Your Handle Stack:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• yourname.commandline — The terminal for your internet</li>
                    <li>• yourname.agentchat — Superapp: AI Inbox, Devices, Drops</li>
                    <li>• yourname.aiagents — Your fleet of GPTs</li>
                    <li>• yourname.superagents — Token-gated power agents</li>
                    <li>• yourname.seedgpt — Precision recall, seed-based memory</li>
                    <li>• yourname.vibecoder — No-code/pro-code IDE for agents</li>
                  </ul>
                </GlowingCard>
              </motion.div>

              <motion.div variants={itemVariants}>
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                  <h3 className="text-xl font-semibold mb-4">Business & Communication:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• yourname.textme / videochat / callmyagent — AI-native messaging</li>
                    <li>• yourname.webinar — Token-gated events, LMS, drops</li>
                    <li>• yourname.cryptobounties — Fork-to-earn bounty board</li>
                    <li>• yourname.devagency — Dev firm in a vault</li>
                    <li>• yourname.aimarketplace — Sell agents, prompts, stacks</li>
                    <li>• yourname.aidatacenters — On-prem GPU/HaaS</li>
                  </ul>
                </GlowingCard>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="text-center text-xl md:text-2xl mb-4">
              <p className="font-bold">Every slash is a stack.</p>
              <p className="font-bold">Every handle is a vault.</p>
              <p className="font-bold">Every vault is a business.</p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl font-bold text-center mb-8"
            >
              This is Unified AI.<br />
              Where your handle is your hub.<br />
              Your vault is your stack.<br />
              And your agent is your OS.
            </motion.p>

            <motion.div variants={itemVariants} className="mb-8">
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20">
                <h3 className="text-2xl font-semibold mb-6 text-blue-400 text-center">🌐 Browser Bar Commands That Slap</h3>
                <p className="text-center text-gray-300 mb-6">
                  🧠 You don't browse the new internet. You command it.<br />
                  Paste these into your browser bar — and see why we don't need to explain it.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-sm">
                  <div className="bg-black/60 rounded-lg p-4">
                    <div className="text-green-400">.commandline/claim</div>
                    <div className="text-blue-400">.agentchat/start</div>
                    <div className="text-purple-400">.vibecoder/deploy</div>
                  </div>
                  <div className="bg-black/60 rounded-lg p-4">
                    <div className="text-yellow-400">.aimarketplace/mint</div>
                    <div className="text-red-400">.superagents/unlock</div>
                    <div className="text-cyan-400">.aidatacenters/spinup</div>
                  </div>
                  <div className="bg-black/60 rounded-lg p-4">
                    <div className="text-pink-400">.seedgpt/train</div>
                    <div className="text-orange-400">.cryptobounties/post</div>
                    <div className="text-indigo-400">.alpharouter/view</div>
                  </div>
                </div>
                <p className="text-center text-gray-400 mt-4 text-sm">
                  Paste one. Press Enter. Watch the future unfold.
                </p>
              </GlowingCard>
            </motion.div>
          </motion.div>
        </div>
    </section>
  );
};

export default WhatIsUnifiedAISection;
