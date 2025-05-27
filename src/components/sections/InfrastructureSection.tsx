'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
<<<<<<< HEAD
import { GlowingCard } from '@/components/ui/glowing-card';
=======
>>>>>>> a8bb613d961596c562319d771cbc81914bce23ba
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
    { layer: '⚙️ Parallel Processing', description: 'Runs agents, memory, and endpoints across distributed nodes in real time.' },
    { layer: '🧠 AgentOS', description: 'OS managing logic, permissions, runtime, and agent identity.' },
    { layer: '🧰 ADK (Agent Dev Kit)', description: 'Build and deploy agents, endpoints, and tools.' },
    { layer: '🧬 MCP (Model Context Protocol)', description: 'Routes input, memory, and context into executable logic.' },
    { layer: '🔗 A2A Protocol', description: 'Agents communicate, delegate, and sync logic across the network.' },
    { layer: '🗃 Agent Vault', description: 'Stores agent logic, memory, and token access modules.' },
    { layer: '🖥 Compute Grid', description: 'Decentralized runtime for all AI logic and agent execution.' },
    { layer: '⚡ GPU Cloud', description: 'Rent or stake compute power. Power your agents. Earn from others.' },
    { layer: '🧱 Parallel Computer', description: 'Registers physical and virtual machines that run protocol logic.' },
    { layer: '🌉 AgentOS Connect', description: 'Connects agents to APIs, databases, and Web2 platforms.' },
    { layer: '💻 VibeCoding IDE', description: 'The AI-native coding environment for building, testing, and launching agents.' },
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
            Tech Stack + Infrastructure — Parallel Protocol
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-6 text-center"
          >
            Parallel Processing is how agents scale.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 text-center"
          >
            The Parallel Protocol is Unified AI&apos;s engine for decentralized execution.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <GlowingCard className="bg-black/30 backdrop-blur-sm rounded-sm border border-blue-500/20 overflow-hidden">
              <div className="overflow-x-auto">
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
              </div>
            </GlowingCard>
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
<<<<<<< HEAD
            className="w-full flex flex-col items-center justify-center px-4"
          >
            <div className="w-full max-w-4xl flex flex-col items-center">
              <DatabaseWithRestApi
                title="AgentOS: REST API for Agent Integration"
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
                className="mx-auto"
              />
            </div>
=======
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
>>>>>>> a8bb613d961596c562319d771cbc81914bce23ba
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
