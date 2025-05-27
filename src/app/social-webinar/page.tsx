'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { GlowingCard } from '@/components/ui/glowing-card';
import { HeaderText } from '@/utils/normalBold';
import { containerVariants, itemVariants } from '@/utils/animations';
import { FeatureCard } from '@/components/ui/cards';

const SocialWebinarPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingWebinars = [
    {
      id: 1,
      title: 'Building the Agentic Internet',
      host: 'Industry Tycoon (I.T.)',
      date: '2024-01-15',
      time: '2:00 PM PST',
      attendees: 1247,
      tokenGated: true,
      requiredTokens: 100,
      image: '/api/placeholder/400/200',
      tags: ['Protocol', 'AI', 'Infrastructure']
    },
    {
      id: 2,
      title: 'Agent Deployment Masterclass',
      host: 'VibeCoder',
      date: '2024-01-18',
      time: '11:00 AM PST',
      attendees: 892,
      tokenGated: true,
      requiredTokens: 50,
      image: '/api/placeholder/400/200',
      tags: ['Development', 'Agents', 'Tutorial']
    },
    {
      id: 3,
      title: 'Meme Coin Economics & Viral Growth',
      host: 'AIMadeMeRich Community',
      date: '2024-01-20',
      time: '4:00 PM PST',
      attendees: 2156,
      tokenGated: false,
      requiredTokens: 0,
      image: '/api/placeholder/400/200',
      tags: ['Economics', 'Memes', 'Growth']
    }
  ];

  const liveWebinars = [
    {
      id: 4,
      title: 'Live: ION Protocol Deep Dive',
      host: 'Protocol Team',
      viewers: 3421,
      duration: '1h 23m',
      tokenGated: true,
      requiredTokens: 75,
      status: 'live'
    }
  ];

  return (
    <MainLayout>
      <div className="min-h-screen relative">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-red-900/20"></div>
        
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
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
                    <HeaderText>Social.Webinar</HeaderText>
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-4">
                  Token-gated events and broadcasts for the Agentic Internet
                </p>
                <p className="text-lg text-gray-400 max-w-4xl mx-auto">
                  Exclusive webinars, live streams, and educational content accessible through AI Tokens. 
                  Learn from protocol builders, deploy alongside experts, and earn while you engage.
                </p>
              </motion.div>

              {/* Live Indicator */}
              {liveWebinars.length > 0 && (
                <motion.div variants={itemVariants} className="mb-8">
                  <GlowingCard className="bg-red-500/10 backdrop-blur-sm p-4 rounded-lg border border-red-500/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-red-400 font-bold">LIVE NOW</span>
                        <span className="text-white">{liveWebinars[0].title}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-gray-300">{liveWebinars[0].viewers} viewers</span>
                        <Link href={`/social-webinar/live/${liveWebinars[0].id}`}>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-red-500 text-white rounded-lg font-bold"
                          >
                            JOIN LIVE
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </GlowingCard>
                </motion.div>
              )}

              {/* Navigation Tabs */}
              <motion.div variants={itemVariants} className="mb-8">
                <div className="flex justify-center space-x-4">
                  {['upcoming', 'live', 'recorded'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-3 rounded-lg font-medium transition-all ${
                        activeTab === tab
                          ? 'bg-orange-500 text-white'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Webinar Grid */}
              <motion.div variants={itemVariants} className="mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingWebinars.map((webinar) => (
                    <GlowingCard key={webinar.id} className="bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden hover:border-orange-500/30 transition-colors">
                      <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-500/20 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-4xl">🎥</div>
                        </div>
                        {webinar.tokenGated && (
                          <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">
                            🪙 {webinar.requiredTokens} AI Tokens
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-white mb-2">{webinar.title}</h3>
                        <p className="text-orange-400 text-sm mb-2">Hosted by {webinar.host}</p>
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                          <span>{webinar.date} • {webinar.time}</span>
                          <span>{webinar.attendees} registered</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {webinar.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Link href={`/social-webinar/${webinar.id}`}>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-bold"
                          >
                            {webinar.tokenGated ? 'RESERVE SPOT' : 'REGISTER FREE'}
                          </motion.button>
                        </Link>
                      </div>
                    </GlowingCard>
                  ))}
                </div>
              </motion.div>

              {/* Features */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-8">
                  <HeaderText>Platform Features</HeaderText>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FeatureCard
                    icon="🪙"
                    title="Token-Gated Access"
                    description="Exclusive content for AI Token holders"
                    features={[
                      'Premium webinars and workshops',
                      'Early access to new content',
                      'Exclusive Q&A sessions',
                      'Token holder perks and rewards'
                    ]}
                    borderColor="border-orange-500/20"
                    gradient="from-orange-500 to-red-500"
                  />
                  <FeatureCard
                    icon="🎯"
                    title="Interactive Learning"
                    description="Hands-on workshops and live coding"
                    features={[
                      'Live agent deployment demos',
                      'Real-time code collaboration',
                      'Interactive protocol tutorials',
                      'Community-driven content'
                    ]}
                    borderColor="border-red-500/20"
                    gradient="from-red-500 to-pink-500"
                  />
                  <FeatureCard
                    icon="🏆"
                    title="Earn While Learning"
                    description="Get rewarded for participation"
                    features={[
                      'AI Token rewards for attendance',
                      'Completion certificates as NFTs',
                      'Referral bonuses',
                      'Community contribution rewards'
                    ]}
                    borderColor="border-pink-500/20"
                    gradient="from-pink-500 to-purple-500"
                  />
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div variants={itemVariants} className="text-center">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-orange-500/20">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Join the Community?</h3>
                  <p className="text-gray-300 mb-6">
                    Get AI Tokens to access exclusive webinars and start learning from protocol builders.
                  </p>
                  <div className="flex flex-col md:flex-row justify-center gap-4">
                    <Link href="/ai-tokens">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-lg"
                      >
                        🪙 GET AI TOKENS
                      </motion.button>
                    </Link>
                    <Link href="/social-webinar/schedule">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-white/5 border border-white/20 text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-colors"
                      >
                        VIEW SCHEDULE
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

export default SocialWebinarPage;
