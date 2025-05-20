'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const InvestmentOfferingSection: React.FC = () => {
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

  const contributorTiers = [
    {
      tier: 'Signal Contributor',
      price: '$149',
      unlocks: 'Protocol badge, community access'
    },
    {
      tier: 'Founding Operator',
      price: '$499',
      unlocks: 'Agent Key, 6-month access, dev channel'
    },
    {
      tier: 'Protocol Architect',
      price: '$999',
      unlocks: 'Endpoint mint rights, private dev forum'
    },
    {
      tier: 'Board Access',
      price: '$2,500+',
      unlocks: 'Founding ledger, governance preview, top-tier unlocks'
    },
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
            Investment Offering – Contributor Tiers
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 text-center"
          >
            <p>I/O = Input / Ownership = Investment Offering</p>
            <p className="mt-4">You&apos;re not buying access.<br />You&apos;re buying position in the protocol.</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/5 p-8 rounded-sm mb-12"
          >
            <p className="text-xl mb-6">
              Contribution window:
            </p>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">⟶</span>
                <span>33 contributor slots (public)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">⟶</span>
                <span>Powered by AI Tokens</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">⟶</span>
                <span>Optional vesting (6–12 months)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">⟶</span>
                <span>Mint rights tied to tier</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="overflow-x-auto mb-12"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white/10">
                  <th className="py-4 px-6 text-left text-lg font-semibold">Tier</th>
                  <th className="py-4 px-6 text-left text-lg font-semibold">Price</th>
                  <th className="py-4 px-6 text-left text-lg font-semibold">Unlocks</th>
                </tr>
              </thead>
              <tbody>
                {contributorTiers.map((item, index) => (
                  <motion.tr
                    key={index}
                    variants={itemVariants}
                    className={index % 2 === 0 ? 'bg-white/5' : ''}
                  >
                    <td className="py-4 px-6 font-medium">{item.tier}</td>
                    <td className="py-4 px-6">{item.price}</td>
                    <td className="py-4 px-6 text-gray-300">{item.unlocks}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/5 p-8 rounded-sm mb-12"
          >
            <p className="text-xl mb-6">
              Every tier gets:
            </p>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>NFT receipt</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Role-based access</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Future mint rights</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Contributor wall timestamp</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentOfferingSection;
