'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { GlowingCard } from '@/components/ui/glowing-card';
import { HeaderText } from '@/utils/normalBold';
import { TLDName, ProductName } from '@/utils/normalBold';

const PressPage = () => {
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

  const pressReleases = [
    {
      date: "December 15, 2024",
      title: "Unified AI Launches Protocol Stack for the Agentic Internet",
      excerpt: "Self-funded infrastructure company deploys ION protocol and agent OS across 100+ sovereign TLDs.",
      category: "Product Launch"
    },
    {
      date: "November 28, 2024",
      title: "ION Protocol Goes Live: First Intelligent Ontology Network for AI Agents",
      excerpt: "Revolutionary protocol enables semantic understanding and intelligent routing between autonomous agents.",
      category: "Protocol Launch"
    },
    {
      date: "October 10, 2024",
      title: "AgentChat Superapp Reaches 1,000+ Active Developers in Early Vaults",
      excerpt: "Platform milestone demonstrates growing adoption of agent-first development paradigm.",
      category: "Milestone"
    },
    {
      date: "September 22, 2024",
      title: "Unified AI Opens AI Tokens ITO with 72-Hour Activation Window",
      excerpt: "Token offering includes handle reservation utility, device access, and vault staking capabilities.",
      category: "Token Launch"
    }
  ];

  const mediaKit = [
    {
      title: "Company Logo Pack",
      description: "High-resolution logos in various formats (PNG, SVG, EPS)",
      size: "2.4 MB",
      icon: "🎨"
    },
    {
      title: "Executive Headshots",
      description: "Professional photos of leadership team",
      size: "8.1 MB",
      icon: "📸"
    },
    {
      title: "Product Screenshots",
      description: "High-quality screenshots of all platform features",
      size: "15.3 MB",
      icon: "💻"
    },
    {
      title: "Brand Guidelines",
      description: "Complete brand identity and usage guidelines",
      size: "1.8 MB",
      icon: "📋"
    }
  ];

  const coverage = [
    {
      outlet: "Private Founder Briefings",
      headline: "Unified AI Operating One of the Deepest TLD Protocol Stacks on Decentralized Web",
      date: "Dec 16, 2024",
      type: "Featured Coverage"
    },
    {
      outlet: "AI x Web3 Ecosystem",
      headline: "The Infrastructure Layer for Sovereign Intelligence Systems",
      date: "Dec 15, 2024",
      type: "Ecosystem Recognition"
    },
    {
      outlet: "Crypto Infrastructure",
      headline: "Stealth Partnerships Across Crypto, Telecom, and AI Hardware",
      date: "Nov 30, 2024",
      type: "Partnership Coverage"
    },
    {
      outlet: "Protocol Analysis",
      headline: "ION: The Missing Layer Between AI Models and Real-World Applications",
      date: "Oct 12, 2024",
      type: "Technical Deep Dive"
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
                <h1 className="text-5xl md:text-7xl mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
                    <HeaderText>Press And Media</HeaderText>
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  <HeaderText>Latest News And Resources</HeaderText>
                </p>
                <p className="text-lg text-gray-400 max-w-4xl mx-auto">
                  Stay updated on Unified AI's journey to build the infrastructure for the agentic internet.
                  Find press releases, media assets, and coverage from leading technology publications.
                </p>
              </motion.div>

              {/* Press Contact */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-yellow-500/20">
                  <h2 className="text-3xl mb-6 text-yellow-400 text-center"><HeaderText>Press Contact</HeaderText></h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-4 text-white">Media Inquiries</h3>
                      <p className="text-gray-300 mb-2">Sarah Chen</p>
                      <p className="text-gray-400 mb-2">Head of Communications</p>
                      <p className="text-blue-400">press@io.unifiedai</p>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-4 text-white">Partnership Inquiries</h3>
                      <p className="text-gray-300 mb-2">Marcus Rodriguez</p>
                      <p className="text-gray-400 mb-2">Head of Business Development</p>
                      <p className="text-blue-400">protocol@io.unifiedai</p>
                      <p className="text-gray-400">+1 (555) 123-4568</p>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <p className="text-gray-400">
                      <span className="text-yellow-400">.commandline/claim</span> is where it all begins.<br />
                      (no paste '.commandline/claim' in your browser, it leads somewhere special).
                    </p>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Latest Press Releases */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Latest Press Releases</h2>
                <div className="space-y-6">
                  {pressReleases.map((release, index) => (
                    <GlowingCard key={index} className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="text-sm text-gray-400">{release.date}</div>
                          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            release.category === 'Funding' ? 'bg-green-500/20 text-green-400' :
                            release.category === 'Product Launch' ? 'bg-blue-500/20 text-blue-400' :
                            release.category === 'Milestone' ? 'bg-purple-500/20 text-purple-400' :
                            'bg-orange-500/20 text-orange-400'
                          }`}>
                            {release.category}
                          </div>
                        </div>
                        <div className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
                          Read Full Release →
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{release.title}</h3>
                      <p className="text-gray-300">{release.excerpt}</p>
                    </GlowingCard>
                  ))}
                </div>
              </motion.div>

              {/* Media Coverage */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Recent Media Coverage</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {coverage.map((article, index) => (
                    <GlowingCard key={index} className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-purple-400 font-semibold">{article.outlet}</div>
                        <div className="text-xs text-gray-400">{article.date}</div>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3">{article.headline}</h3>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-400">{article.type}</div>
                        <div className="text-purple-400 text-sm hover:text-purple-300 transition-colors">
                          Read Article →
                        </div>
                      </div>
                    </GlowingCard>
                  ))}
                </div>
              </motion.div>

              {/* Media Kit */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Media Kit</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {mediaKit.map((item, index) => (
                    <GlowingCard key={index} className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-400/40 transition-colors cursor-pointer">
                      <div className="text-center">
                        <div className="text-3xl mb-3">{item.icon}</div>
                        <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                        <div className="text-cyan-400 text-xs mb-3">{item.size}</div>
                        <div className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors">
                          Download →
                        </div>
                      </div>
                    </GlowingCard>
                  ))}
                </div>
              </motion.div>

              {/* Company Facts */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-green-500/20">
                  <h2 className="text-3xl font-bold mb-6 text-green-400 text-center">Company Snapshot</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">2024</div>
                      <div className="text-gray-400">Founded</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">&lt;5</div>
                      <div className="text-gray-400">Employees (by design)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">1K+</div>
                      <div className="text-gray-400">Active Devs in Ecosystem</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">Self-Funded</div>
                      <div className="text-gray-400">Seeking Aligned Capital</div>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <p className="text-lg text-gray-300 mb-4">
                      <span className="font-normal">Status:</span> <span className="font-bold text-green-400">Public protocol launch in progress</span>
                    </p>
                    <p className="text-lg text-gray-300 mb-4">
                      <span className="font-normal">Location:</span> <span className="font-bold">Protocol-first / Globally distributed</span>
                    </p>
                    <p className="text-lg text-gray-300">
                      <span className="font-normal">Motto:</span> <span className="font-bold text-blue-400">You don't browse the internet. You command it.</span>
                    </p>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Positioning Headlines */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Positioning Headlines</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-yellow-500/20">
                    <div className="text-center">
                      <div className="text-3xl mb-3">🏗️</div>
                      <h3 className="text-lg font-semibold text-yellow-400 mb-2">Infrastructure Focus</h3>
                      <p className="text-gray-300 text-sm">"Unified AI is building the OS for the agentic internet."</p>
                    </div>
                  </GlowingCard>
                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
                    <div className="text-center">
                      <div className="text-3xl mb-3">🚀</div>
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">Beyond Current AI</h3>
                      <p className="text-gray-300 text-sm">"Where GPT ends, Unified begins."</p>
                    </div>
                  </GlowingCard>
                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                    <div className="text-center">
                      <div className="text-3xl mb-3">💼</div>
                      <h3 className="text-lg font-semibold text-purple-400 mb-2">Economic Model</h3>
                      <p className="text-gray-300 text-sm">"Every handle is a vault. Every vault is a business."</p>
                    </div>
                  </GlowingCard>
                </div>
              </motion.div>

              {/* Press Kit Download */}
              <motion.div variants={itemVariants} className="text-center">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-orange-500/20">
                  <h2 className="text-3xl font-bold mb-6 text-orange-400">Download Complete Press Kit</h2>
                  <p className="text-lg text-gray-300 mb-6">
                    Get access to our complete media package including logos, photos, fact sheets,
                    and executive bios in one convenient download.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-orange-500/20"
                  >
                    Download Press Kit (25.6 MB)
                  </motion.button>
                </GlowingCard>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default PressPage;
