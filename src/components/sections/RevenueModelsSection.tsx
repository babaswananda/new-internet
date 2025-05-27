'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import { GlowingCard } from '@/components/ui/glowing-card';

const RevenueModelsSection: React.FC = () => {
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

  const revenueExamples = [
    {
      title: "Agent Calls",
      description: "Deploy an AI agent for support, onboarding, or automation.",
      details: [
        "Example: 1,500 calls/day",
        "Fee per Call: $0.03",
        "Monthly Revenue: 1,500 × $0.03 × 30 = $1,350/month"
      ],
      icon: "🔹"
    },
    {
      title: "GPU Rentals",
      description: "Stake or host nodes in the decentralized GPU Cloud.",
      details: [
        "Example: 2 active GPU nodes",
        "Rental Rate: $7/day per node",
        "Monthly Revenue: 2 × $7 × 30 = $420/month"
      ],
      icon: "🔹"
    },
    {
      title: "Forked Logic Royalties",
      description: "Get paid when other developers fork or build on your logic templates.",
      details: [
        "Example: 50 forks",
        "Fork Access Fee: $20",
        "Your Royalty Cut (15%): 50 × $20 × 15% = $150/month"
      ],
      icon: "🔹"
    }
  ];

  return (
    <section className="relative min-h-screen w-full py-24 overflow-hidden">
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
            Revenue Models + Calculator
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 text-center"
          >
            How Operators earn inside Unified AI:
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-8 mb-16"
          >
            {revenueExamples.map((example, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
              >
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-sm border border-blue-500/20">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">{example.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">{example.title}</h3>
                      <p className="text-gray-300 mb-4">{example.description}</p>
                      <ul className="space-y-2">
                        {example.details.map((detail, i) => (
                          <li key={i} className="text-gray-300">
                            {i === example.details.length - 1 ? (
                              <span className="text-blue-400 font-medium">{detail}</span>
                            ) : (
                              detail
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 text-center"
          >
            These aren&apos;t dashboards. These are protocol-native revenue streams built into the fabric of Unified AI.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <GlowingCard className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-sm border border-blue-500/20">
            <h3 className="text-2xl font-semibold mb-6 text-center">🔸 Optional: Estimate Your Earnings</h3>

            <div className="text-center mb-6">
              <p className="text-gray-300">
                Coming soon — a dynamic calculator to simulate:
              </p>
              <ul className="mt-4 space-y-2 list-none">
                <li>• Daily agent usage</li>
                <li>• Compute staking returns</li>
                <li>• Fork adoption and royalty tiers</li>
                <li>• Long-term Operator projections</li>
              </ul>
            </div>

            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-semibold"
              >
                Notify Me When Available
              </motion.button>
            </div>
            </GlowingCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RevenueModelsSection;
