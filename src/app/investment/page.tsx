'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

const InvestmentPage = () => {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const investmentTiers = [
    {
      id: 1,
      name: 'Signal Contributor',
      price: '$10,000',
      benefits: [
        'Protocol badge',
        'Community access',
        'NFT receipt',
        'Future mint rights',
        'Contributor wall timestamp'
      ],
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 2,
      name: 'Founding Operator',
      price: '$25,000',
      benefits: [
        'All Signal Contributor benefits',
        'Agent Key',
        '6-month access',
        'Dev channel',
        'Early feature access',
        'Quarterly strategy calls'
      ],
      color: 'from-purple-500 to-pink-500',
      recommended: true
    },
    {
      id: 3,
      name: 'Protocol Architect',
      price: '$50,000',
      benefits: [
        'All Founding Operator benefits',
        'Endpoint mint rights',
        'Private dev forum',
        'Protocol governance input',
        'Direct team access',
        'Custom agent development'
      ],
      color: 'from-pink-500 to-red-500'
    },
    {
      id: 4,
      name: 'Board Access',
      price: '$100,000',
      benefits: [
        'All Protocol Architect benefits',
        'Founding ledger',
        'Governance preview',
        'Top-tier unlocks',
        'Advisory board seat',
        'Strategic partnership opportunities',
        'Early access to all future products'
      ],
      color: 'from-red-500 to-orange-500'
    }
  ];

  const handleTierSelect = (id: number) => {
    setSelectedTier(id);
    setShowConfirmation(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

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
    <MainLayout>
      <div className="min-h-screen pt-32 pb-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6 text-center"
            >
              Investment Opportunities
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl mb-16 text-center max-w-3xl mx-auto"
            >
              Exclusive access to protocol-grade investment tiers for the agent economy.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            >
              {investmentTiers.map((tier) => (
                <motion.div
                  key={tier.id}
                  className={`relative rounded-xl overflow-hidden ${
                    tier.recommended ? 'transform md:-translate-y-4 scale-105 z-10' : ''
                  }`}
                  whileHover={{
                    scale: tier.recommended ? 1.05 : 1.03,
                    y: tier.recommended ? -10 : -5,
                    zIndex: 20
                  }}
                >
                  {/* Border gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} p-[1px] rounded-xl`}>
                    <div className="absolute inset-0 bg-black/90 backdrop-blur-sm rounded-xl"></div>
                  </div>

                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {tier.recommended && (
                      <div className={`absolute top-0 right-0 bg-gradient-to-r ${tier.color} text-white text-xs font-bold px-4 py-1 rounded-bl-lg`}>
                        RECOMMENDED
                      </div>
                    )}

                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <p className={`text-transparent bg-clip-text bg-gradient-to-r ${tier.color} text-2xl font-bold mb-6`}>{tier.price}</p>

                    <ul className="space-y-3 mb-8 flex-grow">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <span className={`mr-2 text-transparent bg-clip-text bg-gradient-to-r ${tier.color}`}>✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.button
                      className={`w-full py-3 rounded-lg font-bold bg-gradient-to-r ${tier.color} text-white`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleTierSelect(tier.id)}
                    >
                      Select Tier
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/5 p-8 rounded-xl mb-16 max-w-3xl mx-auto"
            >
              <h3 className="text-2xl font-bold mb-4">Investment Process</h3>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-4 font-bold text-blue-400">1.</span>
                  <span>Select your preferred investment tier</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 font-bold text-blue-400">2.</span>
                  <span>Complete the verification process</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 font-bold text-blue-400">3.</span>
                  <span>Receive your investment agreement</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 font-bold text-blue-400">4.</span>
                  <span>Complete your contribution</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 font-bold text-blue-400">5.</span>
                  <span>Gain access to your tier benefits</span>
                </li>
              </ol>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-xl p-8 max-w-md w-full border border-white/10"
            >
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-bold mb-4">Confirm Investment Interest</h3>
                  <p className="text-gray-300 mb-6">
                    You've selected the <span className="font-semibold">{selectedTier && investmentTiers.find(t => t.id === selectedTier)?.name}</span> tier 
                    at <span className="font-semibold">{selectedTier && investmentTiers.find(t => t.id === selectedTier)?.price}</span>.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    
                    <div className="flex gap-4 mt-6">
                      <button
                        type="button"
                        className="flex-1 py-2 border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
                        onClick={() => setShowConfirmation(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium"
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
                          'Confirm Interest'
                        )}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-4">
                  <div className="inline-block bg-green-500/20 text-green-400 p-3 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-semibold mb-2">Thank you!</h4>
                  <p className="text-gray-300 mb-6">Your investment interest has been submitted. Our team will contact you within 48 hours with next steps.</p>
                  <button
                    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium"
                    onClick={() => {
                      setShowConfirmation(false);
                      setIsSubmitted(false);
                    }}
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MainLayout>
  );
};

export default InvestmentPage;
