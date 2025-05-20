'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SplineBackground from '../ui/SplineBackground';
// Temporarily use regular HTML elements instead of custom components
// import { Section, SectionTitle, SectionDescription, Card, CardHeader, CardTitle, CardContent, Text, Grid, GridItem } from '../ui/21st/index';

const WhatIsUnifiedAISection: React.FC = () => {
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
      <SplineBackground
        splineUrl={splineSceneUrl}
        className="absolute inset-0"
      >
        <div className="container mx-auto px-4">
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
              What is Unified AI?
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl mb-8 text-center"
            >
              Unified AI is the control layer of decentralized intelligence.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl mb-12 text-center"
            >
              You&apos;re not accessing AI. You&apos;re building the grid that powers it.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div variants={itemVariants} className="bg-white/5 p-6 rounded-sm">
                <h3 className="text-xl font-semibold mb-4">It&apos;s not:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• A chatbot</li>
                  <li>• A SaaS product</li>
                  <li>• A wrapper around someone else&apos;s model</li>
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white/5 p-6 rounded-sm">
                <h3 className="text-xl font-semibold mb-4">It is:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• A protocol for programmable, monetizable agent logic</li>
                  <li>• An infrastructure grid for tokenized compute and contribution</li>
                  <li>• A decentralized operating system for the agent economy</li>
                  <li>• A cultural and technical layer built for human Operators</li>
                </ul>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="text-center text-xl md:text-2xl mb-4">
              <p>Old internet = usernames.</p>
              <p>New internet = agents.</p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl font-bold text-center"
            >
              Unified AI = the system that runs them all.
            </motion.p>
          </motion.div>
        </div>
      </SplineBackground>
    </section>
  );
};

export default WhatIsUnifiedAISection;
