'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { GlowingCard } from '@/components/ui/glowing-card';
import { HeaderText, TLDName } from '@/utils/normalBold';

const LearnAIMadeMeRichPage = () => {
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
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      }
    },
  };

  const curriculum = [
    {
      icon: "🪙",
      title: "Handle + Vault Setup",
      description: "How to claim your handle and configure your vault for maximum impact"
    },
    {
      icon: "🤖", 
      title: "Deploy Your First Agent",
      description: "Step-by-step agent deployment and configuration"
    },
    {
      icon: "🧰",
      title: "AI Workflow Stacking", 
      description: "Build workflows for output, revenue, and influence"
    },
    {
      icon: "🪞",
      title: "Post Prove Mint",
      description: "Turn your wins into viral content and NFTs"
    },
    {
      icon: "💸",
      title: "Launch Your MemeCoin",
      description: "Create and launch your own token inside Unified AI"
    },
    {
      icon: "🔄",
      title: "Agent to Business",
      description: "Scale your agent into a product or full business"
    }
  ];

  const courses = [
    {
      title: "The Agentic Internet",
      description: "Understanding the new paradigm of AI-first infrastructure",
      level: "Beginner",
      duration: "2 hours"
    },
    {
      title: "Meme Capital + Tokenized Flex",
      description: "How to turn culture into capital and vibes into value",
      level: "Intermediate", 
      duration: "3 hours"
    },
    {
      title: "FSPP Framework",
      description: "Framework / Stack / Prompt / Protocol mastery",
      level: "Advanced",
      duration: "4 hours"
    },
    {
      title: "Vault Builder Certification",
      description: "Complete vault setup and management course",
      level: "Expert",
      duration: "6 hours"
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
                    <HeaderText>Learn AI Made Me Rich</HeaderText>
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  <HeaderText>Not Just What We Did How We Did It</HeaderText>
                </p>
                <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-8">
                  Welcome to the protocol academy for the culture. If join.aimademerich is where the hype lives,
                  then learn.aimademerich is where the operators are born.
                </p>
                <div className="bg-black/60 rounded-lg p-4 font-mono text-sm text-center max-w-2xl mx-auto">
                  <div className="text-yellow-400">"You've seen it on the feed. Now learn how they did it."</div>
                </div>
              </motion.div>

              {/* What You'll Learn */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl mb-8 text-center"><HeaderText>What You'll Learn</HeaderText></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {curriculum.map((item, index) => (
                    <GlowingCard key={index} className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-yellow-500/20">
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h3 className="text-xl mb-4 text-yellow-400"><HeaderText>{item.title}</HeaderText></h3>
                      <p className="text-gray-300">{item.description}</p>
                    </GlowingCard>
                  ))}
                </div>
              </motion.div>

              {/* Curriculum */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl mb-8 text-center"><HeaderText>Course Curriculum</HeaderText></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {courses.map((course, index) => (
                    <GlowingCard key={index} className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-orange-500/20">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl text-orange-400"><HeaderText>{course.title}</HeaderText></h3>
                        <div className="text-right">
                          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                            course.level === 'Intermediate' ? 'bg-blue-500/20 text-blue-400' :
                            course.level === 'Advanced' ? 'bg-purple-500/20 text-purple-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {course.level}
                          </div>
                          <div className="text-gray-400 text-sm mt-1">{course.duration}</div>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{course.description}</p>
                      <button className="text-orange-400 hover:text-orange-300 transition-colors">
                        Start Course →
                      </button>
                    </GlowingCard>
                  ))}
                </div>
              </motion.div>

              {/* Learning Paths */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
                  <h2 className="text-3xl mb-6 text-purple-400 text-center"><HeaderText>Certification Tracks</HeaderText></h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl mb-4">🤖</div>
                      <h3 className="text-lg mb-3 text-white"><HeaderText>Agent Operator</HeaderText></h3>
                      <p className="text-gray-300 text-sm">Master agent deployment and management</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-4">🏗️</div>
                      <h3 className="text-lg mb-3 text-white"><HeaderText>Vault Builder</HeaderText></h3>
                      <p className="text-gray-300 text-sm">Expert-level vault architecture and scaling</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-4">🎯</div>
                      <h3 className="text-lg mb-3 text-white"><HeaderText>Meme Strategist</HeaderText></h3>
                      <p className="text-gray-300 text-sm">Turn culture into capital and vibes into value</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-4">👑</div>
                      <h3 className="text-lg mb-3 text-white"><HeaderText>Protocol Master</HeaderText></h3>
                      <p className="text-gray-300 text-sm">Complete mastery of the Unified AI ecosystem</p>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Case Studies */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-green-500/20">
                  <h2 className="text-3xl mb-6 text-green-400 text-center"><HeaderText>Real Case Studies</HeaderText></h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl mb-4 text-white"><HeaderText>Featured Success Stories</HeaderText></h3>
                      <ul className="space-y-3 text-gray-300">
                        <li>• How @cryptodev made $50K with one agent</li>
                        <li>• The vault that generated 1M+ impressions</li>
                        <li>• From zero to aimademerich feed in 30 days</li>
                        <li>• Building a MemeCoin empire with AI</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl mb-4 text-white"><HeaderText>Learn From Legends</HeaderText></h3>
                      <ul className="space-y-3 text-gray-300">
                        <li>• Direct insights from top performers</li>
                        <li>• Behind-the-scenes strategy breakdowns</li>
                        <li>• Common mistakes and how to avoid them</li>
                        <li>• Advanced tactics for scaling success</li>
                      </ul>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* CTA Section */}
              <motion.div variants={itemVariants} className="text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-lg"
                  >
                    🧠 Operator Crash Course
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg"
                  >
                    🎓 Launch Your Stack
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg"
                  >
                    📥 Claim Your Vault
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-lg"
                  >
                    📡 Apply for Feature
                  </motion.button>
                </div>
                <p className="text-gray-400 text-lg">
                  <HeaderText>Knowledge Equals Protocol This Is How AI Made Them Rich</HeaderText>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default LearnAIMadeMeRichPage;
