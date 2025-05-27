'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GlowingCard } from '@/components/ui/glowing-card';
import { TLDName, ProductName, HeaderText } from '@/utils/normalBold';

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

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    },
  };

  return (
    <section className="relative min-h-screen w-full py-24 overflow-hidden">
      {/* Background removed - using global Spline background */}

      {/* Scrolling Marquee */}
      <div className="w-full overflow-hidden mb-16">
        <motion.div
          className="flex whitespace-nowrap py-4"
          animate={{
            x: [0, '-100%']
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }
          }}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex items-center text-4xl md:text-5xl font-bold tracking-wider text-white mr-16">
              <span className="mx-8"><HeaderText>Welcome To The New Map Of The New Internet</HeaderText></span>
              <span className="text-blue-400 mx-8">•</span>
              <span className="mx-8"><HeaderText>Welcome To The New Map Of The New Internet</HeaderText></span>
              <span className="text-purple-400 mx-8">•</span>
              <span className="mx-8"><HeaderText>Welcome To The New Map Of The New Internet</HeaderText></span>
              <span className="text-cyan-400 mx-8">•</span>
            </div>
          ))}
        </motion.div>
      </div>

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
              className="text-4xl md:text-5xl mb-12 text-center tracking-wider"
            >
              <HeaderText>Every Handle Is A Framework</HeaderText>
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
                    <li>• yourname<TLDName>.commandline</TLDName> — The terminal for your internet</li>
                    <li>• yourname<TLDName>.agentchat</TLDName> — Superapp: AI Inbox, Devices, Drops</li>
                    <li>• yourname<TLDName>.aiagents</TLDName> — Your fleet of GPTs</li>
                    <li>• yourname<TLDName>.superagents</TLDName> — Token-gated power agents</li>
                    <li>• yourname<TLDName>.seedgpt</TLDName> — Precision recall, seed-based memory</li>
                    <li>• yourname<TLDName>.vibecoder</TLDName> — No-code/pro-code IDE for agents</li>
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
              <p><span className="font-normal">Every</span> <span className="font-bold">slash</span> <span className="font-normal">is a</span> <span className="font-bold">stack.</span></p>
              <p><span className="font-normal">Every</span> <span className="font-bold">handle</span> <span className="font-normal">is a</span> <span className="font-bold">vault.</span></p>
              <p><span className="font-normal">Every</span> <span className="font-bold">vault</span> <span className="font-normal">is a</span> <span className="font-bold">business.</span></p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-center mb-8"
            >
              <span className="font-normal">This is</span> <span className="font-bold">Unified AI.</span><br />
              <span className="font-normal">Where your</span> <span className="font-bold">handle</span> <span className="font-normal">is your</span> <span className="font-bold">hub.</span><br />
              <span className="font-normal">Your</span> <span className="font-bold">vault</span> <span className="font-normal">is your</span> <span className="font-bold">stack.</span><br />
              <span className="font-normal">And your</span> <span className="font-bold">agent</span> <span className="font-normal">is your</span> <span className="font-bold">OS.</span>
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
                    <div className="text-green-400"><TLDName>.commandline</TLDName>/claim</div>
                    <div className="text-blue-400"><TLDName>.agentchat</TLDName>/start</div>
                    <div className="text-purple-400"><TLDName>.vibecoder</TLDName>/deploy</div>
                  </div>
                  <div className="bg-black/60 rounded-lg p-4">
                    <div className="text-yellow-400"><TLDName>.aimarketplace</TLDName>/mint</div>
                    <div className="text-red-400"><TLDName>.superagents</TLDName>/unlock</div>
                    <div className="text-cyan-400"><TLDName>.aidatacenters</TLDName>/spinup</div>
                  </div>
                  <div className="bg-black/60 rounded-lg p-4">
                    <div className="text-pink-400"><TLDName>.seedgpt</TLDName>/train</div>
                    <div className="text-orange-400"><TLDName>.cryptobounties</TLDName>/post</div>
                    <div className="text-indigo-400"><TLDName>.alpharouter</TLDName>/view</div>
                  </div>
                </div>
                <p className="text-center text-gray-400 mt-4 text-sm">
                  Paste one. Press Enter. Watch the future unfold.<br />
                  <span className="text-green-400"><TLDName>.commandline</TLDName>/claim</span> is where it all begins. (no paste '<TLDName>.commandline</TLDName>/claim' in your browser, it leads somewhere special).
                </p>
              </GlowingCard>
            </motion.div>
          </motion.div>
        </div>
    </section>
  );
};

export default WhatIsUnifiedAISection;
