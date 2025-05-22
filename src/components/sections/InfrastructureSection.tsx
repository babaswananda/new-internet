'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import DatabaseWithRestApi from '@/components/ui/database-with-rest-api';

const InfrastructureSection: React.FC = () => {
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

  const infrastructureLayers = [
    { layer: 'AgentOS', description: 'AI-Crypto Native Operating System' },
    { layer: 'ADK', description: 'Dev tools for building agents' },
    { layer: 'A2A Protocol', description: 'Agent-to-Agent logic communication' },
    { layer: 'MCP', description: 'Model Context Protocol: modular ingestion' },
    { layer: 'Agent Vault', description: 'Logic, memory, permissions stored on-chain' },
    { layer: 'Compute Grid', description: 'Decentralized GPU power via AI Token' },
    { layer: 'Logic Grid', description: 'Endpoints-as-a-Service for monetization' },
    { layer: 'Operator Console', description: 'Command UI for managing your agents' },
    { layer: 'Agent Registry', description: 'Discover / Fork / License logic' },
    { layer: 'BridgeOS', description: 'REST/Socket API to interact with Web2 systems' },
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
            Infrastructure Overview
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 text-center"
          >
            Unified AI powers the full-stack agent grid:
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="overflow-x-auto mb-12"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white/10">
                  <th className="py-4 px-6 text-left text-lg font-semibold">Layer</th>
                  <th className="py-4 px-6 text-left text-lg font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {infrastructureLayers.map((item, index) => (
                  <motion.tr
                    key={index}
                    variants={itemVariants}
                    className={index % 2 === 0 ? 'bg-white/5' : ''}
                  >
                    <td className="py-4 px-6 font-medium">{item.layer}</td>
                    <td className="py-4 px-6 text-gray-300">{item.description}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-center text-xl md:text-2xl mb-16"
          >
            Unified AI isn&apos;t an app.
            <br />
            It&apos;s the protocol layer of the AI-native web.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center w-full"
          >
            <DatabaseWithRestApi
              title="BridgeOS: REST API for Web2 Integration"
              circleText="API"
              badgeTexts={{
                first: "GET",
                second: "POST",
                third: "PUT",
                fourth: "DELETE"
              }}
              buttonTexts={{
                first: "Agent Data",
                second: "Endpoints"
              }}
              lightColor="#3a86ff"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
