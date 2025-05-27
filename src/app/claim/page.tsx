'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { GlowingCard } from '@/components/ui/glowing-card';
import { TLDName, ProductName, HeaderText } from '@/utils/normalBold';

const ClaimPage = () => {
  const [handle, setHandle] = useState('');
  const [email, setEmail] = useState('');
  const [selectedHandleType, setSelectedHandleType] = useState('human');
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  const handleTypes = [
    {
      id: 'human',
      icon: '🧑‍💻',
      title: 'Human Handles',
      description: 'For developers and operators',
      examples: ['.aideveloper', '.devagency', '.commandline'],
      pricing: '$50-$500+',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'agent',
      icon: '🤖',
      title: 'Agent Handles',
      description: 'For AI agents and bots',
      examples: ['.aiagent', '.aichatbot', '.botstack'],
      pricing: '$1-$5',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'endpoint',
      icon: '🧬',
      title: 'Endpoint Handles',
      description: 'For infrastructure components',
      examples: ['.router', '.endpoint', '.nodeid'],
      pricing: '$0.01/hr',
      color: 'from-green-500 to-teal-500'
    }
  ];

  // Simulate availability check
  const checkAvailability = async (handleName: string) => {
    if (!handleName.trim()) {
      setIsAvailable(null);
      return;
    }

    setIsChecking(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simple simulation - handles starting with 'test' are unavailable
    const available = !handleName.toLowerCase().startsWith('test');
    setIsAvailable(available);
    setIsChecking(false);
  };

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

  return (
    <MainLayout>
      <div className="min-h-screen bg-black text-white">
        <section className="relative min-h-screen w-full py-24 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto"
            >
              {/* Hero Section */}
              <motion.div variants={itemVariants} className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                    <HeaderText>Claim Your Handle. Activate Your Vault.</HeaderText>
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  <HeaderText>Your identity in the agentic internet starts here.</HeaderText>
                </p>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
                  Your handle isn't just an identity — it's your command center for the agentic internet.
                  Deploy IO, orchestrate agents, and own your digital sovereignty.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-blue-500/20"
                  onClick={() => document.getElementById('claim-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                </motion.button>
              </motion.div>

              {/* How It Works */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  <HeaderText>How It Works</HeaderText>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20 text-center">
                    <div className="text-4xl mb-4">1️⃣</div>
                    <h3 className="text-xl font-semibold mb-4 text-blue-400">Choose Your Handle Type</h3>
                    <p className="text-gray-300 text-sm">Human, Agent, or Endpoint — each designed for different use cases in the agentic internet.</p>
                  </GlowingCard>

                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 text-center">
                    <div className="text-4xl mb-4">2️⃣</div>
                    <h3 className="text-xl font-semibold mb-4 text-purple-400">Mint to Vault</h3>
                    <p className="text-gray-300 text-sm">Secure your handle on-chain with vault-based ownership and permanent protocol identity.</p>
                  </GlowingCard>

                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-green-500/20 text-center">
                    <div className="text-4xl mb-4">3️⃣</div>
                    <h3 className="text-xl font-semibold mb-4 text-green-400">Deploy Agent or Product</h3>
                    <p className="text-gray-300 text-sm">Utilize your handle within the ecosystem — launch agents, join communities, pre-order hardware.</p>
                  </GlowingCard>
                </div>
              </motion.div>

              {/* Handle Types Explained */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  <HeaderText>Handle Types Explained</HeaderText>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {handleTypes.map((type) => (
                    <GlowingCard
                      key={type.id}
                      className={`bg-black/30 backdrop-blur-sm p-6 rounded-lg border cursor-pointer transition-all duration-300 ${
                        selectedHandleType === type.id
                          ? 'border-white/50 bg-white/5'
                          : 'border-white/10 hover:border-white/20'
                      }`}
                      onClick={() => setSelectedHandleType(type.id)}
                    >
                      <div className="text-center mb-4">
                        <div className="text-3xl mb-2">{type.icon}</div>
                        <h3 className={`text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r ${type.color}`}>
                          {type.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{type.description}</p>
                      </div>
                      <div className="space-y-2 mb-4">
                        {type.examples.map((example, idx) => (
                          <div key={idx} className="text-center">
                            <TLDName>{example}</TLDName>
                          </div>
                        ))}
                      </div>
                      <div className="text-center">
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${type.color} text-white`}>
                          {type.pricing}
                        </div>
                      </div>
                    </GlowingCard>
                  ))}
                </div>
              </motion.div>

              {/* Developer Mode */}
              <motion.div variants={itemVariants} className="mb-12">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-green-500/20">
                  <h3 className="text-2xl font-semibold mb-6 text-green-400 text-center">💻 IO Deployment Protocol</h3>
                  <div className="bg-black/60 rounded-lg p-6 font-mono text-sm mb-6">
                    <div className="text-green-400 mb-2">$ io claim --handle="yourname" --deploy="intelligent-operator" --network="unifiedai"</div>
                    <div className="text-gray-400 mb-2">🧠 Initializing your Intelligent Operator...</div>
                    <div className="text-blue-400 mb-2">✓ IO deployed at yourname.commandline</div>
                    <div className="text-purple-400">⚡ Agent orchestration layer active</div>
                  </div>
                  <div className="text-center">
                    <p className="text-lg text-gray-300 mb-4">
                      You're not registering. You're deploying your IO.<br />
                      <span className="text-green-400">.commandline/claim</span> is where it all begins.<br />
                      (no paste '.commandline/claim' in your browser, it leads somewhere special).
                    </p>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Claim Form */}
              <motion.div variants={itemVariants} className="mb-12" id="claim-form">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20">
                  <h3 className="text-2xl font-semibold mb-6 text-blue-400 text-center">Claim Your Handle</h3>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Choose Your Handle
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={handle}
                          onChange={(e) => {
                            setHandle(e.target.value);
                            checkAvailability(e.target.value);
                          }}
                          placeholder="yourname"
                          className="w-full px-4 py-3 bg-black/60 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                        <div className="absolute right-3 top-3 flex items-center space-x-2">
                          {isChecking && (
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-400"></div>
                          )}
                          {isAvailable === true && (
                            <div className="text-green-400 text-sm">✓ Available</div>
                          )}
                          {isAvailable === false && (
                            <div className="text-red-400 text-sm">✗ Taken</div>
                          )}
                          <div className="text-gray-400 text-sm">
                            .commandline
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 mt-2">
                        This will be your universal handle across all Unified AI services
                      </p>
                      {isAvailable === false && (
                        <p className="text-xs text-red-400 mt-1">
                          This handle is already taken. Try a different one.
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-black/60 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-blue-500/20"
                      type="submit"
                    >
                      CLAIM {handle || 'YOUR'}.COMMANDLINE
                    </motion.button>
                  </form>
                </GlowingCard>
              </motion.div>

              {/* What You Get */}
              <motion.div variants={itemVariants} className="mb-12">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
                  <h3 className="text-2xl font-semibold mb-6 text-purple-400 text-center">What You Get</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-blue-400">Your Handle Stack:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• yourname<TLDName>.commandline</TLDName> — The terminal for your internet</li>
                        <li>• yourname<TLDName>.agentchat</TLDName> — Superapp: AI Inbox, Devices, Drops</li>
                        <li>• yourname<TLDName>.aiagents</TLDName> — Your fleet of GPTs</li>
                        <li>• yourname<TLDName>.superagents</TLDName> — Token-gated power agents</li>
                        <li>• yourname<TLDName>.seedgpt</TLDName> — Precision recall, seed-based memory</li>
                        <li>• yourname<TLDName>.vibecoder</TLDName> — No-code/pro-code IDE for agents</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-green-400">Business & Communication:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• yourname<TLDName>.textme</TLDName> / <TLDName>videochat</TLDName> / <TLDName>callmyagent</TLDName> — AI-native messaging</li>
                        <li>• yourname<TLDName>.webinar</TLDName> — Token-gated events, LMS, drops</li>
                        <li>• yourname<TLDName>.cryptobounties</TLDName> — Fork-to-earn bounty board</li>
                        <li>• yourname<TLDName>.devagency</TLDName> — Dev firm in a vault</li>
                        <li>• yourname<TLDName>.aimarketplace</TLDName> — Sell agents, prompts, stacks</li>
                        <li>• yourname<TLDName>.aidatacenters</TLDName> — On-prem GPU/HaaS</li>
                      </ul>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Vault Setup */}
              <motion.div variants={itemVariants} className="mb-12">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-orange-500/20">
                  <h3 className="text-2xl font-semibold mb-6 text-orange-400 text-center">🔐 Vault Setup</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-white">Connect Existing Wallet</h4>
                      <p className="text-gray-300 text-sm mb-4">
                        Link your existing wallet to your new vault for seamless asset management.
                      </p>
                      <button className="w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg">
                        Connect Wallet
                      </button>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-white">Create New Vault</h4>
                      <p className="text-gray-300 text-sm mb-4">
                        Generate a new vault with built-in identity management and access controls.
                      </p>
                      <button className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-colors">
                        Create Vault
                      </button>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">Vault Features:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
                      <div>• Asset storage & management</div>
                      <div>• Identity verification</div>
                      <div>• Access control systems</div>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Post-Claim Actions */}
              <motion.div variants={itemVariants} className="mb-12">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-cyan-500/20">
                  <h3 className="text-2xl font-semibold mb-6 text-cyan-400 text-center">🚀 What's Next?</h3>
                  <p className="text-center text-gray-300 mb-8">
                    Once you claim your handle, here's what you can do:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center p-4 bg-cyan-500/10 rounded-lg">
                      <div className="text-3xl mb-2">🤖</div>
                      <h4 className="font-semibold text-white mb-2">Launch an AI Agent</h4>
                      <p className="text-gray-300 text-xs">Deploy your first intelligent operator</p>
                    </div>
                    <div className="text-center p-4 bg-purple-500/10 rounded-lg">
                      <div className="text-3xl mb-2">🪙</div>
                      <h4 className="font-semibold text-white mb-2">Join Meme Coin Community</h4>
                      <p className="text-gray-300 text-xs">Participate in token economies</p>
                    </div>
                    <div className="text-center p-4 bg-orange-500/10 rounded-lg">
                      <div className="text-3xl mb-2">📱</div>
                      <h4 className="font-semibold text-white mb-2">Pre-order Hardware</h4>
                      <p className="text-gray-300 text-xs">Reserve .AIPhone, .AIPods, .AIGlasses</p>
                    </div>
                    <div className="text-center p-4 bg-green-500/10 rounded-lg">
                      <div className="text-3xl mb-2">⚙️</div>
                      <h4 className="font-semibold text-white mb-2">Explore Automation</h4>
                      <p className="text-gray-300 text-xs">Build workflows and integrations</p>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Bulk Registration Portal Access */}
              <motion.div variants={itemVariants} className="mb-12">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-yellow-500/20">
                  <h3 className="text-2xl font-semibold mb-6 text-yellow-400 text-center">🛠️ Need Bulk Registration?</h3>
                  <div className="text-center">
                    <p className="text-gray-300 mb-6">
                      For DevOps teams and protocol operators who need to register multiple handles at once.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
                      <div className="flex items-center justify-center">
                        <span className="mr-2 text-green-400">•</span>
                        <span className="text-gray-300">CSV Upload Support</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="mr-2 text-blue-400">•</span>
                        <span className="text-gray-300">Real-Time Validation</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="mr-2 text-purple-400">•</span>
                        <span className="text-gray-300">API Access Available</span>
                      </div>
                    </div>
                    <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-lg shadow-lg shadow-yellow-500/20">
                      Access Bulk Portal
                    </button>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Tech Stack Footer */}
              <motion.div variants={itemVariants} className="text-center">
                <p className="text-lg text-gray-400 mb-2">
                  Born on .Commandline/
                </p>
                <p className="text-lg text-gray-400 mb-2">
                  Routed through AlphaRouter
                </p>
                <p className="text-lg text-gray-400 mb-2">
                  Powered by FSPP
                </p>
                <p className="text-lg text-gray-400 mb-2">
                  Classified by ION
                </p>
                <p className="text-lg text-gray-400">
                  Deployed via AgentChat
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ClaimPage;
