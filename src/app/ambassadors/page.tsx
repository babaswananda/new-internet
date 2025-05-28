'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { staggerContainer, staggerItem } from '@/utils/animations';

const AmbassadorsPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const ambassadorTiers = [
    {
      tier: "Tier 1 – Founding 100",
      requirements: "Invite-only. Launch month.",
      rewards: "10% lifetime rev share + token multipliers + early NFT vault perks",
      color: "from-purple-500 to-pink-500"
    },
    {
      tier: "Tier 2 – Certified Operator",
      requirements: "By application or referral.",
      rewards: "5% rev share + badge + feature",
      color: "from-blue-500 to-purple-500"
    },
    {
      tier: "Tier 3 – Affiliate",
      requirements: "Public access",
      rewards: "Trackable links + starter commissions",
      color: "from-green-500 to-blue-500"
    }
  ];

  const targetCategories = [
    { category: "🎙️ Music & Creators", examples: "Rappers, producers, engineers, videographers" },
    { category: "🧢 Stylists & Brands", examples: "Hair artists, barbers, sneaker resellers, boutique owners" },
    { category: "🍽️ Food & Chefs", examples: "Chefs, food bloggers, ATL cooks, food truck operators" },
    { category: "🎮 Gamers & Tech", examples: "Twitch streamers, esports players, Discord mods" },
    { category: "🏀 Athletes & NIL", examples: "HS/college athletes, trainers, youth league heads" },
    { category: "💄 Lifestyle", examples: "Influencers, stylists, glampreneurs, estheticians" },
    { category: "📈 Business & Money", examples: "Finfluencers, educators, crypto traders, marketing heads" }
  ];

  return (
    <MainLayout>
      <section className="relative min-h-screen w-full py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="max-w-6xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={staggerItem} className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 relative">
                <span className="text-3xl md:text-5xl relative z-20 mr-4">🔥</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 relative z-10">
                  UNIFIED AI AMBASSADOR KIT
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                <span className="font-normal">"You're not promoting AI.</span> <span className="font-bold">You're promoting the future."</span>
              </h2>
              <p className="text-xl text-gray-300 mb-4">
                The Culture Is Not Late to AI — The Culture IS AI.
              </p>
            </motion.div>

            {/* What Is Unified AI */}
            <motion.div variants={staggerItem} className="mb-16">
              <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
                <h3 className="text-2xl font-bold mb-6 text-purple-400">🧠 WHAT IS UNIFIED AI?</h3>
                <div className="space-y-4 text-lg text-gray-300">
                  <p>Unified AI is the all-in-one subscription for the next internet.</p>
                  <p>Agents, tools, bots, art generators, video creators, chat UIs — all powered by handles.</p>
                  <p className="text-white font-bold">It's like ChatGPT, Midjourney, and RunwayML had a baby… and gave it culture.</p>
                </div>
              </div>
            </motion.div>

            {/* Why Become Ambassador */}
            <motion.div variants={staggerItem} className="mb-16">
              <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-pink-500/20">
                <h3 className="text-2xl font-bold mb-6 text-pink-400">🎯 WHY BECOME AN AMBASSADOR?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-purple-400 mr-3">•</span>
                      <span>Your own AI handle (e.g., @Chef.Jade, @SpiritualPlug, @StyleBae)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-400 mr-3">•</span>
                      <span>Free agent to deploy to your audience</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-400 mr-3">•</span>
                      <span>Revenue share from your referrals</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-pink-400 mr-3">•</span>
                      <span>Early access to drops, token airdrops, and collabs</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-pink-400 mr-3">•</span>
                      <span>Official "Powered by Unified" swag + creator badge</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-pink-400 mr-3">•</span>
                      <span>Exclusive meme coin launch support (if you start your own)</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* How It Works */}
            <motion.div variants={staggerItem} className="mb-16">
              <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">🛠️ HOW IT WORKS</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { step: "1", title: "Get your handle", desc: "yourname.aiagents" },
                    { step: "2", title: "Deploy your agent", desc: "we'll help you launch it fast" },
                    { step: "3", title: "Share the link", desc: "you earn from subs + token usage" },
                    { step: "4", title: "Level up", desc: "build your empire, stack perks, go viral" }
                  ].map((item) => (
                    <div key={item.step} className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                        {item.step}
                      </div>
                      <h4 className="font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Ambassador Tiers */}
            <motion.div variants={staggerItem} className="mb-16">
              <h3 className="text-3xl font-bold text-center mb-8 text-white">🏆 AMBASSADOR TIERS</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {ambassadorTiers.map((tier, index) => (
                  <div key={index} className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                    <div className={`bg-gradient-to-r ${tier.color} text-white px-4 py-2 rounded-lg text-center font-bold mb-4`}>
                      {tier.tier}
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-white mb-2">Requirements:</h4>
                        <p className="text-gray-400 text-sm">{tier.requirements}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2">Rewards:</h4>
                        <p className="text-gray-400 text-sm">{tier.rewards}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Target Categories */}
            <motion.div variants={staggerItem} className="mb-16">
              <h3 className="text-3xl font-bold text-center mb-8 text-white">🔑 WHO WE'RE LOOKING FOR</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {targetCategories.map((cat, index) => (
                  <div key={index} className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                    <h4 className="font-bold text-white mb-3">{cat.category}</h4>
                    <p className="text-gray-400">{cat.examples}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={staggerItem} className="text-center">
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <Link href="/ambassadors/apply">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-purple-500/20"
                  >
                    🔥 APPLY NOW
                  </motion.button>
                </Link>
                <Link href="/retail-partners">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-colors"
                  >
                    🛍️ RETAIL PARTNERS
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AmbassadorsPage;
