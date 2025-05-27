'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { GlowingCard } from '@/components/ui/glowing-card';

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
      title: "Unified AI Raises $50M Series A to Build the Agentic Internet",
      excerpt: "Led by Andreessen Horowitz, funding will accelerate development of ION protocol and agent infrastructure.",
      category: "Funding"
    },
    {
      date: "November 28, 2024",
      title: "Unified AI Launches ION Protocol: The First Ontology Network for AI Agents",
      excerpt: "Revolutionary protocol enables semantic understanding and intelligent routing between autonomous agents.",
      category: "Product Launch"
    },
    {
      date: "October 10, 2024",
      title: "AgentChat Superapp Reaches 100,000 Active Developers",
      excerpt: "Platform milestone demonstrates growing adoption of agent-first development paradigm.",
      category: "Milestone"
    },
    {
      date: "September 22, 2024",
      title: "Unified AI Partners with OpenAI on Multi-Agent Research Initiative",
      excerpt: "Collaboration focuses on advancing agent-to-agent communication and coordination protocols.",
      category: "Partnership"
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
      outlet: "TechCrunch",
      headline: "Unified AI's Vision for the Agentic Internet Could Reshape How AI Systems Communicate",
      date: "Dec 16, 2024",
      type: "Feature Article"
    },
    {
      outlet: "The Information",
      headline: "Inside Unified AI's $50M Bet on Agent Infrastructure",
      date: "Dec 15, 2024",
      type: "Exclusive"
    },
    {
      outlet: "Wired",
      headline: "The Protocol That Could Make AI Agents Actually Useful",
      date: "Nov 30, 2024",
      type: "Deep Dive"
    },
    {
      outlet: "VentureBeat",
      headline: "Why Developers Are Flocking to Unified AI's Agent Platform",
      date: "Oct 12, 2024",
      type: "Analysis"
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
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
                    Press & Media
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  Latest News & Resources
                </p>
                <p className="text-lg text-gray-400 max-w-4xl mx-auto">
                  Stay updated on Unified AI's journey to build the infrastructure for the agentic internet.
                  Find press releases, media assets, and coverage from leading technology publications.
                </p>
              </motion.div>

              {/* Press Contact */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-yellow-500/20">
                  <h2 className="text-3xl font-bold mb-6 text-yellow-400 text-center">Press Contact</h2>
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
                  <h2 className="text-3xl font-bold mb-6 text-green-400 text-center">Company Facts</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">$50M</div>
                      <div className="text-gray-400">Series A Funding</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">100K+</div>
                      <div className="text-gray-400">Active Developers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">50+</div>
                      <div className="text-gray-400">Team Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">2024</div>
                      <div className="text-gray-400">Founded</div>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Awards & Recognition */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Awards & Recognition</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-yellow-500/20">
                    <div className="text-center">
                      <div className="text-3xl mb-3">🏆</div>
                      <h3 className="text-lg font-semibold text-yellow-400 mb-2">TechCrunch Disrupt</h3>
                      <p className="text-gray-300 text-sm">Startup Battlefield Winner 2024</p>
                    </div>
                  </GlowingCard>
                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
                    <div className="text-center">
                      <div className="text-3xl mb-3">🌟</div>
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">Fast Company</h3>
                      <p className="text-gray-300 text-sm">Most Innovative AI Company 2024</p>
                    </div>
                  </GlowingCard>
                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                    <div className="text-center">
                      <div className="text-3xl mb-3">🚀</div>
                      <h3 className="text-lg font-semibold text-purple-400 mb-2">Forbes</h3>
                      <p className="text-gray-300 text-sm">AI 50 List 2024</p>
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
