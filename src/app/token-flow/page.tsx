'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GlowingCard } from '@/components/ui/glowing-card';
import MainLayout from '@/components/layout/MainLayout';
import { HeaderText } from '@/utils/normalBold';

export default function TokenFlowPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const flowSteps = [
    {
      step: "1",
      icon: "🌎",
      title: "User Arrives (Fiat or Crypto Entry)",
      description: "Lands on io.unifiedai • Sees the ITO live window + protocol onboarding • CTA: Claim Your Handle. Activate Your Digital ID Wallet.",
      action: "Entry Action: Buys in with fiat, ETH, or USDC • Conversion auto-swaps to AI Tokens (or UtilityCoin)"
    },
    {
      step: "2",
      icon: "🪪",
      title: "Claims Handle → Creates Digital ID Wallet",
      description: "Example: yourname.commandline • Digital ID Wallet is initialized • Handle is tokenized + owned • Digital ID Wallet = permanent protocol ID, stores all assets",
      action: "🔗 Gas used: AI Tokens • 🔐 Collateral layer (optional): UtilityCoin"
    },
    {
      step: "3",
      icon: "🧠",
      title: "Activates Agent Stack",
      description: "Accesses .aiagents or explore.aiagents • Chooses from templates, workflows, or custom builds • Can use visual builder or pro-code tools",
      action: "→ Agent minted as NFT, tied to Digital ID Wallet • → Agent earns or spends AI Tokens • → Can launch public-facing experiences: Chatbot, Workflow bot, Commerce agent, Creator coin agent"
    },
    {
      step: "4",
      icon: "🎭",
      title: "Launches or Joins a Meme Coin",
      description: "Launch meme coin via .memecoinfactory • Join existing project (e.g. AIMadeMeRich, LetsVideoChat) • Stake meme coins to unlock deeper access, tools, or rewards",
      action: "🔁 Meme Coin = social engine → drives usage → increases AI Token burn → boosts UtilityCoin value"
    },
    {
      step: "5",
      icon: "📦",
      title: "Purchases Product or Service",
      description: "Enters .AIPhone, .AIPods, .TextMe, .LetsVideoChat, etc. • Stake AI Tokens for preorder • Burn meme coin for access • Use Digital ID Wallet to route transactions",
      action: "→ Digital ID Wallet confirms ownership → Protocol confirms token criteria → Order fulfilled or session unlocked"
    }
  ];

  const tokenRoles = [
    {
      token: "UtilityCoin",
      role: "Protocol Base (like BTC)",
      valueDriver: "Stored in digital ID wallets, used for collateral + governance",
      scarcity: "Fixed or semi-fixed supply, staking required for high-tier access",
      color: "from-orange-500 to-yellow-500"
    },
    {
      token: "AI Tokens",
      role: "Execution Gas (like ETH)",
      valueDriver: "Every agent, action, launch, mint, pre-order",
      scarcity: "Deflationary: every use burns or locks tokens",
      color: "from-blue-500 to-purple-500"
    },
    {
      token: "Meme Coins",
      role: "Viral Fuel (like PEPE/WEN)",
      valueDriver: "Community, agents, creators",
      scarcity: "Limited supply, bonding curve, use-gated",
      color: "from-pink-500 to-red-500"
    }
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-black text-white">
        <section className="relative min-h-screen w-full py-24 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="max-w-6xl mx-auto"
            >
              {/* Hero Section */}
              <motion.div variants={itemVariants} className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
                  <span className="text-4xl md:text-6xl relative z-20 mr-4">🧭</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 relative z-10">
                    Token Flow Mastermap
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  <span className="font-normal">From</span> <span className="font-bold">Fiat</span> <span className="font-normal">to</span> <span className="font-bold">Protocol Power</span>
                </p>
                <div className="max-w-4xl mx-auto space-y-4">
                  <p className="text-lg text-yellow-400 font-bold">
                    This Is Not Equity. This Is Utility.
                  </p>
                  <p className="text-lg text-gray-300">
                    You're not buying in — you're building on.
                  </p>
                </div>
              </motion.div>

              {/* Flow Steps */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  <HeaderText>Master Flow: From Fiat to Protocol Power</HeaderText>
                </h2>
                <div className="space-y-8">
                  {flowSteps.map((step, index) => (
                    <GlowingCard key={index} className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                      <div className="flex items-start space-x-6">
                        <div className="text-4xl">{step.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                              {step.step}
                            </div>
                            <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                          </div>
                          <p className="text-gray-300 mb-4">{step.description}</p>
                          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                            <p className="text-blue-200 text-sm">{step.action}</p>
                          </div>
                        </div>
                      </div>
                    </GlowingCard>
                  ))}
                </div>
              </motion.div>

              {/* Token Roles */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center relative">
                  <span className="text-2xl relative z-20 mr-3">🪙</span>
                  <HeaderText>Token Roles Summary</HeaderText>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {tokenRoles.map((token, index) => (
                    <GlowingCard key={index} className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                      <div className={`text-center p-4 rounded-lg bg-gradient-to-r ${token.color} mb-4`}>
                        <h3 className="text-xl font-bold text-white">{token.token}</h3>
                        <p className="text-white/80 text-sm">{token.role}</p>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-white mb-1">Value Driver:</h4>
                          <p className="text-gray-300 text-sm">{token.valueDriver}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">Scarcity:</h4>
                          <p className="text-gray-300 text-sm">{token.scarcity}</p>
                        </div>
                      </div>
                    </GlowingCard>
                  ))}
                </div>
              </motion.div>

              {/* Circular Economy */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center relative">
                  <span className="text-2xl relative z-20 mr-3">🔁</span>
                  <HeaderText>Circular Economy Paths</HeaderText>
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full bg-black/30 backdrop-blur-sm rounded-lg border border-white/10">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-4 text-white font-semibold">Action</th>
                        <th className="text-left p-4 text-white font-semibold">Uses</th>
                        <th className="text-left p-4 text-white font-semibold">Consumes</th>
                        <th className="text-left p-4 text-white font-semibold">Rewards</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/5">
                        <td className="p-4 text-gray-300">Claim Handle</td>
                        <td className="p-4 text-blue-400">AI Tokens</td>
                        <td className="p-4 text-red-400">Yes</td>
                        <td className="p-4 text-green-400">Digital ID Wallet created</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-4 text-gray-300">Launch Agent</td>
                        <td className="p-4 text-blue-400">AI Tokens + Meme Coin</td>
                        <td className="p-4 text-red-400">Yes</td>
                        <td className="p-4 text-green-400">NFT + Access</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-4 text-gray-300">Launch Meme Coin</td>
                        <td className="p-4 text-blue-400">AI Tokens</td>
                        <td className="p-4 text-red-400">Yes</td>
                        <td className="p-4 text-green-400">New microeconomy</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-4 text-gray-300">Buy Product</td>
                        <td className="p-4 text-blue-400">AI Tokens / Meme Coins</td>
                        <td className="p-4 text-red-400">Yes</td>
                        <td className="p-4 text-green-400">Hardware or access</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-4 text-gray-300">Stake for Yield</td>
                        <td className="p-4 text-orange-400">UtilityCoin</td>
                        <td className="p-4 text-yellow-400">Locked</td>
                        <td className="p-4 text-green-400">Digital ID Wallet-native yield</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-gray-300">Sell Agent</td>
                        <td className="p-4 text-purple-400">Digital ID Wallet Marketplace</td>
                        <td className="p-4 text-gray-400">-</td>
                        <td className="p-4 text-green-400">Gains in AI Tokens or Meme Coins</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Security & Ownership */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-green-500/20">
                  <h2 className="text-3xl font-bold mb-6 text-green-400 text-center">🔒 Security + Ownership</h2>
                  <p className="text-lg text-gray-300 text-center mb-6">
                    Every element routes through:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-2xl mb-2">🪪</div>
                      <h3 className="font-semibold text-white">Your Digital ID Wallet</h3>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">🏷️</div>
                      <h3 className="font-semibold text-white">Your Handle</h3>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">🤖</div>
                      <h3 className="font-semibold text-white">Your Agent Stack</h3>
                    </div>
                  </div>
                  <p className="text-lg text-gray-300 text-center font-semibold">
                    Meaning nothing is custodial — users own everything, and all actions occur on-protocol.
                  </p>
                </GlowingCard>
              </motion.div>

              {/* Optimized UX Flow */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-cyan-500/20">
                  <h2 className="text-3xl font-bold mb-6 text-cyan-400 text-center">🔮 Optimized UX Flow</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-cyan-500/10 rounded-lg">
                      <div className="text-2xl mb-2">1️⃣</div>
                      <h3 className="font-semibold text-white mb-2">User sees landing page</h3>
                    </div>
                    <div className="text-center p-4 bg-cyan-500/10 rounded-lg">
                      <div className="text-2xl mb-2">2️⃣</div>
                      <h3 className="font-semibold text-white mb-2">Stakes to claim handle</h3>
                    </div>
                    <div className="text-center p-4 bg-cyan-500/10 rounded-lg">
                      <div className="text-2xl mb-2">3️⃣</div>
                      <h3 className="font-semibold text-white mb-2">Digital ID Wallet auto-deploys</h3>
                    </div>
                    <div className="text-center p-4 bg-cyan-500/10 rounded-lg">
                      <div className="text-2xl mb-2">4️⃣</div>
                      <h3 className="font-semibold text-white mb-2">Agent is offered or launched</h3>
                    </div>
                    <div className="text-center p-4 bg-cyan-500/10 rounded-lg">
                      <div className="text-2xl mb-2">5️⃣</div>
                      <h3 className="font-semibold text-white mb-2">Product or coin becomes the next step</h3>
                    </div>
                    <div className="text-center p-4 bg-cyan-500/10 rounded-lg">
                      <div className="text-2xl mb-2">6️⃣</div>
                      <h3 className="font-semibold text-white mb-2">All actions create token flow, yield, and protocol demand</h3>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* CTA */}
              <motion.div variants={itemVariants} className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold text-2xl rounded-lg shadow-lg shadow-green-500/20 mr-4"
                >
                  🪙 CLAIM YOUR HANDLE
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-2xl rounded-lg hover:bg-white/10 transition-colors"
                >
                  🧠 EXPLORE AGENTS
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};
