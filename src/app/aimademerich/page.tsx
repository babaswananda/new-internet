'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { GlowingCard } from '@/components/ui/glowing-card';
import { HeaderText } from '@/utils/normalBold';
import { containerVariants, itemVariants } from '@/utils/animations';
import { FeatureCard } from '@/components/ui/cards';

const AIMadeMeRichPage = () => {
  const [activeTab, setActiveTab] = useState('trending');

  const trendingPosts = [
    {
      id: 1,
      user: '@CryptoWhale',
      avatar: '🐋',
      content: 'Just deployed 50 AI agents across 3 protocols. Monthly revenue: $47K. The agentic internet is REAL.',
      likes: 2847,
      shares: 892,
      comments: 156,
      timestamp: '2h ago',
      verified: true,
      earnings: '$47,000/mo'
    },
    {
      id: 2,
      user: '@ProtocolBuilder',
      avatar: '🏗️',
      content: 'Built a meme coin launcher that uses AI to generate viral content. 10x in 3 days. Code is poetry.',
      likes: 1923,
      shares: 445,
      comments: 89,
      timestamp: '4h ago',
      verified: true,
      earnings: '$23,500/week'
    },
    {
      id: 3,
      user: '@VaultMaster',
      avatar: '🔐',
      content: 'My AI trading bot just hit 1000% ROI. Started with $1K, now managing $100K. Sharing the strategy below 👇',
      likes: 5621,
      shares: 1247,
      comments: 334,
      timestamp: '6h ago',
      verified: true,
      earnings: '$100,000 portfolio'
    }
  ];

  const communities = [
    {
      name: 'Agent Operators',
      members: '12.4K',
      icon: '🤖',
      description: 'Deploy and monetize AI agents',
      growth: '+23%'
    },
    {
      name: 'Meme Coin Builders',
      members: '8.7K',
      icon: '🚀',
      description: 'Create viral token economies',
      growth: '+45%'
    },
    {
      name: 'Protocol Hackers',
      members: '15.2K',
      icon: '⚡',
      description: 'Build the infrastructure layer',
      growth: '+18%'
    },
    {
      name: 'Vault Strategists',
      members: '6.9K',
      icon: '🔐',
      description: 'Optimize digital asset management',
      growth: '+67%'
    }
  ];

  return (
    <MainLayout>
      <div className="min-h-screen relative">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-yellow-900/20"></div>

        <section className="relative z-10 py-24">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-7xl mx-auto"
            >
              {/* Header */}
              <motion.div variants={itemVariants} className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500">
                    <HeaderText>AIMadeMeRich</HeaderText>
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-4">
                  The viral feed showcase for the Agentic Internet
                </p>
                <p className="text-lg text-gray-400 max-w-4xl mx-auto">
                  Share your AI success stories, connect with builders, and discover the strategies
                  that are generating real wealth in the new economy.
                </p>
              </motion.div>

              {/* Stats Bar */}
              <motion.div variants={itemVariants} className="mb-8">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-green-500/20">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-400">$2.4M</div>
                      <div className="text-sm text-gray-400">Total Earnings Shared</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-400">47K</div>
                      <div className="text-sm text-gray-400">Active Builders</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-400">156</div>
                      <div className="text-sm text-gray-400">Success Stories Today</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-400">89%</div>
                      <div className="text-sm text-gray-400">Profitable Strategies</div>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Navigation Tabs */}
              <motion.div variants={itemVariants} className="mb-8">
                <div className="flex justify-center space-x-4">
                  {['trending', 'communities', 'strategies', 'leaderboard'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-3 rounded-lg font-medium transition-all ${
                        activeTab === tab
                          ? 'bg-green-500 text-white'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Feed */}
                <div className="lg:col-span-2">
                  <motion.div variants={itemVariants} className="space-y-6">
                    {trendingPosts.map((post) => (
                      <GlowingCard key={post.id} className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-green-500/30 transition-colors">
                        <div className="flex items-start space-x-4">
                          <div className="text-3xl">{post.avatar}</div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-bold text-white">{post.user}</span>
                              {post.verified && <span className="text-green-400">✓</span>}
                              <span className="text-green-400 text-sm font-bold">{post.earnings}</span>
                              <span className="text-gray-400 text-sm">• {post.timestamp}</span>
                            </div>
                            <p className="text-gray-300 mb-4">{post.content}</p>
                            <div className="flex items-center space-x-6 text-sm text-gray-400">
                              <button className="flex items-center space-x-1 hover:text-red-400 transition-colors">
                                <span>❤️</span>
                                <span>{post.likes}</span>
                              </button>
                              <button className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
                                <span>🔄</span>
                                <span>{post.shares}</span>
                              </button>
                              <button className="flex items-center space-x-1 hover:text-green-400 transition-colors">
                                <span>💬</span>
                                <span>{post.comments}</span>
                              </button>
                              <button className="flex items-center space-x-1 hover:text-yellow-400 transition-colors">
                                <span>📊</span>
                                <span>Strategy</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </GlowingCard>
                    ))}
                  </motion.div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Communities */}
                  <motion.div variants={itemVariants}>
                    <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                      <h3 className="text-lg font-bold text-purple-400 mb-4">🔥 Hot Communities</h3>
                      <div className="space-y-4">
                        {communities.map((community, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <span className="text-xl">{community.icon}</span>
                              <div>
                                <div className="font-medium text-white">{community.name}</div>
                                <div className="text-xs text-gray-400">{community.description}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-bold text-white">{community.members}</div>
                              <div className="text-xs text-green-400">{community.growth}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </GlowingCard>
                  </motion.div>

                  {/* Quick Actions */}
                  <motion.div variants={itemVariants}>
                    <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-yellow-500/20">
                      <h3 className="text-lg font-bold text-yellow-400 mb-4">⚡ Quick Actions</h3>
                      <div className="space-y-3">
                        <Link href="/aimademerich/share">
                          <button className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-yellow-500 text-white rounded-lg font-bold text-sm">
                            💰 Share Your Success
                          </button>
                        </Link>
                        <Link href="/aimademerich/strategies">
                          <button className="w-full px-4 py-2 bg-white/5 border border-white/20 text-white rounded-lg font-bold text-sm hover:bg-white/10 transition-colors">
                            📊 Browse Strategies
                          </button>
                        </Link>
                        <Link href="/aimademerich/leaderboard">
                          <button className="w-full px-4 py-2 bg-white/5 border border-white/20 text-white rounded-lg font-bold text-sm hover:bg-white/10 transition-colors">
                            🏆 View Leaderboard
                          </button>
                        </Link>
                      </div>
                    </GlowingCard>
                  </motion.div>

                  {/* Trending Tags */}
                  <motion.div variants={itemVariants}>
                    <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-orange-500/20">
                      <h3 className="text-lg font-bold text-orange-400 mb-4"># Trending</h3>
                      <div className="flex flex-wrap gap-2">
                        {['#AgentArmy', '#MemeCoinMagic', '#VaultLife', '#ProtocolPower', '#AIWealth', '#TokenGang'].map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs cursor-pointer hover:bg-orange-500/30 transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </GlowingCard>
                  </motion.div>
                </div>
              </div>

              {/* CTA */}
              <motion.div variants={itemVariants} className="mt-16 text-center">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-green-500/20">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Share Your Success?</h3>
                  <p className="text-gray-300 mb-4">
                    Join thousands of builders sharing their AI-powered wealth creation strategies.
                  </p>
                  <div className="mb-6">
                    <p className="text-sm text-gray-400">
                      <strong>Powered by Unified AI</strong> - Full social platform available
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row justify-center gap-4">
                    <Link href="http://localhost:3004" target="_blank">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-gradient-to-r from-green-500 to-yellow-500 text-white font-bold text-lg rounded-lg"
                      >
                        🚀 LAUNCH PLATFORM
                      </motion.button>
                    </Link>
                    <Link href="/learn-aimademerich">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-lg"
                      >
                        🎓 LEARN ACADEMY
                      </motion.button>
                    </Link>
                    <Link href="/claim">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-white/5 border border-white/20 text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-colors"
                      >
                        🔖 CLAIM HANDLE
                      </motion.button>
                    </Link>
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

export default AIMadeMeRichPage;
