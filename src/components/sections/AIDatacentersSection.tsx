'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GlowingCard } from '@/components/ui/glowing-card';

const AIDatacentersSection: React.FC = () => {
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
    <section id="ai-datacenters" className="relative min-h-screen w-full py-24 overflow-hidden">
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
            className="text-4xl md:text-6xl font-bold mb-8 text-center"
          >
            .AIDATACENTERS + .GPUCLOUD
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 text-center font-bold"
          >
            Local compute or decentralized access. Your call.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div variants={itemVariants}>
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">.AIDatacenters</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>Containerized HaaS</strong> — Hardware as a Service</li>
                  <li>• <strong>Deployed on-site</strong> — Your infrastructure, your control</li>
                  <li>• <strong>Includes LMS, Vault, Registry, AI Stack</strong></li>
                  <li>• Complete turnkey AI infrastructure</li>
                  <li>• Enterprise-grade security and compliance</li>
                  <li>• Scalable from startup to enterprise</li>
                </ul>
              </GlowingCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">.GPUCloud</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>Crowd GPU sharing</strong> — Distributed compute network</li>
                  <li>• <strong>Token-based compute leasing</strong> — Pay as you use</li>
                  <li>• <strong>Plug-and-play into AlphaRouter</strong></li>
                  <li>• Dynamic resource allocation</li>
                  <li>• Global compute availability</li>
                  <li>• Cost-effective scaling</li>
                </ul>
              </GlowingCard>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mb-12">
            <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-green-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-green-400 text-center">Compute Infrastructure Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-400">On-Premise Datacenters</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>✅ Complete data sovereignty</li>
                    <li>✅ Maximum security and compliance</li>
                    <li>✅ Predictable costs</li>
                    <li>✅ Custom hardware configurations</li>
                    <li>✅ No bandwidth limitations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-purple-400">Decentralized GPU Cloud</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>✅ Global compute access</li>
                    <li>✅ Pay-per-use pricing</li>
                    <li>✅ Instant scalability</li>
                    <li>✅ No upfront investment</li>
                    <li>✅ Community-driven network</li>
                  </ul>
                </div>
              </div>
            </GlowingCard>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mb-8">
            <p className="text-xl md:text-2xl font-bold mb-4">
              Whether you need sovereign infrastructure or flexible cloud access,<br />
              we've got the compute layer that scales with your ambition.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-blue-500/20"
            >
              SPIN UP A DATACENTER
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-colors"
            >
              JOIN THE GPU CLOUD
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIDatacentersSection;
