'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MapSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Note: Replace this URL with your actual Spline scene URL - this one should be a detailed map
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

  // These would be the nodes on your map
  const mapNodes = [
    'Unified AI',
    'AgentOS',
    'Culture Nodes',
    'Operator Grid',
    'VibeCoding',
    'MCP/A2A',
    'AI Token Vaults'
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
            Map of the New Internet
          </motion.h2>

          {/* This would be replaced by the actual Spline 3D map */}
          <motion.div
            variants={itemVariants}
            className="h-96 bg-white/5 rounded-sm mb-12 flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-gray-500 text-xl">
                [Interactive 3D Map]
              </div>
            </div>

            {/* Sample node indicators - these would be positioned correctly on the actual map */}
            {mapNodes.map((node, index) => (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  top: `${20 + (index * 10)}%`,
                  left: `${15 + (index * 10)}%`,
                }}
                whileHover={{ scale: 1.2 }}
              >
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-4 left-2 text-sm whitespace-nowrap">{node}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center text-xl md:text-2xl"
          >
            <p>This isn&apos;t a roadmap.</p>
            <p>It&apos;s the new map.</p>
            <p>And it&apos;s not done being written.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
