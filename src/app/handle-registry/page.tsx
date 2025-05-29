'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GlowingCard } from '@/components/ui/glowing-card';
import MainLayout from '@/components/layout/MainLayout';
import { HeaderText, TLDName } from '@/utils/normalBold';
import Link from 'next/link';

export default function HandleRegistryPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedTier, setSelectedTier] = useState('developer');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTLD, setSelectedTLD] = useState('.ai');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

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

  const handleTiers = [
    {
      id: 'developer',
      icon: '🧑‍💻',
      title: 'Developer Handles',
      subtitle: 'Human Identity Layer',
      description: 'Real human users — builders, creators, architects, sovereign operators.',
      pricing: '$5-50/year',
      pricingDesc: 'Your identity in the agentic internet. Premium names up to $500. Build your empire.',
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500/20',
      tlds: [
        '.aideveloper', '.vibecoder', '.chiefvibeofficer', '.aioperator', '.commandline', '.codebunker',
        '.designarchitect', '.devcontainer', '.devcontainers', '.devvault', '.devkeys', '.devfleet',
        '.devpaths', '.devstructure', '.agencydev', '.sourcemap', '.codeledger', '.codexplant',
        '.codefilm', '.chatcode', '.mygpt', '.spatialio', '.voicenode', '.vibebrowsing', '.mcpagency',
        '.mcpoptimization', '.mcpapi', '.mcphost', '.mcptools', '.uicomponents', '.smartdash',
        '.devkit', '.operatingsystem', '.techcompany', '.businessmachines', '.creatorsagency',
        '.techvillage', '.blacktechexchange', '.blacktechmarket', '.blacktechhub', '.stackideas',
        '.instalinks', '.digitalspaces', '.webinar', '.clientspro', '.clientmetrics', '.connectauth',
        '.filmbase', '.actortraining', '.storeofknowledge', '.positionstrader', '.startupinvestor',
        '.investoralerts', '.daoinvestor', '.followatrade', '.tradinglive'
      ],
      useCases: [
        'Developer vaults and dashboards',
        'Git-based repo linking or VibeCode integration',
        'Launchpads for projects, agents, and meme coins',
        'Public-facing presence in the Unified ecosystem'
      ],
      attributes: ['Non-fungible (1 of 1)', 'Permanent', 'Tied to Vault + Reputation', 'Eligible for social graph indexing']
    },
    {
      id: 'agent',
      icon: '🤖',
      title: 'Agent Handles',
      subtitle: 'AI Identity Layer',
      description: 'AI agents, AI avatars, autonomous bots, and deployed service agents.',
      pricing: '$0.10-5/month',
      pricingDesc: 'Every agent deserves an identity. Volume discounts. Barely-a-thought pricing.',
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500/20',
      tlds: [
        '.aiagents', '.aiavatars', '.agentGPT', '.botstack', '.aibackend', '.agentflow',
        '.superagents', '.smarteragents', '.remoteagents', '.remoteagent', '.agentmemory', '.agentertainment',
        '.talktomyagents', '.callmyagent', '.humanoidai', '.metrobot', '.nanobrand', '.divinegpt',
        '.llmsgpt', '.creditgpt', '.interngpt', '.gptneo', '.gptforall', '.lawyergpt', '.comgpt',
        '.llmgpt', '.nlpgpt', '.semanticai', '.webllm', '.edullm', '.chatbuddyai', '.ninjachat',
        '.vibechat', '.bot', '.ai', '.auto', '.smart', '.intelligent', '.neural', '.machine', '.robot',
        '.assistant', '.helper', '.agent', '.automation', '.cognitive', '.learning', '.mind'
      ],
      useCases: [
        'Named agents with task-specific functionality',
        'Chatbots, workflow agents, commerce agents',
        'Agent minting, orchestration, and monetized deployment',
        'Link-in-bio pages, custom landing UIs, or silent API agents'
      ],
      attributes: ['Auto-generated or user-selected', 'Minted as NFTs tied to Vault', 'Cheaper per unit', 'Tiered by session length']
    },
    {
      id: 'endpoint',
      icon: '🧬',
      title: 'Endpoint Handles',
      subtitle: 'Infrastructure Layer',
      description: 'Invisible endpoints, API routers, routing nodes, reverse proxies, ephemeral agents.',
      pricing: '$0.001-0.10/hour',
      pricingDesc: 'Invisible but essential. Usage-based pricing. Scale without thinking.',
      color: 'from-green-500 to-teal-500',
      borderColor: 'border-green-500/20',
      tlds: [
        '.router', '.endpoint', '.nodeid', '.accesslayer', '.transmit', '.resolve',
        '.network', '.cloud', '.server', '.host', '.node', '.api', '.gateway', '.proxy',
        '.infrastructure', '.protocol', '.service', '.compute', '.edge', '.mesh', '.link'
      ],
      useCases: [
        'Internal routing for agent-to-agent comms',
        'Load balancing, request delegation, ephemeral instances',
        'IP masking or inference control',
        'Agent temp sessions and serverless compute identities'
      ],
      attributes: ['Metered billing (hourly/daily/monthly)', 'Disposable or reusable', 'API-tier priority logic', 'Similar to IP/proxy/subnet rental']
    },
    {
      id: 'session',
      icon: '🔥',
      title: 'Session Handles',
      subtitle: 'Expiring, Disposable IDs',
      description: 'Temporary identities for conversations, customer service, and anonymous execution.',
      pricing: '$0.001-1/session',
      pricingDesc: 'Use it, burn it, move on. Keeps namespace clean. Anonymous by design.',
      color: 'from-orange-500 to-red-500',
      borderColor: 'border-orange-500/20',
      tlds: ['.session', '.temp', '.anon', '.chat', '.ephemeral', '.disposable'],
      useCases: [
        'Anonymous agent conversations',
        'Temporary customer service sessions',
        'Short-term task execution',
        'Clean namespace management'
      ],
      attributes: ['Expires after set duration', 'Burn-priced like API tokens', 'Anonymous execution', 'Prevents namespace bloat']
    }
  ];

  const addOns = [
    {
      icon: '🎨',
      title: 'Custom Branded Domains',
      description: 'e.g. youragent.brand.aiagents'
    },
    {
      icon: '🧱',
      title: 'Bulk Registration APIs',
      description: 'For platform devs deploying multiple handles'
    },
    {
      icon: '⚙️',
      title: 'Vault Dashboards',
      description: 'Handle management and analytics'
    },
    {
      icon: '🔁',
      title: 'Reusable vs Disposable Logic',
      description: 'For temporary agents and endpoints'
    },
    {
      icon: '🏷️',
      title: 'Referral & Airdrops',
      description: 'Early adopter rewards and vault bonuses'
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
                  <span className="text-4xl md:text-6xl relative z-20 mr-4">🔖</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 relative z-10">
                    <HeaderText>Handle Registry</HeaderText>
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  <HeaderText>Carriers of the New Internet</HeaderText>
                </p>
                <div className="max-w-4xl mx-auto space-y-4">
                  <p className="text-lg text-yellow-400 font-bold">
                    The DNS of the Agentic Internet
                  </p>
                  <p className="text-lg text-gray-300">
                    Protocol-native identities for humans, AI agents, infrastructure, and sessions. Deploy agents as easily as sending an email.
                  </p>
                  <p className="text-base text-purple-400 font-semibold">
                    "The cost should never be the reason someone doesn't deploy an agent"
                  </p>
                </div>
              </motion.div>

              {/* Tier Selection */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  <HeaderText>Choose Your Handle Type</HeaderText>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {handleTiers.map((tier) => (
                    <GlowingCard
                      key={tier.id}
                      className={`bg-black/30 backdrop-blur-sm p-6 rounded-lg border cursor-pointer transition-all duration-300 ${
                        selectedTier === tier.id
                          ? `${tier.borderColor.replace('/20', '/50')} bg-gradient-to-br ${tier.color}/10`
                          : `${tier.borderColor} hover:${tier.borderColor.replace('/20', '/30')}`
                      }`}
                      onClick={() => setSelectedTier(tier.id)}
                    >
                      <div className="text-center mb-4">
                        <div className="text-4xl mb-2">{tier.icon}</div>
                        <h3 className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${tier.color}`}>
                          {tier.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{tier.subtitle}</p>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">{tier.description}</p>
                      <div className="text-center">
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${tier.color} text-white`}>
                          {tier.pricing}
                        </div>
                      </div>
                    </GlowingCard>
                  ))}
                </div>
              </motion.div>

              {/* Selected Tier Details */}
              {selectedTier && (
                <motion.div
                  variants={itemVariants}
                  className="mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={selectedTier}
                >
                  {(() => {
                    const tier = handleTiers.find(t => t.id === selectedTier);
                    if (!tier) return null;

                    return (
                      <GlowingCard className={`bg-black/30 backdrop-blur-sm p-8 rounded-lg border ${tier.borderColor}`}>
                        <div className="flex items-center mb-6">
                          <div className="text-4xl mr-4">{tier.icon}</div>
                          <div>
                            <h3 className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${tier.color}`}>
                              {tier.title}
                            </h3>
                            <p className="text-gray-400">{tier.subtitle}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          {/* TLDs & Variants */}
                          <div>
                            <h4 className="text-lg font-semibold mb-4 text-white">TLDs & Variants:</h4>
                            <div className="space-y-2">
                              {tier.tlds.map((tld, idx) => (
                                <div key={idx} className="flex items-center">
                                  <span className="mr-2 text-green-400">•</span>
                                  <TLDName>{tld}</TLDName>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Use Cases */}
                          <div>
                            <h4 className="text-lg font-semibold mb-4 text-white">Use Cases:</h4>
                            <div className="space-y-2">
                              {tier.useCases.map((useCase, idx) => (
                                <div key={idx} className="flex items-start">
                                  <span className="mr-2 text-blue-400 mt-1">•</span>
                                  <span className="text-gray-300 text-sm">{useCase}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Attributes */}
                          <div>
                            <h4 className="text-lg font-semibold mb-4 text-white">Attributes:</h4>
                            <div className="space-y-2">
                              {tier.attributes.map((attribute, idx) => (
                                <div key={idx} className="flex items-start">
                                  <span className="mr-2 text-purple-400 mt-1">•</span>
                                  <span className="text-gray-300 text-sm">{attribute}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Pricing Logic */}
                        <div className={`mt-6 p-4 rounded-lg bg-gradient-to-r ${tier.color}/10 border ${tier.borderColor}`}>
                          <h4 className="font-semibold text-white mb-2">Pricing Logic:</h4>
                          <p className="text-gray-300 text-sm">{tier.pricingDesc}</p>
                        </div>
                      </GlowingCard>
                    );
                  })()}
                </motion.div>
              )}

              {/* Handle Bundles */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center relative">
                  <span className="text-2xl relative z-20 mr-3">📦</span>
                  <HeaderText>Handle Bundles</HeaderText>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-bold text-blue-400 mb-4">Solo Builder</h3>
                    <div className="text-3xl font-bold text-white mb-2">$25<span className="text-lg text-gray-400">/year</span></div>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-300 text-sm">
                        <span className="mr-2 text-green-400">•</span>
                        1 Developer Handle (.aideveloper)
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <span className="mr-2 text-green-400">•</span>
                        10 Agent Handles (any TLD)
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <span className="mr-2 text-green-400">•</span>
                        100 Session credits
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">Perfect for: Personal projects & learning</p>
                  </GlowingCard>

                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                    <h3 className="text-xl font-bold text-purple-400 mb-4">Startup Stack</h3>
                    <div className="text-3xl font-bold text-white mb-2">$99<span className="text-lg text-gray-400">/year</span></div>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-300 text-sm">
                        <span className="mr-2 text-green-400">•</span>
                        1 Developer Handle (premium TLD)
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <span className="mr-2 text-green-400">•</span>
                        50 Agent Handles
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <span className="mr-2 text-green-400">•</span>
                        10 Endpoint Handles
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <span className="mr-2 text-green-400">•</span>
                        1,000 Session credits
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">Perfect for: Growing businesses & agencies</p>
                  </GlowingCard>

                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-green-500/20">
                    <h3 className="text-xl font-bold text-green-400 mb-4">Enterprise Empire</h3>
                    <div className="text-3xl font-bold text-white mb-2">$299<span className="text-lg text-gray-400">/year</span></div>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-300 text-sm">
                        <span className="mr-2 text-green-400">•</span>
                        3 Developer Handles
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <span className="mr-2 text-green-400">•</span>
                        200 Agent Handles
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <span className="mr-2 text-green-400">•</span>
                        50 Endpoint Handles
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <span className="mr-2 text-green-400">•</span>
                        10,000 Session credits
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <span className="mr-2 text-green-400">•</span>
                        White-label options
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">Perfect for: Enterprises & protocol teams</p>
                  </GlowingCard>
                </div>
                <p className="text-center text-gray-400 mt-6">
                  All bundles include Vault + Token Dashboard + Starter Staking Credits
                </p>
              </motion.div>

              {/* Analytics Layer */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center relative">
                  <span className="text-2xl relative z-20 mr-3">📈</span>
                  <HeaderText>Analytics Layer by Handle Type</HeaderText>
                </h2>
                <p className="text-center text-gray-300 mb-8">
                  Each type of handle generates different data for operator dashboards and monetization tools.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
                    <div className="text-3xl mb-4 text-center">🧑‍💻</div>
                    <h3 className="text-lg font-bold text-blue-400 mb-4 text-center">Developer Analytics</h3>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="mr-2 text-green-400 mt-1">•</span>
                        <span className="text-gray-300 text-sm">Access logs</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2 text-green-400 mt-1">•</span>
                        <span className="text-gray-300 text-sm">Mint history</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2 text-green-400 mt-1">•</span>
                        <span className="text-gray-300 text-sm">Agent launches</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2 text-green-400 mt-1">•</span>
                        <span className="text-gray-300 text-sm">Vault activity</span>
                      </div>
                    </div>
                  </GlowingCard>

                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                    <div className="text-3xl mb-4 text-center">🤖</div>
                    <h3 className="text-lg font-bold text-purple-400 mb-4 text-center">Agent Analytics</h3>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="mr-2 text-green-400 mt-1">•</span>
                        <span className="text-gray-300 text-sm">Performance metrics</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2 text-green-400 mt-1">•</span>
                        <span className="text-gray-300 text-sm">Interaction count</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2 text-green-400 mt-1">•</span>
                        <span className="text-gray-300 text-sm">Revenue generated</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2 text-green-400 mt-1">•</span>
                        <span className="text-gray-300 text-sm">Task completion</span>
                      </div>
                    </div>
                  </GlowingCard>

                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-green-500/20">
                    <div className="text-3xl mb-4 text-center">🧬</div>
                    <h3 className="text-lg font-bold text-green-400 mb-4 text-center">Endpoint Analytics</h3>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="mr-2 text-green-400 mt-1">•</span>
                        <span className="text-gray-300 text-sm">Latency metrics</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2 text-green-400 mt-1">•</span>
                        <span className="text-gray-300 text-sm">Throughput data</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2 text-green-400 mt-1">•</span>
                        <span className="text-gray-300 text-sm">Relay node status</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2 text-green-400 mt-1">•</span>
                        <span className="text-gray-300 text-sm">Cost optimization</span>
                      </div>
                    </div>
                  </GlowingCard>

                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-orange-500/20">
                    <div className="text-3xl mb-4 text-center">🔥</div>
                    <h3 className="text-lg font-bold text-orange-400 mb-4 text-center">Session Analytics</h3>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="mr-2 text-green-400 mt-1">•</span>
                        <span className="text-gray-300 text-sm">Session duration</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2 text-green-400 mt-1">•</span>
                        <span className="text-gray-300 text-sm">Burn rate tracking</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2 text-green-400 mt-1">•</span>
                        <span className="text-gray-300 text-sm">Anonymous patterns</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2 text-green-400 mt-1">•</span>
                        <span className="text-gray-300 text-sm">Cleanup efficiency</span>
                      </div>
                    </div>
                  </GlowingCard>
                </div>
              </motion.div>

              {/* Registration Experience */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center relative">
                  <span className="text-2xl relative z-20 mr-3">🧾</span>
                  <HeaderText>Registration Experience</HeaderText>
                </h2>
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-orange-500/20">
                  <div className="text-center mb-8">
                    <p className="text-lg text-gray-300 mb-6">
                      On <span className="text-orange-400">io.unifiedai</span> → Choose Your Handle Type:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <Link href="/claim">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full p-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg shadow-lg shadow-blue-500/20"
                      >
                        <div className="text-2xl mb-2">🧑‍💻</div>
                        Reserve Developer Handle
                        <div className="text-xs mt-2 opacity-80">→ Human Vault onboarding</div>
                      </motion.button>
                    </Link>

                    <Link href="/agentchat">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg shadow-purple-500/20"
                      >
                        <div className="text-2xl mb-2">🤖</div>
                        Deploy Agent Handle
                        <div className="text-xs mt-2 opacity-80">→ Agent Builder / Agent Stack</div>
                      </motion.button>
                    </Link>

                    <Link href="/alpharouter">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full p-6 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold rounded-lg shadow-lg shadow-green-500/20"
                      >
                        <div className="text-2xl mb-2">🧬</div>
                        Activate Endpoint Infrastructure
                        <div className="text-xs mt-2 opacity-80">→ AlphaRouter setup panel</div>
                      </motion.button>
                    </Link>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full p-6 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg shadow-lg shadow-orange-500/20"
                    >
                      <div className="text-2xl mb-2">🔥</div>
                      Create Session Handle
                      <div className="text-xs mt-2 opacity-80">→ Temporary identity</div>
                    </motion.button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl mb-2">🔐</span>
                      <span className="text-sm text-gray-300">Vault-based ownership</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-2xl mb-2">🪙</span>
                      <span className="text-sm text-gray-300">AI Token pricing logic</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-2xl mb-2">🎭</span>
                      <span className="text-sm text-gray-300">Optional meme coin integration</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-2xl mb-2">🔁</span>
                      <span className="text-sm text-gray-300">Renewal mechanisms</span>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Add-ons and Features */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center relative">
                  <span className="text-2xl relative z-20 mr-3">💰</span>
                  <HeaderText>Optional Add-ons and Features</HeaderText>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {addOns.map((addon, index) => (
                    <GlowingCard key={index} className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                      <div className="text-center mb-4">
                        <div className="text-3xl mb-2">{addon.icon}</div>
                        <h3 className="text-lg font-semibold text-white">{addon.title}</h3>
                      </div>
                      <p className="text-gray-300 text-sm text-center">{addon.description}</p>
                    </GlowingCard>
                  ))}
                </div>
              </motion.div>

              {/* What It Unlocks */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-cyan-500/20">
                  <h2 className="text-3xl font-bold mb-6 text-cyan-400 text-center">What It Unlocks</h2>
                  <p className="text-lg text-gray-300 text-center mb-8">
                    A logic-based, cloud-priced, agent-ready domain protocol. Not a vanity TLD shop — a protocol-native identity layer.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🔄</div>
                      <h3 className="font-semibold text-white mb-2">Dynamic Compute Routing</h3>
                      <p className="text-gray-300 text-sm">Intelligent routing based on handle type and capabilities</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2">📈</div>
                      <h3 className="font-semibold text-white mb-2">Massive Agent Scalability</h3>
                      <p className="text-gray-300 text-sm">Deploy millions of agents with subsidized pricing</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2">⚡</div>
                      <h3 className="font-semibold text-white mb-2">Zero-Friction Onboarding</h3>
                      <p className="text-gray-300 text-sm">Seamless registration and vault deployment</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2">💰</div>
                      <h3 className="font-semibold text-white mb-2">Predictable Cost Control</h3>
                      <p className="text-gray-300 text-sm">Transparent pricing with volume discounts</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2">🔐</div>
                      <h3 className="font-semibold text-white mb-2">Sovereign Vault Ownership</h3>
                      <p className="text-gray-300 text-sm">True ownership through vault-based identity</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2">🧠</div>
                      <h3 className="font-semibold text-white mb-2">Handle-as-a-Service</h3>
                      <p className="text-gray-300 text-sm">Monetization tools and operator dashboards</p>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* CTA */}
              <motion.div variants={itemVariants} className="text-center">
                <div className="flex flex-col md:flex-row justify-center gap-4">
                  <Link href="/claim">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-12 py-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-2xl rounded-lg shadow-lg shadow-blue-500/20"
                    >
                      🔖 REGISTER YOUR HANDLE
                    </motion.button>
                  </Link>
                  <Link href="/ai-tokens">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-12 py-6 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-2xl rounded-lg hover:bg-white/10 transition-colors"
                    >
                      🪙 JOIN THE ITO
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}