'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { GlowingCard } from '@/components/ui/glowing-card';

const PartnersPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const strategicPartners = [
    {
      name: "OpenAI",
      type: "AI Research Partner",
      description: "Collaborative research on multi-agent systems and advanced reasoning capabilities.",
      logo: "🤖",
      partnership: "Joint research initiative on agent-to-agent communication protocols."
    },
    {
      name: "Anthropic",
      type: "Safety & Alignment Partner", 
      description: "Ensuring AI safety and alignment in distributed agent networks.",
      logo: "🛡️",
      partnership: "Co-developing safety standards for autonomous agent interactions."
    },
    {
      name: "Ethereum Foundation",
      type: "Protocol Partner",
      description: "Building decentralized infrastructure for the agentic internet on Ethereum.",
      logo: "⟠",
      partnership: "ION protocol integration with Ethereum's decentralized infrastructure."
    },
    {
      name: "Hugging Face",
      type: "Model Distribution Partner",
      description: "Seamless integration with the world's largest AI model repository.",
      logo: "🤗",
      partnership: "Native support for Hugging Face models in AgentChat and AlphaRouter."
    }
  ];

  const techPartners = [
    {
      name: "NVIDIA",
      type: "Hardware Partner",
      description: "Optimized inference and training on NVIDIA's latest GPU architectures.",
      logo: "🔥"
    },
    {
      name: "AWS",
      type: "Cloud Infrastructure",
      description: "Scalable deployment of agent networks on Amazon Web Services.",
      logo: "☁️"
    },
    {
      name: "Vercel",
      type: "Deployment Partner",
      description: "Seamless deployment of agent applications on Vercel's edge network.",
      logo: "▲"
    },
    {
      name: "Pinecone",
      type: "Vector Database",
      description: "High-performance vector search for agent memory and context retrieval.",
      logo: "🌲"
    }
  ];

  const ecosystemPartners = [
    {
      name: "LangChain",
      type: "Framework Integration",
      description: "Native support for LangChain applications in the Unified AI ecosystem.",
      logo: "🦜"
    },
    {
      name: "AutoGPT",
      type: "Agent Platform",
      description: "Seamless migration and enhancement of AutoGPT agents.",
      logo: "🔄"
    },
    {
      name: "Zapier",
      type: "Automation Partner",
      description: "Connect Unified AI agents with 5,000+ apps and services.",
      logo: "⚡"
    },
    {
      name: "Discord",
      type: "Community Platform",
      description: "Native agent integration for Discord servers and communities.",
      logo: "💬"
    }
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-black text-white">
        <section className="relative min-h-screen w-full py-24 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-6xl mx-auto"
            >
              {/* Hero Section */}
              <motion.div variants={itemVariants} className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
                    Our Partners
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  Building the Agentic Internet Together
                </p>
                <p className="text-lg text-gray-400 max-w-4xl mx-auto">
                  We collaborate with leading organizations across AI research, infrastructure, and developer tools 
                  to create the most comprehensive platform for intelligent agents.
                </p>
              </motion.div>

              {/* Partnership Philosophy */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20">
                  <h2 className="text-3xl font-bold mb-6 text-blue-400 text-center">Partnership Philosophy</h2>
                  <p className="text-lg text-gray-300 text-center mb-6">
                    We believe the agentic internet will be built through collaboration, not competition. 
                    Our partnerships focus on creating open standards, shared infrastructure, and mutual growth.
                  </p>
                  <div className="text-center">
                    <p className="text-gray-400">
                      <span className="text-green-400">.commandline/claim</span> is where it all begins.<br />
                      (no paste '.commandline/claim' in your browser, it leads somewhere special).
                    </p>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Strategic Partners */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Strategic Partners</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {strategicPartners.map((partner, index) => (
                    <GlowingCard key={index} className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="text-3xl">{partner.logo}</div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{partner.name}</h3>
                          <p className="text-purple-400 text-sm">{partner.type}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{partner.description}</p>
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3">
                        <p className="text-purple-200 text-sm">{partner.partnership}</p>
                      </div>
                    </GlowingCard>
                  ))}
                </div>
              </motion.div>

              {/* Technology Partners */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Technology Partners</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {techPartners.map((partner, index) => (
                    <GlowingCard key={index} className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/20">
                      <div className="text-center">
                        <div className="text-3xl mb-3">{partner.logo}</div>
                        <h3 className="text-lg font-semibold text-white mb-2">{partner.name}</h3>
                        <p className="text-cyan-400 text-sm mb-3">{partner.type}</p>
                        <p className="text-gray-300 text-sm">{partner.description}</p>
                      </div>
                    </GlowingCard>
                  ))}
                </div>
              </motion.div>

              {/* Ecosystem Partners */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Ecosystem Partners</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {ecosystemPartners.map((partner, index) => (
                    <GlowingCard key={index} className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-green-500/20">
                      <div className="text-center">
                        <div className="text-3xl mb-3">{partner.logo}</div>
                        <h3 className="text-lg font-semibold text-white mb-2">{partner.name}</h3>
                        <p className="text-green-400 text-sm mb-3">{partner.type}</p>
                        <p className="text-gray-300 text-sm">{partner.description}</p>
                      </div>
                    </GlowingCard>
                  ))}
                </div>
              </motion.div>

              {/* Partnership Benefits */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Partnership Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
                    <div className="text-3xl mb-4 text-center">🚀</div>
                    <h3 className="text-lg font-semibold mb-3 text-blue-400 text-center">Technical Integration</h3>
                    <p className="text-gray-300 text-sm text-center">
                      Deep technical integration with our protocol stack, including ION, AlphaRouter, and AgentChat APIs.
                    </p>
                  </GlowingCard>
                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                    <div className="text-3xl mb-4 text-center">🤝</div>
                    <h3 className="text-lg font-semibold mb-3 text-purple-400 text-center">Co-Marketing</h3>
                    <p className="text-gray-300 text-sm text-center">
                      Joint marketing initiatives, conference presentations, and thought leadership content.
                    </p>
                  </GlowingCard>
                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-green-500/20">
                    <div className="text-3xl mb-4 text-center">💡</div>
                    <h3 className="text-lg font-semibold mb-3 text-green-400 text-center">Innovation Labs</h3>
                    <p className="text-gray-300 text-sm text-center">
                      Access to our research labs and early-stage technology for collaborative innovation.
                    </p>
                  </GlowingCard>
                </div>
              </motion.div>

              {/* Developer Partner Program */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-orange-500/20">
                  <h2 className="text-3xl font-bold mb-6 text-orange-400 text-center">Developer Partner Program</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-white">What We Offer:</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center">
                          <span className="mr-3 text-green-400">✓</span>
                          <span>Early access to new APIs and features</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mr-3 text-green-400">✓</span>
                          <span>Dedicated technical support</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mr-3 text-green-400">✓</span>
                          <span>Co-marketing opportunities</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mr-3 text-green-400">✓</span>
                          <span>Revenue sharing programs</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-white">What We Look For:</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center">
                          <span className="mr-3 text-blue-400">•</span>
                          <span>Innovative AI applications</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mr-3 text-blue-400">•</span>
                          <span>Strong developer communities</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mr-3 text-blue-400">•</span>
                          <span>Complementary technology stacks</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mr-3 text-blue-400">•</span>
                          <span>Commitment to open standards</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Become a Partner */}
              <motion.div variants={itemVariants} className="text-center">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-pink-500/20">
                  <h2 className="text-3xl font-bold mb-6 text-pink-400">Become a Partner</h2>
                  <p className="text-lg text-gray-300 mb-6">
                    Ready to build the future of AI together? Join our partner ecosystem and help shape 
                    the infrastructure for the next generation of intelligent applications.
                  </p>
                  <div className="flex flex-col md:flex-row justify-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-pink-500/20"
                    >
                      Apply for Partnership
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Download Partner Kit
                    </motion.button>
                  </div>
                </GlowingCard>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default PartnersPage;
