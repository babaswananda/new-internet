'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { CardSpotlight } from '@/components/ui/card-spotlight';

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
            className="flex justify-center mb-8"
          >
            <Link href="/ai-tokens">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-bold text-lg shadow-lg shadow-blue-500/20"
              >
                Enter with AI Tokens
              </motion.button>
            </Link>
          </motion.div>

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
            className="flex flex-col md:flex-row gap-8 mb-12"
          >
            <div className="flex-1">
              <CardSpotlight className="h-full w-full" color="#1e293b">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  Every tier gets:
                </p>
                <div className="text-neutral-200 mt-4 relative z-20">
                  <ul className="list-none mt-2 space-y-4">
                    <InvestmentStep title="NFT receipt" />
                    <InvestmentStep title="Role-based access" />
                    <InvestmentStep title="Future mint rights" />
                    <InvestmentStep title="Contributor wall timestamp" />
                  </ul>
                </div>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                  Secure your position in the protocol with exclusive benefits for early contributors.
                </p>
              </CardSpotlight>
            </div>

            <div className="flex-1">
              <CardSpotlight className="h-full w-full" color="#1e293b">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  Investment steps
                </p>
                <div className="text-neutral-200 mt-4 relative z-20">
                  <ul className="list-none mt-2 space-y-4">
                    <InvestmentStep title="Request access below" />
                    <InvestmentStep title="Receive invitation link" />
                    <InvestmentStep title="Select your tier level" />
                    <InvestmentStep title="Complete verification" />
                  </ul>
                </div>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                  Investment tiers start at $10,000 with exclusive benefits for protocol contributors.
                </p>
              </CardSpotlight>
            </div>
          </motion.div>

          {/* Email Capture for Pricing */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2 text-center">Request Investment Access</h3>
              <p className="text-gray-300 mb-6 text-center">Investment opportunities are invite-only. Enter your email to request access to our exclusive investment tiers.</p>

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
                      type="submit"
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
                        'Request Access'
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
                    <h4 className="text-xl font-semibold mb-2">Thank you for your interest!</h4>
                    <p className="text-gray-300">Your request has been received. If approved, you'll receive an invitation with access details.</p>
                    <p className="text-gray-400 mt-4">Investment tiers start at $10,000 with exclusive benefits for protocol contributors.</p>
                    <div className="mt-6">
                      <Link href="/ai-tokens">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                        >
                          Enter with AI Tokens
                        </motion.button>
                      </Link>
                    </div>
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

const InvestmentStep = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

export default InvestmentOfferingSection;
