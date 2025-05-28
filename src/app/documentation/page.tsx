'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { Book, FileText, Code, Zap, Users, Settings, Search, ChevronRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function DocumentationPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <Zap className="w-6 h-6" />,
      description: 'Quick start guides and essential setup',
      color: 'from-green-500 to-emerald-500',
      docs: [
        { title: 'Platform Overview', href: '/documentation/platform-overview', description: 'Understanding the Unified AI ecosystem' },
        { title: 'Account Setup', href: '/documentation/account-setup', description: 'Creating your account and initial configuration' },
        { title: 'Handle Registration', href: '/documentation/handle-registration', description: 'Claiming and managing your digital identity' },
        { title: 'First Agent Deployment', href: '/documentation/first-agent', description: 'Deploy your first AI agent in 5 minutes' }
      ]
    },
    {
      id: 'io-operator',
      title: 'I.O. (Intelligent Operator)',
      icon: <Settings className="w-6 h-6" />,
      description: 'Your central AI management system',
      color: 'from-purple-500 to-violet-500',
      docs: [
        { title: 'I.O. Dashboard', href: '/documentation/io-dashboard', description: 'Navigate your Intelligent Operator interface' },
        { title: 'Agent Management', href: '/documentation/agent-management', description: 'Deploy, monitor, and optimize AI agents' },
        { title: 'Protocol Orchestration', href: '/documentation/protocol-orchestration', description: 'Manage multiple protocols from one interface' },
        { title: 'Subscription Plans', href: '/documentation/subscription-plans', description: 'Choose the right I.O. tier for your needs' }
      ]
    },
    {
      id: 'ai-agents',
      title: 'AI Agents',
      icon: <Users className="w-6 h-6" />,
      description: 'Deploy and monetize specialized AI agents',
      color: 'from-blue-500 to-cyan-500',
      docs: [
        { title: 'Agent Marketplace', href: '/documentation/agent-marketplace', description: 'Browse and deploy pre-built agents' },
        { title: 'Custom Agent Creation', href: '/documentation/custom-agents', description: 'Build agents for specific use cases' },
        { title: 'Industry-Specific Agents', href: '/documentation/industry-agents', description: 'Healthcare, finance, real estate, and more' },
        { title: 'Agent Monetization', href: '/documentation/agent-monetization', description: 'Revenue sharing and pricing strategies' }
      ]
    },
    {
      id: 'protocols',
      title: 'Protocol Stack',
      icon: <Code className="w-6 h-6" />,
      description: 'Core protocols powering the Agentic Internet',
      color: 'from-orange-500 to-red-500',
      docs: [
        { title: 'ION Network', href: '/documentation/ion-network', description: 'Intelligent Ontology Network fundamentals' },
        { title: 'AlphaRouter', href: '/documentation/alpharouter', description: 'AI model routing and optimization' },
        { title: 'AgentChat Protocol', href: '/documentation/agentchat-protocol', description: 'Conversational AI management system' },
        { title: 'Handle Registry', href: '/documentation/handle-registry', description: 'Digital identity and namespace management' }
      ]
    },
    {
      id: 'tokens',
      title: 'Token Economy',
      icon: <FileText className="w-6 h-6" />,
      description: 'AI Tokens, UtilityCoin, and economic models',
      color: 'from-yellow-500 to-orange-500',
      docs: [
        { title: 'AI Tokens ITO', href: '/documentation/ai-tokens-ito', description: 'Initial Token Offering details and participation' },
        { title: 'UtilityCoin Protocol', href: '/documentation/utilitycoin', description: 'Base protocol currency and staking' },
        { title: 'Vault System', href: '/documentation/vault-system', description: 'Secure storage and yield generation' },
        { title: 'Token Economics', href: '/documentation/tokenomics', description: 'Economic models and incentive structures' }
      ]
    },
    {
      id: 'developers',
      title: 'Developer Resources',
      icon: <Book className="w-6 h-6" />,
      description: 'APIs, SDKs, and integration guides',
      color: 'from-pink-500 to-rose-500',
      docs: [
        { title: 'API Reference', href: '/documentation/api-reference', description: 'Complete API documentation and endpoints' },
        { title: 'SDK Installation', href: '/documentation/sdk-installation', description: 'JavaScript, Python, and Go SDKs' },
        { title: 'Integration Examples', href: '/documentation/integration-examples', description: 'Real-world implementation examples' },
        { title: 'Webhook Configuration', href: '/documentation/webhooks', description: 'Event-driven integrations and callbacks' }
      ]
    }
  ];

  const filteredSections = documentationSections.filter(section => {
    if (selectedCategory !== 'all' && section.id !== selectedCategory) return false;
    if (searchQuery) {
      return section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             section.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
             section.docs.some(doc => 
               doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
               doc.description.toLowerCase().includes(searchQuery.toLowerCase())
             );
    }
    return true;
  });

  return (
    <MainLayout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-purple-900/20 via-black to-black">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Documentation
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Everything you need to build, deploy, and scale on the Unified AI platform. 
                From quick starts to advanced integrations.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {['all', ...documentationSections.map(s => s.id)].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                    }`}
                  >
                    {category === 'all' ? 'All' : documentationSections.find(s => s.id === category)?.title}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory + searchQuery}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid gap-12"
              >
                {filteredSections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
                  >
                    {/* Section Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${section.color} bg-opacity-20`}>
                        {section.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                        <p className="text-gray-400">{section.description}</p>
                      </div>
                    </div>

                    {/* Documentation Links */}
                    <div className="grid md:grid-cols-2 gap-4">
                      {section.docs.map((doc, docIndex) => (
                        <Link
                          key={doc.href}
                          href={doc.href}
                          className="group p-4 bg-black/40 backdrop-blur-sm border border-gray-600/30 rounded-xl hover:border-purple-500/50 transition-all duration-300"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                                {doc.title}
                              </h3>
                              <p className="text-sm text-gray-400 mt-1">{doc.description}</p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-20 text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Need Help?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link
                  href="/support"
                  className="p-6 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-500/30 rounded-xl hover:border-blue-400/50 transition-all duration-300 group"
                >
                  <div className="text-3xl mb-4">💬</div>
                  <h3 className="text-xl font-bold text-white mb-2">Support Center</h3>
                  <p className="text-gray-400">Get help from our team</p>
                </Link>

                <Link
                  href="/community"
                  className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-xl hover:border-purple-400/50 transition-all duration-300 group"
                >
                  <div className="text-3xl mb-4">👥</div>
                  <h3 className="text-xl font-bold text-white mb-2">Community</h3>
                  <p className="text-gray-400">Join the developer community</p>
                </Link>

                <Link
                  href="/examples"
                  className="p-6 bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm border border-green-500/30 rounded-xl hover:border-green-400/50 transition-all duration-300 group"
                >
                  <div className="text-3xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold text-white mb-2">Examples</h3>
                  <p className="text-gray-400">See real implementations</p>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
