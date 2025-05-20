'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const InvestmentOfferingSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Email capture state
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call to capture email
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1500);
  };

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
      unlocks: 'Protocol badge, community access'
    },
    {
      tier: 'Founding Operator',
      unlocks: 'Agent Key, 6-month access, dev channel'
    },
    {
      tier: 'Protocol Architect',
      unlocks: 'Endpoint mint rights, private dev forum'
    },
    {
      tier: 'Board Access',
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

          {/* Email Capture for Pricing */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2 text-center">Get Investment Tier Pricing</h3>
              <p className="text-gray-300 mb-6 text-center">Enter your email to receive detailed pricing information for all contributor tiers.</p>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col md:flex-row gap-4"
                  >
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-grow px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-3 rounded-lg font-semibold ${isSubmitting ? 'bg-gray-500' : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600'}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        'Get Pricing'
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-4"
                  >
                    <div className="inline-block bg-green-500/20 text-green-400 p-2 rounded-full mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Thank you!</h4>
                    <p className="text-gray-300">We've sent the investment tier pricing details to your email.</p>
                    <p className="text-gray-400 mt-4">Tiers start at $149 with options for different contribution levels.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentOfferingSection;
