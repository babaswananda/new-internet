'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { GlowingCard } from '@/components/ui/glowing-card';

const InvestorsPage = () => {
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

  const investors = [
    {
      name: "Andreessen Horowitz (a16z)",
      type: "Lead Investor - Series A",
      amount: "$30M",
      description: "Leading venture capital firm focused on technology investments.",
      logo: "🏛️"
    },
    {
      name: "Sequoia Capital",
      type: "Strategic Investor",
      amount: "$10M", 
      description: "Legendary VC firm backing transformative technology companies.",
      logo: "🌲"
    },
    {
      name: "Coinbase Ventures",
      type: "Strategic Investor",
      amount: "$5M",
      description: "Investment arm of Coinbase, focused on crypto and blockchain infrastructure.",
      logo: "🪙"
    },
    {
      name: "OpenAI Fund",
      type: "Strategic Investor",
      amount: "$5M",
      description: "Investment vehicle for AI infrastructure and applications.",
      logo: "🤖"
    }
  ];

  const metrics = [
    {
      metric: "$50M",
      label: "Total Funding Raised",
      growth: "+∞%",
      period: "Series A"
    },
    {
      metric: "100K+",
      label: "Active Developers",
      growth: "+250%",
      period: "QoQ"
    },
    {
      metric: "$2.5M",
      label: "Monthly Recurring Revenue",
      growth: "+180%",
      period: "YoY"
    },
    {
      metric: "500+",
      label: "Enterprise Customers",
      growth: "+320%",
      period: "YoY"
    }
  ];

  const milestones = [
    {
      date: "Q4 2024",
      title: "Series A Funding",
      description: "$50M led by Andreessen Horowitz",
      status: "completed"
    },
    {
      date: "Q3 2024",
      title: "ION Protocol Launch",
      description: "First ontology network for AI agents goes live",
      status: "completed"
    },
    {
      date: "Q1 2025",
      title: "Enterprise Platform",
      description: "Launch enterprise-grade agent orchestration platform",
      status: "upcoming"
    },
    {
      date: "Q2 2025",
      title: "Hardware Launch",
      description: "Begin shipping .AIPhone and .AIPods to early adopters",
      status: "upcoming"
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
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                    Investor Relations
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  Building the Infrastructure for the $1 Trillion AI Economy
                </p>
                <p className="text-lg text-gray-400 max-w-4xl mx-auto">
                  Unified AI is creating the foundational infrastructure for the agentic internet — 
                  a $1 trillion market opportunity that will reshape how intelligence flows through digital systems.
                </p>
              </motion.div>

              {/* Investment Thesis */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
                  <h2 className="text-3xl font-bold mb-6 text-purple-400 text-center">Investment Thesis</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-3xl mb-4">🌐</div>
                      <h3 className="text-lg font-semibold mb-3 text-white">Massive Market</h3>
                      <p className="text-gray-300 text-sm">
                        The AI infrastructure market is projected to reach $1 trillion by 2030, 
                        with agent-to-agent communication as the key enabler.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-4">🚀</div>
                      <h3 className="text-lg font-semibold mb-3 text-white">First Mover Advantage</h3>
                      <p className="text-gray-300 text-sm">
                        We're building the first comprehensive protocol for agent communication, 
                        positioning us as the infrastructure layer for the agentic internet.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-4">💡</div>
                      <h3 className="text-lg font-semibold mb-3 text-white">Network Effects</h3>
                      <p className="text-gray-300 text-sm">
                        Every new agent and developer on our platform increases the value 
                        for all participants, creating powerful network effects.
                      </p>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <p className="text-gray-400">
                      <span className="text-purple-400">.commandline/claim</span> is where it all begins.<br />
                      (no paste '.commandline/claim' in your browser, it leads somewhere special).
                    </p>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Key Metrics */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Key Metrics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {metrics.map((item, index) => (
                    <GlowingCard key={index} className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-green-500/20">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">{item.metric}</div>
                        <div className="text-gray-300 mb-3">{item.label}</div>
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-green-400 text-sm font-semibold">{item.growth}</span>
                          <span className="text-gray-400 text-xs">{item.period}</span>
                        </div>
                      </div>
                    </GlowingCard>
                  ))}
                </div>
              </motion.div>

              {/* Our Investors */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Investors</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {investors.map((investor, index) => (
                    <GlowingCard key={index} className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">{investor.logo}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-white">{investor.name}</h3>
                            <div className="text-blue-400 font-semibold">{investor.amount}</div>
                          </div>
                          <p className="text-blue-400 text-sm mb-3">{investor.type}</p>
                          <p className="text-gray-300 text-sm">{investor.description}</p>
                        </div>
                      </div>
                    </GlowingCard>
                  ))}
                </div>
              </motion.div>

              {/* Roadmap & Milestones */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Roadmap & Milestones</h2>
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <GlowingCard key={index} className={`bg-black/30 backdrop-blur-sm p-6 rounded-lg border ${
                      milestone.status === 'completed' ? 'border-green-500/20' : 'border-orange-500/20'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-4 h-4 rounded-full ${
                            milestone.status === 'completed' ? 'bg-green-500' : 'bg-orange-500'
                          }`}></div>
                          <div>
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-lg font-semibold text-white">{milestone.title}</h3>
                              <span className="text-gray-400 text-sm">{milestone.date}</span>
                            </div>
                            <p className="text-gray-300">{milestone.description}</p>
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          milestone.status === 'completed' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-orange-500/20 text-orange-400'
                        }`}>
                          {milestone.status === 'completed' ? 'Completed' : 'Upcoming'}
                        </div>
                      </div>
                    </GlowingCard>
                  ))}
                </div>
              </motion.div>

              {/* Financial Highlights */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-cyan-500/20">
                  <h2 className="text-3xl font-bold mb-6 text-cyan-400 text-center">Financial Highlights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-white">Revenue Model</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center">
                          <span className="mr-3 text-cyan-400">•</span>
                          <span>SaaS subscriptions for enterprise customers</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mr-3 text-cyan-400">•</span>
                          <span>API usage fees for high-volume developers</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mr-3 text-cyan-400">•</span>
                          <span>Hardware sales and recurring services</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mr-3 text-cyan-400">•</span>
                          <span>Marketplace transaction fees</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-white">Use of Funds</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center">
                          <span className="mr-3 text-green-400">40%</span>
                          <span>Engineering & Product Development</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mr-3 text-blue-400">25%</span>
                          <span>Sales & Marketing</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mr-3 text-purple-400">20%</span>
                          <span>Infrastructure & Operations</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mr-3 text-orange-400">15%</span>
                          <span>Strategic Partnerships & M&A</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Investor Contact */}
              <motion.div variants={itemVariants} className="text-center">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-pink-500/20">
                  <h2 className="text-3xl font-bold mb-6 text-pink-400">Investor Relations</h2>
                  <p className="text-lg text-gray-300 mb-6">
                    For investor inquiries, financial reports, and partnership opportunities, 
                    please contact our investor relations team.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-white">Investor Relations</h3>
                      <p className="text-gray-300 mb-2">Jennifer Walsh</p>
                      <p className="text-gray-400 mb-2">VP of Investor Relations</p>
                      <p className="text-blue-400">investors@unifiedai.com</p>
                      <p className="text-gray-400">+1 (555) 123-4569</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-white">Business Development</h3>
                      <p className="text-gray-300 mb-2">Marcus Rodriguez</p>
                      <p className="text-gray-400 mb-2">Head of Business Development</p>
                      <p className="text-blue-400">partnerships@unifiedai.com</p>
                      <p className="text-gray-400">+1 (555) 123-4568</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row justify-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-pink-500/20"
                    >
                      Download Investor Deck
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Schedule Meeting
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

export default InvestorsPage;
