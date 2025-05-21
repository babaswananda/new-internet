'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FinalCTASection: React.FC = () => {
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

  return (
    <section className="relative min-h-screen w-full py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black grid-bg opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-12 text-xl md:text-2xl space-y-4"
          >
            <p>You missed Bitcoin.</p>
            <p>You missed Ethereum.</p>
            <p>You missed OpenAI before the wall.</p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold mb-12"
          >
            Don&apos;t miss the protocol that mints what&apos;s next.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mb-16 text-xl md:text-2xl space-y-4"
          >
            <p>Agent Keys mint soon.</p>
            <p>The protocol is syncing.</p>
            <p>You&apos;re not joining early. You&apos;re writing the rulebook.</p>
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-black font-bold text-lg rounded-sm hover:bg-opacity-90 transition-colors"
          >
            Enter with AI Tokens
          </motion.button>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-gray-400"
          >
            Tier Selection + Merch Options + Agent Key Vault
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
